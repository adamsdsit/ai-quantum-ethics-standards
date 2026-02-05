# Quantum Standard: Research Limits, Responsible Disclosure, and Moratorium Capability

## 1. Purpose

Enable scientific progress while preventing irresponsible release of capabilities that plausibly create irreversible or catastrophic harm.

## 2. Applicability

- Applies to Tier 0–3 quantum research when outputs may materially increase dual-use capability.
- Strongest requirements apply to Tier 3-relevant work.

## 3. Ethical Mapping

- `A5 Proportionality & Moderation`
- `A7 Stewardship`
- `A4 Trustworthiness`

## 4. Requirements (Normative)

Q-R-1 (Pre-Registration of High-Risk Research). When research plausibly increases capability for major cryptographic compromise, mass surveillance, or destabilizing security outcomes, researchers **SHOULD** pre-register:

- intent and threat model
- anticipated dual-use risks
- planned mitigations and disclosure approach

Q-R-2 (Responsible Disclosure Path). For Tier 3-relevant findings, researchers **MUST** define a responsible disclosure path, including:

- who is notified and when (e.g., infrastructure stewards, affected sectors)
- what is disclosed publicly vs. withheld
- criteria for staged disclosure

Q-R-3 (Moratorium Capability). Tier 3 governance **MUST** maintain the ability to pause or constrain release/deployment when trigger conditions are met, including:

- credible evidence of catastrophic misuse potential
- inability to implement effective access controls
- misalignment between capability and societal readiness

Q-R-4 (Security of Research Artifacts). For Tier 3-relevant work, access to code, data, and hardware configurations **MUST** be controlled and monitored, with least-privilege principles.

## 5. Compliance Evidence

- pre-registration records (where applicable)
- disclosure plans and notification logs
- governance pause/constraint policies and trigger criteria
- access control policies and audit logs for research artifacts

## 6. Rationale (Non-normative)

Responsible disclosure and moratorium capability are governance tools: they preserve scientific legitimacy while reducing the odds of irreversible harms from uncontrolled diffusion.

## 7. Failure Modes & Abuse Cases

- “publish first” incentives overriding safety
- leaking high-risk artifacts via weak access controls
- governance without real pause authority (“paper moratorium”)

## 8. Change Log

- v0.1: Initial draft.

