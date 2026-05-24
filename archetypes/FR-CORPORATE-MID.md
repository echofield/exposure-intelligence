# Archetype: FR-CORPORATE-MID

> Jurisdiction: France
> Population: Mid-market B2B professional services company, Paris region
> Version: 1.0

---

## Structured input

| Dimension | Value |
|---|---|
| `jurisdiction` | FR |
| `sector` | B2B_SERVICES |
| `company_size` | mid-market |
| `revenue_band` | €150–200M |
| `employee_band` | 500–1,500 |
| `ai_surface_category` | PRODUCTIVITY_TOOLS, DECISION_SUPPORT |
| `business_function_affected` | COMMERCIAL, HR, OPERATIONS, EXECUTIVE |
| `deployment_model` | EMBEDDED_SAAS, VENDOR_MANAGED |
| `regulatory_sensitivity` | Medium |
| `external_dependency_level` | Moderate |

---

## AI surface profile

**Microsoft 365 Copilot** — deployed org-wide via existing M365 enterprise license. Covers email drafting, document summarization, meeting transcription, internal search, and presentation generation. No custom integration. Data residency: European region per Microsoft contractual terms. Usage policy: absent at archetype level. Scope of deployment: not formally defined — adoption driven by individual teams and managers.

**CRM scoring assistant** — third-party AI feature embedded in the CRM platform (Salesforce or equivalent). Produces lead scores, account health scores, and opportunity priority rankings. Outputs are consumed by commercial teams to prioritize outreach and pipeline management. Human review: present but informal — scores are typically accepted by sales representatives without documented challenge or override procedure.

---

## Regulatory overlay (France)

**EU AI Act:** Full applicability. No immediate high-risk system classification trigger from this AI surface profile alone. However, CRM scoring with employment-adjacent effects (e.g., performance metrics derived from commercial targets) requires classification review. Copilot operating on employee communications may implicate worker monitoring provisions under French labor law (Article L.1222-4 Code du travail) if monitoring is undisclosed.

**GDPR:** Copilot processes employee communications, document content, and meeting transcriptions. The company is data controller. Microsoft acts as data processor under the Data Processing Addendum. AI feature use cases may not be explicitly covered in the standard DPA — specifically, Copilot's AI processing of email content for summarization and search may require separate documentation under the ROPA.

**CNIL:** Algorithmic decision-making provisions apply to CRM scoring where outputs influence significant decisions about individuals. If CRM scores are used to evaluate individual employee performance (e.g., to justify performance review, promotion, or dismissal decisions), Article 22 GDPR applies and employee notification under French law is required.

**Works Council (CSE):** Under Article L.2312-38 Code du travail, the employer must inform and consult the CSE before deploying technologies allowing individual monitoring of employees. Copilot's meeting transcription and email drafting assistance may trigger this obligation if not already fulfilled.

---

## Structural exposure profile

**Visibility gap:** No AI use-case inventory exists at archetype level. Copilot has expanded organically across the organization without formal deployment scope definition. Shadow AI use (employees using personal or free-tier AI tools for work purposes) is structurally probable but undocumented.

**Vendor dependency:** Both AI surfaces are vendor-managed. No internal model capability. Microsoft's Copilot contractual terms are enterprise-standard and non-negotiable for this company size. CRM vendor AI terms are typically non-negotiable for mid-market clients. Neither contract includes specific AI auditability provisions, model change notification, or incident reporting obligations.

**Governance gap:** No AI usage policy. No human oversight procedure for CRM scoring outputs. No logging of Copilot-generated content used in external client communications. No ROPA entries covering AI tool data flows. No DPIA for Copilot or CRM AI features.

**HR exposure inflection:** If Copilot is used in any HR workflow (drafting performance reviews, summarizing disciplinary meetings, generating recruitment communications) or if CRM scoring is referenced in any employee evaluation, the regulatory sensitivity escalates from Medium to High and CSE consultation obligations become likely.

---

## Archetype notes

This is the primary demo archetype. It represents the most common profile a Paris corporate boutique law firm would encounter among mid-market French B2B clients.

The exposure is material but not alarming — the archetype has no high-risk AI Act triggers on its face, but carries meaningful governance gaps and a clear HR escalation risk if deployment has expanded beyond the intended commercial scope. This dynamic (known gap, delayed action, informal workarounds) is structurally typical and creates immediate law-firm value: there is work to be done, it is bounded, and the legal lever is clear.

Not used as a primary archetype for healthcare or financial services exposure — those require separate archetypes with higher regulatory sensitivity and sector-specific overlay.
