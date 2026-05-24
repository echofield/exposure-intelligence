#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { generateDossier } from "./dossier-generator.js";
import { evaluateWindowSignal } from "./window-intelligence.js";
import { markdownToPdfBuffer } from "./pdf-exporter.js";

const [, , command, ...args] = process.argv;
const flags = parseFlags(args);

try {
  if (command === "generate") {
    await runGenerate(flags);
  } else if (command === "pdf") {
    await runPdf(flags);
  } else if (command === "window") {
    await runWindow(flags);
  } else {
    printHelp();
    process.exitCode = 1;
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}

async function runGenerate(options) {
  if (!options.product || !options.input) {
    throw new Error("generate requires --product and --input.");
  }

  const input = await readJson(options.input);
  const result = generateDossier({
    productId: options.product,
    intake: input,
    options: buildDossierOptions(options)
  });

  await writeOutput(options.out, result.markdown);
  console.log(JSON.stringify({
    ok: true,
    reference: result.reference,
    reviewStatus: result.reviewStatus,
    productId: result.product.id,
    out: options.out || "stdout"
  }, null, 2));
}

async function runPdf(options) {
  if (!options.product || !options.input || !options.out) {
    throw new Error("pdf requires --product, --input, and --out.");
  }

  const input = await readJson(options.input);
  const result = generateDossier({
    productId: options.product,
    intake: input,
    options: buildDossierOptions(options)
  });
  const buffer = markdownToPdfBuffer(result.markdown, result.metadata);

  await writeBinaryOutput(options.out, buffer);
  console.log(JSON.stringify({
    ok: true,
    reference: result.reference,
    reviewStatus: result.reviewStatus,
    productId: result.product.id,
    out: options.out
  }, null, 2));
}

async function runWindow(options) {
  if (!options.input) {
    throw new Error("window requires --input.");
  }

  const input = await readJson(options.input);
  const result = evaluateWindowSignal(input, {
    reference: options.reference
  });

  await writeOutput(options.out, result.markdown);
  console.log(JSON.stringify({
    ok: true,
    reference: result.reference,
    classification: result.classification,
    score: result.score,
    out: options.out || "stdout"
  }, null, 2));
}

async function readJson(path) {
  const content = await readFile(resolve(path), "utf8");
  return JSON.parse(content);
}

async function writeOutput(path, content) {
  if (!path) {
    console.log(content);
    return;
  }

  const outputPath = resolve(path);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, content, "utf8");
}

async function writeBinaryOutput(path, content) {
  const outputPath = resolve(path);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, content);
}

function parseFlags(values) {
  const parsed = {};

  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];

    if (!value.startsWith("--")) {
      continue;
    }

    const key = value.slice(2);
    const next = values[index + 1];

    if (!next || next.startsWith("--")) {
      parsed[key] = true;
    } else {
      parsed[key] = next;
      index += 1;
    }
  }

  return parsed;
}

function buildDossierOptions(options) {
  return {
    reference: options.reference,
    referenceId: options.reference,
    reviewStatus: options.status || options.reviewStatus,
    partnerFirmName: options.partnerFirmName || options.partner,
    partnerLogoPlaceholder: options.partnerLogoPlaceholder || options.logo,
    preparedFor: options.preparedFor,
    productName: options.productName,
    dateBasis: options.dateBasis,
    disclaimerBlock: options.disclaimerBlock
  };
}

function printHelp() {
  console.log(`Exposure Intelligence Engine

Commands:
  generate --product <productId> --input <path> [--out <path>] [metadata flags]
  pdf --product <productId> --input <path> --out <path> [metadata flags]
  window --input <path> [--out <path>]

Metadata flags:
  --partnerFirmName <name>
  --logo <placeholder>
  --preparedFor <name>
  --productName <name>
  --dateBasis <YYYY-MM-DD or basis>
  --reference <id>
  --status <draft|reviewed|partner-ready>
  --disclaimerBlock <text>

Examples:
  node engine/src/cli.js generate --product ai-exposure-evidence-pack --input engine/samples/intakes/fr-corporate-mid.json --out engine/generated/fr-corporate-mid.md
  node engine/src/cli.js pdf --product ai-exposure-evidence-pack --input engine/samples/intakes/fr-corporate-mid.json --out engine/generated/fr-corporate-mid.pdf --partnerFirmName "Cabinet Demo" --preparedFor "Client Board" --status partner-ready
  node engine/src/cli.js window --input engine/samples/window-signals/transmission-idf-sarl.json --out engine/generated/transmission-window.md
`);
}
