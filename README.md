# AI + Quantum Ethics & Standards (Living Corpus)

This repository is a **living, values-grounded standards framework** spanning **Artificial Intelligence (AI)** and **Quantum Computing (QC)**. It is designed to be **globally applicable**, **technically enforceable**, and **continuously improvable** via open review and versioned changes.

## Mission

To establish globally applicable, ethically grounded, and technically enforceable standards for AI and QC that advance **human dignity**, **justice**, **unity**, and the responsible use of scientific power for the betterment of humanity.

## How This Corpus Is Organized

Standards are organized as a stack:

1. **Ethical Axioms (Why)** — the normative anchor
2. **Governance (Who/How)** — decision-making and change control
3. **Technical Standards (What)** — requirements per domain
4. **Operational Controls (How enforced)** — procedures, monitoring, tooling
5. **Audit & Assurance (How proven)** — evidence, metrics, certification

## Normative Keywords

This corpus uses the normative terms **MUST**, **SHOULD**, and **MAY** as described in RFC 2119 (and clarified by RFC 8174). See `00_foundations/definitions.md`.

## Repository Map

- `00_foundations/` — `ethical_axioms`, `definitions`, `scope_and_non_scope`, `non_derogation_and_red_lines`, `standard_template`
- `01_governance/` — `governance_model`, `consultation_framework`, `independent_ethics_review`, `emergency_powers_and_safeguards`, `supply_chain_and_provenance`, `environmental_and_resource_ethics`, `international_alignment`, `pathway_to_adoption`
- `02_ai_standards/` — `accountability`, `autonomy_and_human_control`, `transparency_and_explainability`, `fairness_and_justice`, `privacy_and_non_inference`, `safety`, `healthcare_ai`
- `03_quantum_standards/` — `cryptographic_and_security_risk`, `national_security`, `optimization_and_power_asymmetry`, `research_and_disclosure`
- `04_risk_framework/` — `risk_classification`, `control_matrix`, `ethical_metrics`, `ai_quantum_convergence`
- `05_audit_and_assurance/` — `audit_methods`, `certification`, `certification_and_labeling`, `metrics`, `monitoring_and_incident_response`
- `06_case_studies/` — `ai_healthcare`, `military_use`, `quantum_crypto`
- `99_interpretive_notes/` — `founders_commentary` (non-normative)
- Policies & meta-docs: `CHARTER.md`, `VERSIONING.md`, `ETHICAL_TRACEABILITY.md`, `ESCALATION_AND_PAUSE.md`, `FAILURE_MODES.md`, `CROSSWALK_NIST_ISO.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `PROMPT_TEMPLATES.md` (non-normative tooling)
- Tooling: `scripts/check_corpus.mjs` (self-compliance check), `.github/workflows/ci.yml` (CI), `site/` (docs site)

## Diagrams

Rendered SVGs are in `diagrams/rendered/` and their D2 sources are in `diagrams/`.

## Docs Site

There is an optional docs UI (Astro Starlight) in `site/` that renders the corpus with navigation and search.

- Local (Docker): `docker compose up site-dev` (defaults to `http://localhost:43210`; override with `SITE_PORT=...`)
- Cloudflare Pages: set Root directory to `site`, Build command `npm run build`, Output `dist`

## Contributing

See `CONTRIBUTING.md`. Contributions should:

- Map changes to one or more **Ethical Axioms**
- Specify **requirements + compliance evidence**
- Include **risk-tier applicability** (Tier 0–3) where relevant

## Continuous Integration

Every push and pull request runs `.github/workflows/ci.yml`, which:

- builds the docs site (`site/`) to catch breakage from dependency updates, and
- runs `scripts/check_corpus.mjs`, a self-compliance check asserting that every
  standard in `01_`–`05_` carries a Traceability Table and Change Log, that no
  retired requirement IDs reappear, and that every `*.md` cross-reference resolves.

## License

This corpus — all standards text, documentation, interpretive notes, and
diagrams — is licensed under the **Creative Commons Attribution 4.0
International License (CC BY 4.0)**. You may share and adapt the material for
any purpose, including commercially, provided you give appropriate credit, link
to the license, and indicate if changes were made. See `LICENSE` for the full
text, or https://creativecommons.org/licenses/by/4.0/.
