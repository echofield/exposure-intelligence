# PE AI Dependency Diligence Dossier

> Layer: flagship premium artifact
> Archetype: PE fund or strategic acquirer evaluating a European SaaS company with meaningful AI dependency
> Category: technical evidence artifact supporting legal and diligence advisory
> Prepared for: M&A counsel, PE operating partners, technology diligence teams, and strategic acquirers
> Date basis: 23 May 2026
> Reference: EI-PE-AI-DEP-001
> Version: 1.0

---

## Important Notice

This dossier is a structured technical evidence artifact prepared to support legal, investment, and diligence advisory.

It does not constitute legal advice, a legal opinion, valuation advice, tax advice, investment advice, a compliance certification, or an audit opinion.

This artifact surfaces conditions. Counsel names the law.

The dossier identifies technical and organizational conditions that may affect deal certainty, valuation, contractual protection, post-acquisition integration, and remediation planning. Qualified counsel, technical diligence advisors, and investment professionals must interpret those conditions in the context of the specific transaction.

No target systems, production data, source code, model weights, customer files, contracts, data rooms, tickets, logs, or employee records were accessed. This dossier is archetype-based: it characterizes the risk profile of a European SaaS company with meaningful AI dependency, not any named target.

---

## Section 1 - Executive Verdict

### The Strategic Finding

The target's AI story is not yet an asset. It is an unpriced dependency structure.

The company may describe AI as product differentiation, margin expansion, or workflow automation. The buyer must treat it first as a dependency stack: model providers, hosting layers, embeddings, vector stores, prompt pipelines, customer data flows, sub-processors, retention behavior, provenance gaps, contractual promises, and migration constraints.

If that stack is not mapped, the buyer is not underwriting AI upside. The buyer is underwriting unknown exposure.

### Brutal Read

The target's valuation may be carrying AI premium while its contracts, architecture, and evidence do not support AI-grade diligence.

This is the dangerous pattern:

- AI is central to the product narrative.
- ARR depends on AI-assisted workflows.
- Customer promises imply secure, controlled, proprietary, or compliant AI.
- The actual architecture depends on third-party models and infrastructure that the target cannot fully audit, replace, or explain.
- Management has not priced the cost of substitution, migration, re-papering, or customer notification.

That is not a documentation gap. It is valuation fragility.

### Deal Exposure Profile

**Overall profile:** High

**Why high:** A SaaS target with meaningful AI dependency can look operationally scalable while carrying hidden concentration risk, customer data exposure, IP uncertainty, contract mismatch, and post-close integration friction. These issues do not always appear in financial diligence because revenue can grow while the dependency stack becomes more fragile.

### Top Seven Deal-Killers

| Deal-killer | Why it matters to the buyer | Current evidence posture to test |
|---|---|---|
| Single critical model provider | ARR, product quality, margins, and customer commitments may depend on one upstream provider | No substitution test or fallback SLA |
| Customer data entering model layer | Privacy, confidentiality, customer promise, and re-use restrictions may be implicated | No complete prompt, output, embedding, and retention map |
| Prompt and output retention uncertainty | Buyer cannot know what is stored, where, for how long, or by whom | Vendor terms are generic or silent |
| Sub-processor opacity | Target may not know every entity touching customer data, logs, telemetry, or inference infrastructure | Sub-processor list lacks AI-specific role mapping |
| IP provenance uncertainty | Generated output, training inputs, fine-tuning data, and customer-derived prompts may contaminate product claims | No provenance register |
| Contract architecture mismatch | Customer contracts may promise controls the architecture cannot prove | MSA, DPA, security docs, AI terms, and sales claims conflict |
| Migration infeasibility | Post-close integration may require model, cloud, or data migration that breaks product behavior | No tested migration or reversibility playbook |

### Investment Committee Translation

This dossier should enable the buyer to answer five board-level questions:

1. How much revenue depends on AI components the target does not control?
2. Can the target substitute critical AI vendors without material product degradation?
3. Are customer promises aligned with actual data flows, retention, and sub-processors?
4. Does the buyer inherit hidden remediation, re-papering, or integration cost?
5. Should the issue affect price, escrow, warranties, closing conditions, covenants, or Day-1 plan?

### Partner-Level Interpretation

This is a premium diligence wedge for advisory partners because it connects legal review, technical architecture, customer contracts, and valuation.

The value is not "AI governance." The value is deal intelligence:

- find hidden dependency before signing
- identify price and protection levers
- arm counsel with sharper diligence requests
- help sponsors avoid post-close surprises
- convert vague AI upside into an evidence-backed underwriting position

---

## Section 2 - Archetype Reviewed

### Target Profile

European SaaS company being evaluated by a private equity fund, growth equity investor, strategic acquirer, or corporate development team.

The target has meaningful AI dependency because one or more of the following is true:

- AI is a major product feature in customer-facing workflows.
- AI is marketed as a differentiator in sales materials.
- AI outputs influence customer decisions, prioritization, scoring, classification, recommendations, or automation.
- AI reduces internal delivery cost or headcount intensity.
- AI-generated content or summaries are included in customer deliverables.
- Customer data, documents, user prompts, or operational records are processed through third-party model services.
- The target's margin profile assumes continued access to specific model pricing, latency, or quality.

### Typical AI Stack

| Layer | Common dependency |
|---|---|
| Foundation model | OpenAI, Anthropic, Google, Mistral, Meta, Cohere, or hosted open-weight model |
| Embeddings | Third-party embeddings API or self-hosted embedding model |
| Vector database | Pinecone, Weaviate, Qdrant, Milvus, pgvector, or vendor-managed search layer |
| Cloud and GPU | Hyperscaler, sovereign cloud, specialist GPU provider, or managed inference platform |
| Orchestration | LangChain, LlamaIndex, custom agent framework, workflow automation layer |
| Observability | Prompt logging, tracing, evaluation, model monitoring, analytics |
| Data enrichment | Third-party enrichment, scraping, OCR, classification, entity extraction |
| Customer integration | CRM, ERP, HRIS, ATS, data warehouse, support platform, or document repository |
| Compliance evidence | DPA, sub-processor list, security report, AI policy, data-flow diagrams |

### Dossier Objective

The objective is to identify where AI dependency changes the deal.

This means surfacing conditions that may affect:

- purchase price
- revenue quality
- customer retention
- warranty scope
- disclosure schedules
- escrow and indemnity
- closing conditions
- lender and insurer comfort
- post-close integration cost
- product roadmap feasibility
- regulatory and customer trust posture

---

## Section 3 - AI Dependency Concentration Map

### Dependency Is Not Spend

A model vendor can be critical even if it is not a top spend item.

Traditional vendor diligence often ranks vendors by contract value. AI diligence must rank vendors by product dependence, output dependence, data dependence, and substitution difficulty.

### Concentration Matrix

| Dependency class | Diligence question | High-risk signal |
|---|---|---|
| Foundation model | Which model produces customer-visible or workflow-critical output? | One provider handles the core feature with no fallback |
| Embeddings | Can stored embeddings be migrated or recreated? | Embeddings are vendor-specific and not reproducible |
| Prompt pipeline | Are prompts proprietary assets or undocumented operational tricks? | Critical prompts live in code, tickets, or employee memory |
| Evaluation | How is quality measured across model versions? | No regression suite or quality benchmark |
| Inference hosting | Where does processing occur and who controls it? | External provider handles sensitive customer inference |
| Vector database | Can retrieval context be exported and reconstructed? | Vendor lock-in or opaque indexing |
| Monitoring | Are prompts and outputs logged by third parties? | Observability provider retains sensitive payloads |
| Customer integrations | Which customer systems feed the AI layer? | Broad access to CRM, HRIS, financial, or health records |
| Support tooling | Can support staff view prompts, outputs, or customer data? | Global support access with weak logging |

### Concentration Severity

| Level | Description | Deal implication |
|---|---|---|
| Low | AI dependency is peripheral and replaceable within normal roadmap | Track in post-close plan |
| Medium | AI dependency affects product quality but not core ARR | Require remediation covenant or operating plan |
| High | AI dependency supports core customer workflows or margin model | Price, warranty, escrow, and integration review required |
| Critical | AI dependency is single-point-of-failure for ARR, regulated customers, or product claims | Closing condition or material valuation adjustment may be appropriate for counsel and investment team review |

### Brutal Finding

If a target cannot explain which AI dependencies are revenue-critical, the buyer cannot know whether it is buying software, a wrapper, a workflow company, or a fragile resale channel for someone else's model.

---

## Section 4 - Model Substitution Risk

### The False Assumption

Management often says: "We can switch models if needed."

That statement is not evidence.

Model substitution is credible only if the target has tested quality, latency, cost, output format, safety behavior, customer acceptance, contractual terms, and integration effort across alternatives.

### Substitution Test

| Test area | Required evidence | Failure signal |
|---|---|---|
| Output quality | Benchmark across representative customer workflows | No quality baseline exists |
| Latency | Measured response time under production-like workload | Alternative model breaks SLA |
| Cost | Unit economics under comparable volume | Margin collapses after substitution |
| Context handling | Retrieval, prompt length, document size, and language coverage | Alternative cannot handle same input |
| Output structure | JSON, citations, summaries, classifications, actions | Downstream workflows break |
| Safety behavior | Refusals, hallucinations, sensitive categories, escalation | Material behavior shift |
| Customer impact | Which customers would notice quality change? | No customer segment analysis |
| Contract terms | Data use, retention, indemnity, sub-processing, location | Alternative terms are worse |
| Deployment | API, self-hosted, sovereign, private-cloud option | No viable deployment path |

### Substitution Risk Map

| Current posture | Risk |
|---|---|
| Single API provider, no regression suite | Critical |
| Single API provider, benchmarked fallback | High |
| Multi-model routing with quality tests | Medium |
| Customer-configurable model layer with documented fallback | Low to medium |
| Fully self-hosted model with portability plan | Low, subject to infra and model-license review |

### Buyer Action

The buyer should require a model substitution memorandum before signing if AI outputs are material to revenue, customer retention, or product differentiation.

The memo should include:

- current critical model list
- fallback model candidates
- benchmark results
- cost comparison
- latency comparison
- customer impact
- contract term comparison
- migration steps
- known behavior differences
- open risks

---

## Section 5 - Data-Flow Opacity

### Core Diligence Question

Where does customer data go when the product uses AI?

The target must answer this across the full lifecycle:

1. ingestion
2. parsing
3. chunking
4. embedding
5. storage
6. retrieval
7. prompt construction
8. inference
9. output generation
10. logging
11. monitoring
12. evaluation
13. support access
14. deletion
15. export

### Data-Flow Exposure Table

| Data object | Typical location | Diligence concern |
|---|---|---|
| Raw customer documents | Application database, object storage, OCR provider | Sensitive content may enter third-party pipeline |
| Parsed text | Internal processing layer, queues, logs | Intermediate data may persist outside retention policy |
| Chunks | Vectorization pipeline | Chunked data may be hard to delete selectively |
| Embeddings | Vector database | Embeddings may encode sensitive information and may not be treated as personal or confidential data |
| Prompts | Application logs, model provider logs, observability tools | Prompt retention may contradict customer promises |
| Outputs | Application database, customer UI, support tools | Outputs may contain customer confidential data or hallucinated facts |
| Evaluation samples | QA datasets, analytics, model monitoring | Customer data may be reused for product improvement |
| Telemetry | Monitoring provider, analytics provider | Metadata can reveal usage, customers, workflow, or sensitive context |
| Support screenshots | Ticketing system, support tools | Customer data may leak into support vendors |

### Brutal Finding

Most targets can show where customer data is stored.

Fewer can show where customer data mutates.

AI diligence must track mutation: customer data becomes parsed text, chunks, embeddings, prompts, outputs, logs, eval samples, tickets, screenshots, and analytics events. Each mutation can create a separate exposure and a separate contractual mismatch.

---

## Section 6 - Customer Data Exposure

### Exposure Categories

| Category | What to test | High-risk signal |
|---|---|---|
| Confidential business data | Contracts, forecasts, pricing, board packs, customer records | Sent to external model provider without customer-specific approval |
| Personal data | Employees, applicants, customers, patients, users | Processed through AI layer without mapped DPA and retention controls |
| Special or sensitive data | Health, biometric, children, union, political, financial hardship | No exclusion, masking, or escalation control |
| Regulated customer data | Bank, insurer, healthcare, public-sector, defense-adjacent | Shared with broad sub-processor chain |
| Trade secrets | Proprietary customer documents or code | Used in prompts, evaluation, or support logs |
| Target proprietary data | Prompt libraries, eval sets, customer-derived tuning data | Ownership and transferability unclear |

### Customer Data Re-Use Test

The buyer should determine whether customer data is used for:

- direct inference
- embeddings
- prompt construction
- output generation
- product analytics
- quality evaluation
- model fine-tuning
- model improvement
- abuse monitoring
- support debugging
- sales demos
- synthetic examples
- benchmark datasets

### Deal Impact

Customer data exposure can affect:

- customer consent and notice posture
- DPA accuracy
- confidentiality obligations
- regulated customer eligibility
- customer churn risk
- breach notification analysis
- seller disclosure schedules
- warranty scope
- cyber insurance review
- post-close data migration

---

## Section 7 - Prompt And Output Retention Uncertainty

### Why Retention Matters

Prompts and outputs are often treated as transient product exhaust. In diligence, they must be treated as potential customer data, confidential data, personal data, evidence, and liability material.

The buyer must know:

- whether prompts are retained
- whether outputs are retained
- whether embeddings are retained
- whether provider logs retain payloads
- whether observability tools retain payloads
- whether support tools copy prompts or outputs
- whether retention differs by customer tier
- whether deletion requests cascade to all layers
- whether retention is disclosed to customers

### Retention Evidence Table

| Layer | Question | Required evidence |
|---|---|---|
| Application | Are prompts and outputs stored in product database? | Data model and retention policy |
| Model provider | Are prompts and outputs retained by provider? | Provider terms and configuration evidence |
| Observability | Are payloads captured in traces? | Tool configuration and sample redaction |
| Analytics | Are output snippets used in events? | Event schema review |
| Support | Are prompts or screenshots copied into tickets? | Support workflow and ticket samples |
| Evaluation | Are customer outputs stored as test cases? | Eval dataset register |
| Backups | Can prompt/output records be deleted from backups? | Backup retention schedule |

### Brutal Finding

"We do not train on customer data" is not enough.

The buyer needs to know whether customer data is retained, logged, transformed, evaluated, copied, displayed, exported, or sent to support systems. Training is only one pathway.

---

## Section 8 - Sub-Processor Dependency

### AI-Specific Sub-Processor Mapping

A standard sub-processor list is insufficient if it does not identify what each provider does in the AI pipeline.

| Sub-processor type | AI-specific role | Buyer concern |
|---|---|---|
| Model provider | Inference, embeddings, moderation, evaluation | Data retention, model improvement, location, change risk |
| Cloud provider | Hosting, storage, GPU, backup | Jurisdiction, resilience, access, concentration |
| Vector database | Retrieval, indexing, semantic storage | Portability, deletion, lock-in |
| Observability provider | Prompt traces, output logs, performance metrics | Payload retention and sensitive log exposure |
| OCR provider | Document parsing | Raw document exposure |
| Data enrichment provider | Entity extraction or enrichment | Accuracy, provenance, customer authorization |
| Support platform | Tickets, screenshots, logs | Unauthorized copying of customer data |
| Analytics provider | Usage tracking and event collection | Leakage of workflow metadata |
| Security vendor | DLP, monitoring, SIEM | Log access and retention |

### Sub-Processor Red Flags

- AI providers not listed because management treats them as "infrastructure."
- Observability tools capture prompt payloads but are not disclosed as customer-data sub-processors.
- Model providers can change sub-processors unilaterally.
- Customer contracts require notice of sub-processor changes, but AI providers update terms dynamically.
- Sub-processors process data outside the geography promised to customers.
- The target cannot identify which customers are affected by each AI sub-processor.

### Buyer Action

The buyer should require an AI-specific sub-processor schedule that maps:

- provider name
- legal entity
- service role
- data categories processed
- geography
- retention behavior
- onward sub-processors
- contract basis
- notice mechanism
- affected customer products
- replacement feasibility

---

## Section 9 - IP Contamination And Provenance Uncertainty

### IP Questions The Buyer Must Ask

| Question | Why it matters |
|---|---|
| Were customer documents used to create prompts, templates, benchmarks, or eval datasets? | Customer-derived assets may not be transferable or reusable |
| Were outputs used in product templates, documentation, or customer deliverables? | Ownership and originality may be uncertain |
| Were third-party datasets used to tune, evaluate, or improve product behavior? | License restrictions may affect commercial use |
| Are prompts treated as trade secrets? | Prompt libraries may be core IP or undocumented know-how |
| Does the target fine-tune models? | Training inputs, rights, and provider role may need review |
| Does the target claim proprietary AI while relying on third-party APIs? | Product claims may overstate defensibility |
| Are generated outputs stored as reusable examples? | Customer confidentiality and provenance issues may arise |

### Provenance Register

The target should maintain a provenance register for:

- prompt libraries
- system prompts
- eval datasets
- benchmark datasets
- fine-tuning datasets
- synthetic datasets
- customer-derived examples
- generated templates
- product documentation generated with AI assistance
- model licenses
- open-source AI components
- third-party data enrichment sources

### Brutal Finding

If the target cannot prove where its AI behavior, prompts, benchmarks, and examples came from, the buyer cannot know what part of the product is owned, licensed, customer-derived, or merely borrowed from upstream infrastructure.

This matters for valuation because proprietary AI premium collapses when the target cannot evidence proprietary control.

---

## Section 10 - Contract Architecture Mismatch

### The Mismatch Pattern

The most dangerous diligence issue is not that the target lacks contracts. It is that the contracts describe a cleaner business than the architecture actually supports.

### Mismatch Matrix

| Customer promise | Architecture fact to test | Deal risk |
|---|---|---|
| "Your data stays in the EU" | Are prompts, logs, telemetry, backups, and support tickets also EU-bound? | Customer notice, breach of promise, re-papering |
| "We do not use customer data for training" | Is data used for evals, analytics, embeddings, product improvement, or support debugging? | Promise too narrow or misleading |
| "Enterprise-grade security" | Are AI logs redacted, access-controlled, and monitored? | Security claim unsupported |
| "Proprietary AI" | Is the product mostly a third-party API wrapper? | Valuation and customer trust risk |
| "Human-in-the-loop" | Is human review mandatory, logged, and meaningful? | Automation exposure and customer mismatch |
| "Model agnostic" | Has substitution been tested? | Migration and continuity risk |
| "Customer can delete data" | Do deletion workflows reach embeddings, prompts, logs, evals, and backups? | Data deletion promise unsupported |
| "No customer data leaves our platform" | Do model providers, OCR providers, or observability tools receive payloads? | Material misstatement risk |
| "Audit-ready" | Are logs complete enough to reconstruct AI outputs? | Buyer, insurer, or regulator cannot rely on audit claim |

### Documents To Compare

The buyer should compare:

- MSA
- DPA
- security schedule
- privacy notice
- sub-processor page
- AI terms
- data retention policy
- sales deck
- website claims
- product documentation
- implementation guide
- support documentation
- architecture diagrams
- actual logs and configurations

### Brutal Finding

Contract diligence without architecture diligence can validate the wrong story.

The buyer must test whether the target's contracts describe the product that actually exists.

---

## Section 11 - Customer Promise Vs Architecture Mismatch

### Customer Trust Exposure

For SaaS targets, the most expensive AI issue may not be a regulator. It may be customers realizing the architecture does not match the promise they bought.

### Customer Segmentation

| Customer segment | Sensitivity |
|---|---|
| Regulated financial institutions | High sensitivity to sub-processors, exit, audit, and data location |
| Healthcare and life sciences | High sensitivity to health data, retention, and model use |
| Public sector | High sensitivity to sovereignty, procurement defensibility, and audit evidence |
| Enterprise HR or recruitment customers | High sensitivity to automated decision-making, discrimination, and employee data |
| Legal, consulting, and professional services | High sensitivity to confidentiality and privilege-adjacent data |
| Mid-market commercial customers | Medium sensitivity, but churn risk if trust breaks |

### Customer Promise Risk Signals

- High-value customers have negotiated custom AI restrictions not reflected in product architecture.
- Sales teams promise no data leaves the platform while product uses external inference APIs.
- DPA excludes training, but product uses customer data for eval sets or quality review.
- Support teams request customer documents for debugging without controlled workflow.
- Customer deletion requests do not cascade to vector stores or observability traces.
- Product roadmap assumes broader AI use than legacy contracts permit.

### Buyer Action

The buyer should request a customer promise inventory:

- top 20 customers by ARR
- custom AI, data, security, or sub-processor clauses
- regulated customer restrictions
- AI-related side letters
- customer questionnaire responses
- security representations
- data location commitments
- deletion and retention commitments
- AI feature opt-out commitments

---

## Section 12 - Reversibility And Migration Feasibility

### Reversibility Is Deal Value

If the buyer cannot migrate or substitute the AI stack, the buyer has less control after closing.

Reversibility affects:

- post-close cloud consolidation
- strategic acquirer platform integration
- margin improvement
- supplier negotiation leverage
- customer commitments
- regulatory buyer access
- technical debt remediation
- exit valuation

### Migration Feasibility Matrix

| Asset | Migration question | High-risk signal |
|---|---|---|
| Model provider | Can model behavior be replicated or substituted? | No benchmarks, no fallback |
| Prompt library | Are prompts documented, versioned, and owned? | Prompts scattered in code and tickets |
| Embeddings | Can embeddings be regenerated on another model? | No source text mapping or version record |
| Vector store | Can indexes be exported and rebuilt? | Vendor lock-in |
| Eval datasets | Can quality be tested after migration? | No evaluation suite |
| Customer configs | Can workflows, rules, and templates move? | Configuration lives in vendor-specific format |
| Logs | Can audit history be preserved? | Logs fragmented across vendors |
| Data deletion | Can deleted customer data stay deleted after migration? | Backups and vector stores unmanaged |
| Support tooling | Can support data be migrated safely? | Sensitive payloads in tickets |

### Exit Test Evidence

The buyer should request evidence of:

- last full export
- last restore test
- last model fallback test
- last vector database migration test
- last customer deletion cascade test
- last prompt and output log purge test
- documented RTO and RPO assumptions
- known migration blockers

### Brutal Finding

If the target has never tested migration, management does not know whether AI dependency is an asset or a trap.

---

## Section 13 - Valuation Fragility

### Where AI Dependency Hits Valuation

| Value driver | Dependency risk | Potential consequence |
|---|---|---|
| ARR quality | Customers depend on AI feature with unstable upstream provider | Renewal risk or pricing pressure |
| Gross margin | Model costs increase or fallback is more expensive | Margin compression |
| Net retention | AI output quality degrades after provider change | Expansion slows or churn rises |
| Market positioning | "Proprietary AI" claim unsupported | Multiple compression |
| Regulated-market access | Data-flow and sub-processor evidence insufficient | TAM reduction |
| Product roadmap | Roadmap depends on model features target cannot control | Execution risk |
| Integration synergy | Acquirer cannot migrate stack without breaking feature | Synergy delay |
| Legal protection | Warranties do not cover AI-specific issues | Post-close dispute risk |
| Cyber insurance | Prompt/output retention and sub-processors unclear | Insurance friction |
| Exit optionality | Future buyers discount unresolved AI exposure | Lower exit valuation |

### Valuation Adjustment Inputs

The buyer may need to model:

- model cost increase sensitivity
- forced provider migration cost
- regulated customer remediation cost
- customer re-papering cost
- sub-processor replacement cost
- engineering cost for data-flow remediation
- cost of building eval and benchmark suite
- cost of customer notification or consent refresh
- cost of contract amendments
- delay to enterprise or public-sector pipeline
- insurance, lender, or board review friction

### Brutal Finding

AI can inflate the story faster than it strengthens the company.

The buyer must separate AI narrative premium from AI control premium. Only the second deserves valuation support.

---

## Section 14 - Post-Acquisition Integration Risk

### Integration Failure Modes

| Failure mode | Description |
|---|---|
| Model vendor conflict | Acquirer has preferred AI vendor, but target is hard-wired to another |
| Cloud consolidation conflict | Target's AI stack cannot move to acquirer's cloud without quality loss |
| Customer contract conflict | Acquirer integration changes sub-processors or data location |
| Data lake conflict | Target data cannot be pooled because customer terms restrict AI use |
| Security policy conflict | Acquirer logging, retention, or access controls clash with AI tooling |
| Product roadmap conflict | AI features depend on tooling acquirer will not approve |
| Regulated customer conflict | Integration triggers new review by banks, public buyers, or health customers |
| Support model conflict | Acquirer support teams gain access to sensitive prompts or outputs |

### Day-1 Controls

The buyer should define Day-1 controls before closing:

- freeze new AI vendor onboarding
- freeze material model provider changes
- preserve logs and evidence
- preserve current customer commitments
- identify custom customer restrictions
- restrict support access to prompt and output payloads
- create AI dependency owner
- establish model-change approval board
- start data-flow validation sprint

### First 100 Days

The buyer should complete:

- full AI dependency inventory
- customer promise inventory
- prompt and output retention audit
- model substitution test
- sub-processor schedule rewrite
- AI-specific DPA and MSA gap review
- eval suite creation
- migration feasibility assessment
- regulated customer risk segmentation
- remediation budget

---

## Section 15 - Buyer Objection Map

### PE Sponsor Objections

| Objection | What it really means | Required evidence |
|---|---|---|
| "How much ARR depends on AI?" | We need to know what revenue is exposed to upstream dependency | AI revenue dependency map |
| "Can the model be swapped?" | We need fallback control and supplier leverage | Substitution benchmark |
| "Is AI margin sustainable?" | We need model-cost sensitivity | Unit economics by model provider |
| "Is this proprietary?" | We need to separate owned IP from API dependence | IP and provenance register |
| "Will this affect exit?" | We need future buyer and insurer comfort | Evidence pack and remediation roadmap |

### Strategic Acquirer Objections

| Objection | What it really means | Required evidence |
|---|---|---|
| "Can it integrate with our platform?" | Existing AI stack may conflict with enterprise architecture | Migration feasibility matrix |
| "Can we move it to our cloud?" | Cloud and model dependencies may block consolidation | Deployment and data-flow map |
| "Can we use our model vendor?" | Model behavior may not be portable | Substitution test results |
| "Can we combine datasets?" | Customer contracts may restrict data pooling and AI use | Customer promise inventory |
| "Can we support it globally?" | Support access may create data transfer and confidentiality issues | Support access procedure |

### M&A Counsel Objections

| Objection | What it really means | Required evidence |
|---|---|---|
| "What needs to be disclosed?" | Seller schedules may miss AI-specific exposure | AI dependency and contract mismatch register |
| "What should be warranted?" | Generic IP, privacy, and compliance reps may be insufficient | AI-specific evidence request list |
| "What should be covenanted?" | Remediation may need to occur before or after close | Remediation roadmap |
| "What is the customer exposure?" | Existing promises may not match architecture | Top customer promise review |
| "What is the vendor exposure?" | Upstream terms may conflict with customer obligations | Vendor term comparison |

### Lender Or Insurer Objections

| Objection | What it really means | Required evidence |
|---|---|---|
| "Could AI dependency impair cash flow?" | Model cost, outage, or customer churn can affect debt service | ARR and margin sensitivity |
| "Could there be a claim?" | Contract, privacy, IP, or product output issues may trigger loss | Contract mismatch and incident history |
| "Is there concentration risk?" | Single provider dependency may be material | Critical dependency map |
| "Can the company recover?" | Business continuity must include AI stack | Reversibility and fallback plan |

---

## Section 16 - Evidence Request List

### Priority 1 - Deal-Critical

- AI product feature inventory
- AI vendor inventory
- model provider contracts and terms
- embeddings provider terms
- vector database contract and export documentation
- cloud and inference architecture diagrams
- AI data-flow map from ingestion to deletion
- prompt and output retention policy
- sub-processor list with AI-specific role mapping
- top 20 customer contracts by ARR
- AI-related side letters or custom customer commitments
- customer security questionnaire responses involving AI
- DPA and AI data processing schedules
- data retention and deletion policy
- model substitution tests or fallback plan
- AI incident history
- security incidents involving prompts, outputs, logs, or customer data

### Priority 2 - Valuation And IP

- prompt library inventory
- system prompt version history
- eval dataset register
- fine-tuning dataset register
- synthetic data generation process
- generated content usage policy
- open-source AI component list
- model licenses
- product claims and website AI claims
- sales decks and demo scripts
- roadmap assumptions tied to AI features
- gross margin by AI feature or workload
- model cost forecasts
- customer churn or complaints related to AI quality

### Priority 3 - Integration And Post-Close

- export and migration procedures
- last backup and restore test
- vector store export test
- customer deletion cascade procedure
- support access logs
- support ticket samples involving AI payloads
- observability and tracing tool configuration
- model monitoring dashboards
- quality benchmark suite
- deployment environment requirements
- business continuity and disaster recovery plan
- procurement questionnaires from regulated customers
- board materials discussing AI strategy
- internal AI policy
- AI governance committee materials, if any

---

## Section 17 - Remediation Roadmap

### Pre-Sign Red Flags

The buyer should escalate before signing if any of the following are present:

- core AI feature depends on one model provider with no tested fallback
- customer data enters model provider without clear contract and retention evidence
- top customer contracts contain AI restrictions that product architecture may breach
- target claims proprietary AI but cannot evidence owned prompts, models, datasets, or evals
- target cannot produce an AI data-flow map
- target cannot identify where prompts and outputs are retained
- customer deletion does not reach embeddings, logs, evals, or support records
- regulated customers depend on AI feature without evidence pack
- no migration or reversibility test exists

### Signing Protections To Consider

Counsel and deal teams may consider whether conditions surfaced by this dossier support:

- enhanced AI-specific representations
- disclosure schedule updates
- vendor dependency warranties
- customer data use warranties
- IP provenance warranties
- covenant to preserve AI vendor terms before close
- covenant to notify buyer of model or sub-processor changes
- special indemnity for identified AI issues
- escrow or holdback tied to remediation
- closing condition for critical evidence delivery
- purchase price adjustment for remediation cost

This section surfaces possible deal mechanics for counsel and investment teams to evaluate. It is not legal advice.

### First 30 Days Post-Close

- appoint AI dependency owner
- freeze material model provider changes
- build full AI dependency register
- build customer promise inventory
- map prompt, output, embedding, eval, and log retention
- identify top 10 architecture-contract mismatches
- segment customers by AI sensitivity
- preserve evidence and logs
- launch model substitution benchmark

### Days 30-60

- rewrite AI-specific sub-processor schedule
- build model fallback plan
- create prompt and output retention controls
- create deletion cascade plan
- build eval and regression suite
- review top customer contracts for AI restrictions
- identify customer re-papering needs
- review open-source and model licenses
- define AI incident taxonomy
- prepare board remediation memo

### Days 60-100

- run model substitution test
- run data deletion cascade test
- run vector store migration test
- implement support payload redaction
- update DPA and AI processing schedules
- prepare regulated-customer evidence pack
- align sales claims with architecture
- build ongoing model-change approval workflow
- finalize remediation budget and timeline

---

## Section 18 - Monetization Architecture For Advisory Partners

### Productized Advisory Offer

**Offer name:** AI Dependency Diligence Review

**Buyer:** PE sponsor, strategic acquirer, M&A counsel, portfolio operating team, lender diligence team, or warranty and indemnity insurer.

**Outcome:** A board-grade dossier showing how AI dependency affects valuation, customer promises, contract architecture, vendor concentration, migration feasibility, and post-close remediation.

### Suggested Work Packages

| Package | Scope | Price hypothesis |
|---|---|---|
| Red-flag AI dependency scan | 5-7 day review of AI dependencies, customer promises, and critical deal blockers | EUR 25k-50k |
| Full AI dependency diligence pack | Complete evidence review, buyer objection map, risk register, and deal-term support | EUR 75k-150k |
| Strategic acquirer integration review | Migration feasibility, model substitution, customer re-papering, post-close plan | EUR 100k-250k |
| PE portfolio dependency review | Repeatable review across 3-5 portfolio companies | EUR 150k-350k+ |
| Lender or insurer AI dependency addendum | Focused cash-flow, concentration, and claims exposure evidence pack | EUR 40k-100k |

### Why This Commands Premium Fees

The advisory partner is not selling a questionnaire. They are selling deal control.

The dossier helps the buyer:

- find hidden exposure before signing
- pressure test AI premium in valuation
- identify necessary contractual protection
- estimate remediation cost
- detect post-close integration problems
- improve lender and insurer comfort
- avoid paying proprietary multiples for fragile dependency

### Partner Meeting Line

> "This is not an AI governance report. It is the evidence layer that tells a buyer whether AI creates enterprise value or enterprise fragility."

---

## Section 19 - Board Summary

### What The Board Needs To Know

The target's AI dependency can create value only if it is controlled, evidenced, and transferable.

Current risk is concentrated in ten areas:

1. critical model-provider concentration
2. untested model substitution
3. opaque customer data flows
4. uncertain prompt and output retention
5. AI-specific sub-processor gaps
6. customer promise mismatch
7. IP and provenance uncertainty
8. weak reversibility and migration evidence
9. post-close integration friction
10. unpriced remediation cost

### Board Decision

The board should decide whether AI is being valued as:

- a controlled proprietary asset
- a replaceable vendor-enabled feature
- an unpriced dependency
- a post-close remediation liability

Those are different assets. They deserve different multiples.

### Final Board Line

If AI is material to revenue, margin, or customer trust, the buyer should not close on the story. The buyer should close on the evidence.

---

## Section 20 - Final Verdict

The target does not need an AI governance label.

It needs to prove that its AI dependency stack is controlled, substitutable, contractually aligned, customer-safe, and transferable after acquisition.

The strongest acquisition posture is not:

> "The company uses AI."

It is:

> "The company can prove which AI dependencies create value, which dependencies create fragility, and what it costs to control them."

That is the diligence moat.

---

## Appendix A - Source Anchors

This dossier is date-sensitive. Counsel should refresh all source anchors before client delivery.

- EU Artificial Intelligence Act overview and implementation context: [European Parliament](https://www.europarl.europa.eu/topics/en/article/20230601STO93804/the-ai-act-eu-rules-to-regulate-artificial-intelligence)
- AI Act high-risk timeline update: [European Commission](https://digital-strategy.ec.europa.eu/en/news/eu-agrees-simplify-ai-rules-boost-innovation-and-ban-nudification-apps-protect-citizens)
- AI systems in employment and worker management context: [AI Act Service Desk, Recital 57](https://ai-act-service-desk.ec.europa.eu/en/ai-act/recital-57)
- EU product liability and software / AI systems: [European Commission](https://commission.europa.eu/news/eu-adapts-product-liability-rules-digital-age-and-circular-economy-2024-12-09_en)
- DORA operational resilience and ICT third-party risk context: [EUR-Lex Regulation (EU) 2022/2554](https://eur-lex.europa.eu/eli/reg/2022/2554/oj)

---

## Appendix B - First Client Questions

1. Which product features depend on AI models, embeddings, vector retrieval, or agentic orchestration?
2. Which AI features are included in ARR, expansion revenue, or premium pricing?
3. Which model providers are used in production?
4. Which model provider would be hardest to replace?
5. Has the target run a model substitution benchmark?
6. Does customer data enter prompts, embeddings, logs, eval datasets, or model provider systems?
7. Are prompts and outputs retained by the target or any vendor?
8. Are prompts or outputs captured by observability tools?
9. Are embeddings deletable and portable?
10. Are customer deletion requests propagated through the full AI pipeline?
11. Are AI providers listed as sub-processors?
12. Do customer contracts restrict AI use, data sharing, sub-processing, or model training?
13. Do sales materials promise anything stronger than the architecture can prove?
14. Does the target claim proprietary AI? If yes, what exactly is owned?
15. Are prompts, evals, benchmarks, and fine-tuning datasets documented and transferable?
16. What happens if the main model provider doubles pricing?
17. What happens if the main model provider changes retention terms?
18. What happens if a regulated customer demands local or sovereign processing?
19. What breaks if the acquirer moves the product to its preferred cloud?
20. What remediation must occur in the first 100 days after close?

---

*Prepared as a flagship Exposure Intelligence artifact. This dossier surfaces AI dependency conditions for legal, diligence, and investment interpretation. It does not provide legal advice, valuation advice, or a compliance certification.*
