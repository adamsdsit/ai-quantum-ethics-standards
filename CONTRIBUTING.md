# Contributing

## Contribution Types

- **Standard change** (new requirements, modified requirements)
- **Implementation guidance** (non-normative examples, checklists)
- **Case study** (applied scenario with evidence artifacts)
- **Issue / gap report** (ambiguities, missing controls, conflicts)

## Pull Request Checklist

1. **Scope**: link the PR to a file in `00_foundations/scope_and_non_scope.md` (or propose a scope update).
2. **Ethical mapping**: reference at least one axiom ID from `00_foundations/ethical_axioms.md` (e.g., `A3 Justice`).
3. **Normative language**: use **MUST/SHOULD/MAY** only for requirements; keep rationale non-normative.
4. **Risk tiers**: state the highest tier the change affects (Tier 0–3) and why.
5. **Evidence**: add or update a “Compliance Evidence” section describing what an auditor can verify.

## Change Management (Living Corpus Rules)

- **Backwards compatibility**: when tightening a MUST, document transition guidance.
- **Safety-first**: if there is a conflict between usability and safety, document the tradeoff explicitly.
- **Minimal ambiguity**: define terms (or reference `definitions.md`) instead of using overloaded language.

## Style

Each standard document should follow the template in `00_foundations/standard_template.md`.

## Visual Guide

See `diagrams/use_and_contribute.d2` for a high-level flow of how to use the corpus and how to contribute changes.
