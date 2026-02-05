# AI Standard: Justice, Bias, and Fairness

## 1. Purpose

Prevent discriminatory outcomes and structural inequities introduced or amplified by AI systems, especially in high-impact contexts.

## 2. Applicability

- Applies to Tier 1–3 deployments, with mandatory equity impact assessment for Tier 2–3.

## 3. Ethical Mapping

- `A1 Unity & Social Cohesion`
- `A3 Justice, Due Process, and Remedy`
- `A2 Human Dignity`

## 4. Requirements (Normative)

AI-F-1 (Provenance & Representativeness). Operators **MUST** document dataset and label provenance and evaluate representativeness relative to the deployment population, including known gaps and mitigation steps.

AI-F-2 (Bias Testing by Tier).

- Tier 1: operators **SHOULD** perform bias testing for relevant protected attributes where feasible.
- Tier 2–3: operators **MUST** perform pre-deployment and periodic post-deployment bias testing using metrics appropriate to the decision context, and **MUST** publish a summary of findings with redactions limited to privacy/safety/legal constraints.

AI-F-3 (Equity Impact Assessment). For Tier 2–3 systems, operators **MUST** perform an equity impact assessment (EIA) that includes:

- expected benefit and burden distribution
- plausible disparate impact pathways (including proxy variables)
- mitigation plan and residual risk statement
- monitoring plan with thresholds and escalation triggers

AI-F-4 (Contestability). If the system contributes to a high-impact decision, operators **MUST** provide a contestation process that is accessible, timely, and able to produce corrective action.

AI-F-5 (No “Fairness Laundering”). Operators **MUST NOT** claim fairness solely by reporting a single metric or by excluding protected attribute analysis without a documented justification.

## 5. Compliance Evidence

- data provenance records and data processing logs
- bias testing reports and dashboards
- EIA document with sign-offs and revision history
- contestation workflows, SLA metrics, and corrective action records

## 6. Rationale (Non-normative)

Bias cannot be “fixed once.” Continuous monitoring is required because distributions shift, incentives change, and harms often emerge at the margins.

## 7. Failure Modes & Abuse Cases

- optimizing aggregate accuracy while harming minority groups
- suppressing protected-attribute evaluation to avoid uncomfortable results
- “paper EIA” with no operational monitoring or escalation

## 8. Change Log

- v0.1: Initial draft.

