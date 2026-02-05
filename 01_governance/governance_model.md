# Governance Model (Layer 1)

## Purpose

Define how standards are proposed, reviewed, adopted, versioned, and retired, with clear accountability and public reasoning.

## Ethical Mapping

- `A3 Justice`: contestability, auditability, remedy in governance decisions
- `A6 Participation`: multi-stakeholder consultation and transparency
- `A4 Trustworthiness`: integrity of process and change control

## Roles

- **Maintainers**: steward structure, enforce process, merge changes.
- **Editors**: curate language for consistency, maintain templates and cross-links.
- **Contributors**: propose issues and pull requests.
- **Reviewers**: technical, ethical, legal, and domain experts.
- **Affected-party advisors**: representatives from impacted communities and sectors.

## Decision Principles

1. **Evidence-first**: changes must specify verifiable requirements and auditable evidence.
2. **Risk-proportionality**: higher-tier standards require stronger justification and review.
3. **Transparency by default**: rationale and decision logs are public unless legally constrained.

## Process (Minimum)

### 1) Proposal

Any change begins as an Issue or PR that includes:

- purpose and scope impact
- axiom mapping (`A1`–`A7`)
- risk tier impact (Tier 0–3)
- compliance evidence expectations

### 2) Review

- Tier 0–1: at least one technical review and one governance review.
- Tier 2: at least two technical reviews + one affected-party advisor review.
- Tier 3: multi-stakeholder review panel; explicit dual-use and geopolitical risk review.

### 3) Adoption

Maintainers adopt by merge, recording:

- decision summary
- dissenting views (if any)
- migration guidance (when requirements tighten)

### 4) Versioning

This corpus uses semantic versioning:

- **MAJOR**: breaking compliance changes (tightening MUST, new Tier 3 obligations)
- **MINOR**: new standards or non-breaking expansions
- **PATCH**: clarifications, typo fixes, non-normative improvements

### 5) Deprecation & Retirement

Deprecated requirements **MUST** specify:

- replacement control(s) (if any)
- grace period by tier
- audit treatment during transition

## Governance Evidence (Auditability of Governance)

The project **MUST** maintain:

- an append-only decision log (issues/PR history)
- a changelog for each standard document
- reviewer roles/affiliations disclosure (as feasible)

