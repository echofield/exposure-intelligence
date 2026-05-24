# Archetype Schema — Specification

> Layer: archetype input
> Version: 1.0

---

## Purpose

Every artifact run begins with a structured archetype. The archetype defines an analytical population — not an individual company. Same archetype → same artifact shape.

No real client data is ingested. The archetype is a structural profile: a combination of sector, jurisdiction, size, and AI surface that represents a recognizable class of European corporate entity.

---

## Input dimensions

| Dimension | Description | Values |
|---|---|---|
| `jurisdiction` | Primary operating jurisdiction for AI Act and data law applicability | FR / CH / LU / BE |
| `sector` | Primary sector classification | See §1 |
| `company_size` | Structural size category | SME / mid-market / large |
| `revenue_band` | Annual revenue range | <€10M / €10–50M / €50–200M / €200–500M / >€500M |
| `employee_band` | Headcount range | <50 / 50–250 / 250–1,000 / 1,000–5,000 / >5,000 |
| `ai_surface_category` | Primary AI deployment category | See §2 |
| `business_function_affected` | Business functions where AI is active | See §3 |
| `deployment_model` | How AI is accessed and operated | See §4 |
| `regulatory_sensitivity` | Regulatory exposure intensity for this archetype | Low / Medium / High / Critical |
| `external_dependency_level` | Degree of reliance on third-party AI vendors | Minimal / Moderate / High / Critical |

---

## §1 Sector values

| Code | Label |
|---|---|
| `B2B_SERVICES` | B2B professional and business services |
| `FINANCIAL_SERVICES` | Banking, asset management, insurance |
| `HOLDING_CORPORATE` | Holding and corporate structures |
| `MANUFACTURING` | Industrial and manufacturing |
| `RETAIL_COMMERCE` | Retail and e-commerce |
| `HEALTHCARE` | Healthcare and life sciences |
| `TECH` | Technology and software |
| `PUBLIC_INSTITUTIONAL` | Public sector and institutional |

---

## §2 AI surface category values

| Code | Label | Description |
|---|---|---|
| `PRODUCTIVITY_TOOLS` | Productivity and collaboration AI | Microsoft Copilot, Google Workspace AI, embedded writing and meeting assistants |
| `DECISION_SUPPORT` | Internal decision support | Scoring models, dashboards with AI-generated output, internal risk models |
| `CUSTOMER_AUTOMATION` | Customer-facing automation | Chatbots, recommendation engines, automated customer communications |
| `THIRD_PARTY_LLM` | Third-party LLM integration | External API calls to foundation model providers embedded in internal workflows |
| `PREDICTIVE_SYSTEMS` | Predictive and classification tools | Demand forecasting, HR screening, credit scoring, fraud detection |
| `GENERATIVE_CONTENT` | Generative content production | AI-generated marketing, legal, or product content used in commercial output |

---

## §3 Business function values

| Code | Label |
|---|---|
| `COMMERCIAL` | Sales, marketing, customer relationship |
| `HR` | Human resources, recruitment, performance |
| `FINANCE` | Finance, treasury, reporting |
| `LEGAL_COMPLIANCE` | Legal, compliance, risk |
| `OPERATIONS` | Operations, supply chain, logistics |
| `PRODUCT` | Product development, R&D |
| `IT_INFRA` | IT and infrastructure |
| `EXECUTIVE` | Executive decision support |

---

## §4 Deployment model values

| Code | Label | Description |
|---|---|---|
| `EMBEDDED_SAAS` | Embedded in SaaS tools | AI is a feature of a SaaS product already in use (e.g., Copilot in M365) |
| `STANDALONE_API` | Standalone API integration | Direct API call to a model provider, integrated by internal development team |
| `VENDOR_MANAGED` | Vendor-managed AI service | Third-party provider manages model, infrastructure, and outputs |
| `INTERNAL_MODEL` | Internally hosted model | Model hosted on company infrastructure or private cloud |
| `HYBRID` | Hybrid deployment | Combination of the above, typically embedded SaaS plus vendor-managed scoring |

---

## §5 Jurisdiction regulatory overlay

| Jurisdiction | AI Act status | Data law | Key sector regulator | Primary enforcement body |
|---|---|---|---|---|
| **FR** | Full EU AI Act applicability. GPAI obligations apply to general-purpose AI providers with EU nexus. High-risk system provisions phase in through 2026–2027. | GDPR + loi Informatique et Libertés (LIL). | AMF (finance), ANSM (healthcare), ARCOM (media/content) | CNIL (data protection + AI Act national competent authority candidate) |
| **CH** | No direct EU AI Act applicability. Extraterritorial pressure where cross-border data flows to EU or where the entity targets EU-resident individuals. | nFADP (Federal Act on Data Protection, revised 2023, in force September 2023). | FINMA (finance), Swissmedic (healthcare) | FDPIC (Federal Data Protection and Information Commissioner) |
| **LU** | Full EU AI Act applicability. Luxembourg's financial services concentration creates specific exposure for AI in fund operations and investor communications. | GDPR. | CSSF (finance and investment funds), ILR (electronic communications) | CNPD (Commission nationale pour la protection des données) |
| **BE** | Full EU AI Act applicability. Belgium's proximity to EU institutions creates heightened regulatory attention. FRIA (Fundamental Rights Impact Assessment) expectations active. | GDPR. | NBB / FSMA (finance), FAMHP (healthcare) | APD / GBA (Autorité de protection des données / Gegevensbeschermingsautoriteit) |

---

## §6 Classification logic

### Regulatory sensitivity

| Level | Criteria |
|---|---|
| `Low` | No high-risk AI Act system indicators. No sensitive data categories. No automated individual decisions with significant effects. |
| `Medium` | One or more moderate exposure signals: productivity AI operating on employee or customer data without formal scope definition; vendor-managed scoring tools with limited documented oversight. |
| `High` | One or more strong exposure signals: automated decision with significant individual effects; sensitive data processing; limited or absent governance documentation; employment or credit-adjacent AI use. |
| `Critical` | Prohibited practice risk; biometric or special-category data processing without lawful basis; automated employment or credit decisions without human review; no documented risk management. |

### External dependency level

| Level | Criteria |
|---|---|
| `Minimal` | Primarily internal infrastructure. No critical workflow dependency on third-party model providers. |
| `Moderate` | SaaS AI tools embedded in workflows. Vendor terms are standard. Contractual auditability limited. Replaceable within 12–18 months with moderate operational impact. |
| `High` | Critical workflow dependency on third-party model provider. Contract terms not negotiated. Limited reversibility. Vendor model changes would materially disrupt operations. |
| `Critical` | No documented fallback. Operational continuity depends on a single external model provider. No auditability contractually guaranteed. Switching cost prohibitive in the short term. |
