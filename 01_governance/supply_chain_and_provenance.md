# Standard: Supply Chain Integrity and Provenance for AI and Quantum Systems

## 1. Purpose

Define governance and technical requirements to ensure integrity, transparency, and accountability across the AI and quantum computing (QC) supply chain. This standard reduces risks from compromised components, opaque dependencies, data poisoning, tampering, and “black box vendor” exemptions.

## 2. Ethical Mapping

- `A4 Truthfulness & Trustworthiness`: integrity of components and claims; auditability of provenance
- `A3 Justice, Due Process, and Remedy`: traceability enables investigation, correction, and remedy
- `A6 Participation & Consultation`: accountability across organizations and contractors; reviewable disclosures
- `A5 Proportionality & Moderation`: controls scale with tier and exposure
- `A7 Stewardship (Societal & Environmental)`: reduces systemic risk and cascading compromise

## 3. Scope

This standard applies to organizations that develop, train, operate, deploy, procure, integrate, or materially depend on AI or QC systems (including hybrid systems).

Supply chain components in scope include:

- **Data sources**: raw data, labels, synthetic data, brokered datasets, third-party data feeds
- **Models and algorithms**: pretrained models, fine-tunes, adapters, prompts/policies packaged as products, optimization formulations
- **Software dependencies**: libraries, frameworks, containers, build pipelines, orchestration tooling, compilers, SDKs
- **Hardware and quantum infrastructure**: accelerators, QC devices, control systems, firmware, drivers, cryogenic/control components where relevant
- **Third-party services**: cloud/managed AI services, QC access providers, monitoring vendors, inference gateways, data processors

This standard applies across the full lifecycle: acquisition, development, training, evaluation, deployment, monitoring, updates, and decommissioning.

## 4. Definitions (only if required)

These definitions supplement `00_foundations/definitions.md`.

- **Provenance**: documented origin, ownership, version history, and transformation history of a component (data/model/software/hardware/service).
- **Custody and control record**: documented chain of responsibility and access for a component, including who had the ability to modify it and when.
- **Component register**: an inventory of all material supply chain components and their provenance/custody records.
- **Material dependency**: a dependency whose compromise can reasonably cause safety, security, fairness, privacy, or availability harms at the system’s tier.
- **Black box vendor**: a supplier that refuses to provide minimum provenance, assurance, or audit rights needed to evaluate risk.

## 5. Normative Requirements

### MUST

SCP-1 (Component Register). Tier 1–3 operators **MUST** maintain a component register for each system and deployment context that includes, at minimum:

- all material data sources and transformations,
- model lineage (base model(s), fine-tuning methods, update history),
- software dependencies and build artifacts (at least at package/container level),
- critical hardware/QC infrastructure dependencies (where applicable),
- third-party services and sub-processors with roles and boundaries.

SCP-2 (Provenance Records). For components in the register, operators **MUST** maintain provenance records describing:

- origin and ownership (including licensing/usage rights where applicable),
- version identifiers and change history,
- transformation steps (e.g., filtering, labeling, augmentation, quantization),
- known limitations and relevant risk notes (poisoning risk, bias risk, security posture).

SCP-3 (Custody and Change Control). For Tier 2–3 systems, operators **MUST** maintain custody and control records sufficient to reconstruct:

- who could modify a component and under what controls,
- what changes occurred (and when),
- approvals and verification steps for changes.

SCP-4 (Supplier and Service Risk Assessment). Tier 1–3 operators **MUST** evaluate supplier risk proportionate to tier, including:

- security and integrity posture,
- history of incidents and responsiveness,
- exposure model (who can access/modify),
- dependency criticality and blast radius.

For Tier 2–3, assessments **MUST** be periodically refreshed and triggered by material changes or incidents.

SCP-5 (Jurisdictional and Legal Risk). For Tier 2–3 systems, operators **MUST** document jurisdictional risks relevant to:

- data origin and transfer constraints,
- sanctions/export restrictions where applicable,
- legal compulsion risk (e.g., forced disclosure),
- supply continuity risk from geopolitical constraints.

SCP-6 (Integrity Verification). Operators **MUST** implement integrity verification controls proportionate to tier, such as:

- controlled distribution of artifacts (signed releases or equivalent),
- reproducible or verifiable builds where feasible,
- integrity checks at ingest (checksums, attestations, secure channels),
- separation of duties for publishing and approving changes.

This standard does not mandate specific technologies; controls **MUST** be effective and auditable.

SCP-7 (Data Poisoning and Contamination Controls). Where systems rely on external, user-generated, or third-party data, operators **MUST** implement controls to detect and mitigate:

- poisoning and label manipulation,
- backdoors and adversarial contamination,
- unauthorized dataset substitution.

For Tier 2–3, operators **MUST** document detection methods, thresholds, and response actions.

SCP-8 (No Black Box Vendor Exemptions). Operators **MUST NOT** rely on suppliers as “trusted” without minimum assurance. For Tier 2–3, procurement and integration **MUST** require:

- sufficient provenance detail to classify risk,
- documented security and change control posture, and
- audit rights or independent assurance evidence appropriate to tier.

Where such assurance cannot be obtained, operators **MUST** either:

- implement compensating controls and document residual risk, or
- refrain from deployment for Tier 3, and for Tier 2 when risks are high and unmitigable.

SCP-9 (Downstream Accountability). Integrators and deployers **MUST** remain responsible for downstream harms within their control, even when components are third-party. Operators **MUST**:

- assign owners for supply chain risk management,
- document liability and remedy pathways consistent with `02_ai_standards/accountability.md`,
- ensure incident response includes supplier coordination (SCP-10).

SCP-10 (Supply Chain Incident Response). Tier 2–3 operators **MUST** maintain a supply chain incident process covering:

- detection and triage of compromised components,
- containment actions (rollback, disable, quarantine),
- notification and coordination with suppliers and affected stakeholders,
- post-incident root cause analysis and remediation tracking.

### SHOULD

SCP-11 (Transparency Gradient). Operators **SHOULD** implement a transparency gradient:

- internal transparency sufficient for engineering and audit,
- regulator/assurance transparency sufficient for oversight,
- external transparency sufficient to avoid misleading claims while respecting legitimate security/proprietary constraints.

SCP-12 (Subcontractor Ethics and Controls). Operators **SHOULD** require subcontractors to meet equivalent supply chain integrity requirements and provide evidence, especially for Tier 2–3 systems.

SCP-13 (Resilience Planning). For Tier 2–3, operators **SHOULD** plan for supplier failure or compromise, including:

- alternative suppliers where feasible,
- component isolation strategies,
- tested rollback procedures.

### MAY

SCP-14 (Public Provenance Summary). Tier 2–3 operators **MAY** publish a redacted provenance summary (e.g., major component categories, assurance methods), with redactions limited to safety, security, or legal constraints.

## 6. Risk-Tier Considerations

- **Tier 0**: document core dependencies and avoid releasing high-risk artifacts without basic provenance and integrity practices.
- **Tier 1**: maintain a component register and baseline provenance; apply integrity checks for distributed artifacts.
- **Tier 2**: require custody records, periodic supplier assessments, incident playbooks, and explicit handling of jurisdictional risk.
- **Tier 3**: requires strongest assurance and auditability; black box components are typically unacceptable without exceptional justification and compensating controls; pause readiness may be required when compromise risk is systemic (`ESCALATION_AND_PAUSE.md`).

## 7. Compliance Evidence

Minimum evidence artifacts (as applicable):

- component register and update logs (SCP-1)
- provenance dossiers (SCP-2)
- custody/change control records and approvals (SCP-3)
- supplier risk assessments and refresh cadence (SCP-4)
- jurisdictional/legal risk memos (SCP-5)
- integrity verification procedures and test logs (SCP-6)
- poisoning detection reports and response runbooks (SCP-7)
- procurement requirements and audit rights evidence (SCP-8)
- ownership/responsibility matrix and remedy mapping (SCP-9)
- incident playbooks and post-incident reports (SCP-10)

### Traceability Table (Requirement → Axiom → Evidence)

| Requirement ID | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| SCP-1 | A4 | component register, dependency inventory |
| SCP-2 | A4 | provenance dossiers, change history |
| SCP-6 | A4, A7 | integrity checks, release approvals |
| SCP-8 | A4, A5 | procurement controls, audit rights, residual risk memos |
| SCP-10 | A3, A7 | incident runbooks, remediation tracker |

## 8. Known Limitations

- Full transparency may be constrained by security and proprietary concerns; compensating controls (audit rights, independent assurance, monitoring) remain required.
- Some hardware provenance is difficult to verify end-to-end; the standard requires proportional evidence and explicit residual risk documentation.
- Supply chain integrity is dynamic; assurance must be continuous, not one-time.

## 9. Future Considerations

- Machine-readable component registers and provenance manifests to support automated audits and procurement.
- Shared sector registries for high-risk components and compromise indicators.
- Interoperability profiles for aligning assurance artifacts across standards bodies.

## Appendix A (Non-normative): Rationale

Ethical systems cannot be built on opaque or compromised foundations. Continuous provenance and integrity controls reduce the likelihood and blast radius of tampering, poisoning, and “outsourced ethics” where subcontractors bypass governance.

## Appendix B (Non-normative): Failure Modes & Abuse Cases

- “vendor says trust us” procurement with no audit rights
- silent model swaps or remote configuration changes without change control
- poisoned data introduced via third-party feeds
- subcontractors performing restricted data processing outside declared scope

## Change Log

- v0.1: Initial draft.

