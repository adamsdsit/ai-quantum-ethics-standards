# Control Matrix (Working Draft)

This matrix links core control domains to tiers and to standard documents.

## Legend

- **MUST**: required for compliance at this tier
- **SHOULD**: recommended best practice at this tier

## Controls by Domain

| Control Domain | Tier 0 | Tier 1 | Tier 2 | Tier 3 | Primary Standards |
| --- | --- | --- | --- | --- | --- |
| Transparency & Explainability | SHOULD | MUST | MUST | MUST | `02_ai_standards/transparency_and_explainability.md` |
| Bias/Fairness | SHOULD | SHOULD | MUST | MUST | `02_ai_standards/fairness_and_justice.md` |
| Safety & Security | SHOULD | MUST | MUST | MUST | `02_ai_standards/safety.md` |
| Accountability & Traceability | SHOULD | MUST | MUST | MUST | `02_ai_standards/accountability.md` |
| Consultation | SHOULD | SHOULD | MUST | MUST | `01_governance/consultation_framework.md` |
| Crypto Destabilization | SHOULD | SHOULD | MUST (as applicable) | MUST | `03_quantum_standards/cryptographic_and_security_risk.md` |
| Dual-Use Governance | SHOULD | SHOULD | MUST (as applicable) | MUST | `03_quantum_standards/national_security.md`, `03_quantum_standards/research_limits.md` |
| Moratorium Capability | MAY | MAY | SHOULD | MUST | `03_quantum_standards/research_limits.md` |
| Audit & Assurance | MAY | SHOULD | MUST | MUST | `05_audit_and_assurance/*` |
| Environmental/Societal Impact | SHOULD | SHOULD | MUST | MUST | `00_foundations/ethical_axioms.md` (A7), `05_audit_and_assurance/metrics.md` |

## Notes

- “As applicable” means the system plausibly touches the described risk pathway (e.g., quantum capability relevant to crypto security).
- This matrix is expected to evolve as domain standards become more granular.
