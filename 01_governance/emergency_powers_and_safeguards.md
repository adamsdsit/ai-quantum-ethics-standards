# Standard: Emergency Powers, Exceptional Use, and Abuse Safeguards

## 1. Purpose

Define ethical and governance constraints on emergency powers and exceptional use of AI and quantum computing (QC) systems, including safeguards against abuse and normalization of exceptions.

This standard assumes good intentions are insufficient: exceptional access and overrides are predictable abuse targets and therefore require strict scope, duration, and accountability controls.

## 2. Ethical Mapping

- `A5 Proportionality & Moderation`: emergency powers are temporary, constrained, and evidence-based
- `A3 Justice, Due Process, and Remedy`: accountability, reviewability, and remedy for harms caused under emergency use
- `A4 Truthfulness & Trustworthiness`: accurate records; no covert expansion of authority
- `A2 Human Dignity & Moral Agency`: prevents coercive or rights-violating “emergency” normalization
- `A6 Participation & Consultation`: oversight and multi-stakeholder review where feasible

## 3. Scope

This standard applies to any AI or QC system that includes:

- override mechanisms (kill switches, privileged controls),
- emergency access pathways (break-glass accounts, emergency keys),
- exceptional use modes (expanded surveillance, rapid deployment, reduced controls),
- crisis-driven policy exceptions affecting rights, privacy, or safety.

It applies across civilian and military contexts.

## 4. Definitions (only if required)

- **Emergency**: a time-bounded situation with credible risk of severe harm requiring urgent action where normal procedures are insufficient.
- **Exceptional use**: any use that expands capability, access, or authority beyond the baseline reviewed and approved operational mode.
- **Break-glass access**: emergency access method that bypasses standard access controls under strict conditions.
- **Normalization of exception**: continued use of emergency powers after the emergency ends, or reuse of emergency mechanisms for routine convenience.

## 5. Normative Requirements

### MUST

EP-1 (Definition and Preconditions). Organizations **MUST** define:

- what qualifies as an emergency for the system and context,
- required evidence thresholds for invocation,
- who is authorized to invoke emergency powers,
- what safeguards remain non-waivable.

EP-2 (Scope and Duration Limits). Emergency powers **MUST** be:

- narrowly scoped to the minimum necessary capability and data access,
- time-bounded with explicit expiration (“sunset”) and renewal criteria,
- limited to specified systems, versions, and contexts.

EP-3 (Non-Waivable Safeguards). Even under emergency invocation, organizations **MUST NOT** waive:

- audit logging and evidence preservation,
- prohibition boundaries in `02_ai_standards/autonomy_and_human_control.md` related to coercion/manipulation and illusion of control,
- minimum privacy protections against unauthorized inference for Tier 2–3 (`02_ai_standards/privacy_and_non_inference.md`) unless a documented, lawful, and proportionate exception is approved with compensating controls.

These constraints are reinforced by the non-derogation red lines in `00_foundations/non_derogation_and_red_lines.md`.

EP-4 (Oversight and Dual Authorization). For Tier 2–3 exceptional use, invocation **MUST** require:

- dual authorization (at least two accountable roles), and
- notification to an oversight function (e.g., ethics review board, security oversight) within a defined time window.

EP-5 (Documentation and Auditability). Every emergency invocation **MUST** create an immutable decision record including:

- emergency description and evidence,
- scope and duration,
- controls waived and why (if any),
- compensating controls,
- affected parties and expected harms,
- responsible decision owners and approvals.

EP-6 (Post-Incident Review). After emergency use, organizations **MUST** conduct a post-incident review that includes:

- whether invocation was justified,
- harms caused and remediation actions,
- whether emergency mechanisms were abused or misused,
- controls needed to prevent recurrence and normalization.

EP-7 (Anti-Normalization Controls). Organizations **MUST** implement safeguards to prevent normalization of exceptions, including:

- automatic expiration and reversion to baseline controls,
- periodic audits of break-glass use,
- disciplinary policies for misuse.

### SHOULD

EP-8 (Public or Stakeholder Transparency). For Tier 3 (and Tier 2 where feasible), organizations **SHOULD** publish a redacted summary of emergency invocation practices and aggregate statistics, with redactions limited to safety, security, or legal constraints.

EP-9 (Independent Review for Repeated Exceptions). If emergency invocation recurs beyond a defined threshold, organizations **SHOULD** require independent review and consider redesign or policy change rather than repeated exception use.

### MAY

EP-10 (Emergency Simulation). Organizations **MAY** run simulations/tabletop exercises of emergency invocations to test safeguards and reduce improvisation risk.

## 6. Risk-Tier Considerations

- **Tier 0**: emergency powers should be rare; research access controls still require logging and justification.
- **Tier 1**: define emergency preconditions and keep break-glass paths auditable.
- **Tier 2**: dual authorization, non-waivable safeguards, and post-incident review are mandatory.
- **Tier 3**: strongest anti-normalization controls and transparency expectations; repeated exceptions indicate governance failure requiring escalation/pause review.

## 7. Compliance Evidence

Minimum evidence artifacts (as applicable):

- emergency definitions and invocation policy (EP-1)
- scope/duration constraints and enforcement mechanisms (EP-2)
- non-waivable safeguards list and enforcement checks (EP-3)
- authorization logs and oversight notifications (EP-4)
- immutable decision records and audit logs (EP-5)
- post-incident review reports and remediation trackers (EP-6)
- break-glass audit reports and misuse enforcement evidence (EP-7)

### Traceability Table (Requirement → Axiom → Evidence)

| Requirement ID | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| EP-2 | A5 | expiration rules, renewal criteria, enforcement logs |
| EP-5 | A4, A3 | decision records, audit logs |
| EP-6 | A3, A7 | review reports, remediation evidence |
| EP-7 | A5, A4 | break-glass audits, auto-reversion proofs |

## 8. Known Limitations

- Some contexts involve legal secrecy; compensating oversight records remain required.
- Emergencies can pressure teams into bypassing governance; pre-defined policies and simulations reduce improvisation risk but cannot eliminate it.

## 9. Future Considerations

- Standardized templates for emergency decision records across sectors.
- Guidance for cross-border emergencies and incident coordination.

## Appendix A (Non-normative): Rationale

Emergency powers are necessary in rare cases, but they are predictable abuse vectors. Ethical governance therefore requires strict constraints, immutable records, and strong anti-normalization mechanisms.

## Appendix B (Non-normative): Failure Modes & Abuse Cases

- “temporary” surveillance that becomes permanent
- break-glass accounts used for convenience
- repeated exceptions hiding flawed baseline design

## Change Log

- v0.1: Initial draft.
