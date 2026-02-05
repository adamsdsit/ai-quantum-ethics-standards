# Prompt Templates (for Codex / Code Chat)

This file provides reusable prompts to generate consistent, regulator-ready drafts across the corpus.

## Master Instruction (Use Once Per Session)

```
You are drafting globally applicable Standards and Ethics for Artificial Intelligence and Quantum Computing.

The standards must:
- Be technology-neutral, globally applicable, and regulator-ready
- Use normative language (MUST, SHOULD, MAY per RFC 2119)
- Be compatible with NIST, ISO/IEC, OECD, UNESCO frameworks
- Be ethically grounded but non-religious in language
- Treat AI and Quantum as high-impact dual-use technologies
- Prioritize human dignity, justice, transparency, accountability, and safety

Writing requirements:
- Clear, formal standards language
- Structured Markdown
- No speculative hype
- Explicit separation of ethical rationale and technical requirements
- Assume a global, multi-stakeholder audience

The output must read like a draft from an international standards body.
```

## Canonical Standard Template Prompt

```
Use the following mandatory structure:
1. Purpose
2. Ethical Mapping (link to Ethical Axioms)
3. Scope
4. Definitions (only if required)
5. Normative Requirements
   - MUST
   - SHOULD
   - MAY
6. Risk-Tier Considerations
7. Compliance Evidence
8. Known Limitations
9. Future Considerations

Use precise, formal language suitable for regulatory and technical audiences.
```

## Foundational Prompts (Phase 1)

### Ethical Axioms

```
Draft a document titled "Ethical Axioms for AI and Quantum Computing Standards".

Purpose:
Define a small, immutable set of ethical axioms that serve as the foundation for all AI and Quantum Computing standards.

Requirements:
- Use non-religious, universally defensible language
- Each axiom must be normative, not aspirational
- Limit to 6–8 axioms
- Include interpretation rules
- Explicitly state that technical standards must map to these axioms

Do NOT reference any religious tradition.
Frame the axioms as global ethical principles aligned with human rights, justice, and responsible scientific advancement.

Output in Markdown.
```

### Definitions

```
Draft a document titled "Definitions and Terminology".

Purpose:
Provide authoritative definitions to prevent ambiguity and misuse in AI and Quantum standards.

Include definitions for:
- Artificial Intelligence
- Autonomy
- Human Agency
- Explainability
- Moral Decision-Making
- Dual-Use Technology
- Quantum Advantage
- Human Oversight

Requirements:
- Definitions must be precise, non-circular, and regulator-ready
- Avoid marketing or speculative language
- Ensure definitions work for both AI and Quantum contexts

Output in Markdown.
```

### Scope & Non-Scope

```
Draft a document titled "Scope and Non-Scope of the Standards".

Purpose:
Define what systems, uses, and contexts are covered and excluded.

Include:
- Covered technologies
- Excluded technologies
- Research vs deployment distinction
- Transitional and edge cases
- Explicit non-scope statements to prevent overreach

Requirements:
- Use legal-style clarity
- Avoid moralizing language
- Anticipate regulatory interpretation

Output in Markdown.
```

## Risk Framework Prompt (Phase 2)

### Risk Classification Framework

```
Draft a document titled "Risk Classification Framework for AI and Quantum Systems".

Purpose:
Establish a risk-based classification system that determines applicable controls.

Include:
- Risk philosophy
- Risk dimensions (e.g., impact, scale, reversibility, opacity)
- Risk tiers (0–3 or 0–4)
- Mandatory controls by tier
- Escalation and reclassification rules

Requirements:
- Apply equally to AI and Quantum systems
- Align with NIST AI RMF and similar frameworks
- Avoid speculative existential claims
- Focus on measurable harm and impact

Output in Markdown.
```

## AI Standard Prompt (Phase 3)

### AI Transparency & Explainability

```
Draft a standard titled "Transparency and Explainability Requirements for AI Systems".

Purpose:
Define mandatory transparency and explainability requirements for AI systems based on risk tier.

Include:
- Ethical mapping to the foundational axioms
- Clear distinctions between explainability, interpretability, and disclosure
- Requirements by risk tier
- Acceptable and unacceptable opacity claims
- Compliance and audit evidence

Requirements:
- Use MUST/SHOULD/MAY language
- Be realistic about technical limits
- Do not assume explainability is always possible
- Prohibit deceptive transparency practices

Output in Markdown.
```

## Quantum Standard Prompt (Phase 4)

### Quantum Cryptographic & Security Risk

```
Draft a standard titled "Cryptographic and Security Risk Standards for Quantum Computing".

Purpose:
Address ethical, security, and geopolitical risks arising from quantum capabilities.

Include:
- Post-quantum cryptographic transition ethics
- Responsible disclosure norms
- Asymmetric power risks
- Dual-use considerations
- International coordination requirements

Requirements:
- Avoid speculative timelines
- Treat quantum advantage as context-dependent
- Emphasize global stability and trust
- Use formal standards language

Output in Markdown.
```

## Audit & Assurance Prompt (Phase 5)

### Audit, Assurance, and Compliance Framework

```
Draft a document titled "Audit, Assurance, and Compliance Framework".

Purpose:
Define how compliance with AI and Quantum standards is evaluated and enforced.

Include:
- Self-attestation vs third-party audits
- Continuous monitoring expectations
- Incident reporting requirements
- Remediation and sanctions
- Cross-border audit challenges

Requirements:
- Align with existing compliance models
- Emphasize accountability and proportionality
- Avoid punitive tone

Output in Markdown.
```

## Contribution & Evolution Prompt

### CONTRIBUTING.md

```
Draft a CONTRIBUTING.md file for an open standards repository.

Include:
- Contribution principles
- Ethical expectations
- Review and consultation process
- Versioning and change control
- Conflict resolution approach

Requirements:
- Encourage diverse participation
- Prevent capture by narrow interests
- Reflect consultative governance norms

Output in Markdown.
```

