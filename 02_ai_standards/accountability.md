# AI Standard: Governance & Accountability

## 1. Purpose

Ensure accountable ownership, traceability of decisions, and enforceable responsibility throughout the AI lifecycle.

## 2. Applicability

- Applies to Tier 1–3 systems.
- Tier 2–3 require formal responsibility mapping and audit-ready logging.

## 3. Ethical Mapping

- `A3 Justice, Due Process, and Remedy`
- `A4 Trustworthiness`
- `A6 Participation & Consultation`

## 4. Requirements (Normative)

AI-A-1 (Chain of Responsibility). Tier 1–3 operators **MUST** document a chain of responsibility covering:

- system owner with decision authority
- safety/security owner
- data stewardship owner
- escalation contacts and decision rights

AI-A-2 (Lifecycle Traceability). Tier 2–3 systems **MUST** maintain traceability linking:

- requirements → design choices → evaluations → deployment approvals → monitoring

AI-A-3 (Audit Logging). For Tier 2–3, operators **MUST** retain audit logs sufficient to reconstruct:

- inputs at decision time (as legally/ethically permissible)
- model/system version
- key intermediate signals (where feasible)
- outputs and downstream decision actions

AI-A-4 (Human Oversight Interface). When human review is required, the system **MUST** provide reviewers with:

- the relevant context and uncertainty
- the ability to override or pause automated actions
- clear guidance on when escalation is mandatory

AI-A-5 (Liability Mapping). Tier 2–3 operators **MUST** document a liability mapping describing:

- foreseeable harm categories
- which party is responsible for mitigation and remedy
- mechanisms for compensation or correction

## 5. Compliance Evidence

- responsibility matrix (RACI or equivalent)
- traceability artifacts (tickets, docs, approvals)
- audit logging policies and sample log extracts
- oversight UI/UX review results and training materials
- liability mapping and remediation outcomes

## 6. Rationale (Non-normative)

Accountability fails when responsibility is diffuse. Explicit ownership and traceability turn ethical claims into enforceable operational practice.

## 7. Failure Modes & Abuse Cases

- “no single owner” governance gaps
- human reviewers given insufficient context (“rubber-stamp” risk)
- logging that exists but cannot support incident reconstruction

## 8. Change Log

- v0.1: Initial draft.

