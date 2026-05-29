#!/usr/bin/env node
/**
 * Self-compliance check for the standards corpus.
 * Mechanically verifies the rules the corpus imposes on itself:
 *  1. Every standard document in 01_–05_ has a Traceability Table
 *     (ETHICAL_TRACEABILITY.md) and a Change Log (VERSIONING.md).
 *  2. Retired requirement-ID schemes and consolidated duplicate files
 *     do not reappear (Q-O-*, Q-R-*, AI-F-* and the old quantum files).
 *  3. Every backtick-quoted `*.md` path reference resolves to a real file.
 * Exits non-zero (with a report) on any violation so CI fails loudly.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const NORMATIVE_DIRS = [
  "01_governance", "02_ai_standards", "03_quantum_standards",
  "04_risk_framework", "05_audit_and_assurance"
];
const errors = [];

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.isFile()) out.push(p);
  }
  return out;
}

// Review/meta artifacts about the repo are not part of the corpus and may
// legitimately reference retired IDs or use shorthand file names.
const IGNORE_BASENAMES = new Set(["REVIEW.md"]);
function allMarkdown() {
  return walk(ROOT).filter(p => p.endsWith(".md")
    && !p.includes(`${path.sep}site${path.sep}`)
    && !p.includes(`${path.sep}.git${path.sep}`)
    && !IGNORE_BASENAMES.has(path.basename(p)));
}

// 1. Traceability Table + Change Log in every normative doc
for (const dir of NORMATIVE_DIRS) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const f of walk(abs).filter(p => p.endsWith(".md"))) {
    const s = fs.readFileSync(f, "utf8");
    const rel = path.relative(ROOT, f);
    if (!/Traceability Table/i.test(s)) errors.push(`Missing Traceability Table: ${rel}`);
    if (!/Change Log/i.test(s)) errors.push(`Missing Change Log: ${rel}`);
  }
}

// 2. Retired IDs and consolidated files must not reappear
const RETIRED = [/\bQ-O-\d/, /\bQ-R-\d/, /\bAI-F-\d/];
for (const f of allMarkdown()) {
  const s = fs.readFileSync(f, "utf8");
  const rel = path.relative(ROOT, f);
  for (const re of RETIRED) {
    if (re.test(s)) errors.push(`Retired requirement ID ${re} found in ${rel}`);
  }
}
for (const gone of ["03_quantum_standards/optimization_ethics.md",
                    "03_quantum_standards/research_limits.md"]) {
  if (fs.existsSync(path.join(ROOT, gone)))
    errors.push(`Consolidated file should be deleted: ${gone}`);
}

// 3. Backtick `*.md` references resolve
const refRe = /`([0-9A-Za-z_./-]+\.md)`/g;
for (const f of allMarkdown()) {
  const s = fs.readFileSync(f, "utf8");
  const rel = path.relative(ROOT, f);
  let m;
  while ((m = refRe.exec(s)) !== null) {
    const target = m[1];
    if (!fs.existsSync(path.join(ROOT, target)))
      errors.push(`Broken doc reference \`${target}\` in ${rel}`);
  }
}

if (errors.length) {
  console.error(`✗ corpus self-compliance: ${errors.length} issue(s)\n`);
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}
console.log("✓ corpus self-compliance: all checks passed");
