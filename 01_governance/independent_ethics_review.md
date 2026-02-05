# Standard: Independent Ethics Review Boards for AI and Quantum Systems

## 1. Purpose

Define requirements for establishing and operating Independent Ethics Review Boards (IERBs) to oversee high-risk AI and quantum computing (QC) systems, enabling pluralistic consultation, institutional memory, and accountable decision-making without ideological capture.

## 2. Ethical Mapping

- `A6 Participation & Consultation`: structured multi-stakeholder deliberation and voice
- `A3 Justice, Due Process, and Remedy`: reviewable decisions, contestation pathways, remedy orientation
- `A4 Truthfulness & Trustworthiness`: integrity of process, conflict-of-interest controls, auditable records
- `A5 Proportionality & Moderation`: heightened review for Tier 3 and systemic risks
- `A2 Human Dignity & Moral Agency`: ensures human responsibility is not abdicated to technical teams

## 3. Scope

This standard applies to organizations that develop, deploy, or procure Tier 2–3 AI/QC systems and to Tier 1 systems where:

- high-impact decisions are involved, or
- dual-use or systemic risks are plausible.

IERBs oversee:

- pre-deployment governance decisions,
- major changes and re-tiering decisions,
- emergency powers and exceptional use reviews (`01_governance/emergency_powers_and_safeguards.md`),
- dispute and escalation cases where ethical tradeoffs are material.

## 4. Definitions (only if required)

- **IERB**: a governance body with defined authority, independence safeguards, and documented processes to review ethical risks and controls for AI/QC systems.
- **Independence**: organizational separation and protection from retaliation sufficient to enable dissenting findings and “no-go” recommendations.
- **Capture**: undue influence that shifts decisions to serve narrow interests (technical, political, commercial) at the expense of ethical baselines and affected parties.

## 5. Normative Requirements

### MUST

IERB-1 (Charter and Authority). Organizations **MUST** establish an IERB charter that defines:

- scope of authority (what the IERB can approve, block, or escalate),
- decision rights and interaction with executives/owners,
- triggers for mandatory review (at minimum Tier 2–3 deployments and material changes),
- recordkeeping and transparency rules.

IERB-2 (Independence and Non-Retaliation). Organizations **MUST** implement independence safeguards including:

- non-retaliation protections for members and whistleblowers,
- authority to request evidence and independent assessments,
- separation from teams whose performance incentives depend on approval outcomes.

IERB-3 (Conflict of Interest). IERBs **MUST** maintain conflict-of-interest (COI) rules requiring:

- disclosure of relevant financial, organizational, or personal conflicts,
- recusal procedures,
- documentation of COI handling decisions.

IERB-4 (Composition and Expertise Diversity). IERBs **MUST** include:

- technical expertise (AI/QC, security),
- domain expertise (e.g., healthcare, finance, infrastructure as relevant),
- governance/legal/privacy expertise,
- representation of affected-party perspectives where feasible.

No single discipline **MUST** be able to dominate decisions by design.

IERB-5 (Consultative Decision Process). IERBs **MUST** operate with documented processes including:

- structured deliberation and dissent capture,
- requirement-to-axiom-to-evidence traceability review (`ETHICAL_TRACEABILITY.md`),
- explicit handling of tradeoffs and residual risk acceptance.

IERB-6 (Transparency and Accountability). For Tier 2–3, IERBs **MUST** maintain decision records that include:

- scope and tier classification,
- evidence reviewed,
- findings and required mitigations,
- approval/conditional approval/no-go decisions,
- dissenting opinions (if any),

with publication or sharing rules defined and redactions limited to privacy, safety, or legal constraints.

IERB-7 (Escalation and Appeals). Organizations **MUST** define:

- escalation pathways when the IERB identifies unacceptable risk,
- appeal mechanisms that do not undermine independence,
- conditions requiring pause or moratorium consideration (`ESCALATION_AND_PAUSE.md`).

### SHOULD

IERB-8 (External Participation). For Tier 3 or systemic-risk cases, organizations **SHOULD** include external or independent members/reviewers to reduce capture risk.

IERB-9 (Periodic Effectiveness Review). IERBs **SHOULD** undergo periodic review of:

- decision quality and timeliness,
- capture indicators,
- follow-through on mitigations,
- effectiveness of transparency/redaction boundaries.

### MAY

IERB-10 (Public Reporting). Organizations **MAY** publish an annual redacted IERB report summarizing:

- number and types of reviews,
- common findings and mitigations,
- aggregate capture-risk controls and improvements.

## 6. Risk-Tier Considerations

- **Tier 1**: IERB review may be scoped to high-impact or dual-use-relevant cases.
- **Tier 2**: IERB review is expected for deployments and material changes; conditional approvals with tracked mitigations are common.
- **Tier 3**: strongest independence and external participation expectations; IERB “no-go” recommendations require executive-level documented responses.

## 7. Compliance Evidence

Minimum evidence artifacts (as applicable):

- IERB charter and triggers (IERB-1)
- independence safeguards and non-retaliation policy (IERB-2)
- COI disclosures and recusal logs (IERB-3)
- membership roster by role/expertise (IERB-4)
- meeting agendas, minutes, and decision memos (IERB-5, IERB-6)
- escalation and appeal procedures (IERB-7)
- effectiveness review reports (IERB-9)

### Traceability Table (Requirement → Axiom → Evidence)

| Requirement ID | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| IERB-2 | A4, A6 | non-retaliation policy, independence design |
| IERB-5 | A6, A3 | deliberation records, traceability reviews |
| IERB-6 | A4, A3 | decision records, redaction logs |
| IERB-7 | A5, A3 | escalation procedures, pause decisions |

## 8. Known Limitations

- Independence is organizationally hard; the standard requires structural safeguards, but effectiveness must be monitored for capture.
- Some contexts require secrecy; redaction should not eliminate accountability to appropriate oversight bodies.

## 9. Future Considerations

- Shared training and calibration practices for IERBs across sectors.
- Standardized capture indicators and effectiveness metrics aligned with `04_risk_framework/ethical_metrics.md`.

## Appendix A (Non-normative): Rationale

High-risk systems require pluralistic deliberation and institutional memory. IERBs operationalize consultation and enable disagreement without paralysis through documented processes and clear decision rights.

## Appendix B (Non-normative): Failure Modes & Abuse Cases

- “rubber-stamp boards” with no authority or evidence access
- capture via funding or executive pressure
- exclusion of affected-party perspectives

## Change Log

- v0.1: Initial draft.

