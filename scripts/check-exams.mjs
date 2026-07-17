/**
 * Vérifie les fichiers d'examens (structure + KaTeX).
 * Usage : node scripts/check-exams.mjs [janvier2026 …]   (défaut : les 5)
 */
import { build } from "esbuild";
import { pathToFileURL } from "node:url";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import katex from "katex";

const EXPECTED = {
  janvier2026: { id: "janvier-2026", questions: [1, 2, 3, 4, 5, 6, 7, 8], totalPoints: 40 },
  janvier2025: { id: "janvier-2025", questions: [3, 4, 5, 6, 7, 8], totalPoints: 34 },
  janvier2022: { id: "janvier-2022", questions: [1, 2, 3, 4, 5, 6, 7, 8, 9], totalPoints: 40 },
  janvier2021: { id: "janvier-2021", questions: [1, 2, 3, 4, 5, 6, 7, 8], totalPoints: 40 },
  exemple1: { id: "exemple-1", questions: [1, 2, 3, 4, 5, 6, 7, 8], totalPoints: 38 },
};

const targets = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(EXPECTED);

const errors = [];
const warnings = [];

function checkMathText(content, where) {
  if (typeof content !== "string" || content.trim() === "") {
    errors.push(`${where} : contenu vide`);
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
  const spec = EXPECTED[name];
  if (!spec) {
    errors.push(`${name} : examen inconnu`);
    continue;
  }
  let mod;
  try {
    const result = await build({
      entryPoints: [`src/data/exams/${name}.ts`],
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
  const exam = mod.exam;
  if (!exam || typeof exam !== "object") {
    errors.push(`${name}.ts : export « exam » manquant`);
    continue;
  }
  if (exam.id !== spec.id) errors.push(`${name} : id=${exam.id} ≠ ${spec.id}`);
  if (!exam.title?.trim()) errors.push(`${name} : title vide`);
  if (!exam.subtitle?.trim()) errors.push(`${name} : subtitle vide`);
  if (!exam.pdf?.startsWith("/pdf/examens/")) errors.push(`${name} : pdf invalide (${exam.pdf})`);
  if (exam.totalPoints !== spec.totalPoints)
    warnings.push(
      `${name} : totalPoints=${exam.totalPoints} (attendu ${spec.totalPoints}) — vérifier le barème`,
    );
  const numbers = (exam.questions ?? []).map((q) => q.number);
  for (const n of spec.questions) {
    if (!numbers.includes(n)) errors.push(`${name} : question ${n} manquante`);
  }
  for (const n of numbers) {
    if (!spec.questions.includes(n)) errors.push(`${name} : question inattendue ${n}`);
  }
  let sum = 0;
  for (const q of exam.questions ?? []) {
    const base = `${name}/Q${q.number}`;
    sum += q.points ?? 0;
    if (q.id !== `q${q.number}`) errors.push(`${base} : id=${q.id} attendu q${q.number}`);
    if (!q.title?.trim()) errors.push(`${base} : titre vide`);
    if (!(q.points > 0)) errors.push(`${base} : points invalides`);
    if (!Array.isArray(q.chapters) || q.chapters.length === 0)
      errors.push(`${base} : chapters vide`);
    if (!["demo", "vraifaux", "qcm", "exercice"].includes(q.kind))
      errors.push(`${base} : kind invalide (${q.kind})`);
    checkMathText(q.statement, `${base} statement`);
    if (!Array.isArray(q.hints) || q.hints.length < 2)
      errors.push(`${base} : au moins 2 indices requis`);
    else q.hints.forEach((h, i) => checkMathText(h, `${base} hint[${i}]`));
    if (!Array.isArray(q.steps) || q.steps.length === 0) errors.push(`${base} : aucune étape`);
    else
      q.steps.forEach((s, i) => {
        if (!s.title?.trim()) errors.push(`${base} step[${i}] : titre vide`);
        checkMathText(s.content, `${base} step[${i}]`);
      });
    checkMathText(q.answer, `${base} answer`);
    if (!Array.isArray(q.examTips) || q.examTips.length === 0)
      warnings.push(`${base} : examTips vide`);
    else q.examTips.forEach((t, i) => checkMathText(t, `${base} examTip[${i}]`));
  }
  if (exam.questions?.length && sum !== exam.totalPoints)
    warnings.push(
      `${name} : somme des points des questions (${sum}) ≠ totalPoints (${exam.totalPoints})`,
    );
  console.log(`${name}.ts : ${exam.questions?.length ?? 0} question(s) analysée(s)`);
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
