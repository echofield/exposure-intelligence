const SURFACE_LABELS = {
  PRODUCTIVITY_TOOLS: "Productivity and collaboration AI",
  DECISION_SUPPORT: "Decision support",
  CUSTOMER_AUTOMATION: "Customer-facing automation",
  THIRD_PARTY_LLM: "Third-party LLM integration",
  PREDICTIVE_SYSTEMS: "Predictive or classification tools",
  GENERATIVE_CONTENT: "Generative content production"
};

const FUNCTION_LABELS = {
  COMMERCIAL: "Commercial",
  HR: "HR",
  FINANCE: "Finance",
  LEGAL_COMPLIANCE: "Legal and compliance",
  OPERATIONS: "Operations",
  PRODUCT: "Product",
  IT_INFRA: "IT and infrastructure",
  EXECUTIVE: "Executive"
};

export function deriveAnalysis(intake, product) {
  const dependencies = deriveDependencies(intake, product);
  const evidenceGaps = deriveEvidenceGaps(intake, product);
  const signals = deriveSignals(intake, product);
  const escalationTriggers = signals
    .filter((signal) => signal.severity === "High" || signal.severity === "Critical")
    .map((signal) => ({
      riskArea: signal.riskArea,
      condition: signal.condition,
      requiredAction: signal.status === "Requires attorney assessment"
        ? "Attorney assessment required before relying on this condition."
        : "Partner should verify the underlying evidence before client use.",
      timing: signal.severity === "Critical" ? "Immediate" : product.tier === "T3" ? "Before signing" : "Before next buyer submission"
    }));

  return {
    surfaceMap: deriveSurfaceMap(intake),
    dependencies,
    evidenceGaps,
    signals,
    escalationTriggers,
    remediation: deriveRemediation(intake, product),
    evidenceRequests: deriveEvidenceRequests(intake, product),
    overallProfile: deriveOverallProfile(intake, signals),
    topConditions: deriveTopConditions(intake, product, signals, dependencies, evidenceGaps),
    interpretationQuestions: deriveQuestions(product)
  };
}

function deriveSurfaceMap(intake) {
  const tools = intake.knownTools.length > 0
    ? intake.knownTools
    : intake.aiSurfaceCategories.map((category) => ({
      name: SURFACE_LABELS[category] || category,
      type: category,
      deploymentModel: intake.deploymentModels.join(", "),
      businessFunction: intake.businessFunctions.join(", "),
      dataCategories: inferDataCategories(intake),
      oversightLevel: "Not evidenced at archetype level"
    }));

  return tools.map((tool) => ({
    name: tool.name || tool,
    type: tool.type || "AI tool",
    deploymentModel: tool.deploymentModel || intake.deploymentModels.join(", "),
    businessFunction: tool.businessFunction || intake.businessFunctions.join(", "),
    dataCategories: tool.dataCategories || inferDataCategories(intake),
    oversightLevel: tool.oversightLevel || "Requires entity-level verification"
  }));
}

function deriveDependencies(intake, product) {
  const provided = intake.vendorDependencies.map((dependency) => ({
    vendor: dependency.vendor || dependency.name || dependency,
    component: dependency.component || dependency.type || "AI vendor",
    criticality: dependency.criticality || inferDependencyCriticality(intake, product),
    reversibility: dependency.reversibility || inferReversibility(intake),
    contractCoverage: dependency.contractCoverage || "Partial",
    notes: dependency.notes || "Contract auditability and replacement path require verification."
  }));

  if (provided.length > 0) {
    return provided;
  }

  const defaults = [];

  if (intake.aiSurfaceCategories.includes("PRODUCTIVITY_TOOLS")) {
    defaults.push({
      vendor: "Productivity AI provider",
      component: "Embedded SaaS AI",
      criticality: "High",
      reversibility: "Moderate",
      contractCoverage: "Partial",
      notes: "Processing scope, retention, and user-notification evidence require verification."
    });
  }

  if (intake.aiSurfaceCategories.includes("DECISION_SUPPORT") || intake.aiSurfaceCategories.includes("PREDICTIVE_SYSTEMS")) {
    defaults.push({
      vendor: "Decision support or scoring provider",
      component: "Scoring / ranking workflow",
      criticality: intake.businessFunctions.includes("HR") ? "Critical" : "High",
      reversibility: "Difficult",
      contractCoverage: "Partial",
      notes: "Output use, human review, model change notice, and auditability require verification."
    });
  }

  if (intake.aiSurfaceCategories.includes("THIRD_PARTY_LLM") || product.id === "pe-ai-dependency-diligence-pack") {
    defaults.push({
      vendor: "Foundation model provider",
      component: "Inference / embeddings / prompt processing",
      criticality: inferDependencyCriticality(intake, product),
      reversibility: "Not tested",
      contractCoverage: "Partial",
      notes: "Model substitution, prompt retention, and customer data use require verification."
    });
  }

  if (product.id === "sovereign-procurement-dossier") {
    defaults.push({
      vendor: "Cloud and hosting provider",
      component: "Hosting, logs, support access, key management",
      criticality: "Critical",
      reversibility: "Not tested",
      contractCoverage: "Partial",
      notes: "Sovereignty posture and qualified-hosting evidence require verification."
    });
  }

  return defaults;
}

function deriveEvidenceGaps(intake, product) {
  const gaps = [
    {
      item: "AI use-case register",
      status: intake.evidenceAvailable.aiUseCaseRegister ? "Known" : "Not evidenced",
      priority: "Immediate",
      notes: "Required to map active tools, owners, data categories, and business functions."
    },
    {
      item: "AI-specific vendor register",
      status: intake.evidenceAvailable.vendorRegister ? "Known" : "Not evidenced",
      priority: "Immediate",
      notes: "Required to identify model providers, infrastructure vendors, and sub-processors."
    },
    {
      item: "Human oversight procedure",
      status: intake.evidenceAvailable.humanOversight ? "Known" : "Not evidenced",
      priority: "Near-term",
      notes: "Required where AI outputs may influence operational or individual decisions."
    },
    {
      item: "Prompt, output, and log retention map",
      status: intake.evidenceAvailable.retentionMap ? "Known" : "Not evidenced",
      priority: "Immediate",
      notes: "Required to understand whether customer or employee data persists in AI layers."
    },
    {
      item: "Sub-processor schedule with AI-specific roles",
      status: intake.evidenceAvailable.subProcessorSchedule ? "Known" : "Not evidenced",
      priority: "Near-term",
      notes: "Required before buyer, DPO, or transaction review can rely on vendor statements."
    }
  ];

  if (product.id === "sovereign-procurement-dossier") {
    gaps.push({
      item: "Reversibility and exit playbook",
      status: intake.evidenceAvailable.reversibilityPlaybook ? "Known" : "Not evidenced",
      priority: "Immediate",
      notes: "Required for regulated buyer review and financial-sector onboarding."
    });
  }

  if (product.id === "pe-ai-dependency-diligence-pack") {
    gaps.push({
      item: "Model substitution benchmark",
      status: intake.evidenceAvailable.modelSubstitutionBenchmark ? "Known" : "Not evidenced",
      priority: "Immediate",
      notes: "Required to separate AI narrative premium from controllable AI dependency."
    });
  }

  return gaps;
}

function deriveSignals(intake, product) {
  const signals = [];

  if (intake.externalDependencyLevel === "High" || intake.externalDependencyLevel === "Critical") {
    signals.push({
      condition: "Critical AI workflow depends on external vendors without evidenced replacement path.",
      severity: intake.externalDependencyLevel === "Critical" ? "Critical" : "High",
      status: "Confirmed at archetype level",
      riskArea: "Dependency concentration"
    });
  }

  if (intake.deploymentModels.includes("VENDOR_MANAGED") || intake.deploymentModels.includes("STANDALONE_API")) {
    signals.push({
      condition: "Vendor-managed AI processing is present and AI-specific processing terms require verification.",
      severity: "High",
      status: "Requires entity-level verification",
      riskArea: "Data protection"
    });
  }

  if (intake.businessFunctions.includes("HR")) {
    signals.push({
      condition: "AI surface reaches HR or employment-adjacent workflows.",
      severity: "High",
      status: "Requires attorney assessment",
      riskArea: "Employment + automated processing"
    });
  }

  if (intake.aiSurfaceCategories.includes("DECISION_SUPPORT") || intake.aiSurfaceCategories.includes("PREDICTIVE_SYSTEMS")) {
    signals.push({
      condition: "AI outputs may influence scoring, ranking, classification, or prioritization.",
      severity: intake.businessFunctions.includes("HR") ? "Critical" : "High",
      status: "Requires attorney assessment",
      riskArea: "AI Act compliance"
    });
  }

  if (intake.aiSurfaceCategories.includes("GENERATIVE_CONTENT")) {
    signals.push({
      condition: "AI-generated content may enter external communications or deliverables without provenance evidence.",
      severity: "Medium",
      status: "Requires entity-level verification",
      riskArea: "IP provenance"
    });
  }

  if (product.id === "sovereign-procurement-dossier") {
    signals.push({
      condition: "Regulated buyer review may require sovereignty, support-access, and reversibility evidence not yet packaged.",
      severity: "Critical",
      status: "Requires entity-level verification",
      riskArea: "Procurement admissibility"
    });
  }

  if (product.id === "pe-ai-dependency-diligence-pack") {
    signals.push({
      condition: "AI product narrative may carry valuation premium before dependency control is evidenced.",
      severity: "High",
      status: "Requires entity-level verification",
      riskArea: "Valuation fragility"
    });
  }

  return signals;
}

function deriveRemediation(intake, product) {
  const immediate = [
    "Create an AI use-case register from the archetype dimensions and known tools.",
    "Create a vendor and model dependency register with criticality and owner fields.",
    "Map prompt, output, embedding, log, and support-ticket retention paths."
  ];

  const nearTerm = [
    "Review AI vendor contracts for processing scope, retention, model-change notice, audit evidence, and sub-processors. Attorney guidance required before implementation.",
    "Define human review and override procedure for AI-assisted decisions. Attorney guidance required before implementation."
  ];

  const structured = [
    "Run a formal classification and role-boundary review for AI use cases. Attorney guidance required before implementation.",
    "Create a recurring evidence refresh cadence before buyer, board, or transaction use. Attorney guidance required before implementation."
  ];

  if (product.id === "sovereign-procurement-dossier") {
    immediate.push("Draft a buyer-facing procurement evidence index for sovereignty, support access, and reversibility.");
    nearTerm.push("Build and test a reversibility playbook for data, configuration, logs, and critical dependencies. Attorney guidance required before implementation.");
  }

  if (product.id === "pe-ai-dependency-diligence-pack") {
    immediate.push("Run a model substitution benchmark for core AI features.");
    structured.push("Prepare a deal-term issue list for counsel covering AI-specific representations, covenants, escrow, and post-close remediation. Attorney guidance required before implementation.");
  }

  return { immediate, nearTerm, structured };
}

function deriveEvidenceRequests(intake, product) {
  const requests = [
    "AI use-case register",
    "AI vendor and model dependency register",
    "Current AI vendor contracts and data processing terms",
    "Sub-processor list with AI-specific roles",
    "Prompt, output, embedding, and log retention map",
    "Human oversight procedure for AI-assisted decisions",
    "AI incident or complaint history",
    "Architecture diagram for AI data flows",
    "Customer-facing AI claims and sales materials"
  ];

  if (product.id === "sovereign-procurement-dossier") {
    requests.push(
      "Hosting and key-control architecture",
      "Support-access procedure",
      "Reversibility and exit playbook",
      "Regulated buyer questionnaires already answered"
    );
  }

  if (product.id === "pe-ai-dependency-diligence-pack") {
    requests.push(
      "Model substitution benchmark",
      "Top customer contracts by ARR",
      "AI-related side letters or custom customer commitments",
      "Prompt library and evaluation dataset register",
      "Post-close migration assumptions"
    );
  }

  return requests;
}

function deriveOverallProfile(intake, signals) {
  if (signals.some((signal) => signal.severity === "Critical") || intake.regulatorySensitivity === "Critical") {
    return "Critical";
  }

  if (signals.some((signal) => signal.severity === "High") || intake.regulatorySensitivity === "High") {
    return "High";
  }

  if (signals.some((signal) => signal.severity === "Medium") || intake.regulatorySensitivity === "Medium") {
    return "Medium";
  }

  return "Low";
}

function deriveTopConditions(intake, product, signals, dependencies, evidenceGaps) {
  const conditions = [
    ...signals.slice(0, 4).map((signal) => ({
      label: signal.condition,
      why: signal.riskArea,
      posture: signal.status
    })),
    ...dependencies.slice(0, 2).map((dependency) => ({
      label: `${dependency.vendor} dependency`,
      why: `${dependency.criticality} criticality / ${dependency.reversibility} reversibility`,
      posture: dependency.contractCoverage
    })),
    ...evidenceGaps.filter((gap) => gap.status !== "Known").slice(0, 1).map((gap) => ({
      label: `${gap.item} missing`,
      why: gap.notes,
      posture: gap.status
    }))
  ];

  return conditions.slice(0, product.id === "pe-ai-dependency-diligence-pack" ? 7 : 5);
}

function deriveQuestions(product) {
  if (product.id === "pe-ai-dependency-diligence-pack") {
    return [
      "How much ARR depends on AI components the target does not control?",
      "Can critical model providers be substituted without product degradation?",
      "Do customer promises match actual AI data flows and retention behavior?",
      "What remediation cost should be priced before signing?",
      "What must be protected through warranties, covenants, escrow, or post-close controls?"
    ];
  }

  if (product.id === "sovereign-procurement-dossier") {
    return [
      "Can a regulated buyer award, onboard, and defend this vendor using the current evidence pack?",
      "Which procurement gates currently lack buyer-grade evidence?",
      "Can the entity prove reversibility, support-access controls, and sub-processor boundaries?",
      "Which claims should be frozen until evidence is available?",
      "Which contract terms need to be prepared before the next buyer submission?"
    ];
  }

  return [
    "Which AI tools are active by business function?",
    "Which evidence gaps require attorney review before client reliance?",
    "Which vendor dependencies are critical and not yet reversible?",
    "Which AI outputs may influence individual or regulated decisions?",
    "What should the partner request first from the entity?"
  ];
}

function inferDataCategories(intake) {
  const categories = ["business records"];

  if (intake.businessFunctions.includes("HR")) {
    categories.push("employee or candidate data");
  }

  if (intake.businessFunctions.includes("COMMERCIAL")) {
    categories.push("customer or prospect data");
  }

  if (intake.businessFunctions.includes("FINANCE")) {
    categories.push("financial and reporting data");
  }

  return categories.join(", ");
}

function inferDependencyCriticality(intake, product) {
  if (product.tier === "T2" || product.tier === "T3" || intake.externalDependencyLevel === "Critical") {
    return "Critical";
  }

  if (intake.externalDependencyLevel === "High") {
    return "High";
  }

  return "Medium";
}

function inferReversibility(intake) {
  if (intake.externalDependencyLevel === "Critical") {
    return "Not tested";
  }

  if (intake.externalDependencyLevel === "High") {
    return "Difficult";
  }

  return "Moderate";
}

export function labelFunction(code) {
  return FUNCTION_LABELS[code] || code;
}
