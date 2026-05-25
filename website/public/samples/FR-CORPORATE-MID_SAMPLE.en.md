# AI Exposure Evidence Pack

> **Archetype:** FR-CORPORATE-MID
> **Jurisdiction:** France
> **Sector:** B2B Professional Services
> **Prepared for:** [Cabinet conseil - usage sous leur en-tête]
> **Date:** [DATE]
> **Reference:** EI-FR-MID-001
> **Version:** 1.0
> **Protocol:** EI Protocol v0.1
> **Protocol status:** Partner pilot methodology
> **Assessment ID:** EI-FR-MID-001-SAMPLE
> **EI-Index:** EI-3 / Medium
> **Index posture:** Structured triage indicator only
> **Data posture:** No final-client operational data ingested

---

**Important notice:** This document is a structured evidence pack prepared to support legal advisory. It does not constitute legal advice, a legal opinion, or a compliance certification. It does not assess regulatory liability or legal compliance status. It identifies structured exposure indicators that may require legal review and interpretation by qualified counsel.

Findings are based on an archetype-based assessment. No raw client data, personnel records, customer files, internal documentation, or production infrastructure was accessed or reviewed. This report characterizes the exposure profile of a class of entities matching the FR-CORPORATE-MID archetype, not any specific named company.

The EI-Index shown in this dossier is a structured triage indicator intended to orient the advisory partner's review workflow. It is not a legal conclusion, compliance finding, or certification.

---

## Methodological status legend

| Status | Definition | Use in this dossier |
|---|---|---|
| Established | Confirmed by document, source, or client statement. | Documented tool capability, including Microsoft or CRM vendor documentation, or an item provided within the review perimeter. |
| Inferred | Probable based on the archetype, not verified. | Structural probability about the entity, its organization, uses, or workflows. |
| Not evidenced | Expected for this profile, but absent from the examined perimeter or not produced. | Document, register, procedure, DPIA, clause, notification, or evidence item that should exist but is unavailable at archetype level. |
| To qualify | Requires counsel interpretation. | Legal qualification, regulatory category, Works Council obligation, employment effect, or compliance conclusion. |

---

## Section 1 - Executive Exposure Summary

### Archetype reviewed

Mid-market B2B professional services entity operating in France, with AI deployment concentrated in org-wide productivity tooling (Microsoft 365 Copilot) and a vendor-managed commercial scoring assistant embedded in the CRM platform. Approximately 150–200M€ revenue, 500–1,500 employees, Paris headquarters.

### Overall exposure profile

The entity carries a **Medium** overall exposure profile. No immediate prohibited-practice trigger is identified. However, three structural gaps create material legal exposure: the absence of an AI use-case inventory across an org-wide Copilot deployment, the lack of a documented human oversight procedure for CRM scoring outputs that may influence employment-adjacent decisions, and vendor contracts that do not address AI-specific data processing obligations. The exposure is manageable and bounded - but the current governance posture creates identifiable legal vulnerabilities, particularly if the CRM scoring tool has been consulted in any HR or performance management context.

**Methodological status: Inferred - archetype level.** General tool capabilities are established through vendor documentation; internal uses, documentation gaps, and HR decision patterns require entity-level verification.

**Exposure profile: Medium**

### Top three issues

1. **Established - vendor documentation / Not evidenced:** Microsoft 365 Copilot has capabilities to process email, meeting transcriptions, and documents. Org-wide deployment is part of the archetype; the usage policy, formal deployment scope, and data handling rules are not evidenced in this dossier.

2. **Established - vendor documentation / Inferred - archetype level / To qualify:** the CRM scoring assistant produces commercial scores when the feature is activated. Manager consumption and employment-adjacent use are inferred at archetype level. Any reference to these outputs in employment decisions requires counsel qualification.

3. **Not evidenced / To qualify:** AI-specific contractual coverage is not evidenced within the examined perimeter. The Microsoft DPA and CRM vendor terms require counsel review before any conclusion on applicable obligations, auditability, model changes, or incident reporting.

### Legal review triggers

- Any evidence that CRM scoring outputs have been referenced in individual employee performance reviews, territory decisions, or compensation discussions.
- Any use of Copilot meeting transcriptions or email drafts in HR disciplinary proceedings or performance documentation.
- Any client-facing deliverable drafted with material Copilot assistance, without disclosure or internal review procedure.

---

## Section 2 - Scope & Methodology

### Assessment basis

This report is based on a structured archetype assessment against the FR-CORPORATE-MID profile. No raw client data, personnel records, customer files, source code, or internal documentation was accessed. The assessment characterizes the structural exposure of a recognizable class of French mid-market B2B entities - not a specific named company.

### Input archetype

| Dimension | Value |
|---|---|
| Jurisdiction | France |
| Sector | B2B professional services |
| Company size | Mid-market |
| Revenue band | €150–200M |
| Employee band | 500–1,500 |
| AI surface category | Productivity tools + decision support (vendor-managed scoring) |
| Business function affected | Commercial, HR (indirect), Operations, Executive |
| Deployment model | Embedded SaaS (Copilot) + Vendor-managed (CRM scoring) |
| Regulatory sensitivity | Medium |
| External dependency level | Moderate |

### Regulatory framework in scope

| Framework | Applicability |
|---|---|
| EU Artificial Intelligence Act (Reg. 2024/1689) | Full applicability. Phased enforcement through 2025–2027. Covers prohibited practices, high-risk system obligations, transparency requirements, and general-purpose AI model rules. |
| GDPR (Reg. 2016/679) | Full applicability. Automated processing, data processor obligations, and data subject rights are directly relevant to this AI surface profile. |
| Loi Informatique et Libertés (LIL) | French national implementation of GDPR. CNIL is the national supervisory authority and AI Act national competent authority candidate. |
| Code du travail (France) | French labor law provisions governing workplace technology deployment and employee monitoring are applicable to this AI surface profile. Attorney review required to determine scope and obligations. |
| CNIL guidelines on AI | CNIL's published guidance on AI and data protection applicable. Includes positions on algorithmic processing and workplace AI. |

### Assumptions and limitations

- This report assumes standard vendor contract terms for Microsoft 365 Copilot (enterprise M365 E3/E5) and a standard mid-market CRM platform (Salesforce or equivalent). Individually negotiated provisions may alter the dependency and auditability analysis.
- The AI surface profile reflects publicly documented features of the tools in the named categories. Specific configuration choices made by the entity may expand or narrow the exposure.
- The HR exposure analysis is based on the structural probability that commercial performance metrics are consulted in employee evaluation at entities of this profile. This assumption should be verified in any entity-specific engagement.
- AI Act enforcement timelines are ongoing. Some provisions cited are phasing in between 2025 and 2027.

---

## Section 3 - AI Usage Exposure Map

### Overview

The entity's AI surface is concentrated in two tools deployed across the full organization: Microsoft 365 Copilot embedded in the Microsoft 365 enterprise suite, and a commercial scoring assistant embedded in the CRM platform. Both are vendor-managed. Neither requires internal technical integration beyond licensing and administrative activation. The deployment model creates broad surface coverage at low technical friction - but correspondingly broad exposure without matching governance infrastructure.

### AI surface inventory

| AI tool | Tool type | Deployment model | Business function | Data categories processed | Oversight level | Status |
|---|---|---|---|---|---|---|
| Microsoft 365 Copilot | Productivity AI - email drafting, document summarization, meeting transcription, search | Embedded SaaS (Microsoft 365 enterprise) | All functions: commercial, HR, operations, executive | Employee email content, meeting audio/transcripts, internal documents, calendar data | Not evidenced. No formal usage policy or review procedure produced within the archetype perimeter. | Established - vendor documentation for capabilities ; Not evidenced for entity governance |
| CRM scoring assistant | Decision support - lead scores, account health scores, opportunity priority rankings | Vendor-managed (embedded in CRM platform) | Commercial (primary), Operations, HR (indirect) | Individual contact and account data, interaction history, commercial performance data, employee-assigned pipeline metrics | Informal at archetype level. Scores are consumed without a documented override or challenge procedure produced. | Established - vendor documentation for feature ; Inferred - archetype level for use ; Not evidenced for procedure |

### Exposure propagation

**Copilot → HR exposure:** **Established - vendor documentation:** Copilot has meeting transcription and summarization capabilities. **Inferred - archetype level:** if this capability is used in disciplinary hearings, performance review meetings, or recruitment interviews, it produces a written record generated by AI. **Not evidenced:** no evidence exists at archetype level that employees have been formally notified of this capability. **To qualify:** use of those records in HR decisions requires counsel assessment.

**CRM scoring → employment exposure:** **Established - vendor documentation:** CRM scoring features can generate commercial priority or scoring indicators. **Inferred - archetype level:** when these scores are assigned to individual sales representatives, they can indirectly measure individual employee performance. **To qualify:** if these metrics have been consulted in any performance review, bonus calculation, or territory reallocation decision, the use must be qualified by counsel. Whether this has occurred cannot be excluded at archetype level.

**Copilot → external communications:** Copilot-generated drafts used in client deliverables, external communications, or legal documents without an internal review procedure create a liability surface: inaccuracies in AI-generated outputs used in client-facing work may be attributable to the entity without the mitigating documentation of a review step.

### Shadow AI and undocumented surface

At this archetype level, it is structurally probable that employees use consumer AI tools (ChatGPT, Claude, Gemini, or equivalent) for work tasks that fall outside the formal Copilot deployment. Absent an AI usage policy, there is no basis for the entity to evidence what data has been processed through these tools, under what terms, or whether client or employee personal data has been transmitted to external model providers. This constitutes an undocumented extension of the AI surface.

---

## Section 4 - Vendor Dependency View

### Overview

The entity's AI surface is entirely externally sourced. No internal model capability exists. Both tools are controlled by third-party vendors under standard contract terms. Microsoft's enterprise terms are well-documented but do not enumerate all AI processing operations explicitly. The CRM vendor's AI terms are standard, non-negotiable at this entity's size, and do not include specific auditability or model change notification provisions.

**Methodological status: Established - vendor documentation for product capabilities ; Inferred - archetype level for operational criticality ; Not evidenced for unproduced contractual clauses ; To qualify for legal effect of vendor obligations.**

### Vendor dependency table

| Vendor category | Dependency type | Workflow criticality | Reversibility | Contract auditability | Key documentation gap | Status |
|---|---|---|---|---|---|---|
| Microsoft 365 Copilot | Embedded in the entity's primary productivity infrastructure | High - Copilot is activated across M365 enterprise license used by all employees | Low - removing Copilot requires administrative deactivation but creates workflow disruption; no documented fallback for AI-assisted tasks | Limited - Microsoft's DPA covers data processor obligations under GDPR but does not enumerate specific AI feature processing operations as distinct ROPA line items | DPA does not explicitly address Copilot AI processing of email, meeting, and document content as enumerated processing operations. No model change notification obligation. | Established - vendor documentation for feature ; Inferred - archetype level for criticality ; Not evidenced for fallback and contract coverage |
| CRM scoring vendor | Embedded in the entity's primary commercial management tool | High - scoring outputs are integrated into daily commercial workflows | Low-Medium - replacing the CRM platform requires full migration; disabling only the scoring feature is possible but may require vendor support. No documented fallback scoring procedure. | Not evidenced - CRM AI terms produced in the perimeter do not cover model auditability, output explanation rights, data deletion obligations specific to AI-processed data, or incident reporting. | No contractual right to audit the scoring model, receive notification of model changes, or obtain explanation of individual score outputs is evidenced. | Established - vendor documentation for feature ; Inferred - archetype level for criticality ; Not evidenced for contractual rights |

### Contract review triggers

- **Microsoft 365 Copilot DPA:** Review whether the existing data processing addendum explicitly covers the AI processing operations performed by Copilot - specifically email summarization, meeting transcription, document analysis, and search. Confirm data residency terms cover all AI feature processing, not only storage.
- **CRM vendor AI terms:** Review whether the CRM vendor's terms include any data processor obligations for the scoring assistant's processing of individual contact and employee-assigned data. Confirm whether model change notification, audit rights, and data deletion obligations are present.
- **Sub-processor disclosure:** Both vendors will sub-process personal data to model infrastructure providers. Confirm that sub-processor lists include AI infrastructure providers and that transfer mechanisms cover all jurisdictions involved.

### Reversibility assessment

**Copilot:** Administratively reversible - the feature can be disabled at tenant level. However, at this archetype size and deployment scope, disabling Copilot creates operational friction across all business functions simultaneously. No documented fallback procedure for AI-assisted drafting or meeting summarization exists. Practical reversibility is Low.

**CRM scoring:** Partially reversible - the scoring feature can be disabled if supported by vendor configuration options. The CRM platform itself is a workflow-critical dependency with multi-year contract terms. Full replacement would require 12–18 months minimum. Scoring feature-only disablement is possible but undocumented. Practical reversibility is Low–Medium.

---

## Section 5 - Governance Blind Spots & Evidence Gaps

*This section identifies what documentation should structurally exist for this archetype - and does not. Absence is an evidence signal.*

### What is known

**Established - vendor documentation:** Microsoft 365 Copilot has drafting, summarization, search, and meeting transcription capabilities ; CRM scoring assistants have commercial scoring functions when activated.

**Inferred - archetype level:** Microsoft 365 Copilot is deployed org-wide under an enterprise license and a CRM scoring assistant is active in commercial workflows. Both tools may process personal data, including employee data in the case of Copilot and employee-assigned or contact personal data in the case of the CRM scoring tool.

**To qualify:** the applicable regulatory framework includes GDPR, the French loi Informatique et Libertés, the EU AI Act (phased enforcement), and the Code du travail for employment-adjacent AI use. Exact obligation scope belongs to counsel.

### What is not evidenced

The following documentation items are absent at the archetype level:

- **AI use-case inventory:** No register documenting which AI tools are deployed, by which business function, under what terms, and with what data processing implications. Copilot's expansion across the organization has occurred without a formal inventory update.
- **Formal deployment scope for Copilot:** No document defining the intended perimeter of Copilot use - which functions are authorized, which use cases are prohibited, and what data categories may be processed through the tool.
- **AI usage policy:** No written policy governing employee interaction with AI tools - acceptable use, prohibited use cases, external communication rules, and data handling obligations are undocumented.
- **ROPA entries for AI tools:** The Record of Processing Activities does not contain distinct entries for Copilot AI processing operations or CRM scoring assistant data flows.
- **Human oversight procedure for CRM scoring:** No documented procedure defining who reviews scoring outputs, under what conditions an override is permitted, and how overrides are recorded.
- **Employee disclosure of Copilot monitoring capabilities:** No evidence that employees have been formally notified that Copilot's meeting transcription and email analysis functions constitute AI-assisted processing of their work activity.
- **CSE consultation record:** No evidence that the Works Council has been informed and consulted regarding the deployment of Copilot or the CRM scoring tool. Whether a consultation obligation applies requires attorney assessment.

### What cannot yet be established

The following exposure questions cannot be resolved at the archetype level and require entity-specific verification:

- Whether the CRM scoring assistant's individual metrics have been accessed, referenced, or used in any employee performance review, bonus calculation, or employment decision - this is the primary HR exposure inflection point.
- Whether Copilot meeting transcriptions have been used in any disciplinary or grievance proceedings.
- Whether any client-facing deliverable has been drafted with material Copilot assistance, and whether that assistance was disclosed to the client.
- Whether Microsoft's sub-processor list for Copilot AI features includes infrastructure outside the EEA, and whether the transfer mechanism in the current DPA covers those transfers adequately.
- The specific configuration of the CRM scoring model - what inputs it uses, how it weights employee-assigned variables, and whether any output constitutes a legal or similarly significant decision.

### Records that should exist

The following documentation would be requested at the outset of any legal review of this archetype:

- [ ] AI use-case register (tools deployed, function, vendor, contractual basis, data category)
- [ ] Data processing agreements with Microsoft and CRM vendor, specifically covering AI feature processing
- [ ] ROPA entries for Copilot and CRM scoring assistant as distinct processing operations
- [ ] Human oversight procedure for CRM scoring outputs
- [ ] AI usage policy communicated to all employees
- [ ] CSE consultation record for Copilot and CRM scoring assistant deployments
- [ ] Employee notification regarding Copilot meeting transcription and email processing capabilities
- [ ] DPIA for Copilot processing of employee communications and meeting content
- [ ] Any AI-related incident records (output errors, data handling incidents, model behavior complaints)

---

## Section 6 - Regulatory & Operational Exposure Signals

### AI Act exposure signals

| Condition | Severity | Status |
|---|---|---|
| CRM scoring assistant can generate individual-level metrics visible to managers when the feature is activated. No classification review has been produced to assess the tool's regulatory category given its employment-adjacent use pattern. | High | Established - vendor documentation for capability ; To qualify - counsel / entity verification |
| No assessment of AI tools in use has been produced against applicable regulatory risk categories. Classification status of both deployed tools is undetermined. | Medium | Not evidenced - expected document absent ; To qualify - counsel |
| No disclosure to employees that AI tools process their communications, meeting transcriptions, and work activity is produced within the archetype perimeter. | Medium | Not evidenced - archetype level |

### Data protection exposure signals

| Condition | Severity | Status |
|---|---|---|
| Copilot can process employee personal data (email, meetings, documents). No corresponding entry in the Record of Processing Activities or DPIA is produced within the archetype perimeter. | High | Established - vendor documentation for capability ; Not evidenced - ROPA and DPIA |
| CRM scoring assistant can process individual contact and employee-assigned data. No data processing agreement term explicitly covers the AI scoring feature as a distinct processing operation within the examined perimeter. | High | Established - vendor documentation for capability ; Not evidenced - contract coverage |
| No documented lawful basis for Copilot's AI processing of employee communications and meeting content is produced. | Medium | Not evidenced - archetype level ; To qualify - counsel |
| CRM scoring can generate individual-level employee metrics. No documented human review procedure for employment-adjacent uses is produced. Whether these outputs have informed employment decisions requires entity-level verification. | High | Established - vendor documentation for capability ; Not evidenced - procedure ; To qualify - counsel |

### Employment and HR exposure signals

**Established - vendor documentation / Inferred - archetype level:** CRM scoring outputs can be structured at the individual level when the feature is activated. Visibility by managers and proximity to performance evaluation are inferred at archetype level. **Not evidenced:** no documented boundary prevents these outputs from being referenced in employment decisions. No override, challenge, or exclusion record is produced.

**Not evidenced - archetype level:** no record indicates that the Works Council was informed before deployment of tools with individual employee monitoring capabilities. No record indicates that employees were notified of AI-assisted processing of their communications and work activity.

**To qualify - counsel:** if scoring metrics have been consulted in any performance review, bonus calculation, or territory allocation, or if meeting transcriptions have been used in any HR proceeding, both conditions require attorney assessment before the tools continue in their current configuration.

### IP and content exposure signals

Copilot-generated content used in client deliverables, proposals, or legal documents without review creates a specific IP and accuracy liability: the entity cannot evidence what was AI-generated versus human-authored, and cannot demonstrate that AI-generated errors were caught before delivery. Absent an internal review procedure, the entity bears the full liability of all AI-generated content used in client-facing work.

### Procurement and vendor exposure signals

- Microsoft DPA does not enumerate AI feature processing - standard M365 DPA language may not cover Copilot AI operations as distinct processing activities. This creates a gap between actual data processing and documented processing in the ROPA and DPA.
- CRM vendor AI terms contain no model change notification obligation - the vendor may update the scoring model without informing the entity, potentially changing the basis on which individual scores are generated. The entity has no contractual right to audit the model or challenge its outputs.

### Board and accountability exposure signals

If Copilot-assisted executive summaries or CRM-generated pipeline reports are presented to the board without disclosure of AI assistance and without a documented human review step, senior leadership cannot demonstrate that the information they relied on was reviewed for accuracy prior to board-level decision-making.

---

## Section 7 - Technical Mitigation Pathways

*These pathways reduce exposure for this archetype. They do not constitute legal advice. Legal review is required to confirm adequacy of implementation.*

### Priority 1 - Immediate (initiate without waiting for legal review)

- [ ] **AI use-case inventory:** Assign a named owner. Document every AI tool in active use: tool name, vendor, business function, data category, whether a DPA exists, and deployment scope. Copilot and the CRM scoring assistant are the immediate entries. Extend to all other tools as they are identified. This is the prerequisite for every subsequent step.

- [ ] **Vendor register:** Create a two-column register: (1) AI vendor, (2) DPA status / AI processing coverage. For Microsoft: confirm whether the current DPA explicitly covers Copilot AI operations. For CRM vendor: confirm what data processing terms govern the scoring assistant specifically.

- [ ] **Internal AI usage policy - first draft:** Draft a one-page policy covering: (a) which AI tools employees are authorized to use, (b) prohibited use cases (processing client confidential data through consumer AI tools, using AI in disciplinary proceedings without authorization), (c) rules for AI-generated content in external communications. Circulate to HR and Legal for review before publication.

### Priority 2 - Near-term (legal review recommended)

- [ ] **Works Council assessment:** Engage labor law counsel to determine whether Copilot and the CRM scoring assistant required prior Works Council (CSE) consultation, and to structure the appropriate process if not yet completed.

- [ ] **Employee notification - Copilot:** Legal review required to determine scope and form of employee notification regarding Copilot's meeting transcription and email processing capabilities. Do not draft without attorney guidance on applicable requirements.

- [ ] **DPIA for Copilot:** Commission a Data Protection Impact Assessment covering Copilot's processing of employee email, meeting transcriptions, and internal documents. Engage a data protection specialist. The DPIA should specifically address: lawful basis for processing, data minimization configuration options, data retention, and employee rights.

- [ ] **Vendor contract review - Microsoft DPA:** Legal review of the current Microsoft 365 DPA and Copilot-specific terms to confirm: (a) Copilot AI processing operations are enumerated, (b) data residency covers all AI processing operations, (c) sub-processor disclosure is current and transfer mechanisms are adequate.

- [ ] **Vendor contract review - CRM scoring assistant:** Legal review of CRM vendor AI terms to identify: gaps in data processor obligations, absence of model change notification, and absence of audit rights. Assess whether contract renegotiation is feasible or whether compensating controls are required.

### Priority 3 - Structured (legal review required)

- [ ] **AI classification exercise:** Commission a formal review of the CRM scoring assistant against applicable regulatory risk categories, with particular attention to its employment-adjacent use pattern. Engage attorney or qualified technical auditor. Outcome determines whether mandatory obligations apply to the tool's current deployment.

- [ ] **ROPA update:** Add Copilot and CRM scoring assistant as distinct ROPA entries with their own processing purpose, data category, legal basis, retention period, and sub-processor references.

- [ ] **Human oversight procedure - CRM scoring:** Document a formal procedure: who reviews CRM scores before they inform any employment-adjacent decision, what authority they have to override, and how overrides are recorded. Define "employment-adjacent" to include pipeline-to-performance metric linkages.

- [ ] **Procurement questionnaire:** Develop a standard AI governance question set for all new vendor onboarding where AI tools process personal data. Minimum questions: (1) Is a DPA available that covers AI processing operations specifically? (2) What is the model change notification procedure? (3) What data deletion guarantees apply to AI-processed data? (4) What audit rights does the entity have?

---

## Section 8 - Escalation Signals for Legal Review

*These conditions, if identified in an entity matching this archetype, require immediate engagement with qualified legal counsel before further AI deployment or continued use.*

| Condition | Risk area | Urgency |
|---|---|---|
| CRM scoring outputs have been referenced in any individual employee performance review, bonus decision, or territory allocation | Employment + automated processing | Immediate |
| Copilot meeting transcriptions have been used in any disciplinary, grievance, or performance documentation | Employment + data protection | Immediate |
| CRM scoring tool assessed as falling within a regulated high-risk category given its employment-adjacent use | AI Act compliance | Immediate - deployment configuration requires attorney review before continuing |
| Client-facing deliverable containing material AI-generated content delivered without internal review procedure or client disclosure | Contractual + IP | Near-term |
| Works Council not consulted prior to deployment of Copilot or CRM scoring assistant | Employment procedure | Near-term |
| Vendor data processing agreement found not to cover AI feature processing operations as distinct processing activities | Data processing | Near-term |
| Vendor infrastructure located outside EEA without documented transfer safeguards | Cross-border data | Near-term |
| Employee complaint or inquiry regarding undisclosed AI processing of their communications or work activity | Employment + regulatory | Immediate if received |

---

## Section 9 - Appendix

### A. Archetype input (as submitted)

| Dimension | Value |
|---|---|
| Jurisdiction | France |
| Sector | B2B professional services |
| Company size | Mid-market |
| Revenue band | €150–200M |
| Employee band | 500–1,500 |
| AI surface category | Productivity tools + decision support (vendor-managed scoring) |
| Business function affected | Commercial, HR (indirect), Operations, Executive |
| Deployment model | Embedded SaaS (Copilot) + Vendor-managed (CRM scoring) |
| Regulatory sensitivity | Medium |
| External dependency level | Moderate |

### B. Assumptions

- The entity operates a standard Microsoft 365 enterprise license (E3 or E5) with Copilot activated at tenant level. Copilot features are available to all licensed users. No custom model training or fine-tuning has been performed.
- The CRM scoring assistant is a standard feature of the CRM platform (Salesforce Einstein or functionally equivalent tool). Scores are generated from CRM-internal data only - no external data integration is assumed.
- The entity's commercial organization is structured around individual sales representatives with assigned accounts and pipeline targets. CRM scores are visible to both sales representatives and their managers.
- The entity employs between 500 and 1,500 people. A Works Council (CSE) exists and is active. No specific exemption from CSE consultation obligations applies.
- No healthcare, financial services, or other sector-specific regulatory overlay applies - the entity operates as a general B2B services company without sector regulation beyond the standard French corporate and labor law framework.
- The entity has no prior CNIL investigation or enforcement action. Regulatory baseline is a clean record.

### C. Evidence checklist

Documents that would be requested at the outset of a legal review of this archetype:

- [ ] Existing AI or digital tool usage policy (or equivalent)
- [ ] Microsoft 365 enterprise agreement and Data Processing Addendum (including Copilot-specific terms if separately documented)
- [ ] CRM vendor master agreement and AI/scoring feature terms
- [ ] Record of Processing Activities (ROPA) - to verify Copilot and CRM entries
- [ ] Any existing DPIA documentation for digital workplace tools
- [ ] CSE meeting minutes for the period when Copilot and CRM scoring were deployed
- [ ] Employee handbooks or IT policy documents covering digital tool use
- [ ] HR records evidencing the basis for any performance decision where CRM data may have been referenced
- [ ] Any client contracts containing provisions on AI tool use or data handling
- [ ] Data retention schedule covering AI-generated outputs (Copilot summaries, transcripts)
- [ ] Any AI-related incident or complaint records

### D. Terminology

**EU AI Act:** Regulation (EU) 2024/1689 on artificial intelligence. Phased enforcement from 2025 through 2027. Creates different obligation sets depending on AI system risk classification and provider/deployer role. Attorney review required to determine which obligations apply to a specific deployment.

**GDPR:** Regulation (EU) 2016/679. European data protection framework governing the processing of personal data of individuals in the EU/EEA.

**ROPA - Record of Processing Activities:** An internal register that organizations are required to maintain documenting their data processing operations, including purpose, data categories, recipients, and retention periods. AI tools processing personal data must appear as distinct entries.

**DPIA - Data Protection Impact Assessment:** A structured assessment required before undertaking processing operations that are likely to result in high risks to individuals. Evaluates the necessity, proportionality, and risk mitigation of the proposed processing.

**DPA - Data Processing Agreement:** A contract required between a data controller and a data processor when personal data is shared for processing on behalf of the controller. Must address the scope, purpose, and conditions of the processing.

**Evidence gap:** A documentation item that should structurally exist for an entity of this profile but is absent or unverifiable at the archetype level. Absence does not establish a legal violation - it identifies a condition requiring attorney assessment.

**CSE - Comité Social et Économique:** The French Works Council. The employee representative body in French companies. Consultation and information rights regarding workplace technology are determined by applicable labor law provisions - scope requires attorney assessment for any specific deployment.

### E. Next-step questionnaire

For use by the advising attorney in the first client engagement following this report:

1. Has the organization compiled an inventory of all AI tools in active use, by business function?
2. When was Microsoft 365 Copilot activated? Was there any internal review of data protection implications prior to activation?
3. Was the CSE informed and consulted before Copilot and the CRM scoring tool were deployed?
4. Are employees aware that Copilot can transcribe their meetings and process their email content?
5. Have CRM scoring outputs ever been referenced in a performance review, bonus discussion, or employment decision for an individual sales representative?
6. Does the current Microsoft DPA explicitly cover Copilot AI processing operations?
7. What are the CRM vendor's terms governing the scoring assistant's data processing?
8. Is AI-generated content (Copilot drafts, summaries) used in client deliverables? If yes, is there a review procedure?
9. Has any employee raised a concern or complaint related to AI tool use?
10. Is there a designated data protection officer, and are they aware of the current AI tool deployments?

---

*This document was prepared using an archetype-based assessment methodology against the FR-CORPORATE-MID profile. It does not reflect access to or review of any specific entity's documentation, systems, contracts, or internal data. All findings are structural and require validation against the specific entity's actual operations, contracts, and governance practices before legal conclusions can be drawn.*

*[LAW FIRM NAME] | [DATE] | Reference: EI-FR-MID-001*
