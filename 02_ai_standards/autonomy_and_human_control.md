# AI Standard: Autonomy, Human Control, and Prohibited AI Capabilities

## 1. Purpose

Define enforceable boundaries on AI autonomy and establish mandatory human control requirements, including explicit prohibitions on delegations of authority that undermine human dignity, moral agency, justice, or safety.

This standard draws clear “lines with teeth”: what systems **MUST NOT** be allowed to do, and what control mechanisms **MUST** exist for permitted uses.

## 2. Ethical Mapping

- `A2 Human Dignity & Moral Agency`: preserves meaningful human agency; prevents coercion and manipulation
- `A3 Justice, Due Process, and Remedy`: ensures contestability, review, and accountability for high-impact decisions
- `A4 Truthfulness & Trustworthiness`: prevents “illusion of control” and deceptive oversight claims
- `A5 Proportionality & Moderation`: constrains autonomy by risk tier and harm severity
- `A7 Stewardship (Societal & Environmental)`: reduces systemic risk from uncontrolled or cascading actions

## 3. Scope

This standard applies to AI systems that:

- recommend or execute actions affecting people, property, or critical infrastructure, or
- materially influence high-impact decisions, or
- operate with autonomy in environments where errors can cause significant harm.

It applies across civilian and military contexts. Additional domain-specific constraints may apply (e.g., healthcare, dual-use governance).

## 4. Definitions (only if required)

These definitions supplement `00_foundations/definitions.md`.

- **Autonomy level**: the degree to which a system initiates, selects, or executes actions without human initiation or approval.
- **Human-in-the-loop (HITL)**: a human must approve each consequential action before execution.
- **Human-on-the-loop (HOTL)**: a human supervises system operation and can intervene, override, or halt; the system may act without per-action approval.
- **Human-in-command (HIC)**: a human authority defines goals, constraints, acceptable risk, and retains ultimate decision rights, with the practical ability to stop or materially constrain the system at any time.
- **Illusion of control**: an oversight design that appears to provide human control but does not provide meaningful, timely, and effective ability to prevent or stop harmful action (e.g., override that is too slow, hidden, or routinely ignored).
- **Irreversible or effectively irreversible action**: an action whose harms cannot be reasonably undone or remediated within a meaningful timeframe (e.g., physical harm, wrongful detention, permanent exclusion from essential services, irreversible data disclosure).

## 5. Normative Requirements

### MUST

AI-AHC-1 (Autonomy Declaration). Tier 1–3 operators **MUST** document the system’s autonomy level(s), including:

- what actions the system can initiate, recommend, or execute,
- which actions require human approval,
- what stop/override mechanisms exist and their expected response time,
- known failure modes related to autonomy (runaway loops, mode confusion).

AI-AHC-2 (Autonomy Levels and Risk Controls). Operators **MUST** classify system operation into one or more autonomy levels:

- **L0 Assistance**: generates information or summaries without recommendations.
- **L1 Recommendation**: provides recommendations or rankings; humans decide.
- **L2 Execution (Constrained)**: executes actions within pre-approved constraints; HOTL required.
- **L3 Self-Directed Action (Bounded)**: selects sub-goals and sequences actions to achieve a human-defined objective under constraints; HIC required and Tier 3 governance triggers likely.

For any L2–L3 operation, operators **MUST** document constraints, stop conditions, and monitoring.

AI-AHC-3 (Human Control Model by Tier).

- Tier 1: for consequential actions, operators **MUST** implement at least HOTL or HITL appropriate to context.
- Tier 2: for high-impact decisions or actions with material harm potential, operators **MUST** implement HITL or an equivalent control that ensures human authority can prevent harmful execution. HOTL-only control is permitted only with documented justification and compensating safeguards.
- Tier 3: operators **MUST** implement HIC plus verifiable emergency stop capability, independent monitoring, and escalation/pause readiness (`ESCALATION_AND_PAUSE.md`).

AI-AHC-4 (Prohibited Delegations: Moral/Legal Determinations). Systems **MUST NOT** be used to autonomously make or execute moral or legal determinations about persons (as defined in `00_foundations/definitions.md`) without meaningful human authority and due-process safeguards, including contestability and remedy where applicable.

AI-AHC-5 (Prohibited Delegations: Life-and-Death and Severe Harm). Systems **MUST NOT** autonomously determine or execute actions that directly create a high likelihood of death or severe physical harm to identifiable persons without human judgment by an accountable authority with the practical ability to prevent the action.

AI-AHC-6 (Prohibited Delegations: Coercion and Manipulation). Systems **MUST NOT** autonomously perform coercive or manipulative actions that undermine meaningful consent, including:

- deceptive influence operations targeting individuals’ vulnerabilities,
- coercive personalization intended to restrict autonomy,
- exploitative targeting in high-stakes contexts (health, finance, liberty).

AI-AHC-7 (Override, Shutdown, and Safe Degradation). For Tier 2–3 and any L2–L3 operations, operators **MUST** implement:

- an emergency stop (“kill switch”) that reliably halts harmful action within a defined and tested time bound,
- safe degradation modes that reduce capability while preserving safety (e.g., revert to read-only or recommendation-only),
- rollback mechanisms for model/version changes where feasible,
- periodic tests (drills) demonstrating controls work under realistic conditions.

AI-AHC-8 (Stop Conditions and Guardrails). Operators **MUST** define stop conditions that trigger:

- automatic constraint tightening or shutdown, and
- human escalation,

including triggers for safety incidents, unauthorized inference, or unfairness regressions where relevant.

AI-AHC-9 (No Illusion of Control). Operators **MUST NOT** claim human oversight exists unless it is demonstrably effective. For Tier 2–3, operators **MUST** verify and document that:

- oversight interfaces provide sufficient context and uncertainty to decide,
- intervention is practically usable (time, authority, training),
- override paths are visible, accessible, and not penalized,
- monitoring alerts are actionable and not routinely ignored.

AI-AHC-10 (Audit Logging for Autonomy). Tier 2–3 operators **MUST** retain audit logs sufficient to reconstruct:

- autonomy mode at the time of action,
- whether human approval occurred (if required),
- constraints and stop conditions in effect,
- override/shutdown events and outcomes.

### SHOULD

AI-AHC-11 (Least-Autonomy Principle). Operators **SHOULD** deploy the least autonomy necessary to achieve the legitimate purpose, especially for high-impact contexts.

AI-AHC-12 (Independent Review for L3 / Tier 3). For L3 operations or Tier 3 deployments, operators **SHOULD** obtain independent review of:

- autonomy boundaries and stop conditions,
- override mechanisms and drill results,
- evidence that oversight is not symbolic.

### MAY

AI-AHC-13 (Public Control Disclosure). Tier 2–3 operators **MAY** publish a redacted summary describing autonomy levels and control mechanisms, with redactions limited to safety, security, or legal constraints.

## 6. Risk-Tier Considerations

- **Tier 0**: document autonomy experiments; avoid releasing agents capable of high-impact self-directed action without controls.
- **Tier 1**: HOTL is commonly sufficient for constrained execution; document boundaries and failure modes.
- **Tier 2**: high-impact decisions typically require HITL-equivalent control; enforce stop conditions, drills, and audit logs.
- **Tier 3**: requires HIC, independent monitoring, and pause readiness; L3 self-directed action must be strongly justified, narrowly scoped, and continuously monitored.

## 7. Compliance Evidence

Minimum evidence artifacts (as applicable):

- autonomy declaration and mode map (AI-AHC-1, AI-AHC-2)
- tier control rationale and approvals (AI-AHC-3)
- prohibited-use policy and enforcement controls (AI-AHC-4 to AI-AHC-6)
- kill switch design, test results, and drill records (AI-AHC-7)
- stop condition definitions, alert history, and escalations (AI-AHC-8)
- oversight UI/UX review and training materials (AI-AHC-9)
- audit logs and incident reconstructions involving autonomy (AI-AHC-10)

### Traceability Table (Requirement → Axiom → Evidence)

| Requirement ID | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| AI-AHC-3 | A5, A3 | tier control rationale, approvals |
| AI-AHC-5 | A2, A7 | prohibited-use enforcement, incident drills |
| AI-AHC-7 | A7, A4 | kill switch tests, rollback logs |
| AI-AHC-9 | A4, A2 | oversight effectiveness verification, training |
| AI-AHC-10 | A3, A4 | audit logs, reconstruction procedures |

## 8. Known Limitations

- Some systems operate in environments where true per-action approval is infeasible; this increases the burden to demonstrate effective HOTL controls, stop conditions, and drift monitoring.
- “Kill switches” are only effective if they are tested under realistic conditions and integrated into operational authority structures.
- Complex agentic systems can create emergent behaviors; bounded autonomy must include monitoring for unintended goal-seeking or constraint bypass.

## 9. Future Considerations

- Standardized test suites for control effectiveness in agentic systems.
- Metrics for detecting illusion-of-control patterns (alert fatigue, override penalty, rubber-stamping).
- Guidance for autonomy boundaries in hybrid AI+QC decision-shaping systems.

## Appendix A (Non-normative): Rationale

Ethical governance requires enforceable limits. Autonomy increases speed and scale of action, which increases harm potential and reduces opportunity for deliberation and remedy. Human control must be real, timely, and accountable.

## Appendix B (Non-normative): Failure Modes & Abuse Cases

- rubber-stamp HITL where approvals become automatic
- override mechanisms that exist but are inaccessible during incidents
- mode confusion where operators believe the system is advisory but it executes actions
- slow intervention paths that cannot prevent irreversible harm

## Change Log

- v0.1: Initial draft.

