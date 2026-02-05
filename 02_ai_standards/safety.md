# AI Standard: Safety, Security, and Dual-Use Risk

## 1. Purpose

Reduce harms from AI failure, misuse, adversarial attack, and dual-use deployment.

## 2. Applicability

- Applies to Tier 1–3 systems.
- Tier 2–3 require structured safety engineering and incident readiness.

## 3. Ethical Mapping

- `A5 Proportionality & Moderation`
- `A4 Truthfulness & Trustworthiness`
- `A7 Stewardship`

## 4. Requirements (Normative)

AI-S-1 (Risk Assessment). Tier 1–3 operators **MUST** perform a documented risk assessment covering:

- intended use and misuse/abuse cases
- safety/security threats (including adversarial threats)
- potential severity and reversibility of harms
- mitigations and residual risk

AI-S-2 (Red-Teaming). Tier 2–3 operators **MUST** conduct pre-deployment red-teaming proportional to system capability and exposure, including attempts to:

- elicit unsafe instructions or harmful behavior
- bypass safety controls
- induce data leakage or privacy violations
- cause discriminatory outcomes

AI-S-3 (Change Control). For Tier 2–3, model updates that can materially change behavior **MUST** undergo safety review and **MUST** be traceable to a versioned release process.

AI-S-4 (Incident Response). Tier 2–3 operators **MUST** maintain:

- incident classification and escalation runbooks
- rollback/disable mechanisms
- user/affected-party notification criteria and templates

AI-S-5 (Dual-Use Controls). Where credible dual-use risk exists, operators **MUST** implement access controls and monitoring proportionate to risk, and **MUST** document justification for any release that increases misuse capability.

## 5. Compliance Evidence

- risk assessment artifact and update cadence
- red-team plans, findings, and remediation evidence
- release/version logs and safety sign-offs
- incident response runbooks and tabletop exercise reports
- access logs, monitoring reports, and abuse handling metrics

## 6. Rationale (Non-normative)

Safety is a lifecycle property. Tier 2–3 systems require verifiable engineering processes, not just policy statements.

## 7. Failure Modes & Abuse Cases

- unreviewed model updates introducing regressions
- security-by-obscurity without monitoring
- misaligned incentives leading to premature deployment

## 8. Change Log

- v0.1: Initial draft.

