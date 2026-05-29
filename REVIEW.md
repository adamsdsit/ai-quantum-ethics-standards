# Holistic Review — `ai-quantum-ethics-standards`

**Repository:** https://github.com/adamsdsit/ai-quantum-ethics-standards
**Reviewed:** 2026-05-30 · commit `512d152` (HEAD, 57 commits)
**Scope:** Full pass across content, structure, and the publishing site.

---

## 1. Executive summary

This is a genuinely strong, coherent body of work: a "living corpus" of AI and quantum-computing ethics standards, deliberately written in the register of an international standards body (RFC 2119 normative language, axiom-to-requirement-to-evidence traceability, risk tiering, audit and certification, case studies, and an Astro Starlight site to publish it). The writing is disciplined, the conceptual architecture (Axioms → Governance → Technical Standards → Controls → Assurance) is clear, and the best documents are excellent — `autonomy_and_human_control.md`, `supply_chain_and_provenance.md`, and `fairness_and_justice.md` would not look out of place in a real ISO/IEC working draft.

The central problem is **internal consistency, not quality**. The corpus mandates certain structures in its own normative documents — a Traceability Table per standard, a Change Log per standard, one canonical document per topic — and then does not meet those mandates in roughly a third of its own files. There are also two visible "generations" of documents (a lighter first draft and a fuller template-conformant rewrite) coexisting in the quantum section, creating duplicate standards with conflicting requirement IDs. Finally, the publishing site has two configuration choices that are likely to fail to build against the pinned Starlight version and should be verified.

**Overall verdict:** High-quality content, ~85% polished, held back by self-consistency gaps and a small number of fixable site/build risks. None of the issues are deep; most are an afternoon of cleanup. The single most important thing to fix is that **the corpus violates its own MUST requirements** — for a standards document whose explicit purpose is to prevent "paper governance" and "ethics washing," that is the gap most likely to undermine its credibility with the regulators and auditors it is courting.

---

## 2. What's strong (keep doing this)

- **Clear normative architecture.** The five-layer stack (Why → Who/How → What → How enforced → How proven) is stated in the README and actually followed. Risk tiers (0–3) are defined once in `risk_classification.md` and referenced consistently elsewhere.
- **Traceability as a first-class idea.** `ETHICAL_TRACEABILITY.md` turns "ethics" into an auditable mapping (requirement → axiom → evidence) and explicitly targets "ethics washing." Where the tables exist, they are good.
- **The fuller standards are genuinely rigorous.** Documents using the full template (`emergency_powers_and_safeguards`, `independent_ethics_review`, `supply_chain_and_provenance`, `environmental_and_resource_ethics`, `autonomy_and_human_control`, `fairness_and_justice`, `healthcare_ai`, `monitoring_and_incident_response`, `certification_and_labeling`, `ethical_metrics`) are consistent, well-scoped, and evidence-oriented.
- **Honest self-awareness.** `FAILURE_MODES.md` and `founders_commentary.md` pre-empt the obvious critiques (ethics washing, regulatory capture, compliance theater, metrics-as-moral-authority). This is the right instinct.
- **Healthy engineering hygiene on the site.** Dependabot is active (many transitive bumps merged), secrets handling is documented (`SECURITY.md`, `.gitignore` covers `.env`, keys, certs), and the sync script is path-robust (resolves relative to itself, not CWD).
- **Link integrity is clean.** Every backtick-quoted `*.md` path in the corpus resolves to a real file — no broken file references.

---

## 3. Findings by priority

### HIGH — the corpus does not comply with its own normative requirements

This is the headline issue and the most damaging to credibility, because the corpus's whole thesis is that ethics claims must be backed by structure and evidence.

**3.1 Missing Traceability Tables.** `ETHICAL_TRACEABILITY.md` states that *each* standard document in `01_governance/`, `02_ai_standards/`, `03_quantum_standards/`, `04_risk_framework/`, and `05_audit_and_assurance/` **MUST** include a Traceability Table. 15 documents do not:

```
01_governance/consultation_framework.md
01_governance/governance_model.md
01_governance/international_alignment.md
02_ai_standards/accountability.md
02_ai_standards/safety.md
02_ai_standards/transparency_and_explainability.md
03_quantum_standards/cryptographic_and_security_risk.md
03_quantum_standards/national_security.md
03_quantum_standards/optimization_ethics.md
03_quantum_standards/research_limits.md
04_risk_framework/control_matrix.md
04_risk_framework/risk_classification.md
05_audit_and_assurance/audit_methods.md
05_audit_and_assurance/certification.md
05_audit_and_assurance/metrics.md
```

**3.2 Missing Change Logs.** `VERSIONING.md` states every standard document **MUST** maintain a Change Log section. 8 documents do not: `consultation_framework.md`, `governance_model.md`, `international_alignment.md`, `control_matrix.md`, `risk_classification.md`, `audit_methods.md`, `certification.md`, `metrics.md`.

**Recommendation.** Either (a) bring these documents up to the mandated template (add Traceability Tables and Change Logs), or (b) soften the mandate language and explicitly exempt "framework/index" documents (`control_matrix`, `governance_model`, `international_alignment`) from the per-document table requirement. Option (a) is the credible choice for the AI/quantum *standards* themselves; option (b) is reasonable only for the meta/navigation documents. Whatever you choose, the rule and the corpus must agree — a standards body that fails its own conformance check has no answer when an auditor points it out.

### HIGH — duplicate, competing standards in the quantum section

There are two parallel documents on each of two quantum topics, with **different requirement-ID schemes** and no statement of which is canonical:

| Topic | "Light" doc (first generation) | "Full" doc (template rewrite) |
| --- | --- | --- |
| Optimization ethics | `optimization_ethics.md` — IDs `Q-O-*`, 64 lines | `optimization_and_power_asymmetry.md` — IDs `Q-OPA-*`, 181 lines |
| Research governance / disclosure | `research_limits.md` — IDs `Q-R-*`, 60 lines | `research_and_disclosure.md` — IDs `Q-RD-*`, 159 lines |

The cross-references make this worse: the **control matrix, case studies, and `FAILURE_MODES.md` all point to the light versions** (`research_limits.md`, `optimization_ethics.md`), while the fuller, more rigorous versions are effectively orphaned from navigation — even though the fuller versions reference the light ones too. A reader cannot tell which `Q-R-3` / `Q-OPA-x` is authoritative.

**Recommendation.** Pick one document per topic. The cleanest path: keep the fuller versions as canonical, migrate the few unique requirements from the light versions into them, update all inbound references (control matrix, case studies, failure modes, risk classification) to the surviving IDs, and delete the light files (or reduce them to a one-line redirect). Note this is a normative change to requirement IDs and should be versioned accordingly. The pattern is exactly the "two drafting generations left side-by-side" problem and resolving it will noticeably raise the corpus's polish.

### MEDIUM — a stale requirement reference

`04_risk_framework/risk_classification.md` (Tier 2 expectations) cites **`AI-F-3`** ("equity impact assessment"). The fairness standard was renamed and re-numbered to `fairness_and_justice.md` with `AI-FJ-*` IDs (its own change log notes the rename), and the equity impact assessment is now **`AI-FJ-11`**. `AI-F-3` no longer exists anywhere in the corpus.

**Recommendation.** Update the reference to `AI-FJ-11`. Then add a lightweight guard against recurrence — see 4.2.

### MEDIUM — no LICENSE file

For a corpus whose stated ambition is global adoption, open contribution, and submission to standards bodies (`pathway_to_adoption.md`, `CONTRIBUTING.md`), there is **no LICENSE**. Reuse, redistribution, and contribution terms are therefore legally undefined — a real blocker for the institutional adoption the project is explicitly seeking, and an awkward gap given the emphasis on provenance and rights elsewhere.

**Recommendation.** Add an explicit license. For a standards/text corpus, a content license such as **CC BY 4.0** (or CC BY-SA) is conventional; if the `site/` code should carry separate terms, dual-license (e.g., MIT for code, CC BY for the standards text) and say so in the README.

### MEDIUM — site/build configuration risks (verify against pinned versions)

I did **not** run `npm install` / `astro build` (no build was executed in this review), so these are flagged as *verify*, not *confirmed broken* — but both are likely to fail or misbehave on the pinned Starlight `^0.32.0`:

1. **`astro.config.mjs` uses the deprecated object form of `social`:**
   ```js
   social: { github: "https://github.com/..." }
   ```
   Starlight changed `social` to an **array of link objects** around 0.32. The current form will likely throw a config-validation error. Expected fix:
   ```js
   social: [{ icon: "github", label: "GitHub", href: "https://github.com/adamsdsit/ai-quantum-ethics-standards" }]
   ```
2. **`src/content.config.ts` defines a hand-rolled `docs` collection** with `type: "content"` and a bare Zod schema. On Astro 5 + Starlight 0.32 the docs collection is expected to use Starlight's loader and schema:
   ```ts
   import { docsLoader } from "@astrojs/starlight/loaders";
   import { docsSchema } from "@astrojs/starlight/schema";
   const docs = defineCollection({ loader: docsLoader(), schema: docsSchema() });
   ```
   The custom schema both uses the legacy `type: "content"` API and strips Starlight's frontmatter fields, which can break navigation/features.

**Recommendation.** Do a clean `cd site && npm ci && npm run build` in CI and fix whatever the two items above surface. Given Dependabot keeps bumping Astro/Starlight, an automated build is the only reliable guard (see 4.1).

### LOW — repository hygiene and consistency

- **No CI.** There is no `.github/workflows`. A standards repo that is auto-bumping dependencies via Dependabot has no automated build/link check to catch a bad bump or a broken cross-reference. A single "build site + check links + check self-compliance" workflow would pay for itself.
- **No community-health files.** No `CODE_OF_CONDUCT.md`, issue templates, or PR template — slightly at odds with a governance model that foregrounds participation and consultation.
- **README repository map is incomplete.** Several real documents are not listed in the README map, e.g. `00_foundations/non_derogation_and_red_lines.md`, `01_governance/supply_chain_and_provenance.md`, `01_governance/environmental_and_resource_ethics.md`, `01_governance/consultation_framework.md`, and the entire `02_ai_standards/` file list (only the directory is named). `SECURITY.md` is also not referenced.
- **Two-tier template inconsistency is visible to readers.** Some docs use `## 2. Applicability`, others `## 3. Scope`; some have the 9-section numbered template, others a lighter header set. Even where content is fine, the mixed structure reads as unfinished. Aligning all standards to `00_foundations/standard_template.md` would resolve this and 3.1/3.2 at once.
- **`PROMPT_TEMPLATES.md` is internal scaffolding** ("Prompt Templates for Codex / Code Chat") shipped in a public, regulator-facing corpus. Harmless, but consider moving it under a `meta/` or `contributing/` area so it doesn't read as part of the normative material.

---

## 4. Recommended guardrails (so issues don't recur)

**4.1 Add a CI workflow** (`.github/workflows/ci.yml`) that on every PR: installs `site/`, runs `astro build`, and fails on build errors. This alone would have caught the `social`/collection issues and protects against bad Dependabot bumps.

**4.2 Add a self-compliance check.** A ~30-line script (run in CI) that asserts the corpus's own MUST rules:
- every `*.md` in `01_`–`05_` contains a "Traceability Table" and a "Change Log" (the same checks used to find 3.1/3.2);
- every `(AI|Q|HAI|...)-…-N` reference resolves to an ID actually defined somewhere in the corpus (would have caught the stale `AI-F-3`).

This turns "the standard requires X" into "the standard is mechanically verified to contain X" — which is precisely the philosophy the corpus preaches.

---

## 5. Priority checklist

| # | Priority | Action |
| --- | --- | --- |
| 1 | HIGH | Resolve quantum duplicates: pick one canonical doc per topic, migrate unique requirements, repoint all references, delete/redirect the loser. |
| 2 | HIGH | Add the missing Traceability Tables (15 docs) and Change Logs (8 docs) — or formally exempt index/meta docs and align the mandate. |
| 3 | MED | Fix stale reference `AI-F-3` → `AI-FJ-11` in `risk_classification.md`. |
| 4 | MED | Add a LICENSE (e.g., CC BY 4.0 for text; MIT for `site/` code if split). |
| 5 | MED | Verify the site builds on pinned versions; migrate `social` to array form and the `docs` collection to Starlight's loader/schema. |
| 6 | LOW | Add CI (build + link check + self-compliance script). |
| 7 | LOW | Refresh README repository map; add community-health files; relocate `PROMPT_TEMPLATES.md`; align all docs to the standard template. |

---

## 6. Method & caveats

- All 40+ corpus Markdown documents and the `site/` configuration/scripts were read. Cross-reference, ID-integrity, template-conformance, and file-existence checks were run mechanically (grep/find) against the working tree at commit `512d152`.
- **No build was executed** (`npm install`/`astro build` were not run), so Section 3's site findings are reasoned from the pinned versions and Starlight's known API changes — verify them with a clean CI build before acting.
- Version-specific Starlight behavior should be confirmed against the exact resolved versions in `site/package-lock.json` at build time.
