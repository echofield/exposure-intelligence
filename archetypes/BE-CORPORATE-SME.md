# Archetype: BE-CORPORATE-SME

> Jurisdiction: Belgium
> Population: Corporate SME, Brussels or Antwerp region
> Version: 1.0

---

## Structured input

| Dimension | Value |
|---|---|
| `jurisdiction` | BE |
| `sector` | B2B_SERVICES |
| `company_size` | SME |
| `revenue_band` | €10–50M |
| `employee_band` | 50–250 |
| `ai_surface_category` | CUSTOMER_AUTOMATION, PRODUCTIVITY_TOOLS |
| `business_function_affected` | COMMERCIAL, HR, OPERATIONS |
| `deployment_model` | EMBEDDED_SAAS, VENDOR_MANAGED |
| `regulatory_sensitivity` | Medium |
| `external_dependency_level` | Moderate |

---

## AI surface profile

**Customer-facing automation** — vendor-managed conversational AI deployed on the company's public-facing digital surface (website, customer portal, or service interface). Used for customer support routing, FAQ responses, lead qualification, or initial service intake. The tool may perform filtering, scoring, or routing of individual customer requests.

**Productivity AI** — AI writing assistant or office suite AI embedded in standard operations. Used for drafting commercial communications, internal reports, and operational documentation.

---

## Regulatory overlay (Belgium)

**EU AI Act:** Full applicability. Customer-facing automation with filtering, routing, or scoring functions may require classification review. If the tool performs emotional inference, biometric classification (voice or facial analysis), or systematic profiling of individuals interacting with it, high-risk or prohibited-practice analysis is mandatory. Transparency obligations under the AI Act require disclosure to individuals that they are interacting with an AI.

**GDPR:** Customer data processing through AI automation. The company is data controller. Third-party chatbot vendor is data processor. A compliant DPA covering the AI tool's data processing is required. Customer personal data (name, contact details, service usage, behavioral patterns) collected through the automated interface requires a documented lawful basis.

**APD / GBA:** Belgian data protection authority. Active enforcement posture. The APD has specifically addressed AI-driven profiling and automated decision-making in several decisions. FRIAs (Fundamental Rights Impact Assessments) are expected by the APD where AI tools have significant effects on individuals accessing services.

**Automated decision-making (Article 22 GDPR):** If the customer-facing AI produces outputs that determine whether a customer receives a service, is routed to a priority queue, or is denied access to a feature — and if this constitutes a decision with legal or similarly significant effects — Article 22 GDPR applies. The company must provide the right to human review and explanation.

**AI Act transparency:** Article 50 EU AI Act requires operators of AI systems that interact with natural persons to ensure those individuals are informed they are communicating with an AI. This obligation is applicable and often not implemented.

---

## Structural exposure profile

**Customer-facing classification gap:** The customer-facing AI tool has not been formally classified under the EU AI Act risk categories at archetype level. If the tool performs filtering or scoring with significant individual effects (e.g., credit-adjacent routing, priority access determination, employment-related intake), it may fall into the high-risk category under Annex III.

**FRIA obligation:** Where the automation has significant effects on individuals accessing services — particularly if the customer base includes individuals in vulnerable situations — the APD expects a Fundamental Rights Impact Assessment. This is not yet a universal formal requirement across all Belgian entities but reflects active regulatory expectation.

**Transparency gap:** No disclosure to customers that they are interacting with an AI. Article 50 EU AI Act obligation is not met at archetype level.

**Vendor contract gap:** SME-tier contracts with chatbot or customer automation vendors typically include standard terms that do not address AI auditability, model drift notification, or data deletion obligations. The company lacks contractual levers to enforce compliance if the vendor changes the model's behavior.

**HR adjacency:** If the customer-facing automation tool is also used for internal HR intake (employee requests, leave management, internal service portal), employment-related AI obligations apply: Works Council notification (Article 144 loi relative aux contrats de travail) and specific documentation requirements.

**Governance gap:** No AI disclosure to customers. No documented human escalation path for automated decisions. No classification exercise for the customer automation tool. No DPIA covering customer personal data processed through the AI interface.

---

## Archetype notes

This archetype fits Belgian boutique law firms advising corporate SMEs on digital compliance, GDPR, and AI Act readiness. Belgium's proximity to EU regulatory institutions creates higher institutional awareness and APD enforcement activity than comparable jurisdictions. The customer-facing automation transparency gap is the clearest immediate law-firm lever — it is a concrete, document-level gap with a specific statutory obligation and a clear remediation path. The FRIA requirement adds a second distinct engagement if the company's customer base triggers it.
