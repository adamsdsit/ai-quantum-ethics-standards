# Versioning and Change Control Policy

## Purpose

This policy defines how the corpus evolves over time while preserving ethical integrity, auditability, and stakeholder trust.

## Ethical Mapping

- `A4 Truthfulness & Trustworthiness`: accurate claims about what a version means
- `A6 Participation & Consultation`: transparent, multi-stakeholder change process
- `A3 Justice, Due Process, and Remedy`: change decisions are reviewable and contestable

## Policy Summary

- Ethical foundations evolve **slowly**; technical controls evolve **faster**.
- Every normative change **MUST** be traceable to review artifacts and a stated rationale.
- Changes **MUST NOT** be introduced unilaterally or opaquely.

## Semantic Versioning

The corpus uses **semantic versioning**: `MAJOR.MINOR.PATCH`.

### MAJOR

A change is **MAJOR** if it:

- materially changes the meaning, scope, or priority of `00_foundations/ethical_axioms.md`, or
- materially changes the risk philosophy or tier definitions in `04_risk_framework/risk_classification.md`, or
- introduces a new Tier 3 requirement category that effectively changes the compliance baseline for critical systems.

MAJOR changes **MUST** include explicit migration guidance and a public rationale.

### MINOR

A change is **MINOR** if it:

- adds a new standard document, control domain, or audit method, or
- adds new normative requirements that do not break existing compliance expectations for previously certified systems when applied as intended, or
- clarifies requirements in ways that may require process updates but not redesign (e.g., additional evidence artifacts).

### PATCH

A change is **PATCH** if it:

- fixes editorial issues, typos, formatting, or improves clarity without changing meaning, or
- adds non-normative guidance (examples, notes) without changing normative requirements.

## Approval Thresholds

Approval thresholds are minimums; maintainers **MAY** require additional review based on controversy, novelty, or risk.

- **PATCH**: at least 1 maintainer + 1 reviewer.
- **MINOR**: at least 1 maintainer + 2 reviewers, including at least 1 domain reviewer.
- **MAJOR**: multi-stakeholder review consistent with Tier 3 governance expectations (see `01_governance/governance_model.md`) and a documented public consultation period.

For changes affecting Tier 3 controls, an independent review **SHOULD** be included even when not strictly required.

## Backward Compatibility

- A tightening of a **MUST** requirement is a breaking change unless a transition period is defined and the prior compliance state remains acceptable for a bounded time.
- When backward compatibility is not feasible, the change proposal **MUST** document:
  - the safety/justice justification,
  - who is impacted,
  - a realistic transition plan by tier.

## Deprecation and Sunset

When deprecating a requirement or standard:

1. The deprecation notice **MUST** name the replacement control(s) or state “no replacement.”
2. The notice **MUST** specify tier-based timelines (Tier 1 may differ from Tier 3).
3. Audits **MUST** treat deprecated requirements as in-force until their sunset date.

## Change Logs

- Every standard document **MUST** maintain a `Change Log` section.
- The corpus **SHOULD** tag releases and publish release notes summarizing:
  - major normative changes,
  - new standards added,
  - deprecated controls and sunset timelines.

## Visual Summary (Non-normative)

See:

- `diagrams/release_pipeline.d2` (source)
- `diagrams/rendered/release_pipeline.svg` (rendered)
