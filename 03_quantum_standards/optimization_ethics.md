# Quantum Standard: Optimization Ethics & Decision Delegation

## 1. Purpose

Prevent harmful delegation of consequential decisions to quantum-accelerated optimization systems, especially where objectives can encode unfairness, coercion, or destabilizing incentives.

## 2. Applicability

- Applies to quantum (and hybrid) optimization used in resource allocation, logistics, finance, security, hiring, admissions, healthcare, and other high-impact domains.
- Strongest requirements apply to Tier 2–3.

## 3. Ethical Mapping

- `A2 Human Dignity & Moral Agency`
- `A1 Unity & Social Cohesion`
- `A5 Proportionality & Moderation`

## 4. Requirements (Normative)

Q-O-1 (Objective Disclosure). For Tier 2–3, operators **MUST** document the optimization objective(s), constraints, and any proxy variables that materially shape outcomes.

Q-O-2 (No Autonomous Moral Delegation). Systems **MUST NOT** be used to autonomously select or recommend actions that constitute moral/legal determinations about persons (e.g., guilt, punishment, coercive targeting) without a defined human decision authority and contestability pathway.

Q-O-3 (Constraint Safety). Tier 2–3 operators **MUST** implement constraints and guardrails that prevent:

- prohibited discrimination
- unsafe operational outputs (e.g., violating safety margins)
- objectives that incentivize deception or coercion

Q-O-4 (Sensitivity & Stability Testing). Operators **MUST** evaluate sensitivity of outcomes to:

- objective weighting changes
- constraint perturbations
- data uncertainty

For Tier 2–3, results **MUST** be recorded and reviewed before deployment.

Q-O-5 (Human Oversight and Stop Conditions). Tier 2–3 workflows **MUST** include:

- an identified decision owner responsible for approvals
- stop conditions when outputs exceed risk thresholds
- periodic review of whether objectives remain socially legitimate

## 5. Compliance Evidence

- objective/constraint documentation and code references
- prohibited-use policy with enforcement controls
- sensitivity test reports and decision memos
- oversight logs showing approvals and stop-condition triggers

## 6. Rationale (Non-normative)

Optimization often hides normative choices inside weights and constraints. Making those choices explicit is necessary for fairness, consent, and accountability.

## 7. Failure Modes & Abuse Cases

- encoding inequity via proxy variables
- “objective laundering” (claiming neutrality while embedding values)
- brittle solutions that fail under minor perturbations

## 8. Change Log

- v0.1: Initial draft.

