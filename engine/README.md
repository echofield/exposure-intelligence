# Exposure Intelligence Engine

Backend runtime for generating structured evidence dossiers from archetype inputs.

This is the first executable layer of the project. It is dependency-free Node.js and does not require a database, frontend, or external API credentials.

## What It Does

- Validates archetype intake JSON.
- Routes the intake to the right product family.
- Generates Markdown dossiers.
- Exports generated dossiers to local PDF files.
- Adds partner-branded metadata, review status, reference IDs, and disclaimer blocks.
- Produces exposure signals, evidence gaps, dependency maps, escalation triggers, remediation pathways, and evidence request lists.
- Evaluates French public-company signal snapshots for the Window Intelligence origination lane.
- Exposes a small HTTP API for local or MCP-driven operation.

## What It Does Not Do Yet

- It does not ingest client documents.
- It does not connect to Infogreffe, BODACC, INSEE/Sirene, Pappers, or other French public APIs yet.
- It does not store artifacts in a database.
- It does not send outreach.
- It does not provide legal advice.

## Commands

```powershell
npm run engine:check
npm run engine:server
npm run engine:generate -- --product ai-exposure-evidence-pack --input engine/samples/intakes/fr-corporate-mid.json --out engine/generated/fr-corporate-mid.md
npm run engine:pdf -- --product ai-exposure-evidence-pack --input engine/samples/intakes/fr-corporate-mid.json --out engine/generated/fr-corporate-mid.pdf --status partner-ready
npm run engine:window -- --input engine/samples/window-signals/transmission-idf-sarl.json --out engine/generated/transmission-window.md
```

## Partner Metadata

Metadata can be supplied in the intake JSON or through CLI/API options.

| Field | Purpose |
|---|---|
| `partnerFirmName` | Advisory or law firm brand shown on the dossier |
| `partnerLogoPlaceholder` | Placeholder text for a partner logo slot |
| `preparedFor` | Client, board, deal team, or internal recipient |
| `productName` | Branded product name shown on the artifact |
| `dateBasis` | Date or evidence basis used for the dossier |
| `referenceId` / `reference` | Stable artifact reference |
| `reviewStatus` | `draft`, `reviewed`, or `partner-ready` |
| `disclaimerBlock` | Partner-controlled disclaimer text |

## HTTP API

Start:

```powershell
npm run engine:server
```

Endpoints:

| Method | Path | Purpose |
|---|---|---|
| GET | `/health` | Engine health check |
| GET | `/products` | Product catalog |
| GET | `/review-statuses` | Allowed review status values |
| POST | `/dossiers/generate` | Generate a dossier from archetype JSON |
| POST | `/dossiers/export-pdf` | Generate and return a PDF dossier |
| POST | `/window/evaluate` | Evaluate a French company signal snapshot |

## Dossier Request Shape

```json
{
  "productId": "ai-exposure-evidence-pack",
  "intake": {
    "archetypeId": "FR-CORPORATE-MID",
    "jurisdiction": "FR",
    "sector": "B2B_SERVICES",
    "companySize": "mid-market",
    "revenueBand": "EUR 150-200M",
    "employeeBand": "500-1500",
    "aiSurfaceCategories": ["PRODUCTIVITY_TOOLS", "DECISION_SUPPORT"],
    "businessFunctions": ["COMMERCIAL", "HR", "OPERATIONS", "EXECUTIVE"],
    "deploymentModels": ["EMBEDDED_SAAS", "VENDOR_MANAGED"],
    "regulatorySensitivity": "Medium",
    "externalDependencyLevel": "Moderate"
  },
  "options": {
    "partnerFirmName": "Cabinet Demo",
    "partnerLogoPlaceholder": "[Logo cabinet]",
    "preparedFor": "Client Board",
    "productName": "AI Exposure Evidence Pack",
    "dateBasis": "2026-05-24",
    "reference": "DEMO-FR-CORPORATE-MID-001",
    "reviewStatus": "draft",
    "disclaimerBlock": "This artifact surfaces conditions. Counsel names the law."
  }
}
```

## Core Doctrine

The artifact surfaces conditions. Counsel names the law.
