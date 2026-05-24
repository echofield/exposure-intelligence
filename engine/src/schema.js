const REQUIRED_FIELDS = [
  "archetypeId",
  "jurisdiction",
  "sector",
  "companySize",
  "revenueBand",
  "employeeBand",
  "aiSurfaceCategories",
  "businessFunctions",
  "deploymentModels",
  "regulatorySensitivity",
  "externalDependencyLevel"
];

const VALID_SENSITIVITY = new Set(["Low", "Medium", "High", "Critical"]);
const VALID_DEPENDENCY = new Set(["Minimal", "Moderate", "High", "Critical"]);

export function normalizeIntake(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new Error("Intake must be a JSON object.");
  }

  const missing = REQUIRED_FIELDS.filter((field) => raw[field] === undefined || raw[field] === null || raw[field] === "");
  if (missing.length > 0) {
    throw new Error(`Missing required intake field(s): ${missing.join(", ")}`);
  }

  const intake = {
    ...raw,
    aiSurfaceCategories: normalizeArray(raw.aiSurfaceCategories),
    businessFunctions: normalizeArray(raw.businessFunctions),
    deploymentModels: normalizeArray(raw.deploymentModels),
    knownTools: normalizeArray(raw.knownTools || []),
    vendorDependencies: normalizeArray(raw.vendorDependencies || []),
    assumptions: normalizeArray(raw.assumptions || []),
    evidenceAvailable: raw.evidenceAvailable && typeof raw.evidenceAvailable === "object" ? raw.evidenceAvailable : {},
    locale: raw.locale || "en-GB",
    preparedFor: raw.preparedFor || "[ADVISORY PARTNER]",
    date: raw.date || new Date().toISOString().slice(0, 10)
  };

  if (!VALID_SENSITIVITY.has(intake.regulatorySensitivity)) {
    throw new Error(`Invalid regulatorySensitivity "${intake.regulatorySensitivity}".`);
  }

  if (!VALID_DEPENDENCY.has(intake.externalDependencyLevel)) {
    throw new Error(`Invalid externalDependencyLevel "${intake.externalDependencyLevel}".`);
  }

  return intake;
}

function normalizeArray(value) {
  if (Array.isArray(value)) {
    return value.filter((item) => item !== undefined && item !== null && `${item}`.trim() !== "");
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}
