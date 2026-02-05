import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths relative to this script so it works regardless of CWD.
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(SCRIPT_DIR, "..");
const REPO_ROOT = path.resolve(SITE_ROOT, "..");

const DEST_DOCS = path.join(SITE_ROOT, "src", "content", "docs");
const DEST_PUBLIC_DIAGRAMS = path.join(SITE_ROOT, "public", "diagrams");

const SOURCE_DIRS = [
  "00_foundations",
  "01_governance",
  "02_ai_standards",
  "03_quantum_standards",
  "04_risk_framework",
  "05_audit_and_assurance",
  "06_case_studies",
  "99_interpretive_notes"
];

const SOURCE_ROOT_FILES = [
  "CHARTER.md",
  "CONTRIBUTING.md",
  "CROSSWALK_NIST_ISO.md",
  "ESCALATION_AND_PAUSE.md",
  "ETHICAL_TRACEABILITY.md",
  "FAILURE_MODES.md",
  "PROMPT_TEMPLATES.md",
  "README.md",
  "VERSIONING.md"
];

function titleFromFilename(filename) {
  const base = filename.replace(/\.md$/i, "");
  return base
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function extractH1(markdown) {
  const m = markdown.match(/^\s*#\s+(.+)\s*$/m);
  return m ? m[1].trim() : null;
}

function stripLeadingH1(markdown) {
  const lines = markdown.split("\n");
  if (lines.length > 0 && lines[0].match(/^\s*#\s+/)) {
    return lines.slice(1).join("\n").replace(/^\s*\n+/, "");
  }
  return markdown;
}

async function ensureEmptyDir(dirPath) {
  await fs.rm(dirPath, { recursive: true, force: true });
  await fs.mkdir(dirPath, { recursive: true });
}

async function* walkFiles(rootDir) {
  const entries = await fs.readdir(rootDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      yield* walkFiles(fullPath);
    } else if (entry.isFile()) {
      yield fullPath;
    }
  }
}

async function writeDoc(destPath, sourcePath, rawMarkdown) {
  const filename = path.basename(destPath);
  const inferredTitle = extractH1(rawMarkdown) ?? titleFromFilename(filename);
  const body = stripLeadingH1(rawMarkdown);

  // Starlight reads optional `sidebar.hidden`. Some versions assume `sidebar` exists,
  // so we include an empty object to avoid undefined access in navigation generation.
  const out = `---\ntitle: ${JSON.stringify(inferredTitle)}\nsidebar: {}\n---\n\n${body}\n`;
  await fs.mkdir(path.dirname(destPath), { recursive: true });
  await fs.writeFile(destPath, out, "utf8");
}

async function syncRootMeta() {
  const metaDir = path.join(DEST_DOCS, "meta");
  await fs.mkdir(metaDir, { recursive: true });

  for (const file of SOURCE_ROOT_FILES) {
    const src = path.join(REPO_ROOT, file);
    const dest = path.join(metaDir, file);
    const raw = await fs.readFile(src, "utf8");
    await writeDoc(dest, src, raw);
  }
}

async function syncDirectories() {
  for (const dir of SOURCE_DIRS) {
    const srcDir = path.join(REPO_ROOT, dir);
    const destDir = path.join(DEST_DOCS, dir);
    await ensureEmptyDir(destDir);

    for await (const filePath of walkFiles(srcDir)) {
      if (!filePath.toLowerCase().endsWith(".md")) continue;
      const rel = path.relative(srcDir, filePath);
      const destPath = path.join(destDir, rel);
      const raw = await fs.readFile(filePath, "utf8");
      await writeDoc(destPath, filePath, raw);
    }
  }
}

async function syncDiagrams() {
  const srcDir = path.join(REPO_ROOT, "diagrams", "rendered");
  await ensureEmptyDir(DEST_PUBLIC_DIAGRAMS);

  for await (const filePath of walkFiles(srcDir)) {
    if (!filePath.toLowerCase().endsWith(".svg")) continue;
    const rel = path.relative(srcDir, filePath);
    const destPath = path.join(DEST_PUBLIC_DIAGRAMS, rel);
    await fs.mkdir(path.dirname(destPath), { recursive: true });
    await fs.copyFile(filePath, destPath);
  }
}

async function main() {
  // Preserve manually authored pages like `index.mdx` and `diagrams.mdx`.
  await fs.mkdir(DEST_DOCS, { recursive: true });

  await syncRootMeta();
  await syncDirectories();
  await syncDiagrams();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
