# AI Standard: Fairness, Bias, and Justice

## 1. Purpose

Define enforceable requirements to identify, measure, mitigate, and govern fairness and bias risks in AI systems, especially where systems influence high-impact decisions.

## 2. Ethical Mapping

- `A1 Unity & Social Cohesion`: prevent structural inequity and discriminatory burdens
- `A2 Human Dignity & Moral Agency`: preserve meaningful agency and non-coercive treatment
- `A3 Justice, Due Process, and Remedy`: support contestability, auditability, and correction
- `A4 Truthfulness & Trustworthiness`: ensure claims about fairness are evidence-based

## 3. Scope

This standard applies to:

- AI systems used in Tier 1–3 contexts (Tier 0 is encouraged where feasible), and
- both **automated decision-making** and **decision-support** systems when they materially influence outcomes for affected parties.

This standard covers:

- training-time and deployment-time fairness risk management,
- dataset provenance and representativeness,
- evaluation, monitoring, and remediation obligations,
- prohibited practices that undermine fairness and justice.

## 4. Definitions (only if required)

The following definitions are specific to this standard and supplement `00_foundations/definitions.md`.

- **Bias**: a systematic tendency in data, measurement, modeling, or operations that produces errors or distortions that can lead to unequal outcomes across groups or contexts.
- **Discrimination**: differential treatment or outcomes that is unlawful, unjustified, or otherwise impermissible under the applicable normative and legal regime; discrimination may be direct (explicit) or indirect (via proxies).
- **Fairness (operational)**: a set of context-specific constraints and evaluation criteria that limit unacceptable disparities and ensure consistent treatment across relevant groups or individuals, selected and justified for the decision context.
- **Equity**: a focus on distribution of benefits and burdens, accounting for baseline disadvantage and structural context; equity assessments consider whether the system increases or reduces unjust disparities.
- **Statistical fairness**: fairness criteria assessed using statistical measures (e.g., error rates, calibration, selection rates) disaggregated across relevant groups.
- **Contextual fairness**: fairness criteria assessed against the real-world decision context, including how a system is used, the stakes, available remedies, and the social meaning of errors.

## 5. Normative Requirements

### MUST

AI-FJ-1 (Fairness Objective & Context). For Tier 1–3 deployments, operators **MUST** document:

- the decision context and stakes (including whether it is a high-impact decision),
- whether the system is decision-support or decision-making,
- the fairness objectives selected for the context, and
- which affected parties and groups are in scope for evaluation.

AI-FJ-2 (Bias vs Discrimination Analysis). For Tier 1–3 deployments, operators **MUST**:

- analyze and document plausible bias pathways (data, labels, proxies, deployment operations), and
- identify discrimination risk pathways, including indirect/proxy discrimination, under applicable law and policy.

AI-FJ-3 (Dataset Provenance and Representativeness). For Tier 1–3, operators **MUST** maintain dataset and label provenance records and evaluate representativeness relative to the intended deployment population, including:

- known gaps and likely error distributions,
- data collection and labeling procedures,
- transformation and filtering steps, and
- mitigation actions (e.g., additional sampling, reweighting, re-labeling).

AI-FJ-4 (Protected Attributes and Proxies). Operators **MUST**:

- identify relevant protected or otherwise vulnerable groups for the context, subject to legal constraints, and
- evaluate proxy variables that may reproduce protected-class effects (e.g., geography, language, device signals), documenting mitigations or justifications.

Where collection or use of protected attributes is restricted, operators **MUST** document alternative evaluation strategies and their limitations.

AI-FJ-5 (Pre-Deployment Fairness Evaluation). Before deployment in Tier 1–3 contexts, operators **MUST** perform a fairness evaluation that:

- reports performance and error characteristics relevant to the context,
- includes disaggregated analysis across relevant groups **where legally and ethically permissible**, and
- includes a documented rationale for selected metrics and thresholds.

No single metric is sufficient for all contexts; metric selection **MUST** be justified.

AI-FJ-6 (Residual Risk Register). Tier 2–3 operators **MUST** maintain a fairness residual risk register that includes:

- identified disparity risks and their expected severity,
- mitigations implemented and residual risk after mitigation,
- monitoring thresholds and escalation triggers, and
- assigned owners and review cadence.

AI-FJ-7 (Deployment Monitoring). Tier 2–3 operators **MUST** implement post-deployment monitoring for:

- distribution shift and data quality drift relevant to fairness,
- changes in disparity indicators over time,
- emergent proxy pathways caused by operational changes (policies, incentives, user behavior).

AI-FJ-8 (Actionability and Remediation). When monitoring indicates material fairness regression or unacceptable disparity, operators **MUST**:

- initiate escalation per documented thresholds,
- implement containment or rollback where feasible, and
- document remediation actions and verification evidence.

AI-FJ-9 (Decision-Support Safeguards). When a system is deployed as decision-support for Tier 2–3 contexts, operators **MUST** implement safeguards against undue reliance, including:

- reviewer guidance describing appropriate use and non-use cases,
- presentation of uncertainty and limitations,
- the ability for reviewers to override/ignore recommendations without penalty, and
- periodic review of human-in-the-loop performance for disparate impacts.

AI-FJ-10 (Prohibited Practices). Operators **MUST NOT**:

- claim fairness based solely on aggregate accuracy or a single fairness metric without justification,
- use “fairness through unawareness” (excluding protected attributes) as a standalone fairness claim without evidence of proxy-risk handling,
- suppress, delay, or selectively report known disparity findings for Tier 2–3 systems,
- deploy systems for high-impact decisions without a documented contestation and remedy pathway (see also `02_ai_standards/accountability.md`).

### SHOULD

AI-FJ-11 (Equity Impact Assessment). Tier 2–3 operators **SHOULD** conduct an equity impact assessment that evaluates distribution of benefits and burdens, plausible harm pathways, and mitigations; if not performed, operators **MUST** document the rationale.

AI-FJ-12 (Independent Review). For Tier 3, operators **SHOULD** obtain independent review of fairness evaluations and monitoring design, including review of metric selection and thresholds.

AI-FJ-13 (Stakeholder Consultation). For Tier 2–3 systems, operators **SHOULD** incorporate structured consultation with affected parties or representatives into fairness objective selection and monitoring design.

### MAY

AI-FJ-14 (Public Fairness Reporting). Tier 2–3 operators **MAY** publish redacted fairness reports, including metric rationales, monitoring approach, and remediation summaries, with redactions limited to privacy, safety, or legal constraints.

## 6. Risk-Tier Considerations

- **Tier 0**: fairness evaluation is context-dependent and often exploratory; operators are encouraged to document datasets, run preliminary disparity checks, and avoid releasing artifacts that materially increase discrimination risk without mitigations.
- **Tier 1**: requires documented context, provenance, and a pre-deployment evaluation (AI-FJ-1 to AI-FJ-5).
- **Tier 2**: adds mandatory monitoring, residual risk tracking, and remediation discipline (AI-FJ-6 to AI-FJ-9), plus consultation expectations.
- **Tier 3**: adds strong expectations for independent review, public-interest justification where dual-use or systemic harm is plausible, and stricter escalation thresholds consistent with `ESCALATION_AND_PAUSE.md`.

## 7. Compliance Evidence

Minimum evidence artifacts (as applicable):

- fairness objective and context document (AI-FJ-1)
- bias/discrimination pathway analysis (AI-FJ-2)
- dataset provenance and representativeness report (AI-FJ-3)
- proxy variable analysis and mitigations (AI-FJ-4)
- pre-deployment fairness evaluation report with metric rationale (AI-FJ-5)
- fairness residual risk register (AI-FJ-6)
- monitoring dashboards, thresholds, and escalation logs (AI-FJ-7)
- remediation records and verification tests (AI-FJ-8)
- decision-support reviewer guidance and training materials (AI-FJ-9)
- contestation/remedy process artifacts (AI-FJ-10)

### Traceability Table (Requirement → Axiom → Evidence)

| Requirement ID | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| AI-FJ-1 | A3, A4 | context doc, fairness objectives, scope statement |
| AI-FJ-3 | A1, A3, A4 | provenance records, representativeness report |
| AI-FJ-5 | A3, A4 | evaluation report, metric rationale, thresholds |
| AI-FJ-6 | A1, A3, A4 | residual risk register, owner assignments |
| AI-FJ-7 | A1, A3, A7 | monitoring dashboards, drift analyses |
| AI-FJ-8 | A3, A4, A5 | escalation logs, rollback/remediation evidence |
| AI-FJ-10 | A3, A4 | claim review artifacts, contestation workflow |

## 8. Known Limitations

- Fairness criteria are context-specific; universal metric mandates are not feasible across domains.
- Legal constraints may limit collection or use of protected attributes; alternative strategies can reduce but not eliminate discrimination risk.
- Some disparity drivers are structural and cannot be eliminated by model changes alone; this standard requires documentation and mitigation, not claims of total elimination.

## 9. Future Considerations

- Methods for auditing fairness in generative and agentic systems where outputs are open-ended.
- Privacy-preserving disparity measurement approaches suitable for restricted jurisdictions.
- Standardized reporting formats for fairness residual risk registers to improve audit interoperability.

## Appendix A (Non-normative): Rationale

Fairness is operationalized through context-specific constraints, evaluation, monitoring, and remedy pathways. Statistical measures are necessary but insufficient; contextual fairness ensures that evaluation reflects real-world use, stakes, and available recourse.

## Appendix B (Non-normative): Failure Modes & Abuse Cases

- selecting metrics that obscure harms (“metric gaming”)
- relying on “fairness through unawareness” while proxies reproduce protected-class effects
- shifting decision thresholds post-audit to reintroduce disparities
- human-in-the-loop processes that amplify bias through uneven override behavior

## Change Log

- v0.2: Expanded fairness standard; renamed to `02_ai_standards/fairness_and_justice.md`; added traceability, tiering, and prohibited practices.
