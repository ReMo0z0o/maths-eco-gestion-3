/**
 * Vérifie les fichiers de démonstrations (structure + KaTeX).
 * Usage : node scripts/check-demos.mjs [ch1 …]   (défaut : ch1..ch7)
 */
import { build } from "esbuild";
import { pathToFileURL } from "node:url";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import katex from "katex";

const EXPECTED = {
  1: ["1.1", "1.2"],
  2: ["2.1"],
  3: ["3.1", "3.2", "3.3"],
  4: ["4.1", "4.2", "4.3"],
  5: ["5.1", "5.2"],
  6: ["6.1", "6.2", "6.3"],
  7: ["7.1"],
};

const targets = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["ch1", "ch2", "ch3", "ch4", "ch5", "ch6", "ch7"];

const errors = [];
const warnings = [];

function checkMathText(content, where, allowEmpty = false) {
  if (typeof content !== "string" || content.trim() === "") {
    if (!allowEmpty) errors.push(`${where} : contenu vide`);
    return;
  }
  // eslint-disable-next-line no-control-regex
  if (/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(content)) {
    errors.push(`${where} : caractère de contrôle (backslash mal échappé ? utiliser String.raw)`);
  }
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
        warnings.push(`${where} : commande LaTeX hors des délimiteurs ?`);
      }
    }
  });
  for (const f of formulas) {
    try {
      katex.renderToString(f.latex, { displayMode: f.display, throwOnError: true, strict: false });
    } catch (e) {
      errors.push(
        `${where} : KaTeX — ${e.message.split("\n")[0]}\n    latex: ${f.latex.slice(0, 160)}`,
      );
    }
  }
}

for (const name of targets) {
  const ch = Number((name.match(/\d+/) ?? ["0"])[0]);
  if (!EXPECTED[ch]) {
    errors.push(`${name} : chapitre inconnu`);
    continue;
  }
  let mod;
  try {
    const result = await build({
      entryPoints: [`src/data/demos/${name}.ts`],
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
  const demos = mod.demos;
  if (!Array.isArray(demos)) {
    errors.push(`${name}.ts : export « demos » manquant`);
    continue;
  }
  const ids = demos.map((d) => d.id);
  for (const expected of EXPECTED[ch]) {
    if (!ids.includes(expected)) errors.push(`${name}.ts : démonstration ${expected} manquante`);
  }
  for (const id of ids) {
    if (!EXPECTED[ch].includes(id)) errors.push(`${name}.ts : id inattendu ${id}`);
  }
  for (const d of demos) {
    const base = `${name}/${d.id}`;
    if (d.chapter !== ch) errors.push(`${base} : chapter=${d.chapter} ≠ ${ch}`);
    if (!d.title?.trim()) errors.push(`${base} : titre vide`);
    if (!d.slideRef?.trim()) errors.push(`${base} : slideRef vide`);
    if (!d.exam?.trim()) errors.push(`${base} : champ exam vide`);
    checkMathText(d.statement, `${base} statement`);
    checkMathText(d.intuition, `${base} intuition`);
    checkMathText(d.examProof, `${base} examProof`);
    if (!Array.isArray(d.steps) || d.steps.length === 0) errors.push(`${base} : aucune étape`);
    else
      d.steps.forEach((s, i) => {
        if (!s.title?.trim()) errors.push(`${base} step[${i}] : titre vide`);
        checkMathText(s.content, `${base} step[${i}]`);
      });
    if (!Array.isArray(d.pitfalls)) errors.push(`${base} : pitfalls doit être un tableau`);
    else d.pitfalls.forEach((p, i) => checkMathText(p, `${base} pitfall[${i}]`));
  }
  console.log(`${name}.ts : ${demos.length} démonstration(s) analysée(s)`);
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
