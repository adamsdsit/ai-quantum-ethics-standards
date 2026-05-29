# Metrics (Minimum Set, Working Draft)

## Purpose

Provide a baseline metric set that supports transparency, fairness, safety, and stewardship without implying that metrics alone guarantee ethical outcomes.

This file defines a minimum metric set. Requirements and constraints on ethical quantification (including prohibited single-score ratings and uncertainty disclosure) are defined in `04_risk_framework/ethical_metrics.md`.

## Ethical Mapping

- `A4 Trustworthiness`
- `A1 Unity & Social Cohesion`
- `A7 Stewardship`

## Minimum Metrics by Domain

### Transparency & Explainability

- percentage of Tier 1–3 systems with a current disclosure packet (AI-T-1)
- explainability debt register coverage and age (AI-T-4)

### Fairness (Context-dependent)

- performance metrics disaggregated by relevant groups (as legally/ethically permissible)
- disparity metrics appropriate to the decision context (selected and justified)
- contestation rate and outcome rate (A3)

### Safety & Security

- number of high-severity red-team findings and time-to-remediation
- incident rate, mean time to detect (MTTD), mean time to recover (MTTR)
- rollback/disable test success rate (Tier 2–3)

### Privacy & Data Stewardship (Cross-cutting)

- data retention compliance rate
- access policy violations (counts, severity, closure time)

### Quantum Cryptographic Risk (As applicable)

- cryptographic inventory completeness (% systems covered)
- post-quantum transition milestone progress (% complete by data class)

### Environmental & Societal Impact

- energy use per training/inference/job (where measurable)
- major change impact assessments completed (Tier 2–3)

## Compliance Evidence

- metric definitions and calculation methods
- dashboards and time-series exports
- decision memos showing how metrics trigger action

## Traceability Table (Requirement → Axiom → Evidence)

| Requirement / Control | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| Transparency metrics | A4 | disclosure-packet coverage, debt-register age |
| Fairness metrics | A1, A3 | disaggregated performance, contestation/outcome rates |
| Safety metrics | A4, A7 | red-team findings, MTTD/MTTR, rollback test rate |
| Crypto-risk metrics | A4 | inventory completeness, PQ transition progress |
| Environmental metrics | A7 | energy per job, change-impact assessments |

## Change Log

- v0.2: Added Traceability Table and Change Log to conform to `ETHICAL_TRACEABILITY.md` and `VERSIONING.md`.
