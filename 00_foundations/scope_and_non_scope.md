# Scope and Non-Scope

## Scope

This corpus defines cross-domain standards for:

- Ethical foundations and governance for AI and QC deployment
- Risk classification and control selection (Tier 0–3)
- Technical and operational requirements for:
  - Human oversight and agency
  - Transparency and explainability
  - Justice, bias, and fairness
  - Safety, security, and dual-use risk
  - Privacy and data sovereignty
  - Environmental and societal impact
  - Accountability and auditability

## Research vs Deployment Boundary

- **Research** (typically Tier 0) includes experimentation and prototyping that does not materially influence real-world high-impact decisions and is constrained to controlled contexts.
- **Deployment** includes any use where system outputs materially influence decisions or actions affecting real people, infrastructure, security, or long-term sensitive data.

When research artifacts are released in ways that materially increase dual-use capability or operational exposure, the work **MUST** be evaluated under higher tiers and applicable dual-use controls.

## Transitional and Edge Cases

- **Hybrid systems** (AI + QC workflows) are in scope when either component materially affects risk.
- **Procured systems** remain in scope; obligations apply to operators and deployers even when development is third-party.
- **Internal tooling** is in scope when it influences high-impact decisions or creates security/privacy externalities.

## Non-Scope (For Now)

- Detailed hardware specifications for quantum devices (gate fidelities, cryogenics, fabrication)
- Low-level cryptographic standardization details (algorithms/schemes), except for **risk management obligations**
- Product-specific implementation guidance for particular vendors
- General-purpose “AI governance” that does not result in verifiable requirements or evidence artifacts

## Boundary Rule

If a proposed standard cannot specify **(a) a testable requirement** and **(b) auditable evidence**, it belongs in non-normative guidance, not as a MUST/SHOULD requirement.
