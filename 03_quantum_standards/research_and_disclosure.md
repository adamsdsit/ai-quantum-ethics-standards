# Quantum Standard: Ethical Governance of Quantum Research and Responsible Disclosure

## 1. Purpose

Define ethical and governance requirements for quantum computing (QC) research, experimentation, and disclosure practices, balancing legitimate scientific inquiry with responsibility for dual-use and systemic risks.

This standard focuses on research governance and disclosure, not on restricting science by default.

## 2. Ethical Mapping

- `A5 Proportionality & Moderation`: align disclosure and deployment with risk and societal readiness
- `A4 Truthfulness & Trustworthiness`: ensure accurate claims, responsible disclosure, and integrity of research practice
- `A7 Stewardship (Societal & Environmental)`: manage systemic risk and long-horizon externalities
- `A6 Participation & Consultation`: require governance review when risks extend beyond the institution
- `A3 Justice, Due Process, and Remedy`: protect the public interest when disclosure affects security and rights

## 3. Scope

This standard applies to QC research programs, including:

- algorithm and capability research (including optimization and cryptographic relevance),
- hardware and systems research where outcomes materially increase capability,
- hybrid AI+QC research where QC materially affects dual-use potential,
- publication, open-sourcing, benchmarking, and dissemination decisions.

It applies across Tier 0–3 contexts, with strongest requirements where research plausibly increases dual-use capability or systemic risk.

## 4. Definitions (only if required)

- **Research artifact**: code, models, data, benchmarks, configurations, or operational procedures produced by research.
- **Responsible disclosure**: a process that reduces harm by coordinating notification, mitigation, and staged release of high-risk findings.
- **Dual-use research**: research likely to enable both beneficial applications and harmful misuse, including cryptographic compromise, coercive surveillance, or destabilizing strategic advantage.

## 5. Normative Requirements

### MUST

Q-RD-1 (Research vs Deployment Distinction). Organizations **MUST** distinguish research from deployment by documenting:

- intended audience and use of outputs (academic, internal, operational),
- exposure model (who can access artifacts and under what controls),
- whether outputs are likely to be operationalized in high-impact contexts.

When research transitions toward deployment, the work **MUST** be re-tiered and evaluated under applicable operational standards.

Q-RD-2 (Dual-Use Risk Assessment for Material Capability). When research plausibly increases capability for:

- cryptographic compromise,
- coercive surveillance,
- destabilizing strategic advantage,
- or other Tier 3-relevant harms,

the organization **MUST** conduct and document a dual-use risk assessment covering:

- misuse pathways and feasibility,
- potential severity and reversibility of harm,
- exposure and access model,
- mitigations and residual risk.

Q-RD-3 (Responsible Disclosure Path). For Tier 3-relevant findings, organizations **MUST** define and follow a responsible disclosure path that includes:

- identification of impacted stakeholders (e.g., infrastructure stewards, affected sectors),
- notification timelines and staged disclosure plan,
- criteria for withholding or delaying full technical details,
- documentation of decisions and rationale.

Q-RD-4 (Access Control for High-Risk Artifacts). For Tier 3-relevant research artifacts, organizations **MUST** implement least-privilege access control, monitoring, and integrity protections, including:

- controlled repositories and access review,
- logging of access and exfiltration-relevant events,
- secure storage of keys and credentials.

Q-RD-5 (Benchmark and Advantage Claim Integrity). Organizations **MUST NOT** make misleading claims about quantum advantage. Any claim **MUST** specify:

- task definition and workload,
- baseline comparison method and assumptions,
- measurement method and uncertainty,
- limitations and boundary conditions.

Q-RD-6 (Publication and Openness Decisions). Decisions to publish or open-source Tier 3-relevant research artifacts **MUST** include:

- documented dual-use assessment (Q-RD-2),
- mitigation plan and exposure model,
- governance sign-off by an accountable authority.

### SHOULD

Q-RD-7 (Pre-Registration for High-Risk Research). For research with credible Tier 3 dual-use potential, organizations **SHOULD** pre-register:

- intent and threat model,
- planned mitigations,
- disclosure plan and decision authority.

Q-RD-8 (External Consultation). For high-risk disclosures, organizations **SHOULD** consult relevant external stakeholders (security experts, affected infrastructure stewards, ethics reviewers) when feasible and safe.

### MAY

Q-RD-9 (Public Transparency Summary). Organizations **MAY** publish a redacted summary describing:

- what was discovered,
- what was withheld and why,
- how stakeholders were notified,

with redactions limited to safety, security, or legal constraints.

## 6. Risk-Tier Considerations

- **Tier 0**: encourage documentation and responsible communication; avoid releasing artifacts that materially increase misuse capability without controls.
- **Tier 1**: basic dual-use screening and truthful claims about capabilities.
- **Tier 2**: formal dual-use assessment for material capability changes and controlled release practices where misuse is plausible.
- **Tier 3**: requires responsible disclosure, strict artifact security, and governance sign-off; pause/moratorium readiness may be required when harms are catastrophic or irreversible (`03_quantum_standards/research_limits.md`, `ESCALATION_AND_PAUSE.md`).

## 7. Compliance Evidence

Minimum evidence artifacts (as applicable):

- research/deployment boundary documentation and re-tiering records (Q-RD-1)
- dual-use risk assessments and updates (Q-RD-2)
- responsible disclosure plans, notifications, and decision memos (Q-RD-3)
- access control configurations and audit logs (Q-RD-4)
- benchmark data, scripts, and claim review artifacts (Q-RD-5)
- publication/open-source decision records and sign-offs (Q-RD-6)

### Traceability Table (Requirement → Axiom → Evidence)

| Requirement ID | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| Q-RD-2 | A5, A7 | dual-use assessment, mitigation plan |
| Q-RD-3 | A4, A6 | disclosure plan, notification logs |
| Q-RD-4 | A4 | access logs, integrity controls |
| Q-RD-5 | A4 | benchmark methods, claim substantiation |
| Q-RD-6 | A5, A6 | governance sign-offs, exposure model |

## 8. Known Limitations

- Some coordination may be constrained by national security and legal obligations; documentation of constraints and compensating controls remains required.
- Predicting misuse is uncertain; the standard requires structured assessment and staged disclosure rather than certainty.
- Open science norms can conflict with safety; this standard requires explicit reasoning and governance, not blanket secrecy.

## 9. Future Considerations

- Interoperable disclosure playbooks across institutions and sectors.
- Standardized tiers for artifact release models (open, gated, confidential).
- Processes for cross-border coordination during cryptographic transition risks.

## Appendix A (Non-normative): Rationale

Quantum research can alter systemic security and power dynamics. Responsible disclosure and controlled artifact handling protect the public interest while allowing legitimate scientific progress.

## Appendix B (Non-normative): Failure Modes & Abuse Cases

- open-sourcing high-risk artifacts without staged mitigation
- overstated advantage claims driving unsafe strategic decisions
- weak lab security enabling exfiltration of sensitive artifacts

## Change Log

- v0.1: Initial draft.

