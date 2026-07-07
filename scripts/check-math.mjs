/**
 * Vérifie les fichiers de données d'exercices :
 *   - chaque formule KaTeX compile (throwOnError)
 *   - structure complète (énoncé, étapes, réponses non vides)
 *   - liste d'exercices attendue par chapitre
 *   - absence de caractères de contrôle (backslash mal échappé dans un template literal)
 *
 * Usage : node scripts/check-math.mjs [ch1 ch2 …]   (défaut : tous)
 */
import { build } from "esbuild";
import { pathToFileURL } from "node:url";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import katex from "katex";

const EXPECTED = {
  1: ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6"],
  2: ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8"],
  3: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9"],
  4: ["4.1","4.2","4.3","4.4","4.5","4.6","4.7","4.8","4.9","4.10","4.11","4.12","4.13","4.14"],
  5: ["5.1", "5.2", "5.3", "5.4"],
  6: ["6.1", "6.2", "6.3", "6.4", "6.5", "6.6", "6.7", "6.8", "6.9"],
  7: ["7.1", "7.2", "7.3", "7.4", "7.5"],
  8: ["8.1", "8.2", "8.3", "8.4", "8.5", "8.6"],
};

// Accepte "ch3" (chapitre complet : vérifie l'exhaustivité) ou "ch4b" (fichier
// partiel : vérifie seulement la validité des exercices présents).
const targets = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["ch1", "ch2", "ch3", "ch4", "ch5", "ch6", "ch7", "ch8"];

const errors = [];
const warnings = [];

function checkMathText(content, where) {
  if (typeof content !== "string" || content.trim() === "") {
    errors.push(`${where} : contenu vide`);
    return;
  }
  // Caractères de contrôle = backslash interprété (\b, \f, \t…) dans un template literal
  // eslint-disable-next-line no-control-regex
  if (/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(content)) {
    errors.push(`${where} : caractère de contrôle détecté (backslash mal échappé ? utiliser String.raw)`);
  }
  if (content.includes("undefined") || content.includes("[object")) {
    warnings.push(`${where} : contient « undefined » — interpolation ratée ?`);
  }
  // Extrait display puis inline
  const chunks = content.split(/\$\$([\s\S]+?)\$\$/g);
  const formulas = [];
  chunks.forEach((chunk, i) => {
    if (i % 2 === 1) formulas.push({ latex: chunk.trim(), display: true });
    else {
      const re = /\$([^$]+)\$/g;
      let m;
      while ((m = re.exec(chunk)) !== null) formulas.push({ latex: m[1], display: false });
      const leftover = chunk.replace(/\$[^$]+\$/g, "");
      if (leftover.includes("$")) errors.push(`${where} : délimiteur $ non apparié`);
      if (/\\(frac|begin|vec|sqrt|mathbb|cdot|times|lambda)/.test(leftover)) {
        warnings.push(`${where} : commande LaTeX hors des délimiteurs $…$ ?`);
      }
    }
  });
  for (const f of formulas) {
    try {
      katex.renderToString(f.latex, { displayMode: f.display, throwOnError: true, strict: false });
    } catch (e) {
      errors.push(`${where} : KaTeX — ${e.message.split("\n")[0]}\n    latex: ${f.latex.slice(0, 160)}`);
    }
  }
}

for (const name of targets) {
  const ch = Number((name.match(/\d+/) ?? ["0"])[0]);
  const complete = /^ch\d+$/.test(name);
  if (!EXPECTED[ch]) {
    errors.push(`${name} : chapitre inconnu`);
    continue;
  }
  let mod;
  try {
    const result = await build({
      entryPoints: [`src/data/exercises/${name}.ts`],
      bundle: true,
      format: "esm",
      write: false,
      platform: "neutral",
      logLevel: "silent",
    });
    const dir = mkdtempSync(join(tmpdir(), "chk-"));
    const file = join(dir, `${name}.mjs`);
    writeFileSync(file, result.outputFiles[0].text);
    mod = await import(pathToFileURL(file).href);
  } catch (e) {
    errors.push(`${name}.ts : compilation impossible — ${e.message.split("\n")[0]}`);
    continue;
  }
  const exercises = mod.exercises;
  if (!Array.isArray(exercises)) {
    errors.push(`${name}.ts : export « exercises » manquant`);
    continue;
  }
  const ids = exercises.map((e) => e.id);
  if (complete) {
    for (const expected of EXPECTED[ch]) {
      if (!ids.includes(expected)) errors.push(`${name}.ts : exercice ${expected} manquant`);
    }
  }
  for (const id of ids) {
    if (!EXPECTED[ch].includes(id)) errors.push(`${name}.ts : exercice inattendu ${id}`);
  }
  if (new Set(ids).size !== ids.length) errors.push(`${name}.ts : ids en double`);

  for (const e of exercises) {
    const base = `${name}/${e.id}`;
    if (e.chapter !== ch) errors.push(`${base} : chapter=${e.chapter} ≠ ${ch}`);
    if (!e.title?.trim()) errors.push(`${base} : titre vide`);
    if (typeof e.examType !== "boolean") errors.push(`${base} : examType manquant`);
    if (!Array.isArray(e.theoryRefs) || e.theoryRefs.length === 0)
      warnings.push(`${base} : theoryRefs vide`);
    checkMathText(e.statement, `${base} statement`);
    if (e.method) checkMathText(e.method, `${base} method`);
    if (!Array.isArray(e.parts) || e.parts.length === 0) {
      errors.push(`${base} : aucune partie`);
      continue;
    }
    e.parts.forEach((p, pi) => {
      const pb = `${base} part[${p.label ?? pi}]`;
      if (p.statement) checkMathText(p.statement, `${pb} statement`);
      if (!Array.isArray(p.steps) || p.steps.length === 0) errors.push(`${pb} : aucune étape`);
      else
        p.steps.forEach((s, si) => {
          if (!s.title?.trim()) errors.push(`${pb} step[${si}] : titre vide`);
          checkMathText(s.content, `${pb} step[${si}]`);
        });
      checkMathText(p.answer, `${pb} answer`);
    });
  }
  console.log(`${name}.ts : ${exercises.length} exercices analysés`);
}

if (warnings.length) {
  console.log("\n⚠️  Avertissements :");
  for (const w of warnings) console.log("  - " + w);
}
if (errors.length) {
  console.error(`\n❌ ${errors.length} erreur(s) :`);
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}
console.log("\n✅ Aucune erreur.");
