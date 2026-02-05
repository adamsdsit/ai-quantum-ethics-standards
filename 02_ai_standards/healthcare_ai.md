# AI Standard: Healthcare AI Safety, Privacy, and Ethics Requirements

## 1. Purpose

Define enforceable requirements for AI systems used in healthcare contexts to protect patient safety, privacy, dignity, equity, and accountability across the AI lifecycle (design, validation, deployment, monitoring, and incident response).

## 2. Ethical Mapping

- `A2 Human Dignity & Moral Agency`: meaningful consent, non-coercion, patient agency, and protection from hidden profiling
- `A3 Justice, Due Process, and Remedy`: contestability, auditability, and correction pathways for harmful decisions
- `A4 Truthfulness & Trustworthiness`: accurate claims, traceability, and evidence-based performance reporting
- `A5 Proportionality & Moderation`: risk-tiered controls, escalation and pause mechanisms
- `A7 Stewardship (Societal & Environmental)`: systemic safety and security impacts in health infrastructure

## 3. Scope

This standard applies to AI systems used in healthcare contexts, including:

- clinical decision support (CDS), triage, diagnostics, and monitoring
- administrative and operational systems that materially affect patient care (scheduling, resource allocation, discharge planning)
- patient-facing systems (symptom checkers, care navigation, coaching) where outputs may influence care-seeking or treatment adherence

This standard applies when a system:

- processes **health data** (or data that is reasonably linkable to a person and used in a health context), or
- influences clinical or patient outcomes, including via decision-support.

This standard is intended to be globally portable. It aligns with common health privacy principles (e.g., minimum necessary use, purpose limitation, access controls) without requiring compliance with any specific national law.

## 4. Definitions (only if required)

These definitions supplement `00_foundations/definitions.md`.

- **Health data**: data about a person’s past, present, or future physical or mental health, health status, healthcare provision, or payment for healthcare, including identifiers and data reasonably linkable to a person in a healthcare context.
- **Clinical decision-support (decision-support)**: a system that provides recommendations, risk scores, predictions, or summaries intended to inform a human clinical decision-maker, but does not directly execute the decision.
- **Clinical decision-making (decision-making)**: a system that directly determines, authorizes, or executes an action affecting patient care, access, prioritization, or resource allocation, with limited or no human review.
- **Silent sensitive inference**: inferring or profiling a person’s sensitive health conditions, status, or risks without explicit disclosure and a valid clinical/operational justification (and, where required, meaningful consent).
- **Secondary use**: use of health data for a purpose materially different from the original clinical/operational purpose for which it was collected.

## 5. Normative Requirements

### MUST

HAI-1 (Intended Use, System Type, and Boundaries). For any deployment, operators **MUST** document:

- intended use and prohibited uses,
- whether the system is decision-support or decision-making,
- the clinical/operational workflow integration and human responsibilities,
- system boundaries and dependencies (data sources, models, services, devices).

HAI-2 (Clinical Safety Case). For Tier 2–3 healthcare deployments, operators **MUST** maintain a clinical safety case that includes:

- hazard analysis (foreseeable harm pathways),
- performance claims and supporting evidence,
- failure modes and mitigations,
- go/no-go criteria and rollback/disable procedures.

HAI-3 (Validation and Verification). Prior to deployment, operators **MUST** perform validation and verification proportionate to risk and context, including:

- evaluation on data representative of the intended population and setting,
- performance reporting with uncertainty characterization,
- stress tests for distribution shift and missingness patterns relevant to healthcare workflows.

For Tier 2–3, validation **MUST** include an evaluation plan reviewed by an accountable clinical authority, and **MUST** be repeated after material changes (model updates, data changes, workflow changes).

HAI-4 (Decision-Support vs Decision-Making Controls). Operators **MUST** implement controls appropriate to system type:

- For **decision-support**: provide clinicians with uncertainty, limitations, and non-use guidance; enable override/ignore without penalty; prevent UI patterns that create undue reliance.
- For **decision-making** in Tier 2–3 contexts: require defined human decision authority for high-impact decisions affecting persons unless a narrowly scoped exception is documented with justification, safeguards, and an escalation/rollback plan.

HAI-5 (Post-Deployment Monitoring). Tier 2–3 operators **MUST** implement post-deployment monitoring for:

- clinical performance drift and calibration changes,
- subgroup performance changes where feasible and lawful,
- safety signals (unexpected outcomes, near-misses, complaints),
- workflow deviations that change system meaning or incentives.

HAI-6 (Incident Response and Reporting). Tier 2–3 operators **MUST** maintain an incident response program that includes:

- incident classification and escalation thresholds,
- containment, rollback/disable capability, and verification tests,
- notification criteria for affected parties and relevant oversight bodies where applicable,
- root cause analysis and remediation tracking.

HAI-7 (Data Minimization and Purpose Limitation). Operators **MUST** implement:

- data minimization (“minimum necessary” collection and access),
- purpose limitation (use only for documented purposes),
- role-based access controls and least privilege,
- audit logging for access and material system actions.

HAI-8 (Secondary Use Constraints). Operators **MUST**:

- prohibit secondary use of health data for unrelated purposes (e.g., advertising, non-care profiling) unless a lawful basis and governance approval exist, and
- document secondary uses with a justification, risk assessment, and safeguards (including de-identification/pseudonymization where appropriate).

HAI-9 (Re-identification and Inference Protections). Operators **MUST** assess and mitigate:

- re-identification risk in released datasets or model outputs,
- membership and attribute inference risks (where applicable),
- linkage risks from quasi-identifiers and operational logs.

HAI-10 (Consent and Disclosure). Where meaningful consent is required by context or law, operators **MUST** ensure consent is:

- informed and specific to purpose,
- time-bounded or revocable where feasible,
- recorded with scope and expiration criteria.

Regardless of consent requirements, when AI materially influences patient-facing interactions or high-impact decisions, operators **MUST** provide clear disclosure of AI involvement and how to seek human review or assistance.

HAI-11 (Right to Non-Inference; Prohibition on Silent Sensitive Inference). Operators **MUST NOT** perform silent sensitive inference about individuals for healthcare or operational decisions unless:

- the inference is disclosed to the affected party (or appropriate surrogate) in an understandable form,
- there is a documented clinical/operational necessity and proportionality justification, and
- appropriate consent or lawful basis exists for the inference and its use.

HAI-12 (Bias, Fairness, and Health Equity). Operators **MUST** meet the requirements of `02_ai_standards/fairness_and_justice.md` and, for Tier 2–3 healthcare systems, **MUST**:

- perform subgroup performance testing appropriate to the clinical context,
- document representativeness gaps and mitigations,
- maintain a residual disparity risk register with monitoring thresholds and remediation plans.

HAI-13 (Contestability and Remedy). For Tier 2–3 systems that influence high-impact decisions, operators **MUST** provide an accessible process for:

- clinicians and affected parties to contest outputs or their use,
- timely review by a qualified human authority,
- corrective action and documentation of outcomes.

HAI-14 (Documentation Artifacts). Operators **MUST** maintain, at minimum:

- a model card (intended use, limitations, evaluation evidence, update history),
- datasheets/data provenance documentation for key datasets,
- deployment and monitoring plan (including escalation triggers),
- change control records for material updates.

HAI-15 (Security and Supply Chain Integrity). Operators **MUST** implement security controls proportionate to tier, including:

- threat modeling covering data, model, and workflow threats,
- secure access controls, key/secret management, and audit logging,
- supply chain integrity for models and datasets (provenance, integrity checks, dependency review),
- breach response procedures and exercises.

### SHOULD

HAI-16 (Independent Clinical Review). For Tier 2–3 deployments, operators **SHOULD** obtain independent clinical review of:

- validation plans and results,
- safety case assumptions,
- monitoring thresholds and escalation triggers.

HAI-17 (Prospective or Real-World Evaluation). Where feasible for Tier 2–3, operators **SHOULD** perform prospective evaluation (or staged rollout) to measure real-world performance and workflow effects before full-scale deployment.

HAI-18 (Patient and Community Consultation). For Tier 2–3 patient-facing systems, operators **SHOULD** incorporate structured input from patients or representatives into disclosure design, consent materials, and contestation pathways.

### MAY

HAI-19 (Public Reporting). Tier 2–3 operators **MAY** publish redacted summaries of safety performance, monitoring outcomes, and major remediation actions, with redactions limited to privacy, safety, or legal constraints.

## 6. Risk-Tier Considerations

- **Tier 0**: research and educational systems should document intended use, avoid releasing artifacts that enable re-identification, and avoid clinical claims without validation evidence.
- **Tier 1**: requires documentation, provenance, and baseline validation aligned to intended use; monitoring is recommended where systems influence workflows.
- **Tier 2**: expected default for many clinical decision-support and operational systems affecting care; requires safety case, monitoring, incident readiness, fairness/equity evaluation, and contestability.
- **Tier 3**: applies where failure can cause large-scale, irreversible, or systemic harm (e.g., national-scale triage systems, critical infrastructure health systems, coercive surveillance via health inference); requires stronger independent audit, escalation/pause readiness (`ESCALATION_AND_PAUSE.md`), and stricter governance review.

## 7. Compliance Evidence

Minimum evidence artifacts (as applicable):

- intended use and system-type dossier (HAI-1)
- clinical safety case and hazard analysis (HAI-2)
- validation plan, datasets description, and evaluation reports (HAI-3)
- workflow integration docs and oversight UI/UX review (HAI-4)
- monitoring dashboards, drift reports, and alert history (HAI-5)
- incident runbooks, tabletop exercises, and remediation tracker (HAI-6)
- access control policies and audit logs (HAI-7, HAI-15)
- secondary use register and approvals (HAI-8)
- re-identification and inference risk assessments (HAI-9)
- consent/disclosure materials and records (HAI-10)
- documentation of sensitive inference disclosures and lawful basis (HAI-11)
- subgroup testing reports and equity impact artifacts (HAI-12)
- contestation workflow metrics and case outcomes (HAI-13)
- model cards, datasheets, change logs (HAI-14)
- threat model, dependency review, provenance attestations, breach response evidence (HAI-15)

### Traceability Table (Requirement → Axiom → Evidence)

| Requirement ID | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| HAI-2 | A5, A7 | safety case, hazard analysis, rollback plan |
| HAI-3 | A4, A5 | evaluation plan/results, uncertainty reporting |
| HAI-5 | A4, A7 | monitoring dashboards, drift reports |
| HAI-7 | A2, A4 | access controls, audit logs, purpose limitation docs |
| HAI-11 | A2, A3 | disclosure/consent records, justification memos |
| HAI-12 | A1, A3 | subgroup testing, disparity risk register |
| HAI-13 | A3 | contestation workflow, remedy outcomes |
| HAI-15 | A4, A7 | threat model, supply chain evidence, breach response |

## 8. Known Limitations

- Healthcare outcomes are affected by workflow, resources, and clinician behavior; model performance does not fully determine real-world impact.
- Protected-attribute measurement and subgroup reporting may be constrained by law, ethics, or data availability; alternative strategies reduce but do not eliminate equity risk.
- Some privacy risks arise from linkage and inference rather than direct identifiers; risk assessment is necessary even when direct identifiers are removed.

## 9. Future Considerations

- Standardized reporting formats for clinical safety cases and monitoring dashboards.
- Privacy-preserving subgroup performance measurement (e.g., secure aggregation) suitable for restricted jurisdictions.
- Evaluation approaches for multimodal and agentic systems operating across longitudinal patient timelines.

## Appendix A (Non-normative): Rationale

Healthcare is inherently high-stakes. “HIPAA-style” privacy concepts are expressed here as globally portable controls: minimum necessary access, purpose limitation, audit logging, and constraints on secondary use. Safety requirements emphasize validation in the intended context and ongoing monitoring because healthcare distributions and workflows change.

## Appendix B (Non-normative): Failure Modes & Abuse Cases

- deploying decision-support that becomes de facto decision-making through workflow pressure
- “silent sensitive inference” used for access restriction or non-care profiling
- using de-identified data without assessing linkage and inference risks
- subgroup evaluation omitted due to convenience or fear of adverse findings

## Change Log

- v0.1: Initial draft.

