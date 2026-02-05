# Standard: Environmental Sustainability and Resource Ethics for AI and Quantum Technologies

## 1. Purpose

Define ethical and governance requirements addressing environmental impact, resource consumption, and sustainability associated with AI and quantum computing (QC) systems across research and deployment contexts.

This standard emphasizes transparency, proportionality, and measurable stewardship rather than absolute prohibitions.

## 2. Ethical Mapping

- `A7 Stewardship (Societal & Environmental)`: requires accounting for environmental impact and downstream effects
- `A5 Proportionality & Moderation`: aligns performance ambitions with planetary limits and societal readiness
- `A4 Truthfulness & Trustworthiness`: prevents misleading sustainability claims and requires auditable reporting
- `A6 Participation & Consultation`: encourages multi-stakeholder review when impacts are large or externalized

## 3. Scope

This standard applies to organizations that develop, train, operate, procure, or materially scale AI or QC systems where:

- energy consumption is significant,
- specialized hardware materially affects resource extraction and supply chains,
- deployment creates notable environmental externalities (cooling, water use, emissions),
- lifecycle impacts (manufacturing, disposal) are material.

It applies to both research and deployment, with stronger requirements for Tier 2–3 systems.

## 4. Definitions (only if required)

- **Environmental impact**: energy use, greenhouse gas emissions, water use, materials extraction, e-waste, and other ecological externalities across the lifecycle.
- **Lifecycle assessment (LCA)**: structured evaluation of environmental impacts from procurement/manufacturing through operation and end-of-life.
- **Sustainability claim**: any public or internal statement asserting environmental benefit, neutrality, or reduced impact.

## 5. Normative Requirements

### MUST

ENV-1 (Measurement and Disclosure Readiness). Tier 1–3 operators **MUST** be able to measure or estimate, at an appropriate granularity:

- energy consumption for material training runs or QC jobs,
- operational energy for significant deployment workloads (where applicable),
- major hardware resource dependencies (accelerators, QC devices, specialized cooling),
- retention of measurement methods and assumptions.

ENV-2 (Material Impact Disclosure). For Tier 2–3 systems, operators **MUST** document and maintain an environmental impact statement that includes:

- estimated energy use and, where feasible, emissions scope assumptions,
- operational constraints (cooling, water use) where material,
- major hardware lifecycle considerations (procurement, refresh cadence, disposal),
- tradeoffs considered and chosen (performance vs environmental cost).

ENV-3 (Lifecycle Consideration by Tier). For Tier 2–3, operators **MUST** assess lifecycle impacts where feasible, including:

- supply chain risks for critical components,
- end-of-life handling and e-waste controls,
- material scarcity or ethically sensitive sourcing risks.

ENV-4 (Sustainability Risk Assessment). Tier 2–3 operators **MUST** perform a sustainability risk assessment that includes:

- impact magnitude and uncertainty,
- mitigation options and residual risk,
- escalation triggers when impacts exceed defined thresholds or when measurement uncertainty is high.

ENV-5 (No Deceptive Sustainability Claims). Operators **MUST NOT** make unsubstantiated sustainability claims. Any sustainability claim **MUST**:

- define scope and boundary conditions (what is included/excluded),
- specify measurement method and limitations,
- avoid implying absolute neutrality unless supported by evidence.

ENV-6 (Operational Controls). Where environmental impacts are material, operators **MUST** implement proportional controls such as:

- workload scheduling to reduce peak emissions intensity where feasible,
- resource caps or budgets for high-cost runs,
- model efficiency targets and monitoring for regressions,
- procurement policies favoring lower-impact options where consistent with safety.

### SHOULD

ENV-7 (Public Reporting for Tier 3). Tier 3 operators **SHOULD** publish a redacted environmental impact summary, with redactions limited to safety, security, or legal constraints.

ENV-8 (Consultation for High Externalities). For projects with high externalities (Tier 2–3), operators **SHOULD** include consultation with relevant stakeholders (e.g., facility operators, affected communities where applicable) when siting or scaling materially changes local resource use.

### MAY

ENV-9 (Environmental Labeling). Operators **MAY** provide an environmental label or summary statement, but only if it meets the non-deception requirements in ENV-5 and remains scoped and time-bounded.

## 6. Risk-Tier Considerations

- **Tier 0**: document intended scale; prefer measurement where feasible; avoid releasing “mega-scale” artifacts without acknowledging impact.
- **Tier 1**: measurement readiness (ENV-1) and basic controls where impacts are non-trivial.
- **Tier 2**: requires impact statement, lifecycle consideration, and sustainability risk assessment (ENV-2 to ENV-4).
- **Tier 3**: requires strongest transparency and governance; environmental impacts are treated as systemic risks requiring clear escalation thresholds and board-level accountability where appropriate.

## 7. Compliance Evidence

Minimum evidence artifacts (as applicable):

- measurement methods, logs, and estimates (ENV-1)
- environmental impact statements and update history (ENV-2)
- lifecycle assessment notes and supply chain evidence (ENV-3)
- sustainability risk assessment with mitigation tracking (ENV-4)
- communications review artifacts for sustainability claims (ENV-5)
- operational controls configuration and monitoring reports (ENV-6)

### Traceability Table (Requirement → Axiom → Evidence)

| Requirement ID | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| ENV-2 | A7, A5 | impact statement, tradeoff memo |
| ENV-4 | A7, A5 | sustainability risk assessment, mitigation tracker |
| ENV-5 | A4 | claim substantiation, comms review |
| ENV-6 | A7 | resource caps, efficiency monitoring, schedules |

## 8. Known Limitations

- Measurement precision varies across environments; estimates must state assumptions and uncertainty.
- Attribution of emissions depends on energy sourcing and accounting boundaries; disclosure should avoid false precision.
- Some safety-critical workloads may constrain optimization for environmental cost; tradeoffs must be documented.

## 9. Future Considerations

- Standardized reporting schemas for energy/emissions per workload class.
- Guidance for water usage and localized externalities in high-density compute facilities.
- Procurement integrity guidance for ethically sensitive mineral sourcing relevant to accelerators and QC hardware.

## Appendix A (Non-normative): Rationale

Environmental and resource impacts are not secondary effects; they are predictable externalities of large-scale computation and specialized hardware supply chains. Transparency and proportionality enable responsible tradeoffs without halting legitimate innovation.

## Appendix B (Non-normative): Failure Modes & Abuse Cases

- “greenwashing” via unscoped claims
- shifting impacts off balance sheets (outsourcing compute without reporting)
- efficiency regressions that go unnoticed due to missing measurement

## Change Log

- v0.1: Initial draft.

