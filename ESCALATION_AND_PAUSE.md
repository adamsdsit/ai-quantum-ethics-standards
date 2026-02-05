# Escalation, Pause, and Moratorium Mechanisms

## Purpose

This document defines conditions under which development, deployment, or use of AI or quantum computing (QC) systems must be **escalated**, **paused**, or **prohibited**, with safeguards to prevent abuse.

Pauses are protective and evidence-driven, not punitive.

## Ethical Mapping

- `A5 Proportionality & Moderation`
- `A7 Stewardship`
- `A3 Justice, Due Process, and Remedy`
- `A6 Participation & Consultation`

## Definitions (Only as Required)

- **Escalation**: a mandatory governance step requiring higher authority review before proceeding.
- **Pause**: a temporary stop on a defined activity (development, deployment, or use) pending review and mitigation.
- **Moratorium**: a pause of indefinite duration until explicit conditions for resumption are met, typically for Tier 3 risks.

## Trigger Conditions

Trigger conditions are grouped into technical, ethical/legal, and societal/systemic categories. Any trigger **MUST** be documented with evidence and an initial risk-tier assessment.

### Technical Triggers

T-1 (Critical Safety/Security Finding). A newly discovered vulnerability or failure mode that enables severe harm at scale, especially if exploitation is plausible and controls are insufficient.

T-2 (Loss of Control). Evidence that operators cannot reliably stop, roll back, or meaningfully constrain harmful outputs or actions in the deployed environment.

T-3 (Cryptographic Destabilization Signal). Evidence that QC capability or research materially increases feasibility of compromising widely deployed cryptographic protections for sensitive data with long confidentiality needs.

### Ethical / Legal Triggers

E-1 (Rights-Violating Use). Credible evidence of use that violates human rights, due process, or meaningful consent in ways not remediable through immediate control changes.

E-2 (Irremediable Disparate Harm). Evidence of severe discriminatory impact that cannot be mitigated without major redesign or discontinuation.

### Societal / Systemic Triggers

S-1 (Dual-Use Escalation). Capability diffusion or access changes that materially increase misuse potential beyond the originally reviewed threat model.

S-2 (Unacceptable Societal Disruption). Credible evidence of systemic destabilization risk (e.g., critical infrastructure impacts, large-scale coercion, irreversibility) exceeding Tier 3 tolerance.

## Authority and Initiation

AP-1 (Initiation Rights). For Tier 2–3 systems, the following parties **MUST** be able to initiate escalation/pause:

- the designated safety/security owner,
- the system owner,
- an independent audit function (where present),
- a governance body defined in `01_governance/governance_model.md`.

AP-2 (No Retaliation). Organizations **MUST** prohibit retaliation for good-faith escalation/pause initiation.

## Escalation and Pause Process

P-1 (Immediate Containment). When a trigger condition is met, operators **MUST** implement immediate containment actions proportional to risk (e.g., disable feature, restrict access, revert version).

P-2 (Decision Record). Operators **MUST** create a decision record containing:

- trigger evidence and classification
- affected tiers and systems/versions
- proposed mitigations and timeframe
- residual risk statement
- decision authority and sign-offs

P-3 (Consultation). For Tier 3 triggers, review **MUST** include multi-stakeholder input and, where relevant, independent security and human-rights review.

P-4 (Resumption Criteria). Pauses and moratoria **MUST** define resumption criteria and verification evidence. If criteria cannot be stated, the system **SHOULD** remain paused until criteria can be defined or the activity is discontinued.

## Safeguards Against Abuse

SA-1 (Scope Boundaries). Pauses **MUST** be scoped to the minimum activity necessary to reduce harm, unless broader scope is justified by evidence.

SA-2 (Time-Bounded Review). Temporary pauses **MUST** include a review cadence and a target decision date.

SA-3 (Appeal/Contestability). Affected parties (including operators and external stakeholders where appropriate) **SHOULD** have a documented path to contest pause decisions, without undermining safety.

SA-4 (Transparency). Where feasible, operators **SHOULD** publish a summary of the pause decision and resumption criteria, with redactions limited to privacy/safety/legal constraints.

## Compliance Evidence

- trigger evidence and incident reports
- containment actions and rollback logs
- decision records and sign-offs
- consultation artifacts (Tier 3)
- public summaries/redaction logs (where published)

