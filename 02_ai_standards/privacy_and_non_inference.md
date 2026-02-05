# AI Standard: Privacy, Data Protection, and the Right to Non-Inference

## 1. Purpose

Define enforceable privacy and data protection requirements for AI systems, with particular emphasis on harms arising from **inference** rather than from data collection alone.

This standard treats inference as a governed action: it can create sensitive information, enable discrimination, and undermine autonomy even when no “sensitive data” was directly collected.

## 2. Ethical Mapping

- `A2 Human Dignity & Moral Agency`: protects autonomy and meaningful consent; prevents covert profiling
- `A3 Justice, Due Process, and Remedy`: enables contestation, accountability, and corrective action
- `A4 Truthfulness & Trustworthiness`: requires accurate disclosures and auditable evidence
- `A5 Proportionality & Moderation`: constrains inference by risk tier and purpose
- `A7 Stewardship (Societal & Environmental)`: limits systemic privacy harm and long-horizon confidentiality risk

## 3. Scope

This standard applies to AI systems that:

- process personal data (directly or via linkage), or
- produce, store, or act upon inferences about identifiable individuals, or
- materially influence decisions affecting individuals or groups in ways that create privacy externalities (e.g., profiling, ranking, eligibility, surveillance).

This standard is globally portable and avoids jurisdiction-specific legal mandates. It is compatible with common privacy principles (minimization, purpose limitation, access control, transparency, and accountability).

## 4. Definitions (only if required)

These definitions supplement `00_foundations/definitions.md`.

- **Inference**: deriving information, predictions, classifications, embeddings, or scores about a person (or a person-linked group) from input data, model behavior, metadata, or correlated signals, including inferences produced indirectly (e.g., via downstream models or data brokers).
- **Inference activity**: any operation that generates, updates, stores, shares, or uses an inference to influence a decision, ranking, or action.
- **Sensitive inference**: an inference that reveals or strongly suggests a sensitive attribute, condition, or status that could reasonably lead to stigma, discrimination, coercion, or significant harm if misused or disclosed.
- **Sensitive attributes (non-exhaustive)**: health conditions; mental health status; disability; genetic traits; biometrics used for identification; sexual behavior/orientation; intimate relationships; political views/affiliation; religious or philosophical beliefs; union membership; immigration or citizenship status; precise location and movement patterns; criminal allegations or records where misuse is plausible; financial distress; minor status; experiences of violence or abuse.
- **Purpose binding**: restricting inference activity to explicitly declared purposes and prohibiting repurposing without a new justification and valid consent or lawful basis.
- **Unauthorized inference**: inference activity that is outside declared purpose, outside granted permissions, or violates prohibitions in this standard.

## 5. Normative Requirements

### MUST

AI-PN-1 (Privacy Principles). For Tier 1–3 deployments, operators **MUST** implement and document:

- data minimization (collect and process only what is necessary),
- purpose limitation (use only for declared purposes),
- storage limitation (retain only as long as necessary),
- access controls (least privilege and segregation of duties),
- auditability (logs sufficient for reconstruction and accountability).

AI-PN-2 (Inference as Governed Action). Operators **MUST** treat inference activity as a governed action by maintaining an inference register that includes:

- inference categories performed (including derived scores/embeddings used for decisions),
- declared purposes for each inference category,
- risk classification for each inference category (see AI-PN-7),
- authorized roles/systems, and
- evidence artifacts and review cadence.

AI-PN-3 (Right to Non-Inference). Individuals **MUST NOT** be subject to sensitive inference unless:

- the inference category is disclosed in an understandable form,
- the purpose is declared and bound (AI-PN-4),
- a valid consent or other documented lawful basis exists where required by context, and
- risk-tier controls are met (AI-PN-7 to AI-PN-12).

AI-PN-4 (Purpose Binding for Inference). For Tier 1–3, operators **MUST**:

- bind each inference category to declared purposes,
- prohibit repurposing of inferences to materially different purposes without renewed review and consent/basis, and
- ensure downstream consumers cannot use inferences outside scope (technical controls or contractual controls with audit rights).

AI-PN-5 (Inference-Specific Transparency). Where AI materially affects an individual, operators **MUST** provide transparency that includes:

- whether inferences are used,
- the types of inferences relevant to the context,
- how to access meaningful explanation appropriate to the context, and
- how to contest or seek correction (see AI-PN-10).

AI-PN-6 (Prohibited Sensitive Inference Categories). Operators **MUST NOT** perform, enable, or procure sensitive inference used for:

- eligibility, access, or pricing decisions in high-impact contexts based on intimate or stigmatizing attributes without explicit, context-appropriate authorization and remedy protections, or
- coercive targeting, exploitation, or discriminatory segmentation of vulnerable individuals or groups, or
- deception or manipulation that undermines meaningful consent.

For Tier 2–3 systems, any sensitive inference for high-impact decisions **MUST** undergo explicit governance review and be justified as necessary and proportionate.

AI-PN-7 (Inference Risk Classification). Operators **MUST** classify inference categories into risk classes:

- **Class L (Low-risk)**: benign operational inferences with minimal harm potential (e.g., language preference for UI).
- **Class E (Elevated)**: inferences with moderate harm potential or plausible misuse (e.g., inferred interests used for personalization in non-high-impact settings).
- **Class H (High-risk)**: inferences that can materially affect rights, access, liberty, or safety, or that can reasonably enable discrimination, coercion, or surveillance.
- **Class P (Prohibited by default)**: inference categories that are inherently sensitive in context, lack proportional justification, or create unacceptable risk of irreversible harm.

Classification **MUST** be context-dependent and documented, including:

- stakes and affected parties,
- plausibility of misuse,
- reversibility of harm,
- available remedy mechanisms.

AI-PN-8 (Tier Controls for Inference Classes).

- Tier 1: operators **MUST** maintain the inference register and apply purpose binding (AI-PN-2, AI-PN-4).
- Tier 2–3: operators **MUST** implement monitoring and detection for unauthorized inference (AI-PN-11), and **MUST** maintain a residual inference risk register (AI-PN-12).
- For Class H and any sensitive inference: Tier 2–3 operators **MUST** provide enhanced transparency (AI-PN-5) and contestability (AI-PN-10).
- Class P inferences **MUST NOT** be deployed unless a governance exception is granted under Tier 3 review with documented public-interest justification and safeguards; otherwise they remain prohibited.

AI-PN-9 (No Reliance on “Anonymization” Alone). Operators **MUST NOT** rely solely on de-identification or anonymization claims to justify sensitive inference or secondary use. Where de-identification is used, operators **MUST**:

- assess linkage and inference risks,
- implement technical and organizational safeguards against re-identification and attribute inference, and
- document residual risks.

AI-PN-10 (Subject Rights: Access, Correction, and Contestation). For Tier 2–3 systems that materially affect individuals, operators **MUST** provide a process to:

- request an explanation appropriate to the context,
- contest the use of relevant inferences in decisions,
- seek correction of materially wrong inferences where feasible, or record a dispute when correction is not feasible,
- obtain human review for high-impact decisions.

AI-PN-11 (Logging and Detectability of Inference Activity). Tier 2–3 operators **MUST** log inference activity sufficient to detect unauthorized inference and reconstruct:

- which inference categories were generated/used,
- the system/model version,
- the consuming decision/workflow context (at an appropriate granularity),
- access events and downstream sharing.

Operators **MUST** monitor for:

- inference activity outside declared purposes,
- anomalous inference generation rates,
- unauthorized access to inference stores or embedding indices.

AI-PN-12 (Residual Inference Risk Register). Tier 2–3 operators **MUST** maintain a residual inference risk register that includes:

- inference class (L/E/H/P) and justification,
- primary harms and misuse pathways,
- mitigations and residual risk,
- monitoring thresholds and escalation triggers,
- owners and review cadence.

AI-PN-13 (Secondary Use Governance). For Tier 2–3, any secondary use that materially changes the purpose or increases inference risk **MUST**:

- be reviewed under the inference risk classification framework,
- document necessity and proportionality,
- include safeguards (minimization, access controls, retention limits, transparency/consent where required).

AI-PN-14 (Post-Quantum and Long-Horizon Confidentiality). When data or inferences have long confidentiality requirements, operators **MUST**:

- document cryptographic assumptions and dependencies,
- apply cryptographic agility planning appropriate to sensitivity and retention horizon,
- limit retention of high-risk inferences and sensitive logs to the minimum necessary,
- consider “harvest now, decrypt later” risk for stored sensitive data and inferences.

Where QC-related crypto destabilization is plausible, operators **SHOULD** align with `03_quantum_standards/cryptographic_and_security_risk.md`.

### SHOULD

AI-PN-15 (Inference-Minimizing Design). Operators **SHOULD** prefer designs that minimize sensitive inference creation, such as:

- on-device processing or local personalization where feasible,
- explicit feature constraints to exclude sensitive proxies,
- privacy-preserving learning and aggregation when appropriate.

AI-PN-16 (Independent Review for High-Risk Inference). For Tier 3 systems and Class H/P inference categories, operators **SHOULD** obtain independent review of:

- classification and justification,
- monitoring and detection design,
- contestability and remedy effectiveness.

### MAY

AI-PN-17 (Public Transparency Summary). Tier 2–3 operators **MAY** publish a redacted inference transparency summary describing:

- major inference categories,
- purpose bindings,
- prohibited inferences,
- high-level monitoring and remedy mechanisms,

with redactions limited to privacy, safety, or legal constraints.

## 6. Risk-Tier Considerations

- **Tier 0**: research systems should document inference categories and avoid releasing artifacts that enable sensitive inference at scale without safeguards.
- **Tier 1**: requires explicit inference inventory and purpose binding; sensitive inference requires disclosure and governance justification.
- **Tier 2**: requires logging, monitoring, residual risk tracking, and subject rights mechanisms appropriate to context.
- **Tier 3**: requires strongest constraints, independent review expectations, and pause readiness (`ESCALATION_AND_PAUSE.md`) for Class P and other systemic-risk inference categories.

## 7. Compliance Evidence

Minimum evidence artifacts (as applicable):

- privacy principles implementation notes and policies (AI-PN-1)
- inference register and purpose bindings (AI-PN-2, AI-PN-4)
- disclosure/consent materials for inference categories (AI-PN-3, AI-PN-5)
- prohibited inference policy and enforcement controls (AI-PN-6)
- inference risk classification records (AI-PN-7)
- logging schemas, access logs, and monitoring alerts (AI-PN-11)
- residual inference risk register and remediation tracker (AI-PN-12)
- secondary use governance decisions and safeguards (AI-PN-13)
- cryptographic inventory and retention schedules for long-horizon data (AI-PN-14)

### Traceability Table (Requirement → Axiom → Evidence)

| Requirement ID | Axiom(s) | Evidence Artifacts |
| --- | --- | --- |
| AI-PN-2 | A4, A6 | inference register, review cadence |
| AI-PN-3 | A2, A3 | disclosures/consent records, justification memos |
| AI-PN-4 | A2, A4, A5 | purpose-binding controls, downstream contracts/audits |
| AI-PN-7 | A5 | classification records, risk rationale |
| AI-PN-10 | A3 | contestation workflow, outcomes, human review records |
| AI-PN-11 | A4 | inference activity logs, monitoring alerts |
| AI-PN-14 | A7, A4 | crypto dependency docs, retention schedules, agility plan |

## 8. Known Limitations

- Sensitive inference can arise from proxies even when protected attributes are not collected; prohibitions and monitoring reduce but may not eliminate risk.
- Some inferences are hard to “correct” because they are probabilistic or transient; dispute recording and decision review are still required in high-impact contexts.
- Logging improves accountability but can itself create privacy risk; retention and access controls must be strict and proportional.

## 9. Future Considerations

- Standardized machine-readable inference registers to support procurement and audit interoperability.
- Privacy-preserving monitoring techniques for detecting unauthorized inference without expanding surveillance.
- Better benchmarks for inference attack resistance (membership/attribute inference) in deployed settings.

## Appendix A (Non-normative): Rationale

Privacy harms increasingly arise from what systems infer and how those inferences are used, shared, and operationalized. Treating inference as a governed action—bound by purpose, transparency, and auditable controls—closes a major gap in traditional privacy models centered only on collection and disclosure.

## Appendix B (Non-normative): Failure Modes & Abuse Cases

- claiming “no sensitive data” while performing sensitive inference via proxies
- collecting minimal data but generating expansive profiles (“inference amplification”)
- using embeddings as a covert inference store without access controls
- indefinite retention of sensitive logs that later become decryptable or linkable

## Change Log

- v0.1: Initial draft.

