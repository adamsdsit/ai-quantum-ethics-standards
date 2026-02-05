# Audit Methods (Assurance Layer)

## Purpose

Define audit types and minimum expectations for evaluating compliance with this corpus.

## Ethical Mapping

- `A3 Justice`: accountability and remedy
- `A4 Trustworthiness`: integrity of claims and evidence

## Audit Types

1. **Governance audit**: decision rights, consultation evidence, change control.
2. **Data audit**: provenance, consent/rights, representativeness, retention.
3. **Model/system audit**: evaluations, robustness, failure analysis, explainability artifacts.
4. **Security audit**: access controls, monitoring, incident response readiness.
5. **Operational audit**: monitoring, drift detection, rollback, human oversight operation.

## Requirements (Normative)

AU-1 (Audit Readiness). Tier 2–3 operators **MUST** maintain an audit evidence repository containing the artifacts referenced by applicable standards.

AU-2 (Independence). Tier 3 audits **MUST** include an independent auditor (organizationally separate from the deployment team) with the authority to report findings without retaliation.

AU-3 (Frequency).

- Tier 2: audits **MUST** occur at least annually and after major system changes.
- Tier 3: audits **MUST** occur pre-deployment, at least annually, and after any incident meeting escalation criteria.

AU-4 (Finding Handling). Operators **MUST** track findings to remediation with:

- severity rating
- remediation owner and deadline
- verification evidence of closure

## Compliance Evidence

- audit plans and reports
- evidence repository index
- auditor independence statement (Tier 3)
- findings tracker and closure verification

