# Ethical Traceability and Mapping Framework

## Purpose

This framework makes ethical grounding **auditable and enforceable** by requiring explicit mapping between:

- ethical axioms (`00_foundations/ethical_axioms.md`), and
- technical/operational requirements across the corpus.

The intent is to prevent “ethics washing” by ensuring ethics claims are supported by verifiable controls and evidence.

## Ethical Mapping

- `A3 Justice, Due Process, and Remedy`
- `A4 Truthfulness & Trustworthiness`
- `A6 Participation & Consultation`

## Traceability Principles

TP-1 (No Orphan Requirements). Every normative requirement **MUST** map to at least one axiom (`A1`–`A7`).

TP-2 (No Symbolic Ethics). A mapping is only valid if the standard also specifies:

- the mechanism (requirement) intended to advance the axiom, and
- the evidence artifact(s) that allow an auditor to verify it.

TP-3 (Bidirectional Review). Reviewers **MUST** be able to answer:

- “Which axioms does this requirement serve?” and
- “Which requirements operationalize this axiom?”

TP-4 (Conflict Handling). When axioms are in tension, the standard **MUST** document:

- the tradeoff,
- the chosen priority for the context,
- compensating controls and residual risks.

## Mandatory Mapping Requirements (Per Standard Document)

Each standard document in `01_governance/`, `02_ai_standards/`, `03_quantum_standards/`, `04_risk_framework/`, and `05_audit_and_assurance/` **MUST** include:

1. an **Ethical Mapping** section naming relevant axiom IDs, and
2. a **Traceability Table** in the Compliance Evidence section (or an appendix) mapping:
   - requirement IDs → axiom IDs → evidence artifacts.

### Example Traceability Table

| Requirement ID | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| AI-T-2 | A2, A3 | user notice templates, delivery logs |
| AI-S-2 | A5, A7 | red-team plan, findings tracker, remediation evidence |
| Q-C-2 | A4, A7 | PQ transition plan, milestone tracking |

## Repository-Level Expectations

ET-1 (PR Traceability). Pull requests that introduce or modify normative requirements **MUST**:

- state the affected axiom IDs, and
- identify expected evidence artifacts or updates.

ET-2 (Axiom Stability). Proposed changes to axioms **MUST**:

- be treated as MAJOR changes (see `VERSIONING.md`), and
- include a cross-document impact analysis (which standards and mappings are affected).

ET-3 (Auditability of Mapping). Tier 2–3 programs **SHOULD** maintain a machine-readable traceability index (e.g., a table or YAML) generated from the corpus to support audits.

## Compliance Evidence

- per-document traceability tables
- PR descriptions and review records showing mapping decisions
- optional traceability index generation outputs

