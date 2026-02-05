# Ethical Metrics and Quantification Framework

## 1. Purpose

Define principles and requirements for measuring, reporting, and interpreting ethical performance of AI and quantum computing (QC) systems.

This framework does not reduce ethics to numbers. It defines:

- what **can** be meaningfully quantified,
- what **must** remain qualitative or deliberative, and
- how to prevent metric misuse (cherry-picking, aggregation theater, and marketing “trust scores”).

## 2. Ethical Mapping

- `A4 Truthfulness & Trustworthiness`: honest reporting, uncertainty disclosure, anti-deception rules
- `A3 Justice, Due Process, and Remedy`: measurement supports accountability and remedy, not denial
- `A5 Proportionality & Moderation`: measurement depth scales with tier and risk
- `A2 Human Dignity & Moral Agency`: metrics support agency; do not replace moral judgment
- `A7 Stewardship (Societal & Environmental)`: include environmental and systemic impacts

## 3. Scope

This framework applies to:

- Tier 1–3 deployments, and
- Tier 0 research when outputs are used for policy decisions, public claims, procurement, or certification.

It applies to AI, QC, and hybrid AI+QC systems and to measurement activities used in:

- audits and certification (`05_audit_and_assurance/*`),
- transparency reporting,
- internal governance and escalation decisions.

## 4. Definitions (only if required)

- **Ethical metric**: a quantified measure used to evaluate ethical performance (e.g., disparity indicators, incident rates, access violations), including the method and context needed for interpretation.
- **Qualitative ethical assessment**: non-quantified evaluation requiring deliberation (e.g., legitimacy of objectives, consent meaningfulness in context, power asymmetry judgments).
- **Metric misuse**: practices that create misleading impressions of ethical performance (e.g., single-score ratings, unscoped aggregation, selective reporting).

## 5. Normative Requirements

### MUST

EM-1 (Measurement Philosophy and Limits). Operators **MUST** explicitly document:

- which ethical properties are being measured,
- which properties are assessed qualitatively and why,
- known limits of quantification for the context.

EM-2 (Context Sensitivity). Ethical metrics **MUST** be defined and interpreted in context, including:

- decision domain and stakes,
- affected parties and exposure,
- operational workflow and incentives,
- relevant risk tier and system boundaries.

Metrics detached from context **MUST NOT** be used for governance decisions or public claims.

EM-3 (Metric Categories Coverage). For Tier 2–3 deployments, operators **MUST** maintain a measurement set that addresses, as applicable:

- **Safety and harm** (incidents, near-misses, severity distribution, MTTD/MTTR),
- **Fairness and equity** (disparity indicators, subgroup performance trends, contestation outcomes),
- **Transparency and accountability** (traceability coverage, explainability debt, audit finding closure),
- **Privacy and autonomy** (unauthorized inference indicators, access violations, consent integrity signals),
- **Environmental impact** (energy use, significant resource externalities where measurable).

EM-4 (Uncertainty and Limitations Disclosure). Ethical metrics **MUST** include:

- uncertainty estimates or qualitative uncertainty statements,
- known biases in measurement (sampling, missingness, legal constraints),
- limitations and non-comparability notes (when metrics should not be compared across systems).

EM-5 (Change Control for Metrics). Metric definitions, thresholds, and reporting rules **MUST** be versioned and change-controlled. For Tier 2–3, operators **MUST** document:

- rationale for changes,
- expected impact on interpretation,
- continuity handling (how trends are preserved or re-baselined).

EM-6 (Prohibited Practices). Operators **MUST NOT**:

- publish or rely on a single aggregated “ethics score,” “trust score,” or equivalent as a substitute for category-specific evidence,
- aggregate metrics across categories in ways that hide severe harms (e.g., averaging safety incidents with documentation completeness),
- use selective reporting (“metric cherry-picking”) to create a misleading impression of compliance,
- present metrics as moral delegation (“the score says it’s ethical”) rather than decision support.

EM-7 (Audit and Governance Use). For Tier 2–3, operators **MUST** link metrics to governance actions, including:

- thresholds that trigger escalation, pause, or remediation (`ESCALATION_AND_PAUSE.md`),
- audit finding triage and closure verification (`05_audit_and_assurance/audit_methods.md`),
- monitoring and incident response obligations (`05_audit_and_assurance/monitoring_and_incident_response.md`).

EM-8 (Evidence Integrity). Metrics used in certification or public reporting **MUST** be reproducible or reconstructable by an auditor from retained evidence artifacts, subject to privacy and security constraints.

### SHOULD

EM-9 (Balanced Quantitative + Qualitative Review). Tier 2–3 operators **SHOULD** pair dashboards with periodic qualitative reviews addressing:

- objective legitimacy and power asymmetry concerns,
- consent integrity and disclosure clarity,
- lived experience feedback from affected parties where feasible.

EM-10 (Red-Team Metrics). For Tier 3, operators **SHOULD** red-team metric systems for:

- gaming incentives,
- measurement blind spots,
- Goodhart effects (optimization against the metric rather than the ethical goal).

### MAY

EM-11 (Public Metric Schema). Operators **MAY** publish a machine-readable schema for reported metrics to improve comparability, provided it includes scope and limitations (EM-2, EM-4) and does not enable new security risks.

## 6. Risk-Tier Considerations

- **Tier 0**: measurement is often exploratory; avoid public claims that imply certification-grade evidence without auditability.
- **Tier 1**: maintain basic measurement for safety and integrity appropriate to exposure; document limitations.
- **Tier 2**: require category coverage (EM-3), uncertainty disclosure (EM-4), and explicit governance linkages (EM-7).
- **Tier 3**: require strongest auditability, red-team metrics expectations, and conservative treatment of uncertainty.

## 7. Compliance Evidence

Minimum evidence artifacts (as applicable):

- measurement philosophy and limits memo (EM-1)
- metric catalog with context notes and tier mapping (EM-2, EM-3)
- uncertainty/limitations statements per metric (EM-4)
- version history and change control records for metrics (EM-5)
- governance triggers and action logs linked to metrics (EM-7)
- audit reconstruction procedures and evidence retention proof (EM-8)

### Traceability Table (Requirement → Axiom → Evidence)

| Requirement ID | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| EM-4 | A4 | uncertainty statements, limitations notes |
| EM-6 | A4, A2 | prohibited-claims policy, report reviews |
| EM-7 | A3, A5 | trigger definitions, action logs, RCAs |
| EM-8 | A4, A3 | audit reconstruction evidence, retained artifacts |

## 8. Known Limitations

- Some ethical properties (legitimacy, coercion, consent meaningfulness) are not reliably reducible to metrics; they require deliberation and case review.
- Legal and ethical constraints can prevent direct measurement of certain group impacts; alternative strategies reduce but may not eliminate blind spots.
- Metrics can create perverse incentives; governance must monitor for gaming and Goodhart effects.

## 9. Future Considerations

- Interoperable “metric manifests” for certification evidence packages.
- Privacy-preserving measurement for subgroup monitoring and inference detection.
- Sector-specific metric profiles (healthcare, finance, critical infrastructure).

## Appendix A (Non-normative): Rationale

Ethical governance needs evidence, but evidence is not a single number. This framework makes quantification disciplined and honest by requiring uncertainty disclosure, prohibiting deceptive aggregation, and linking metrics to real governance actions.

## Appendix B (Non-normative): Failure Modes & Abuse Cases

- “trust scores” used as marketing shields
- metric optimization that increases harm off-dashboard
- changing metric definitions to hide regressions

## Change Log

- v0.1: Initial draft.

