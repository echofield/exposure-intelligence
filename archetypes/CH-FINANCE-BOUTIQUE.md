# Archetype: CH-FINANCE-BOUTIQUE

> Jurisdiction: Switzerland
> Population: Boutique financial services firm, Geneva or Zurich
> Version: 1.0

---

## Structured input

| Dimension | Value |
|---|---|
| `jurisdiction` | CH |
| `sector` | FINANCIAL_SERVICES |
| `company_size` | SME |
| `revenue_band` | €10–50M |
| `employee_band` | 50–250 |
| `ai_surface_category` | DECISION_SUPPORT, PRODUCTIVITY_TOOLS |
| `business_function_affected` | FINANCE, LEGAL_COMPLIANCE, EXECUTIVE |
| `deployment_model` | EMBEDDED_SAAS, VENDOR_MANAGED |
| `regulatory_sensitivity` | High |
| `external_dependency_level` | Moderate |

---

## AI surface profile

**Investment or portfolio decision support tooling** — third-party SaaS platform with AI-powered portfolio analytics, risk scoring, or performance attribution. Outputs inform but do not formally automate investment decisions. Human oversight: present in most cases but not documented through a formal override procedure. Vendor may be EU-based, creating cross-border data flow exposure.

**Productivity AI** — Microsoft 365 Copilot or equivalent. Deployed for internal operations: email drafting, client communication preparation, internal reporting. Client data may be processed through these tools without explicit scope definition in the data processing terms.

---

## Regulatory overlay (Switzerland)

**nFADP (Federal Act on Data Protection):** In force since September 2023. Applies to processing of personal data of Swiss residents. Key obligations: privacy notices, data subject rights, data processing agreements for cross-border flows, and notification of high-risk processing. No equivalent to the EU's DPIA requirement by name, but high-risk processing assessment obligations are analogous.

**Cross-border data flows:** Where the AI vendor infrastructure is EU/EEA-based or where the firm processes personal data of EU-resident clients, GDPR applies extraterritorially. The firm may carry simultaneous obligations under nFADP and GDPR without an adequacy decision aligning them fully.

**FINMA:** No specific AI Act equivalent under Swiss law. However, FINMA's operational resilience framework, model risk management expectations, and explainability requirements for credit and risk decisions create de facto governance obligations for AI-assisted financial decisions. FINMA circular 2023/1 on operational risks and resilience applies.

**EU AI Act extraterritorial exposure:** Where the firm deploys AI tools provided by EU-based providers, or where its AI-assisted services target EU-resident clients, elements of EU AI Act obligations may apply through contractual chains or provider terms.

**FDPIC:** Active enforcement posture since nFADP entry into force. Cross-border data transfer provisions are an enforcement priority.

---

## Structural exposure profile

**Cross-border compliance gap:** AI vendor infrastructure that is EU-based creates parallel GDPR processor obligations. The firm may be operating as a data controller under GDPR for EU-client data without having established the required legal basis or processor agreements covering AI tool processing.

**Model explainability:** FINMA-aligned expectations require that AI-assisted investment and risk decisions can be explained and documented. Vendor-managed scoring or analytics tools with opaque model behavior create audit exposure if a client dispute, FINMA inquiry, or litigation requires reconstruction of a decision process.

**Client data scope:** It is structurally probable at this archetype that productivity AI tools process client communication content. If client personal data (portfolio details, identity documents, financial situation) passes through a productivity AI without explicit data processing terms, nFADP and GDPR obligations are triggered.

**Vendor contract gap:** Boutique firms at this revenue band typically operate on vendor-standard contracts with limited room for negotiation. AI auditability provisions, model change notification, and incident reporting are absent from standard SaaS terms.

**Governance gap:** No AI risk register. No formal policy governing AI tool use in client-facing or regulated advisory contexts. No disclosure to clients that AI tools are used in preparing advice, communications, or reports.

---

## Archetype notes

This archetype is suited to a Geneva or Zurich boutique law firm advising financial services clients on FINMA compliance, cross-border data obligations, and emerging AI governance requirements. The dual regulatory overlay (nFADP + extraterritorial GDPR + FINMA expectations) creates a distinctive Swiss exposure profile that no single EU-focused template can address. The explainability gap in investment decision support is the primary law-firm engagement lever.
