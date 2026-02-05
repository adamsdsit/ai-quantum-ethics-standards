# Quantum Standard: Cryptographic Destabilization Risk

## 1. Purpose

Manage risks arising from quantum capabilities that can weaken or break widely deployed cryptographic assumptions, including “harvest now, decrypt later” threats and downstream loss of privacy, integrity, and trust.

## 2. Applicability

- Applies to any organization developing, operating, or procuring QC systems that could materially affect cryptographic security.
- Applies to AI systems when their security depends on cryptographic properties potentially impacted by QC advances.

## 3. Ethical Mapping

- `A4 Trustworthiness`: integrity of systems and communications
- `A3 Justice`: prevention of large-scale harm and remedy readiness
- `A7 Stewardship`: systemic risk management

## 4. Requirements (Normative)

Q-C-1 (Crypto Inventory). Tier 1–3 operators **MUST** maintain a cryptographic inventory covering:

- algorithms, key sizes, protocols, certificates, and trust roots in use
- data classes protected (including retention timelines)
- third-party dependencies and supply chain components

Q-C-2 (Transition Plan). For Tier 2–3 systems, operators **MUST** maintain and periodically update a post-quantum transition plan that includes:

- prioritization by data sensitivity and retention horizon
- migration milestones and rollback strategies
- testing/validation approach for cryptographic agility

Q-C-3 (Harvest-Now Risk Assessment). When sensitive data has long confidentiality requirements, operators **MUST** assess and document harvest-now, decrypt-later exposure and implement compensating controls (e.g., stronger hybrid protections, reduced retention, segmentation).

Q-C-4 (Disclosure of Quantum-Relevant Claims). Vendors and operators **MUST NOT** make unsubstantiated claims about “quantum-safe/quantum-proof” security. Any such claim **MUST** specify:

- threat model assumptions
- cryptographic components covered/excluded
- validation method and limitations

Q-C-5 (Dual-Use Escalation). If QC capability or research materially increases cryptographic attack feasibility, Tier 3 governance **MUST** evaluate release/deployment under dual-use controls and document a public-interest justification or restraint decision.

## 5. Compliance Evidence

- cryptographic inventory and update logs
- post-quantum transition plan and milestone tracking
- harvest-now risk assessment and implemented controls
- marketing/communications review artifacts for claims
- governance decision records for dual-use escalations

## 6. Rationale (Non-normative)

Cryptography is a systemic dependency. The goal is not to freeze innovation, but to ensure preparedness and truthful risk communication as quantum capabilities mature.

## 7. Failure Modes & Abuse Cases

- incomplete crypto inventories leading to “unknown unknowns”
- misleading “quantum-proof” claims driving unsafe complacency
- long-term sensitive data exposure through delayed migration

## 8. Change Log

- v0.1: Initial draft (filename: `03_quantum_standards/cryptographic_and_security_risk.md`).
