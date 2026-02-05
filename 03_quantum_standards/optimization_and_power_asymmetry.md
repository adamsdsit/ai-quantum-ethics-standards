# Quantum Standard: Ethical Governance of Quantum Optimization and Societal Impact

## 1. Purpose

Define ethical and governance requirements for quantum computing (QC) applications that provide optimization, strategic planning, or decision-shaping capabilities with potential large-scale societal impact, including risks from **power asymmetry**, **opacity of impact**, **delegated strategic decisions**, and **systemic fragility**.

This standard focuses on impact and governance, not hardware timelines or device specifications.

## 2. Ethical Mapping

- `A3 Justice, Due Process, and Remedy`: affected parties can understand, contest, and obtain remedy where optimization shapes outcomes
- `A2 Human Dignity & Moral Agency`: preserves human responsibility and prevents abdication of moral deliberation
- `A5 Proportionality & Moderation`: constrains deployment proportional to systemic risk and uncertainty
- `A6 Participation & Consultation`: requires multi-stakeholder review where impacts are broad or indirect
- `A7 Stewardship (Societal & Environmental)`: reduces systemic fragility and cascading harm
- `A4 Truthfulness & Trustworthiness`: prohibits misleading claims and requires auditable evidence

## 3. Scope

This standard applies to QC (and hybrid classical–quantum) systems used for:

- logistics and supply chain optimization
- finance (portfolio optimization, market making, pricing, risk management)
- energy (grid dispatch, demand response, capacity planning)
- defense and security (planning, allocation, targeting support)
- public policy and public services (resource allocation, eligibility optimization, scheduling)
- critical infrastructure optimization where failures can cascade

This standard applies when optimization outputs materially influence decisions, allocation of scarce resources, pricing, access, or strategic planning at Tier 1–3, with strongest requirements at Tier 2–3.

## 4. Definitions (only if required)

These definitions supplement `00_foundations/definitions.md`.

- **Quantum optimization system**: a QC or hybrid system used to search, approximate, or recommend solutions to optimization problems (including combinatorial, stochastic, and constrained optimization) that influence real-world decisions.
- **Power asymmetry risk**: risk that differential access to optimization capability yields disproportionate benefits or irreversible dominance, enabling coercion, market distortion, or systemic inequity.
- **Opacity of impact**: risk that affected parties cannot reasonably know optimization occurred or how it shaped outcomes, due to complexity, secrecy, or indirect effects.
- **Systemic fragility**: decreased resilience caused by over-optimization (tight coupling, reduced buffers, brittle constraints) that increases susceptibility to shocks and cascading failure.

## 5. Normative Requirements

### MUST

Q-OPA-1 (Use Context and Decision Authority). Tier 1–3 operators **MUST** document:

- the decision contexts influenced by optimization outputs,
- whether outputs are advisory or automatically executed,
- the human authority responsible for approvals and overrides,
- the intended and prohibited uses.

Q-OPA-2 (Power Asymmetry Assessment). For Tier 2–3 deployments, operators **MUST** assess and document power asymmetry risks, including:

- who benefits (primary beneficiaries) and who bears risk (affected parties),
- whether access advantages could become durable or irreversible,
- plausible market or policy distortions enabled by the optimization,
- mitigations and residual risk.

Q-OPA-3 (Opacity as an Ethical Risk). For Tier 2–3 deployments, operators **MUST** treat opacity of impact as a risk category. Operators **MUST** document:

- which stakeholders are entitled to which explanations (operators, regulators, affected parties),
- what can be disclosed externally vs. internally and why,
- compensating controls where external disclosure is constrained (audits, oversight, monitoring).

Q-OPA-4 (Disclosure Requirements). When optimization materially influences access, allocation, pricing, or eligibility in Tier 2–3 contexts, operators **MUST** provide appropriate disclosure to affected parties or their representatives unless disclosure would create a demonstrable safety/security risk that is documented and mitigated.

Q-OPA-5 (Delegation Limits for Strategic and Moral Decisions). Operators **MUST NOT** use quantum optimization to autonomously determine or recommend actions that constitute moral/legal determinations about persons (e.g., punishment, coercive targeting) without:

- a defined human decision authority with accountability,
- a contestability and remedy pathway where applicable,
- safeguards against objective laundering (see Q-OPA-6).

This requirement complements `03_quantum_standards/optimization_ethics.md`.

Q-OPA-6 (Objective and Constraint Transparency for Review). Tier 2–3 operators **MUST** document optimization objectives, constraints, and proxy variables that materially shape outcomes, and **MUST** make this documentation available to appropriate reviewers (internal governance, auditors, regulators as applicable).

Q-OPA-7 (Systemic Risk and Resilience Evaluation). Tier 2–3 operators **MUST** evaluate systemic fragility introduced by optimization, including:

- stress testing and scenario analysis under shocks (supply interruptions, demand spikes, adversarial conditions),
- sensitivity to objective weight changes and constraint perturbations,
- identification of tight coupling and single points of failure.

Q-OPA-8 (Monitoring and Drift). Tier 2–3 operators **MUST** implement monitoring to detect:

- changes in outcome distributions that indicate unintended concentration of benefits or burdens,
- degradation in resilience metrics (buffer depletion, failure rates),
- material changes in data quality or operating conditions.

Q-OPA-9 (Escalation and Pause Conditions). For Tier 2–3, operators **MUST** define escalation triggers and pause actions aligned with `ESCALATION_AND_PAUSE.md`, including triggers for:

- evidence of systemic market distortion or coercive leverage,
- unacceptable fragility/cascading failure risk,
- dual-use escalation beyond reviewed access models.

Q-OPA-10 (Anti-Manipulation and Misrepresentation). Operators **MUST NOT** make misleading claims about “quantum advantage” or societal benefit. Claims about performance or advantage **MUST** specify:

- task and workload conditions,
- benchmark assumptions,
- limitations and uncertainty.

### SHOULD

Q-OPA-11 (External Review for Systemic Impact). For Tier 3 (and Tier 2 where systemic impact is plausible), operators **SHOULD** obtain external or independent review of:

- power asymmetry assessment,
- systemic fragility evaluation,
- disclosure constraints and compensating controls.

Q-OPA-12 (Mitigation for Concentration of Power). Where power asymmetry risk is high, operators **SHOULD** consider mitigations such as:

- access governance and auditability,
- rate limits and staged rollout,
- safeguards against discriminatory or coercive objectives,
- sector coordination where necessary for stability.

### MAY

Q-OPA-13 (Public Impact Summary). Operators **MAY** publish a redacted societal impact summary including:

- primary benefit/burden analysis,
- resilience testing approach,
- governance and escalation mechanisms,

with redactions limited to safety, security, or legal constraints.

## 6. Risk-Tier Considerations

- **Tier 0**: research systems should document intended use and avoid releasing artifacts that enable high-impact optimization misuse without controls.
- **Tier 1**: requires baseline documentation of objectives, constraints, and decision authority (Q-OPA-1).
- **Tier 2**: requires power asymmetry assessment, disclosure planning, resilience evaluation, and monitoring (Q-OPA-2 to Q-OPA-9).
- **Tier 3**: requires strongest governance review, external/independent assessment expectations, and explicit pause readiness; secrecy constraints must be justified with compensating oversight (Q-OPA-3, Q-OPA-9, Q-OPA-11).

## 7. Compliance Evidence

Minimum evidence artifacts (as applicable):

- use context dossier and decision authority mapping (Q-OPA-1)
- power asymmetry assessment with mitigations and residual risk (Q-OPA-2)
- disclosure plan, secrecy justifications, and compensating controls (Q-OPA-3, Q-OPA-4)
- objective/constraint documentation and proxy analysis (Q-OPA-6)
- stress test and scenario analysis reports (Q-OPA-7)
- monitoring dashboards and drift/resilience alerts (Q-OPA-8)
- escalation triggers, decision records, and pause runbooks (Q-OPA-9)
- benchmark evidence supporting advantage claims and comms review artifacts (Q-OPA-10)

### Traceability Table (Requirement → Axiom → Evidence)

| Requirement ID | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| Q-OPA-2 | A3, A5, A7 | beneficiary/burden analysis, residual risk register |
| Q-OPA-3 | A3, A4, A6 | disclosure matrix, secrecy justification, audit plan |
| Q-OPA-6 | A4, A3 | objective/constraint docs, reviewer sign-offs |
| Q-OPA-7 | A7, A5 | stress tests, scenario analysis, sensitivity reports |
| Q-OPA-9 | A5, A6 | escalation triggers, pause runbooks, decision records |

## 8. Known Limitations

- Systemic impacts may be indirect, delayed, and mediated by human institutions; precise attribution can be difficult even with strong documentation.
- Some disclosure may be constrained by legitimate safety/security concerns; compensating controls (independent audit, oversight, monitoring) remain mandatory.
- Power asymmetry can arise from access, data, and organizational capacity even without malicious intent; governance must address incentives and externalities.

## 9. Future Considerations

- Interoperable reporting formats for power asymmetry and systemic fragility assessments.
- Sector-specific guidance for finance, logistics, and critical infrastructure.
- Methods to audit objective laundering and proxy-driven coercion in large-scale optimization deployments.

## Appendix A (Non-normative): Rationale

Optimization can reshape resource allocation and strategic choices in ways that are difficult to observe externally. Ethical governance must therefore require explicit assessment of who benefits, who is harmed, and how fragility and concentration of power can accumulate over time.

## Appendix B (Non-normative): Failure Modes & Abuse Cases

- “objective laundering” that embeds coercion or inequity in weights/constraints
- quiet market distortion via faster optimization cycles without disclosure or oversight
- over-optimized supply chains that collapse under modest shocks
- strategic decision abdication (“the optimizer said so”) reducing human deliberation

## Change Log

- v0.1: Initial draft.

