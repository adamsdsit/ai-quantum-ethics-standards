# Compound Risks from AI–Quantum Convergence

## 1. Purpose

Identify and govern risks arising from the interaction of AI and quantum computing (QC) systems that exceed risks posed by either technology alone.

This document focuses on realistic interaction pathways and compound effects, not speculative AGI narratives.

## 2. Ethical Mapping

- `A5 Proportionality & Moderation`: heightened oversight for amplified risks
- `A2 Human Dignity & Moral Agency`: limits on delegation and automation that erode agency
- `A7 Stewardship (Societal & Environmental)`: systemic risk and cascading failure prevention
- `A4 Truthfulness & Trustworthiness`: auditable claims about capability and control
- `A3 Justice, Due Process, and Remedy`: contestability and remedy despite increased complexity

## 3. Scope

This framework applies to Tier 1–3 systems where:

- QC accelerates AI training, optimization, or search in ways that materially change capability or diffusion risk,
- AI manages or automates QC infrastructure (scheduling, calibration, access controls),
- hybrid AI+QC workflows produce decision-shaping outputs for high-impact contexts,
- combined complexity reduces human comprehensibility or oversight effectiveness.

## 4. Definitions (only if required)

- **Compound risk**: risk that emerges from interaction of subsystems, creating amplification, new failure modes, or loss of control not present in either system alone.
- **Emergent risk**: risk that appears only at system-of-systems level (e.g., feedback loops, coupled optimization, cross-domain escalation).
- **Convergent system**: an AI+QC system where each component materially changes the risk profile of the other.

## 5. Normative Requirements

### MUST

AQ-1 (Convergence Identification). Tier 2–3 operators **MUST** identify when a system is convergent (AI+QC) and document:

- which components interact,
- what capabilities are amplified,
- what oversight is required and by whom.

AQ-2 (Compound Risk Assessment). For convergent Tier 2–3 systems, operators **MUST** conduct a compound risk assessment that includes:

- amplification mechanisms (speed/scale, search breadth, optimization cycles),
- new failure modes (feedback loops, mode confusion, cascading actions),
- dual-use diffusion changes (access model, artifact release, supply chain exposure),
- monitoring and stop conditions that remain effective under compound behavior.

AQ-3 (Heightened Oversight for Amplification). Where convergence materially increases:

- decision opacity,
- scale of impact,
- irreversibility,
- or dual-use potential,

operators **MUST** classify at the higher plausible tier unless documented mitigations reduce the compound risk.

AQ-4 (Limits on Delegation and Automation). Convergent systems **MUST NOT** be used to automate strategic or moral decisions in ways that:

- eliminate meaningful human review for high-impact actions, or
- create “optimizer said so” decision abdication,

without controls consistent with `02_ai_standards/autonomy_and_human_control.md` and `03_quantum_standards/optimization_ethics.md`.

AQ-5 (Operational Separations and Guardrails). For Tier 2–3 convergent systems, operators **MUST** implement guardrails such as:

- separation of duties between capability development and deployment approval,
- bounded access models for QC resources where dual-use is plausible,
- independent monitoring of critical control planes (access, scheduling, release).

AQ-6 (Escalation and Pause Readiness). Convergent Tier 2–3 systems **MUST** define escalation triggers and pause actions aligned to `ESCALATION_AND_PAUSE.md`, including triggers specific to compound behavior (feedback loops, uncontrolled optimization escalation, cross-domain spillover).

### SHOULD

AQ-7 (Scenario-Based Testing). Operators **SHOULD** perform scenario-based testing of convergent systems that includes:

- adversarial interaction scenarios,
- distribution shift affecting both AI and QC components,
- stress tests for coupled optimization fragility.

AQ-8 (Independent Review). Tier 3 convergent systems **SHOULD** obtain independent review of compound risk assessments and guardrail effectiveness.

### MAY

AQ-9 (Convergence Transparency Summary). Operators **MAY** publish a redacted summary of convergence risks and mitigations, with redactions limited to safety, security, or legal constraints.

## 6. Risk-Tier Considerations

- **Tier 0**: convergence research should document plausible compound risks before release of artifacts.
- **Tier 1**: document interactions and ensure monitoring is adequate for operational impact.
- **Tier 2**: require compound risk assessment, heightened oversight, and pause readiness.
- **Tier 3**: require strongest governance and independent review expectations; compound risk is treated as a potential systemic risk category.

## 7. Compliance Evidence

Minimum evidence artifacts (as applicable):

- convergence identification and architecture diagrams (AQ-1)
- compound risk assessment and mitigations (AQ-2)
- tiering decision record reflecting compound risk (AQ-3)
- delegation-limit policies and enforcement evidence (AQ-4)
- guardrail design and monitoring proofs (AQ-5)
- escalation triggers and pause runbooks (AQ-6)
- scenario test reports and remediation (AQ-7)

### Traceability Table (Requirement → Axiom → Evidence)

| Requirement ID | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| AQ-2 | A7, A5 | compound risk assessment, mitigation tracker |
| AQ-4 | A2, A3 | delegation limits, oversight logs |
| AQ-6 | A5, A6 | triggers, pause runbooks, decision records |

## 8. Known Limitations

- Some compound behaviors are hard to model pre-deployment; conservative tiering and strong stop conditions are required under uncertainty.
- Independent review availability varies; Tier 3 programs should plan for it early.

## 9. Future Considerations

- Standardized compound-risk taxonomies and reporting formats.
- Guidance for auditing AI-managed QC control planes.
- Interoperability with external system safety cases for critical infrastructure.

## Appendix A (Non-normative): Example Convergence Scenarios

- QC accelerates hyperparameter search and model selection, increasing capability diffusion and evaluation gaps.
- AI agents manage QC job scheduling and access control, creating a high-value compromise pathway.
- Hybrid AI+QC optimization used for pricing/allocations at high frequency, increasing systemic fragility.

## Appendix B (Non-normative): Failure Modes & Abuse Cases

- treating compound risk as the sum of independent risks (“checkbox convergence”)
- opaque coupled systems where no one team can explain end-to-end behavior

## Change Log

- v0.1: Initial draft.

