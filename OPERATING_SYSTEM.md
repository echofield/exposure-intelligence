# Exposure Intelligence — Operating System

> Layer: product architecture
> Version: 1.0
> Audience: product, commercial, partner conversations, future sessions

---

## 1. Category Definition

**Exposure Intelligence** is a product category, not a service line.

It produces structured technical evidence artifacts that legal advisors use as the evidence layer beneath their advice, negotiation, diligence, and procurement counsel.

It is not:
- AI governance consulting
- A compliance platform
- A policy template vendor
- A legal advisory firm

It operates through one distribution model: boutique law firms, white-label, under their letterhead.

The engine that produces the artifacts is invisible. The artifact is the product.

**Core doctrine (non-negotiable, applies to every artifact in every tier):**

> The artifact surfaces conditions. The lawyer names the law.

---

## 2. Unified Terminology Canon

One vocabulary. No exceptions across tiers, products, or client contexts.

### Entity vocabulary

| Term | Definition |
|---|---|
| **Entity** | The company or organization being analyzed. Never "client" (that belongs to the law firm). |
| **Partner** | The law firm distributing the product under their letterhead. |
| **Buyer** | The regulated counterparty the entity faces: a public administrtaion, bank, insurer, fund, or acquirer. |
| **Investor / Sponsor** | The PE firm or strategic acquirer conducting diligence. |

### Artifact vocabulary

| Term | Definition |
|---|---|
| **Dossier** | Any deliverable in the product family, regardless of tier. The external name for the artifact. |
| **Evidence pack** | A Tier 1 dossier. Diagnostic format. Used for entities deploying AI. |
| **Procurement dossier** | A Tier 2 dossier. Structured format. Used for vendors or builders facing regulated buyers. |
| **Diligence pack** | A Tier 3 dossier. Transaction format. Used in M&A and PE contexts. |
| **Archetype** | The structured input defining the analytical population. One archetype → one dossier shape. |

### Structural vocabulary

| Term | Definition |
|---|---|
| **Exposure signal** | An observable technical or organizational condition that requires legal interpretation. Never a legal conclusion. |
| **Evidence gap** | Documentation that should structurally exist for this archetype and does not. |
| **Escalation trigger** | A specific condition that requires immediate attorney engagement before further action. |
| **Procurement gate** | A structured buyer-review requirement that the entity must pass before award or onboarding. |
| **Blocker** | A procurement gate the entity currently cannot pass because required evidence is absent or insufficient. |
| **Dependency map** | A structured view of which external vendors, models, or infrastructure layers the entity critically depends on, and what the reversal cost is. |
| **Remediation pathway** | A technical or organizational step that reduces exposure. Never legal advice. |
| **Deployment surface** | The full set of AI tools, vendors, and workflows active in the entity, by function. |
| **Reversibility** | The entity's demonstrated ability to exit a vendor dependency or reconstruct operations without that vendor. |
| **Kill-chain** | The sequence of buyer-review stages where evidence failure typically destroys a deal or procurement award. |

### Banned substitutions

| Never use | Use instead |
|---|---|
| "Article X applies" | Describe the condition. Let the lawyer name the provision. |
| "X obligation is triggered" | "Requires attorney assessment" |
| "Ramification" | "Exposure signal" or "second-order condition" |
| "Forced future" | "Escalation trigger" |
| "Negative space" | "Evidence gap" |
| "Constraint architecture" | "Regulatory constraint" |
| "This constitutes a violation" | Describe the absence. Never conclude. |
| "AI governance" | "Exposure intelligence" or "structured AI evidence" |
| "Compliance" (as destination) | "Procurement admissibility" or "buyer defensibility" |

---

## 3. Dossier Grammar Standard

All dossiers — regardless of tier, context, or price point — share the same section grammar. Sections are renamed per context but the underlying logic is invariant.

### Invariant grammar (nine sections)

| Section | Function | Applies to |
|---|---|---|
| **1 — Executive Verdict** | What matters, how severe, top three conditions, escalation triggers. Plain language. No legal conclusions. | All tiers |
| **2 — Scope & Archetype** | Who this covers, what is assumed, what regulatory framework is in scope, limitations. | All tiers |
| **3 — Surface / Gate Map** | What the entity has deployed (Tier 1), or what procurement gates apply (Tier 2), or what the deal risk map shows (Tier 3). | Per-tier content |
| **4 — Dependency View** | Vendor, model, or infrastructure dependencies. Criticality, reversibility, contract coverage. | All tiers |
| **5 — Evidence Gaps** | What should exist and does not. Three subsections: what is known / what is not evidenced / what cannot yet be established. | All tiers — signature section |
| **6 — Exposure Signals** | Enumerated technical and organizational conditions, grouped by exposure type. No regulatory basis column. No article citations. | All tiers |
| **7 — Remediation Pathways** | Prioritized technical and organizational steps. Redirects to counsel for legal interpretation. | All tiers |
| **8 — Escalation Triggers** | Specific conditions requiring immediate attorney engagement. Category labels only, no statutory citations. | All tiers |
| **9 — Appendix** | Archetype input, assumptions, evidence checklist, first-questions for counsel. | All tiers |

### Section naming by tier

| Section | Tier 1 — Evidence Pack | Tier 2 — Procurement Dossier | Tier 3 — Diligence Pack |
|---|---|---|---|
| 3 | AI Usage Exposure Map | Procurement Gate Map | AI Surface & Deal Risk Map |
| 4 | Vendor Dependency View | Dependency & Reversibility Map | Vendor & Model Dependency Map |
| 5 | Governance Blind Spots & Evidence Gaps | Evidence Architecture Required | Evidence Gaps & Missing Records |
| 6 | Regulatory & Operational Exposure Signals | Sovereignty & Compliance Exposure Signals | Deal Exposure Signals |
| 7 | Technical Mitigation Pathways | Remediation Roadmap | Post-Close Remediation Pathways |
| 8 | Escalation Signals for Legal Review | Counsel Review Triggers | Deal-Term Implications for Counsel |

### Grammar rules (enforced across all tiers)

1. No statutory article citations in any client-facing section. Regulatory basis belongs in the partner's legal memo, not in the dossier.
2. Every exposure signal ends in one of three verdicts: "Confirmed at archetype level" / "Requires entity-level verification" / "Requires attorney assessment."
3. The evidence gaps section always has three subsections: known / not evidenced / cannot yet be established. This is the engine signature.
4. The escalation triggers section uses category labels in the Risk Area column, never article numbers.
5. The appendix evidence checklist is formatted as a request list — the partner uses it to open the first client meeting.

---

## 4. Product Ladder

Three tiers. Same engine. Same doctrine. Different client context.

```
TIER 1                    TIER 2                    TIER 3
─────────────────         ─────────────────         ─────────────────
AI Exposure               Sovereign                 AI Exposure
Evidence Pack             Procurement               Diligence Pack
                          Dossier
                          ──────────
                          Construction
                          Procurement
                          Dossier

CONTEXT:                  CONTEXT:                  CONTEXT:
Entity has                Entity sells or           Investor evaluates
deployed AI.              builds for                entity with AI
                          regulated buyers.         exposure.

QUESTION:                 QUESTION:                 QUESTION:
What is the               Can regulated             What is hidden,
entity's                  buyers award,             what affects
exposure                  onboard, and              value, what
posture?                  defend this               breaks post-close?
                          vendor?

CLIENT:                   CLIENT:                   CLIENT:
Company with              SaaS vendor,              PE sponsor,
AI tools.                 construction              M&A counsel,
                          group,                    operating
                          regulated                 partner.
                          services firm.

PRICE ENTRY:              PRICE ENTRY:              PRICE ENTRY:
€3k–€8k                   €15k–€50k                 €15k–€40k
(pilot)                   (red-flag scan)           (red-flag scan)
```

---

## 5. Offer Taxonomy

Four named products. Two at Tier 2.

### Product 1 — AI Exposure Evidence Pack (Tier 1)

**Who:** Any entity that has deployed AI tools — whether as an employer, service provider, or commercial operator — and needs to understand and document its exposure posture.

**What the partner does with it:** Uses it as the evidence layer under compliance advice, board presentations, vendor contract reviews, GDPR advisory, and AI Act readiness mandates.

**Archetype family:** FR-CORPORATE-MID, CH-FINANCE-BOUTIQUE, LU-HOLDING-MID, BE-CORPORATE-SME.

**Typical partner:** Corporate law boutique, data protection specialist firm, employment law firm.

**The gap this fills:** The entity's general counsel wants to know what their exposure is before a regulator or litigant asks. The partner needs a technical evidence base that they didn't build themselves.

---

### Product 2 — Sovereign Procurement Dossier (Tier 2)

**Who:** A European B2B SaaS vendor, AI services provider, or tech-enabled services firm trying to access public-sector, healthcare, or financial-sector buyers that require sovereignty evidence, DORA reversibility, and AI Act role clarity.

**What the partner does with it:** Uses it as the structuring instrument for regulatory positioning, contract architecture, and buyer-objection responses. Turns procurement delay into billable deal-structuring work.

**Archetype family:** EU-SAAS-PUBLIC, EU-SAAS-FINANCIAL, EU-SAAS-HEALTH (to be built).

**Typical partner:** Digital law boutique, technology procurement counsel, regulatory advisory firm.

**The gap this fills:** The vendor's deals are stalling at legal, security, or DPO review. The partner can convert those stalls into structured evidence work — instead of losing the client to generic consulting.

---

### Product 3 — Construction Procurement Dossier (Tier 2)

**Who:** A French mid-market or upper-mid-market construction group, design-build operator, or civil works contractor competing for public tenders with environmental, sustainability, and traceability award criteria.

**What the partner does with it:** Uses it as the structuring instrument for tender evidence architecture, supply-chain documentation, clause library design, and award narrative construction.

**Archetype family:** FR-CONSTRUCTION-MID, FR-CONSTRUCTION-LARGE (to be built).

**Typical partner:** French public procurement boutique, construction law firm, environmental advisory counsel.

**The gap this fills:** The contractor assembles bid evidence ad hoc and loses tenders to competitors with stronger documentation. The partner can turn tender structuring into a standing advisory relationship.

**Note:** This is the strongest first public demo. Value is immediately legible to any lawyer: better tenders, lower bid friction, concrete client pain.

---

### Product 4 — AI Exposure Diligence Pack (Tier 3)

**Who:** A PE sponsor, M&A advisory team, or operating partner evaluating a European target with AI-enabled products, AI-assisted operations, or significant third-party AI vendor dependencies.

**What the partner does with it:** Uses it as the deal-risk instrument for price adjustment, escrow, warranty, covenant, or walk-away signals. Converts hidden AI exposure into specific deal terms.

**Archetype family:** PE-SAAS-TARGET, PE-HRTECH-TARGET, PE-FINTECH-TARGET (to be built).

**Typical partner:** M&A counsel, PE advisory firm, transaction services boutique.

**The gap this fills:** Standard diligence splits AI risk across legal, tech, cyber, HR, and data protection workstreams. Nobody owns the combined picture. The pack owns the combined picture and gives the partner a unified deal-risk instrument.

---

## 6. Pricing Ladder

All prices are hypothesis-grade pending first commercial validation. Do not present as fixed rates before the first partner meeting.

| Product | Entry (pilot / red-flag) | Standard | Premium |
|---|---|---|---|
| AI Exposure Evidence Pack | €3k–€7.5k | €8k–€20k | — |
| Sovereign Procurement Dossier | €25k–€50k (red-flag scan) | €75k–€150k (full dossier) | €100k–€200k (DORA sprint) |
| Construction Procurement Dossier | €15k–€35k (diagnostic) | €40k–€90k (board-ready dossier) | €100k+ (multi-tender redesign) |
| AI Exposure Diligence Pack | €15k–€35k (red-flag scan) | €40k–€100k (single target) | €100k–€250k+ (PE portfolio) |

### Pricing rationale

**Tier 1 is the wedge.** The evidence pack is priced low enough to pilot within a partner's existing client relationship without a procurement process. It builds trust and proves repeatability. The law firm does not need to pitch it as a new service — it is an enhanced due diligence instrument they already had reason to produce.

**Tier 2 is the practice.** Sovereign procurement and construction procurement work is priced as market-access structuring, not compliance hygiene. The client is paying to win contracts or access restricted buyers — the ROI is immediate and legible. The partner prices it as deal-structuring work, not documentation.

**Tier 3 is the transaction module.** Diligence pack pricing is tied to deal value, not time. The €15k entry is a red-flag scan that can be done quickly and gives the sponsor reason to expand. The €100k–€250k range reflects portfolio-level work where the same archetype is applied across multiple targets.

### Progression logic

A partner that starts with a Tier 1 evidence pack for one client has everything they need to upsell:
- The same client may need a Sovereign Procurement Dossier if they're a SaaS vendor (Tier 2).
- A different client may be evaluating an acquisition target with AI exposure (Tier 3).
- The construction group is a standalone Tier 2 relationship — often a partner's anchor client.

The partner does not need to understand the full ladder on the first meeting. The entry product gets them to the second conversation.

---

## 7. Homepage Narrative Architecture

The homepage serves one primary audience: boutique law firm partners evaluating whether to adopt the product as a distribution channel.

It serves a secondary audience: the entity itself (company GC, SaaS founder, PE operating partner) who arrives directly and needs to recognize their situation immediately.

The page does not explain the engine. The page sells the artifact and the partner model.

### Block structure

**Block 1 — Category claim (above the fold)**

One line. Dense. No jargon.

> "The evidence layer beneath legal advisory on AI risk."

Sub-line: "Structured technical dossiers your firm can use under your name, without creating a data-processing surface."

Primary CTA: "See the sample dossier" (→ FR-CORPORATE-MID sample, or equivalent demo)
Secondary CTA: "Partner inquiry" (→ law firm intake form)

---

**Block 2 — The pressure**

Short. Three sentences maximum.

European companies, vendors, and investors now face a concrete demand: produce structured technical evidence — not policy statements — on AI deployment, procurement admissibility, and transaction exposure.

Regulators, public buyers, financial institutions, and deal teams are not asking for more governance frameworks. They are asking for proof.

The firms that can produce that proof on behalf of their clients — quickly, under their own name — will capture the mandate.

---

**Block 3 — The model**

Two columns: what the dossier is / what the partner does with it.

Left: "A structured technical evidence artifact. Archetype-based. No client data ingested. Same input → same artifact shape."

Right: "The partner deploys it under their letterhead. As the evidence layer beneath a legal opinion, a procurement mandate, a due diligence brief, or a board advisory."

One line below: "The artifact surfaces conditions. The lawyer names the law."

---

**Block 4 — Three contexts, three products**

Three cards. One per tier. Clean.

**Card 1 — AI Deployment**
Entity has AI tools. Partner needs the exposure map.
→ AI Exposure Evidence Pack. From €8k.

**Card 2 — Regulated Procurement**
Vendor needs to pass regulated buyer review. Contractor needs stronger tenders.
→ Sovereign Procurement Dossier / Construction Procurement Dossier. From €40k.

**Card 3 — Transaction**
Investor is evaluating a target with AI exposure.
→ AI Exposure Diligence Pack. From €40k.

Each card: one sentence on who it's for, one sentence on what it produces, one sentence on what the partner does with it, and a price anchor.

---

**Block 5 — Demo**

One sentence: "Read the sample dossier."

No explanation. No methodology description. The dossier speaks for itself.

Link to the full FR-CORPORATE-MID sample (or equivalent public-ready version).

---

**Block 6 — Partner inquiry**

For law firms only. Not a sales form.

Three questions:
1. Which client context is most relevant: AI deployment, regulated procurement, or transaction?
2. Which jurisdiction: France, Switzerland, Luxembourg, Belgium, or other?
3. Do you have a first client in mind?

Response within 48 hours. First deliverable: a free archetype scoping call, not a pitch deck.

---

### What the homepage does not do

- Does not explain the engine or the methodology.
- Does not cite regulatory articles.
- Does not offer a free report, a webinar, or a whitepaper.
- Does not position as "AI governance" or "compliance."
- Does not address the entity directly — the partner is always in the middle.
- Does not have more than six blocks.

---

## 8. Build Sequence for Remaining Artifacts

The operating system is now in place. What remains:

| Priority | Item | Status |
|---|---|---|
| 1 | Construction procurement archetype (FR-CONSTRUCTION-MID) | Not built |
| 2 | Construction procurement dossier sample | Not built |
| 3 | Sovereign SaaS archetype (EU-SAAS-FINANCIAL or EU-SAAS-PUBLIC) | Not built |
| 4 | AI Diligence Pack archetype (PE-SAAS-TARGET or PE-HRTECH-TARGET) | Partial: backend sample intake exists |
| 5 | Partner-facing one-pager (based on Block 2–3 of homepage) | Not built |
| 6 | Homepage static implementation | Built: `index.html`, `styles.css`, `script.js` |
| 7 | Backend runtime | Built: `package.json` + `engine/` |
| 8 | Window Intelligence evaluator | Built initial local evaluator; French public API connectors not wired yet |

Do not build any of the above until the Tier 1 evidence pack has been validated in a partner meeting. The operating system defines the architecture. The meeting defines the priority.

---

## 9. Backend Runtime Status

As of 2026-05-24, the project has a first executable backend runtime under `engine/`.

Implemented:
- Dependency-free Node.js engine.
- CLI dossier generation from archetype JSON.
- CLI PDF export for generated dossiers.
- HTTP API with `/health`, `/products`, `/dossiers/generate`, and `/window/evaluate`.
- HTTP API with `/review-statuses` and `/dossiers/export-pdf`.
- Product router for AI Exposure Evidence Pack, Sovereign Procurement Dossier, Construction Procurement Dossier, and PE AI Dependency Diligence Pack.
- Deterministic Markdown dossier output.
- Partner-branded metadata: partner firm, logo placeholder, prepared for, product name, date basis, reference ID, disclaimer block.
- Review status model: draft, reviewed, partner-ready.
- Evidence gap, dependency map, exposure signal, escalation trigger, remediation pathway, and evidence request generation.
- Vocabulary firewall for generated client-facing artifacts.
- Window Intelligence evaluator for French company signal snapshots.
- Sample intakes under `engine/samples/`.

Not implemented yet:
- Database persistence.
- Partner authentication.
- French public API connector layer.
- Scheduled monitoring jobs.
- Human review queue.
- Designed PDF layout beyond the current local text PDF renderer.
- Frontend preview UI.

Runtime commands:

```powershell
npm run engine:check
npm run engine:server
npm run engine:generate -- --product ai-exposure-evidence-pack --input engine/samples/intakes/fr-corporate-mid.json --out engine/generated/fr-corporate-mid.md
npm run engine:pdf -- --product ai-exposure-evidence-pack --input engine/samples/intakes/fr-corporate-mid.json --out engine/generated/fr-corporate-mid.pdf --status partner-ready
npm run engine:window -- --input engine/samples/window-signals/transmission-idf-sarl.json --out engine/generated/transmission-window.md
```
