import { bullets, numbered, table } from "./markdown.js";

export function evaluateWindowSignal(rawInput, options = {}) {
  const input = normalizeWindowInput(rawInput);
  const signals = deriveWindowSignals(input);
  const score = scoreWindow(signals);
  const classification = classifyScore(score);
  const reference = options.reference || `EI-WIN-${input.company.siren || "UNKNOWN"}-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}`;
  const markdown = renderWindowArtifact({ input, signals, score, classification, reference });

  return {
    reference,
    company: input.company,
    score,
    classification,
    signals,
    markdown
  };
}

function normalizeWindowInput(rawInput) {
  if (!rawInput || typeof rawInput !== "object" || Array.isArray(rawInput)) {
    throw new Error("Window signal input must be a JSON object.");
  }

  const company = rawInput.company || {};
  const facts = rawInput.facts || {};

  if (!company.name) {
    throw new Error("Window signal input requires company.name.");
  }

  return {
    company: {
      name: company.name,
      siren: company.siren || "",
      legalForm: company.legalForm || "",
      region: company.region || "",
      employeeCount: Number(company.employeeCount || 0),
      sector: company.sector || ""
    },
    facts: {
      directorChanged: Boolean(facts.directorChanged),
      decliningAccountsYears: Number(facts.decliningAccountsYears || 0),
      collectiveProcedureOpen: Boolean(facts.collectiveProcedureOpen),
      fundSaleNoticePublished: Boolean(facts.fundSaleNoticePublished),
      recentCapitalChange: Boolean(facts.recentCapitalChange),
      debtPressureSignal: Boolean(facts.debtPressureSignal),
      familyOrSuccessionSignal: Boolean(facts.familyOrSuccessionSignal),
      recentAccountsFiled: Boolean(facts.recentAccountsFiled)
    },
    sources: Array.isArray(rawInput.sources) ? rawInput.sources : []
  };
}

function deriveWindowSignals(input) {
  const signals = [];

  if (input.company.legalForm.toUpperCase() === "SARL") {
    signals.push(signal("Target legal form matches owner-operated transmission pattern.", "positive", 12));
  }

  if (input.company.region.toLowerCase().includes("ile-de-france") || input.company.region.toLowerCase().includes("idf")) {
    signals.push(signal("Region matches high-density advisory origination zone.", "positive", 8));
  }

  if (input.company.employeeCount >= 30 && input.company.employeeCount <= 120) {
    signals.push(signal("Employee count matches lower-mid-market advisory target range.", "positive", 14));
  }

  if (input.facts.directorChanged) {
    signals.push(signal("Director change detected.", "positive", 18));
  }

  if (input.facts.decliningAccountsYears >= 2) {
    signals.push(signal("Accounts declined across at least two consecutive exercises.", "positive", 18));
  }

  if (!input.facts.collectiveProcedureOpen) {
    signals.push(signal("No open collective procedure identified in the input snapshot.", "negative-signal", 12));
  } else {
    signals.push(signal("Collective procedure is already open.", "blocking", -28));
  }

  if (!input.facts.fundSaleNoticePublished) {
    signals.push(signal("No fund sale notice identified in the input snapshot.", "negative-signal", 10));
  } else {
    signals.push(signal("Fund sale notice already published.", "late-window", -16));
  }

  if (input.facts.recentCapitalChange) {
    signals.push(signal("Recent capital change may indicate internal reorganization or preparation.", "positive", 8));
  }

  if (input.facts.debtPressureSignal) {
    signals.push(signal("Debt pressure signal present.", "positive", 8));
  }

  if (input.facts.familyOrSuccessionSignal) {
    signals.push(signal("Family or succession signal present.", "positive", 10));
  }

  return signals;
}

function signal(condition, type, weight) {
  return { condition, type, weight };
}

function scoreWindow(signals) {
  return signals.reduce((sum, item) => sum + item.weight, 0);
}

function classifyScore(score) {
  if (score >= 70) {
    return "Critical window";
  }

  if (score >= 50) {
    return "High-priority window";
  }

  if (score >= 30) {
    return "Watchlist window";
  }

  return "Low-priority signal";
}

function renderWindowArtifact({ input, signals, score, classification, reference }) {
  const positive = signals.filter((item) => item.type === "positive");
  const negative = signals.filter((item) => item.type === "negative-signal");
  const blockers = signals.filter((item) => item.type === "blocking" || item.type === "late-window");

  const signalRows = signals.map((item) => [
    item.condition,
    item.type,
    item.weight
  ]);

  return [
    "# Transmission Window Artifact",
    "",
    `> Company: ${input.company.name}`,
    `> SIREN: ${input.company.siren || "[not provided]"}`,
    `> Reference: ${reference}`,
    `> Version: 0.1 generated backend artifact`,
    "",
    "---",
    "",
    "## Executive Read",
    "",
    `**Window classification:** ${classification}`,
    "",
    `**Window score:** ${score}`,
    "",
    "This artifact surfaces public-signal conditions that may indicate an approach window. It does not recommend outreach, provide legal advice, or infer intent. A qualified advisory partner must review the evidence before action.",
    "",
    "## Company Snapshot",
    "",
    table(["Field", "Value"], [
      ["Name", input.company.name],
      ["SIREN", input.company.siren || "-"],
      ["Legal form", input.company.legalForm || "-"],
      ["Region", input.company.region || "-"],
      ["Employee count", input.company.employeeCount || "-"],
      ["Sector", input.company.sector || "-"]
    ]),
    "",
    "## Trigger Signals",
    "",
    table(["Condition", "Type", "Weight"], signalRows),
    "",
    "## Positive Signals",
    "",
    bullets(positive.map((item) => item.condition)),
    "",
    "## Negative Signals",
    "",
    bullets(negative.map((item) => item.condition)),
    "",
    "## Blocking Or Late-Window Signals",
    "",
    bullets(blockers.map((item) => item.condition)),
    "",
    "## Approach Window Hypothesis",
    "",
    "The input pattern suggests a possible advisory window when ownership, management, financial pressure, and absence of formal process signals align. This is an origination signal, not a conclusion.",
    "",
    "## Partner Review Questions",
    "",
    numbered([
      "Are the source records current and independently verified?",
      "Is there evidence of an existing advisor mandate or active sale process?",
      "Would the advisory angle be transmission, restructuring prevention, shareholder transition, or strategic acquisition?",
      "Is outreach appropriate under the partner's professional rules and commercial policy?",
      "What additional public records should be checked before any approach?"
    ]),
    "",
    "## Source Links",
    "",
    bullets(input.sources.length > 0 ? input.sources : ["No source links provided in input snapshot."])
  ].join("\n");
}
