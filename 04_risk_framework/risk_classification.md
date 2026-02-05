# Risk Classification (Tier 0–3)

## Purpose

Ensure controls scale with risk, avoiding one-size-fits-all requirements while mandating strong safeguards for high-impact and potentially irreversible harms.

## Ethical Mapping

- `A5 Proportionality & Moderation`
- `A3 Justice, Due Process, and Remedy`
- `A7 Stewardship`

## Tiers

### Tier 0 — Research / Educational

Typical attributes:

- lab, sandbox, or instructional use
- no real-world high-impact decisions
- limited scale and exposure

Minimum expectations:

- basic ethics review and documentation (recommended)
- safe handling of sensitive data (required where applicable)

### Tier 1 — Low-Risk Commercial

Typical attributes:

- consumer or business utility with low harm potential
- limited consequence of errors; easy reversibility

Minimum expectations:

- disclosure packet (AI-T-1) for AI systems
- basic risk assessment (AI-S-1 or QC equivalent)

### Tier 2 — High-Impact Societal

Typical attributes:

- influences high-impact decisions (health, employment, education, housing, finance, public services)
- large scale or vulnerable populations
- meaningful privacy, bias, or security risk

Minimum expectations:

- equity impact assessment (AI-F-3)
- red-teaming and incident readiness (AI-S-2, AI-S-4)
- contestability and remedy pathways (A3-aligned)

### Tier 3 — Critical / Existential

Typical attributes:

- risk of catastrophic, irreversible, or systemic harm
- dual-use capabilities with large-scale abuse potential
- cryptographic destabilization or major security escalation risk
- broad autonomy or rapid amplification beyond human control

Minimum expectations:

- multi-stakeholder governance review and dual-use controls
- moratorium-capable governance (Q-R-3)
- independent audit as a precondition of deployment

## Classification Criteria (Decision Record)

Operators **MUST** document a tiering decision record using, at minimum:

1. **Impact domain**: high-impact decision involvement (yes/no; describe)
2. **Scale**: number of affected parties and geographic scope
3. **Reversibility**: ability to undo harms and timeframe
4. **Autonomy**: degree of automated action vs. human authority
5. **Data sensitivity**: personal, biometric, protected, national-security relevant
6. **Dual-use**: credible misuse pathways and feasibility

If criteria are mixed, classify at the **highest plausible tier** unless a documented mitigation reduces risk below that tier.

## Compliance Evidence

- tiering decision record and approvals
- periodic reassessment schedule (at least annually for Tier 2–3)
- triggers for re-tiering (capability change, scale change, incident)

