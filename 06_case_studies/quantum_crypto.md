# Case Study: Quantum Threat to Long-Term Sensitive Data

## Scenario

A government agency stores sensitive records with confidentiality requirements exceeding 20 years and relies on public-key cryptography for data-at-rest and communications security.

## Proposed Tier

Tier 3 (systemic harm potential).

## Applicable Standards

- Cryptographic risk: `03_quantum_standards/cryptographic_and_security_risk.md`
- Research limits (if conducting internal QC work): `03_quantum_standards/research_limits.md`
- Audit/certification: `05_audit_and_assurance/*`

## Key Risks

- harvest-now, decrypt-later exposure
- incomplete crypto inventory and hidden dependencies
- migration failures without cryptographic agility

## Required Evidence Artifacts (Examples)

- complete crypto inventory and dependency map
- post-quantum transition plan with milestones and tests
- disclosure policy for “quantum-safe” claims and threat model statements
