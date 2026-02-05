# Standard: Continuous Monitoring, Incident Response, and Harm Remediation

## 1. Purpose

Define requirements for ongoing monitoring, incident detection, response, and harm remediation for AI and quantum computing (QC) systems across their operational lifecycle.

This standard assumes harms often emerge **after deployment** through drift, misuse, unexpected interaction effects, or supply chain compromise. Ethical governance therefore requires continuous operational control, not one-time pre-launch review.

## 2. Ethical Mapping

- `A3 Justice, Due Process, and Remedy`: remediation, contestability, and corrective action for affected parties
- `A4 Truthfulness & Trustworthiness`: accurate reporting, reconstruction, and learning from incidents
- `A5 Proportionality & Moderation`: response strength scales with severity; escalation and pause mechanisms
- `A7 Stewardship (Societal & Environmental)`: reduces systemic harm and cascading failures
- `A6 Participation & Consultation`: appropriate stakeholder coordination for Tier 3/systemic incidents

## 3. Scope

This standard applies to Tier 1–3 systems and to Tier 0 systems when they:

- operate in production-like environments, or
- release artifacts that can cause downstream operational harms.

It applies to AI, QC, and hybrid AI+QC systems, including:

- decision-support and decision-making systems,
- optimization systems affecting allocation, pricing, or infrastructure,
- cryptography-relevant QC systems and post-quantum transition contexts.

## 4. Definitions (only if required)

- **Monitoring**: continuous or periodic measurement and review of system performance, safety, fairness, security, and operational integrity signals.
- **Incident**: an event indicating actual or potential violation of requirements, material harm, or loss of control, including security compromise, harmful outputs, or governance failures.
- **Ethical incident**: an incident primarily characterized by harm to dignity/justice/rights (e.g., discriminatory allocation, coercive profiling) even if systems function “as designed.”
- **Technical incident**: an incident primarily characterized by faults, vulnerabilities, outages, or exploitation.
- **Affected parties**: persons or groups materially influenced or harmed by the system or decisions enabled by it.

## 5. Normative Requirements

### MUST

MIR-1 (Monitoring Plan). Tier 1–3 operators **MUST** maintain a monitoring plan proportional to risk that specifies:

- monitored indicators (performance, fairness, safety, security, misuse),
- data sources and collection methods,
- alert thresholds and escalation triggers,
- roles and response responsibilities,
- review cadence and reporting outputs.

MIR-2 (Minimum Monitoring Domains). Tier 1–3 monitoring **MUST** cover, as applicable:

1) **Performance drift**: accuracy/utility drift, calibration drift, and distribution shift signals.
2) **Bias and fairness drift**: disparity indicators and monitoring consistent with `02_ai_standards/fairness_and_justice.md`.
3) **Security and misuse indicators**: anomalous access, abuse patterns, prompt/attack patterns (AI), artifact compromise (QC/AI), and supply chain integrity signals.
4) **Privacy/inference controls**: unauthorized inference activity detection consistent with `02_ai_standards/privacy_and_non_inference.md` (Tier 2–3).

MIR-3 (Incident Classification). Tier 2–3 operators **MUST** define an incident classification scheme that includes:

- severity levels (at least: low, medium, high, critical),
- incident types (technical, ethical, dual-use, privacy),
- criteria for escalation and pause triggers (`ESCALATION_AND_PAUSE.md`).

MIR-4 (Response Obligations). For Tier 2–3 incidents, operators **MUST**:

- contain and mitigate (disable, rollback, restrict access) proportional to severity,
- preserve evidence needed for reconstruction and accountability,
- initiate escalation when triggers are met,
- track remediation to closure with owners and deadlines.

MIR-5 (Notification Criteria). Tier 2–3 operators **MUST** define notification criteria and processes for:

- affected parties (where feasible and appropriate),
- internal oversight bodies,
- regulators or sector oversight bodies where applicable,
- downstream partners when supply chain compromise or shared-risk exposure exists.

Notification criteria **MUST** consider risk of additional harm from notification (e.g., active exploitation) and document redactions/delays with justification.

MIR-6 (Harm Remediation). When harm is identified in Tier 2–3 contexts, operators **MUST** provide a remediation pathway that includes:

- corrective action (fix, rollback, policy change),
- mechanisms for affected parties to seek review and remedy (aligned with `A3`),
- documentation of outcomes and residual risks,
- compensation/redress mechanisms **where applicable** under the organization’s obligations and context.

MIR-7 (Root Cause Analysis and Learning). Tier 2–3 operators **MUST** perform root cause analysis (RCA) for high and critical incidents, including:

- contributing technical and organizational causes,
- why controls failed or were insufficient,
- changes required to prevent recurrence,
- verification evidence that changes are effective.

MIR-8 (Continuous Improvement Loop). Operators **MUST** feed incident learnings into:

- monitoring thresholds and indicators,
- design and evaluation practices,
- governance and training,
- and, where relevant, standards updates (issues/PRs in this corpus).

MIR-9 (Audit Logging and Retention). Tier 2–3 operators **MUST** retain logs sufficient to reconstruct:

- system versions and configurations,
- key decisions and actions taken,
- access and privilege changes,
- incident timelines and mitigation steps,

with retention periods proportional to risk and consistent with privacy minimization.

MIR-10 (QC-Specific Monitoring). Where QC capability affects security or systemic risk, operators **MUST** monitor:

- cryptographic transition milestones and exposure signals (as applicable),
- access model changes that increase dual-use risk,
- anomalous job patterns indicative of misuse.

### SHOULD

MIR-11 (Tabletop Exercises and Drills). Tier 2–3 operators **SHOULD** conduct periodic exercises for:

- incident response and escalation/pause,
- rollback/disable mechanisms,
- cross-team coordination (security, clinical/operations, governance).

MIR-12 (Independent Review for Tier 3). Tier 3 operators **SHOULD** include independent review of:

- incident classification and triggers,
- remediation effectiveness for high/critical incidents,
- transparency reporting boundaries.

MIR-13 (Cross-Border Coordination). For cross-jurisdiction deployments, operators **SHOULD** plan for incident coordination across legal regimes, including responsible disclosure practices.

### MAY

MIR-14 (Public Incident Summaries). Tier 2–3 operators **MAY** publish redacted incident summaries and remediation actions, with redactions limited to privacy, safety, or legal constraints.

## 6. Risk-Tier Considerations

- **Tier 0**: monitoring is encouraged for research systems with operational exposure; incidents should be recorded and lessons captured.
- **Tier 1**: baseline monitoring and incident handling appropriate to system exposure; clear escalation contacts.
- **Tier 2**: mandatory monitoring across performance/fairness/security/privacy; defined severity classification, notifications, and remediation pathways.
- **Tier 3**: strongest requirements including independent review expectations, systemic risk triggers, and moratorium-capable response readiness.

## 7. Compliance Evidence

Minimum evidence artifacts (as applicable):

- monitoring plan, indicators catalog, and thresholds (MIR-1, MIR-2)
- incident classification scheme and trigger definitions (MIR-3)
- incident runbooks and containment/rollback procedures (MIR-4)
- notification templates, logs, and redaction decisions (MIR-5)
- remediation workflow, outcomes, and redress records (MIR-6)
- RCAs, prevention changes, and verification evidence (MIR-7)
- continuous improvement updates linked to incidents (MIR-8)
- audit logs and retention schedules (MIR-9)
- QC-specific monitoring artifacts (MIR-10)
- drill reports and tabletop outcomes (MIR-11)

### Traceability Table (Requirement → Axiom → Evidence)

| Requirement ID | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| MIR-2 | A7, A4 | dashboards, drift analyses, security signals |
| MIR-4 | A5, A4 | runbooks, rollback logs, mitigation records |
| MIR-6 | A3 | remedy workflows, case outcomes, redress records |
| MIR-7 | A4 | RCA reports, verification evidence |
| MIR-9 | A3, A4 | audit logs, retention schedule |

## 8. Known Limitations

- Monitoring can increase data collection; privacy minimization and retention limits must be enforced.
- Some harms are diffuse and not easily attributable; the standard requires structured assessment and conservative escalation when uncertainty is high.
- Public disclosures may be constrained during active exploitation; compensating oversight records remain required.

## 9. Future Considerations

- Standardized incident taxonomies spanning AI and QC contexts.
- Privacy-preserving monitoring methods for sensitive deployments.
- Interoperable incident reporting formats for cross-organization coordination.

## Appendix A (Non-normative): Rationale

Ethical compliance is operational. Continuous monitoring, incident readiness, and remediation are the mechanisms by which justice and safety persist after deployment.

## Appendix B (Non-normative): Failure Modes & Abuse Cases

- “launch and forget” systems with no drift detection
- incident suppression to protect reputation
- alerts that are un-actionable, leading to oversight theater
- remediation without verification, allowing recurrence

## Change Log

- v0.1: Initial draft.

