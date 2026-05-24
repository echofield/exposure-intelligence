# Exposure Intelligence — Dossier Design System

> Layer: production
> Version: 1.0
> Audience: artifact production, frontend implementation, partner delivery

This document governs all dossier production across every tier, product, and client context. Rules here are enforced. Deviations require explicit justification recorded in the specific artifact.

---

## 1. Master Grammar

All dossiers share nine invariant sections. Section numbers never change. Section names vary by tier and product.

| # | Section | Function |
|---|---|---|
| 1 | Executive Verdict | What matters, how severe, top conditions, escalation triggers. Plain language. No legal conclusions. |
| 2 | Scope & Archetype | What is covered, what is assumed, what regulatory framework is in scope, what the limitations are. |
| 3 | Surface / Gate / Deal Map | Tier-dependent. What is deployed (T1), what procurement gates apply (T2), what deal risks are mapped (T3). |
| 4 | Dependency View | Vendor, model, or infrastructure dependencies. Criticality, reversibility, contract coverage. |
| 5 | Evidence Gaps | Three mandatory subsections: known / not evidenced / cannot yet be established. Engine signature. |
| 6 | Exposure Signals | Technical and organizational conditions. No statutory citations. No regulatory basis column. |
| 7 | Remediation Pathways | Prioritized technical and organizational steps. No legal advice. Attorney redirect only. |
| 8 | Escalation Triggers | Conditions requiring immediate attorney engagement. Category labels only. No article citations. |
| 9 | Appendix | Archetype input, assumptions, evidence checklist, first questions for counsel. |

### Section naming by product

| Section | AI Exposure Evidence Pack (T1) | Sovereign Procurement Dossier (T2) | PE AI Dependency Diligence Pack (T3) |
|---|---|---|---|
| 1 | Executive Exposure Summary | Executive Verdict | Executive Verdict |
| 2 | Scope & Methodology | Archetype Reviewed | Archetype Reviewed |
| 3 | AI Usage Exposure Map | Procurement Gate Map | AI Dependency Concentration Map |
| 4 | Vendor Dependency View | Dependency & Reversibility Map | Model Substitution & Dependency Risk |
| 5 | Governance Blind Spots & Evidence Gaps | Evidence Architecture Required | Data-Flow Opacity & Evidence Gaps |
| 6 | Regulatory & Operational Exposure Signals | Sovereignty & Compliance Exposure Signals | Customer Data & Contract Exposure Signals |
| 7 | Technical Mitigation Pathways | Remediation Roadmap | Post-Close Remediation Pathways |
| 8 | Escalation Signals for Legal Review | Counsel Review Triggers | Deal-Term Implications for Counsel |
| 9 | Appendix | Appendix | Appendix |

The Construction Procurement Dossier (T2) follows the same nine-section grammar when built. Section naming follows the procurement dossier pattern, adapted for the construction and public tender context.

### Extended sections (flagship dossiers only)

The two flagship premium dossiers — Sovereign Procurement Dossier and PE AI Dependency Diligence Pack — include additional named sections beyond the standard nine. These are product-specific extensions (e.g., Sections 10 through 20 in the PE dossier). All extension sections follow the same grammar rules: no article citations, same severity language, same evidence posture taxonomy.

---

## 2. Severity Language

Four levels. Applied consistently across all sections, all tiers, all products. No synonyms permitted.

| Level | Label | Meaning |
|---|---|---|
| 1 | **Low** | Observable condition. No immediate action required. Track and document. |
| 2 | **Medium** | Structural exposure present. Remediation pathway recommended. Attorney review in near term. |
| 3 | **High** | Significant condition. Attorney engagement recommended before further action. |
| 4 | **Critical** | Condition requiring immediate attorney engagement. May affect deal certainty, procurement admissibility, or legal posture. No further action without attorney guidance. |

### Severity rules

- Severity is assigned to individual signals, not to sections.
- A section may contain signals at multiple severity levels.
- The Executive Verdict (§1) summarizes the highest-severity signals only.
- A signal assessed as Critical must appear in §8 (Escalation Triggers).
- Never use severity language outside these four labels. Do not use "urgent," "moderate," "extreme," "significant," or any synonym.

---

## 3. Evidence Posture Taxonomy

Every exposure signal in §6 ends in one of three verdicts. No exceptions.

| Verdict | Meaning | When to use |
|---|---|---|
| **Confirmed at archetype level** | The condition is structurally present based on the archetype profile. No entity-level verification is required to establish its existence. | The condition follows directly from the archetype dimensions — sector, jurisdiction, AI surface, deployment model. |
| **Requires entity-level verification** | The condition is structurally expected but must be confirmed against the specific entity's documentation, systems, or practice before the partner relies on it. | The condition is probable but depends on facts the archetype does not determine. |
| **Requires attorney assessment** | The condition has legal implications that qualified counsel must interpret before any action or conclusion. The artifact surfaces the condition. The attorney names the provision. | The signal has direct regulatory, contractual, or employment implications requiring legal interpretation. |

### Evidence posture rules

- Every row in a §6 signal table ends with one of these three verdicts in the Status column.
- The column is labeled **Status** — not "Verdict," "Assessment," or "Conclusion."
- Never combine verdicts in a single signal row. If a signal has multiple dimensions, split it into separate rows.
- "Requires attorney assessment" is not a weakness. It is the product's core value: it creates the attorney engagement moment.

---

## 4. Escalation Taxonomy

§8 uses category labels in the Risk Area column. No statutory article citations. Ever.

### Approved category labels

| Category | Applies to |
|---|---|
| Employment + automated processing | Signals where AI outputs could influence employment decisions |
| AI Act compliance | Signals related to AI system classification, role boundaries, or intended use |
| Data protection | GDPR, nFADP, or equivalent data processing exposure |
| Cross-border data | Transfers, sub-processors, or processing outside declared jurisdiction |
| Procurement admissibility | Buyer review barriers the entity currently cannot pass |
| Dependency concentration | Single-point-of-failure vendor or model dependency |
| Contract architecture mismatch | Gap between contractual promise and technical architecture |
| Reversibility failure | Absence of a tested exit, export, or migration plan |
| IP provenance | Uncertainty around ownership of prompts, evals, fine-tuning data, or outputs |
| Customer promise exposure | Customer commitments the architecture cannot evidence |
| Valuation fragility | AI narrative premium not supported by control evidence |
| Product liability | Defective output, insufficient warning, or undocumented workflow risk |
| Sovereignty exposure | Jurisdictional access, control, or foreign-regime reach concerns |

### Escalation table structure (§8)

| Column | Content |
|---|---|
| Risk area | Approved category label only. No article citations. |
| Condition | Specific technical or organizational condition that triggers escalation. Plain language. |
| Required action | What the attorney or deal team must assess before further action. Specific and bounded. |
| Timing | One of: Immediate / Before next buyer submission / Before signing / Before closing / Within 30 days |

---

## 5. Visual Hierarchy

### Heading levels

| Level | Markdown | Usage |
|---|---|---|
| H1 | `# Title` | Dossier title only. One per document. |
| H2 | `## Section N — Section Name` | Nine numbered sections plus appendix. |
| H3 | `### Subsection Name` | Named subsections within a section. |
| H4 | `#### Component Name` | Named components within a subsection. Use sparingly. |

### Horizontal rules

- Use `---` between sections only.
- Do not use horizontal rules within sections.

### Bold text

- Bold is reserved for: signal labels, severity ratings, evidence posture verdicts, key definitions, and product names.
- Do not use bold for emphasis in running prose. Rewrite the sentence instead.

### Tables

- All tables have a header row.
- All column headers are title-case.
- Minimum three columns per table.
- Maximum seven columns per table.
- No merged cells.
- No empty cells — use "—" for not applicable.
- Do not use nested tables.

### Lists

- Bullet lists: use for items that are unranked and non-conditional.
- Numbered lists: use for steps, questions, or priority sequences only.
- Do not enumerate exposure signals as bullets — use tables.
- Maximum five bullets in a list before converting to a table.

---

## 6. Section-Specific Grammar

### §5 — Evidence Gaps

Always has exactly three subsections, in this order:

1. **What is known** — conditions evidenced at archetype level that are documented or observable
2. **What is not evidenced** — conditions that should structurally exist for this archetype and are not documented
3. **What cannot yet be established** — conditions requiring entity-level information not available from the archetype alone

These subsection names are invariant. Do not rename them. Do not merge them.

### §6 — Exposure Signals

Signal table columns are always:

| Condition | Severity | Status |
|---|---|---|
| Description of the specific technical or organizational condition. No article citations. | Low / Medium / High / Critical | One of the three evidence posture verdicts |

No "Regulatory basis" column. No "Legal reference" column. No article citations embedded in condition descriptions.

### §7 — Remediation Pathways

Three priority tiers:

- **Immediate** — no legal review required to begin; technical or organizational action
- **Near-term** — legal review recommended before or alongside action
- **Structured** — legal review required before action; attorney leads or co-leads

Each pathway that involves legal judgment includes the line: "Attorney guidance required before implementation."

### §8 — Escalation Triggers

Escalation table columns are always:

| Risk Area | Condition | Required Action | Timing |
|---|---|---|---|
| Approved category label only | Specific condition in plain language | Attorney or deal team assessment required | Timing window |

No article citations in any column.

### §9 — Appendix

Standard appendix structure:

- **Appendix A — Archetype Input**: The 10-dimension archetype that generated this artifact. Verbatim.
- **Appendix B — Assumptions**: What was assumed to be true in the absence of entity-specific data.
- **Appendix C — Evidence Checklist**: A request list the partner uses to open the first client meeting. Formatted as document requests, not compliance questions.
- **Appendix D — Technical Glossary**: Technical terms only. No statutory article definitions. No legal definitions intended for the client.
- **Appendix E — First Questions for Counsel** (T1) / **First Client Questions** (T2/T3): Numbered questions the partner asks to open the engagement.

---

## 7. Executive Summary Structure (§1 Template)

All executive verdicts share the same component sequence.

### Component 1 — Strategic Finding

Prose. 1 to 3 paragraphs. The top-line read in plain language.

- States what is at stake, not what the rules say.
- No article citations.
- Written for a partner who will read it before a client call.
- Makes the commercial context immediately legible.

### Component 2 — Brutal Read

Prose. One short paragraph. Unfiltered assessment of the entity's current posture.

- Label: "Brutal Read" — invariant when used.
- No softening. No qualification. No hedging.
- Used in both flagship premium dossiers.
- Optional in standard Tier 1 artifacts unless the partner requests an unfiltered summary.

### Component 3 — Exposure Profile

Single labeled block or two-column table.

- **Overall profile:** Low / Medium / High / Critical
- One sentence explaining why.

### Component 4 — Top Conditions Table

| Column | Content |
|---|---|
| Condition / Deal-killer / Blocker | Specific condition label |
| Why it matters | Commercial or legal significance in plain language |
| Current evidence posture | What evidence currently exists or does not exist |

5 to 7 rows maximum.

- Tier 1: "Top Exposure Conditions"
- Tier 2: "Top Procurement Blockers"
- Tier 3: "Top Seven Deal-Killers"

### Component 5 — Interpretation Questions

Numbered list. 4 to 5 questions. Written for a partner to use with the client or investment committee.

- Tier 1: "Questions for Legal Review"
- Tier 2: "Procurement Committee / Board questions"
- Tier 3: "Investment Committee Translation"

### Component 6 — Partner-Level Interpretation

Prose. 1 to 2 paragraphs.

- Explains why this condition set creates a premium advisory mandate for the partner.
- Frames the commercial opportunity for the law firm — not for the entity.
- Does not describe the engine.
- Does not explain the methodology.

---

## 8. Notice and Disclaimer Standard

### Opening notice (mandatory — every dossier)

Immediately after the metadata header block. Must include:

1. Statement that the dossier is a technical evidence artifact, not legal advice.
2. List of what it is not: legal advice, legal opinion, compliance certification, audit opinion, valuation advice, investment advice.
3. Core doctrine: "This artifact surfaces conditions. Counsel names the law."
4. Data basis: archetype-based, no client systems or records accessed.

### Closing notice (mandatory — every dossier)

One-line attribution and disclaimer at the end of the document:

> *Prepared as an Exposure Intelligence artifact. This dossier surfaces [AI deployment / procurement / AI dependency] conditions for legal [and/or investment, diligence] interpretation. It does not provide legal advice, a compliance certification, or a valuation opinion.*

### Section-level redirects

- §7: Every pathway involving legal judgment ends with: "Attorney guidance required before implementation."
- §8: The Required Action column always points to attorney assessment — never to a regulatory article or self-help action.

---

## 9. Dependency Table Grammar (§4)

| Column | Content |
|---|---|
| Vendor / Component | Named or archetype-level dependency |
| Criticality | Low / Medium / High / Critical |
| Reversibility | Easy / Moderate / Difficult / Tested / Not tested |
| Contract coverage | Covered / Partial / Not covered |
| Notes | Specific concern, condition, or evidence gap |

---

## 10. Evidence Gap Table Grammar (§5)

| Column | Content |
|---|---|
| Item | The evidence or documentation that should structurally exist |
| Status | Known / Not evidenced / Cannot yet be established |
| Priority | Immediate / Near-term / Structured |
| Notes | Specific absence or downstream consequence |

---

## 11. Banned Patterns

These patterns are prohibited in every client-facing section of every dossier. No exceptions.

| Banned pattern | Required replacement |
|---|---|
| "Article X applies" | Describe the condition. Let the attorney name the provision. |
| "This triggers [obligation]" | "Requires attorney assessment" |
| "The entity must [legal obligation]" | "The attorney should assess whether [condition] creates an obligation" |
| "This constitutes a violation" | Describe the absence or condition. Never conclude. |
| "AI governance" | "Exposure intelligence" or "structured AI evidence" |
| "Compliance" as destination | "Procurement admissibility" or "buyer defensibility" |
| "Ramification" | "Exposure signal" or "second-order condition" |
| "Negative space" | "Evidence gap" |
| "Forced future" | "Escalation trigger" |
| "Constraint architecture" | "Regulatory constraint" |
| "Regulatory basis" column in §6 | Remove. No exceptions. In any tier. In any section. |
| Article citations in §8 escalation table | Use approved category labels from §4 of this document. |
| Legal article definitions in the Appendix | Replace with technical glossary. Technical terms only. |
| "Robust" | Rewrite. |
| "Comprehensive" | Rewrite. |
| "Seamless" | Rewrite. |
| "Holistic" | Rewrite. |
| "Leveraging" | Use "using" |
| "Streamline" | Rewrite. |
| "Cutting-edge" | Rewrite. |
| "Game-changing" | Rewrite. |
| "Analytics" (as category label) | Use the specific function being described. |
| "System" (as generic noun) | Use the specific type: AI tool, model, workflow, platform. |

---

## 12. Flagship vs. Standard Differentiators

| Element | Standard (T1/T2 base) | Flagship premium dossiers |
|---|---|---|
| Section count | 9 | 9 + named extensions |
| Brutal Read in §1 | Optional | Mandatory |
| Monetization architecture section | Not included | Included as named section |
| Board summary | Not separate | Separate named section |
| Buyer objection map | Not included | Included for multiple buyer categories |
| Remediation roadmap detail | Priority list | Full 10/30/60/90 or 30/60/100 day plan |
| Evidence request list | Appendix checklist | Full three-priority-tier request list |
| Partner meeting line | In POSITIONING.md | Embedded in monetization architecture section |

Flagship dossiers are complete standalone advisory instruments. Standard dossiers are evidence layers that the partner's own legal work completes. Both follow the same grammar. The difference is depth and commercial scope — not structure.
