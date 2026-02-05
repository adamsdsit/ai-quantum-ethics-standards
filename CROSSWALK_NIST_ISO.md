# Crosswalk to Existing AI and Technology Governance Frameworks

## Purpose

This document demonstrates **alignment and interoperability** with widely used international frameworks. It is intended to:

- reduce duplication,
- improve legibility for regulators and auditors, and
- identify where this corpus adds value (e.g., ethical traceability and AI+QC integration).

This crosswalk is **non-normative**.

## Scope

The crosswalk focuses on high-level concepts and control families. Detailed, clause-by-clause mappings may be added over time.

## NIST AI Risk Management Framework (AI RMF)

NIST AI RMF organizes activities into four functions: **GOVERN**, **MAP**, **MEASURE**, **MANAGE**.

| NIST AI RMF Function | Related Corpus Areas |
| --- | --- |
| GOVERN | `00_foundations/*`, `01_governance/*`, `VERSIONING.md`, `ETHICAL_TRACEABILITY.md`, `05_audit_and_assurance/*` |
| MAP | `04_risk_framework/risk_classification.md`, `00_foundations/scope_and_non_scope.md`, case studies in `06_case_studies/*` |
| MEASURE | `02_ai_standards/*` (evaluations), `05_audit_and_assurance/metrics.md`, testing evidence requirements |
| MANAGE | `02_ai_standards/safety.md`, `02_ai_standards/accountability.md`, incident response and change control requirements |

## ISO/IEC AI Risk Management Standards (e.g., ISO/IEC 23894)

ISO/IEC AI risk management guidance emphasizes lifecycle risk processes, governance, documentation, and continuous improvement.

| ISO/IEC Risk Topic | Related Corpus Areas |
| --- | --- |
| Governance and accountability | `01_governance/governance_model.md`, `02_ai_standards/accountability.md` |
| Risk assessment and treatment | `02_ai_standards/safety.md`, `04_risk_framework/risk_classification.md` |
| Documentation and transparency | `02_ai_standards/transparency_and_explainability.md`, `05_audit_and_assurance/audit_methods.md` |
| Monitoring and improvement | `05_audit_and_assurance/metrics.md`, incident and remediation expectations |

## OECD AI Principles

The OECD AI Principles emphasize inclusive growth, human-centered values, transparency, robustness/security, and accountability.

| OECD Principle Theme | Related Corpus Areas |
| --- | --- |
| Human-centered values and fairness | `00_foundations/ethical_axioms.md` (A1–A3), `02_ai_standards/fairness.md` |
| Transparency and responsible disclosure | `02_ai_standards/transparency_and_explainability.md`, `03_quantum_standards/cryptographic_and_security_risk.md` (claim controls) |
| Robustness, security, and safety | `02_ai_standards/safety.md`, `03_quantum_standards/national_security.md` |
| Accountability | `02_ai_standards/accountability.md`, `05_audit_and_assurance/*` |

## UNESCO Recommendation on the Ethics of AI

UNESCO’s recommendation addresses human rights, transparency, accountability, sustainability, and governance mechanisms.

| UNESCO Theme | Related Corpus Areas |
| --- | --- |
| Human rights and dignity | `00_foundations/ethical_axioms.md` (A2, A3), contestability requirements across AI standards |
| Transparency and explainability | `02_ai_standards/transparency_and_explainability.md` |
| Accountability and governance | `01_governance/*`, `05_audit_and_assurance/*`, `ETHICAL_TRACEABILITY.md` |
| Sustainability | `00_foundations/ethical_axioms.md` (A7), `05_audit_and_assurance/metrics.md` |

## Where This Corpus Adds Value (Non-exhaustive)

- **Ethical traceability as a compliance primitive**: mandatory requirement-to-axiom-to-evidence mapping (`ETHICAL_TRACEABILITY.md`).
- **Unified AI + Quantum dual-use framing**: QC-specific controls integrated into tiering and assurance.
- **Moratorium-capable governance** for Tier 3 systems: explicit pause/escalation mechanisms (`ESCALATION_AND_PAUSE.md`).

## Maintenance

Crosswalk updates **SHOULD** accompany MINOR releases when new standards are added or when external frameworks materially evolve.

