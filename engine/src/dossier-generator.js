import { getProduct } from "./products.js";
import { normalizeIntake } from "./schema.js";
import { deriveAnalysis } from "./rules.js";
import { appendices, bullets, numbered, section, table } from "./markdown.js";
import { buildPartnerMetadata } from "./metadata.js";

const CLIENT_FACING_BANNED_TERMS = [
  "MSAE",
  "NCE",
  "IGE",
  "CAE",
  "IRA",
  "FRA",
  "Ramification Engine",
  "forced futures",
  "negative-space",
  "constraint architecture",
  "incentive geometry",
  "narrative compression"
];

export function generateDossier({ productId, intake: rawIntake, options = {} }) {
  const product = getProduct(productId);
  const intake = normalizeIntake(rawIntake);
  const analysis = deriveAnalysis(intake, product);
  const reference = options.reference || buildReference(product.referencePrefix, intake.archetypeId);
  const title = options.title || options.productName || product.title;
  const metadata = buildPartnerMetadata({ product, intake, reference, options });

  const markdown = [
    `# ${title}`,
    "",
    buildMetadataBlock(metadata, intake),
    `> Version: 0.1 generated backend artifact`,
    "",
    "---",
    "",
    openingNotice(product, metadata),
    "",
    "---",
    "",
    buildSection1(product, intake, analysis),
    "",
    "---",
    "",
    buildSection2(product, intake),
    "",
    "---",
    "",
    buildSection3(product, analysis),
    "",
    "---",
    "",
    buildSection4(product, analysis),
    "",
    "---",
    "",
    buildSection5(product, analysis),
    "",
    "---",
    "",
    buildSection6(product, analysis),
    "",
    "---",
    "",
    buildSection7(product, analysis),
    "",
    "---",
    "",
    buildSection8(product, analysis),
    "",
    "---",
    "",
    buildSection9(intake, analysis),
    "",
    closingNotice(product)
  ].join("\n");

  enforceVocabularyFirewall(markdown);

  return {
    product: {
      id: product.id,
      tier: product.tier,
      title: product.title
    },
    reference,
    metadata,
    reviewStatus: metadata.reviewStatus,
    intake,
    analysis,
    markdown
  };
}

function buildMetadataBlock(metadata, intake) {
  return [
    `> Partner firm: ${metadata.partnerFirmName}`,
    `> Partner logo: ${metadata.partnerLogoPlaceholder}`,
    `> Prepared for: ${metadata.preparedFor}`,
    `> Product: ${metadata.productName}`,
    `> Date basis: ${metadata.dateBasis}`,
    `> Reference ID: ${metadata.referenceId}`,
    `> Review status: ${metadata.reviewStatus}`,
    `> Archetype: ${intake.archetypeId}`,
    `> Jurisdiction: ${intake.jurisdiction}`
  ].join("\n");
}

function openingNotice(product, metadata) {
  return [
    metadata.disclaimerBlock,
    "",
    `The dossier is generated from an archetype input for ${product.buyerFrame}. No client systems, contracts, source code, production data, or records were accessed.`
  ].join("\n");
}

function closingNotice(product) {
  return `*Prepared as an Exposure Intelligence artifact. This dossier surfaces ${product.buyerFrame} conditions for advisory interpretation. It does not provide legal advice, a compliance certification, or a valuation opinion.*`;
}

function buildSection1(product, intake, analysis) {
  const topRows = analysis.topConditions.map((condition) => [
    condition.label,
    condition.why,
    condition.posture
  ]);

  const body = [
    "### Strategic Finding",
    "",
    strategicFinding(product, intake),
    "",
    "### Brutal Read",
    "",
    brutalRead(product),
    "",
    "### Exposure Profile",
    "",
    `**Overall profile:** ${analysis.overallProfile}`,
    "",
    `The profile is driven by ${intake.externalDependencyLevel.toLowerCase()} external dependency, ${intake.regulatorySensitivity.toLowerCase()} sensitivity, and the current evidence posture generated from the archetype.`,
    "",
    "### Top Conditions",
    "",
    table(["Condition", "Why It Matters", "Current Evidence Posture"], topRows),
    "",
    "### Interpretation Questions",
    "",
    numbered(analysis.interpretationQuestions),
    "",
    "### Partner-Level Interpretation",
    "",
    partnerInterpretation(product)
  ].join("\n");

  return section(1, product.sectionNames.section1, body);
}

function buildSection2(product, intake) {
  const rows = [
    ["Jurisdiction", intake.jurisdiction],
    ["Sector", intake.sector],
    ["Company size", intake.companySize],
    ["Revenue band", intake.revenueBand],
    ["Employee band", intake.employeeBand],
    ["AI surface category", intake.aiSurfaceCategories.join(", ")],
    ["Business function affected", intake.businessFunctions.join(", ")],
    ["Deployment model", intake.deploymentModels.join(", ")],
    ["Regulatory sensitivity", intake.regulatorySensitivity],
    ["External dependency level", intake.externalDependencyLevel]
  ];

  const body = [
    "### Assessment Basis",
    "",
    "This report is generated from a structured archetype. It does not reflect access to a named entity's systems or records.",
    "",
    "### Input Archetype",
    "",
    table(["Dimension", "Value"], rows),
    "",
    "### Assumptions And Limits",
    "",
    bullets([
      "The output is archetype-based and requires entity-level verification before client reliance.",
      "The dossier does not assess liability or compliance status.",
      "The dossier does not ingest client data.",
      "The dossier is designed for partner interpretation and follow-on advisory work."
    ])
  ].join("\n");

  return section(2, product.sectionNames.section2, body);
}

function buildSection3(product, analysis) {
  const rows = analysis.surfaceMap.map((item) => [
    item.name,
    item.type,
    item.deploymentModel,
    item.businessFunction,
    item.dataCategories,
    item.oversightLevel
  ]);

  const body = [
    "### Map",
    "",
    table(["AI Tool / Category", "Tool Type", "Deployment Model", "Business Function", "Data Categories", "Oversight Level"], rows),
    "",
    "### Propagation Read",
    "",
    "The map identifies where AI use can move from a tool surface into buyer review, data protection review, procurement review, or transaction diligence. The output remains a condition map for counsel and deal teams to interpret."
  ].join("\n");

  return section(3, product.sectionNames.section3, body);
}

function buildSection4(product, analysis) {
  const rows = analysis.dependencies.map((dependency) => [
    dependency.vendor,
    dependency.component,
    dependency.criticality,
    dependency.reversibility,
    dependency.contractCoverage,
    dependency.notes
  ]);

  return section(4, product.sectionNames.section4, table([
    "Vendor / Component",
    "Component",
    "Criticality",
    "Reversibility",
    "Contract Coverage",
    "Notes"
  ], rows));
}

function buildSection5(product, analysis) {
  const rows = analysis.evidenceGaps.map((gap) => [
    gap.item,
    gap.status,
    gap.priority,
    gap.notes
  ]);

  const body = [
    "### What Is Known",
    "",
    "The archetype establishes the sector, jurisdiction, AI surface, business functions, deployment model, and external dependency level.",
    "",
    "### What Is Not Evidenced",
    "",
    "The following evidence items should structurally exist for this archetype and are not evidenced unless marked Known.",
    "",
    table(["Item", "Status", "Priority", "Notes"], rows),
    "",
    "### What Cannot Yet Be Established",
    "",
    bullets([
      "Whether the entity's actual contracts match the architecture.",
      "Whether AI outputs have been used in decisions with material legal, procurement, employment, or deal impact.",
      "Whether customer promises match prompt, output, log, and sub-processor behavior.",
      "Whether a tested exit or model-substitution path exists."
    ])
  ].join("\n");

  return section(5, product.sectionNames.section5, body);
}

function buildSection6(product, analysis) {
  const rows = analysis.signals.map((signal) => [
    signal.condition,
    signal.severity,
    signal.status
  ]);

  return section(6, product.sectionNames.section6, table(["Condition", "Severity", "Status"], rows));
}

function buildSection7(product, analysis) {
  const body = [
    "### Immediate",
    "",
    bullets(analysis.remediation.immediate),
    "",
    "### Near-Term",
    "",
    bullets(analysis.remediation.nearTerm),
    "",
    "### Structured",
    "",
    bullets(analysis.remediation.structured)
  ].join("\n");

  return section(7, product.sectionNames.section7, body);
}

function buildSection8(product, analysis) {
  const rows = analysis.escalationTriggers.map((trigger) => [
    trigger.riskArea,
    trigger.condition,
    trigger.requiredAction,
    trigger.timing
  ]);

  return section(8, product.sectionNames.section8, table([
    "Risk Area",
    "Condition",
    "Required Action",
    "Timing"
  ], rows));
}

function buildSection9(intake, analysis) {
  const inputRows = [
    ["Archetype ID", intake.archetypeId],
    ["Jurisdiction", intake.jurisdiction],
    ["Sector", intake.sector],
    ["Company size", intake.companySize],
    ["Revenue band", intake.revenueBand],
    ["Employee band", intake.employeeBand],
    ["AI surface", intake.aiSurfaceCategories.join(", ")],
    ["Business functions", intake.businessFunctions.join(", ")],
    ["Deployment models", intake.deploymentModels.join(", ")],
    ["External dependency", intake.externalDependencyLevel]
  ];

  const body = [
    "### Appendix A - Archetype Input",
    "",
    table(["Field", "Value"], inputRows),
    "",
    "### Appendix B - Assumptions",
    "",
    bullets(intake.assumptions.length > 0 ? intake.assumptions : [
      "Standard vendor terms are assumed unless entity-level documents indicate otherwise.",
      "No production systems or client records were accessed.",
      "Evidence status reflects archetype-level generation."
    ]),
    "",
    "### Appendix C - Evidence Checklist",
    "",
    bullets(analysis.evidenceRequests),
    "",
    "### Appendix D - First Questions For Counsel",
    "",
    numbered(analysis.interpretationQuestions)
  ].join("\n");

  return appendices(body);
}

function strategicFinding(product, intake) {
  if (product.id === "pe-ai-dependency-diligence-pack") {
    return "The target's AI narrative should be treated as a dependency structure until model substitution, customer data flow, retention, sub-processor, and contract alignment evidence is available.";
  }

  if (product.id === "sovereign-procurement-dossier") {
    return "The entity's ability to win regulated buyers depends on procurement defensibility: sovereignty evidence, reversibility, support-access controls, role clarity, and buyer-ready documentation.";
  }

  if (product.id === "construction-procurement-dossier") {
    return "The entity's tender advantage depends on whether environmental, supplier, traceability, and contract evidence can be produced before the bid window closes.";
  }

  return "The entity has an AI deployment surface that requires structured evidence before counsel can interpret exposure, buyer defensibility, or remediation priority.";
}

function brutalRead(product) {
  if (product.id === "pe-ai-dependency-diligence-pack") {
    return "The buyer should not pay AI premium until the target proves control over the dependencies that create that premium.";
  }

  if (product.id === "sovereign-procurement-dossier") {
    return "The product may be strong, but the procurement posture is not bankable until the evidence pack can survive buyer review.";
  }

  if (product.id === "construction-procurement-dossier") {
    return "A contractor that builds bid evidence during the tender sprint is already late.";
  }

  return "The entity has deployed AI faster than it has documented the evidence counsel will need.";
}

function partnerInterpretation(product) {
  if (product.id === "pe-ai-dependency-diligence-pack") {
    return "The partner can convert vague AI upside into deal intelligence: dependency control, valuation fragility, evidence requests, and deal-term pressure points.";
  }

  if (product.id === "sovereign-procurement-dossier") {
    return "The partner can convert stalled procurement into a market-access structuring mandate: evidence pack, contract architecture, reversibility, and buyer objection handling.";
  }

  if (product.id === "construction-procurement-dossier") {
    return "The partner can convert tender documentation into a standing advisory mandate around evidence architecture, supplier traceability, and award defensibility.";
  }

  return "The partner receives a structured technical evidence base they can deploy under their name before writing legal advice, board guidance, or remediation recommendations.";
}

function buildReference(prefix, archetypeId) {
  const compactDate = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  return `${prefix}-${archetypeId}-${compactDate}`;
}

function enforceVocabularyFirewall(markdown) {
  const leaked = CLIENT_FACING_BANNED_TERMS.filter((term) => {
    if (/^[A-Z]{3,5}$/.test(term)) {
      return new RegExp(`\\b${term}\\b`).test(markdown);
    }

    return markdown.toLowerCase().includes(term.toLowerCase());
  });

  if (leaked.length > 0) {
    throw new Error(`Vocabulary firewall failed. Remove client-facing internal term(s): ${leaked.join(", ")}`);
  }
}
