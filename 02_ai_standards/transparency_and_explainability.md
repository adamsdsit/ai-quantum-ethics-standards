# AI Standard: Transparency & Explainability

## 1. Purpose

Ensure AI systems can be understood, evaluated, and contested at levels appropriate to risk, while preventing deceptive or obscured operation.

## 2. Applicability

- Applies to AI systems used in Tier 1–3 contexts; Tier 0 is encouraged as feasible.
- Strongest requirements apply to **high-impact decisions** and Tier 2–3 deployments.

## 3. Ethical Mapping

- `A3 Justice`: contestability and meaningful explanation
- `A4 Trustworthiness`: truthful capability/limitation representation
- `A2 Dignity`: transparency supports consent and agency

## 4. Requirements (Normative)

AI-T-1 (Disclosure Packet). For Tier 1–3 deployments, operators **MUST** maintain an AI system disclosure packet including:

- intended purpose and prohibited uses
- system boundaries and dependencies (data, models, services)
- known limitations and uncertainty characterization
- training / fine-tuning data provenance at an appropriate granularity
- evaluation results relevant to the deployment context

AI-T-2 (Affect Notice). When an AI system materially influences an affected party, the operator **MUST** provide timely notice that AI influence occurred, unless doing so would create a demonstrable safety risk that is documented and mitigated.

AI-T-3 (Explanation Standard by Tier).

- Tier 1: operator **SHOULD** provide an explanation suited to operational debugging and user understanding.
- Tier 2: operator **MUST** provide an explanation sufficient for independent review and contestation by affected parties (directly or via representatives), including key factors and uncertainty.
- Tier 3: operator **MUST** provide an explanation and evidence package sufficient for third-party audit, including causal analysis where feasible and comprehensive uncertainty treatment.

AI-T-4 (Explainability Debt Register). Tier 2–3 operators **MUST** maintain an “explainability debt” register that:

- identifies components with low interpretability
- documents compensating controls (testing, constraints, human oversight)
- defines a time-bound plan to reduce debt or justify permanence

AI-T-5 (Anti-Deception). Systems **MUST NOT** intentionally misrepresent whether outputs are AI-generated, or the level of confidence/uncertainty, in ways that materially affect decisions.

## 5. Compliance Evidence

- disclosure packet artifacts and version history
- affected-party notice templates and delivery logs
- explanation reports and appeal outcomes (Tier 2–3)
- explainability debt register with mitigation tracking
- product/UI audits for deception patterns

## 6. Rationale (Non-normative)

Transparency is not a single feature; it is a bundle of artifacts and practices enabling accountability, remedy, and safe operation. Explainability debt makes “we can’t explain it” a managed, measurable risk instead of an excuse.

## 7. Failure Modes & Abuse Cases

- hidden model updates changing behavior without notice
- “confidence theater” (fake certainty cues)
- explanations that are technically correct but practically unusable by affected parties

## 8. Change Log

- v0.1: Initial draft (filename: `02_ai_standards/transparency_and_explainability.md`).
