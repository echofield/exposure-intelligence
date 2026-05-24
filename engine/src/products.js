export const PRODUCTS = {
  "ai-exposure-evidence-pack": {
    id: "ai-exposure-evidence-pack",
    tier: "T1",
    title: "AI Exposure Evidence Pack",
    referencePrefix: "EI-AI",
    sectionNames: {
      section1: "Executive Exposure Summary",
      section2: "Scope & Archetype",
      section3: "AI Usage Exposure Map",
      section4: "Vendor Dependency View",
      section5: "Governance Blind Spots & Evidence Gaps",
      section6: "Regulatory & Operational Exposure Signals",
      section7: "Technical Mitigation Pathways",
      section8: "Escalation Signals for Legal Review",
      section9: "Appendix"
    },
    buyerFrame: "legal advisory evidence"
  },
  "sovereign-procurement-dossier": {
    id: "sovereign-procurement-dossier",
    tier: "T2",
    title: "Sovereign Procurement Dossier",
    referencePrefix: "EI-SOV",
    sectionNames: {
      section1: "Executive Verdict",
      section2: "Archetype Reviewed",
      section3: "Procurement Gate Map",
      section4: "Dependency & Reversibility Map",
      section5: "Evidence Architecture Required",
      section6: "Sovereignty & Procurement Exposure Signals",
      section7: "Remediation Roadmap",
      section8: "Counsel Review Triggers",
      section9: "Appendix"
    },
    buyerFrame: "regulated procurement"
  },
  "construction-procurement-dossier": {
    id: "construction-procurement-dossier",
    tier: "T2",
    title: "Construction Procurement Dossier",
    referencePrefix: "EI-CON",
    sectionNames: {
      section1: "Executive Verdict",
      section2: "Archetype Reviewed",
      section3: "Tender Gate Map",
      section4: "Supplier Dependency & Evidence Map",
      section5: "Tender Evidence Architecture Required",
      section6: "Procurement Exposure Signals",
      section7: "Remediation Roadmap",
      section8: "Counsel Review Triggers",
      section9: "Appendix"
    },
    buyerFrame: "public tender evidence"
  },
  "pe-ai-dependency-diligence-pack": {
    id: "pe-ai-dependency-diligence-pack",
    tier: "T3",
    title: "PE AI Dependency Diligence Pack",
    referencePrefix: "EI-PE",
    sectionNames: {
      section1: "Executive Verdict",
      section2: "Archetype Reviewed",
      section3: "AI Dependency Concentration Map",
      section4: "Model Substitution & Dependency Risk",
      section5: "Data-Flow Opacity & Evidence Gaps",
      section6: "Customer Data & Contract Exposure Signals",
      section7: "Post-Close Remediation Pathways",
      section8: "Deal-Term Implications for Counsel",
      section9: "Appendix"
    },
    buyerFrame: "transaction diligence"
  }
};

export function listProducts() {
  return Object.values(PRODUCTS).map((product) => ({
    id: product.id,
    tier: product.tier,
    title: product.title,
    buyerFrame: product.buyerFrame
  }));
}

export function getProduct(productId) {
  const product = PRODUCTS[productId];

  if (!product) {
    const allowed = Object.keys(PRODUCTS).join(", ");
    throw new Error(`Unknown productId "${productId}". Allowed values: ${allowed}`);
  }

  return product;
}
