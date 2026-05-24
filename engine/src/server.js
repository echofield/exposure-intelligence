import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { generateDossier } from "./dossier-generator.js";
import { listProducts } from "./products.js";
import { evaluateWindowSignal } from "./window-intelligence.js";
import { markdownToPdfBuffer } from "./pdf-exporter.js";
import { listReviewStatuses } from "./review-status.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STATIC_DIR = path.join(__dirname, "..", "..", "website", "dist");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

const PORT = Number(process.env.PORT || 8787);

const server = http.createServer(async (request, response) => {
  try {
    await route(request, response);
  } catch (error) {
    sendJson(response, 500, {
      ok: false,
      error: error.message
    });
  }
});

server.listen(PORT, () => {
  console.log(`Exposure Intelligence engine listening on http://localhost:${PORT}`);
});

async function route(request, response) {
  if (request.method === "OPTIONS") {
    sendEmpty(response, 204);
    return;
  }

  const url = new URL(request.url, `http://${request.headers.host}`);

  if (request.method === "GET" && url.pathname === "/health") {
    sendJson(response, 200, {
      ok: true,
      service: "exposure-intelligence-engine",
      version: "0.1.0"
    });
    return;
  }

  if (request.method === "GET" && url.pathname === "/products") {
    sendJson(response, 200, {
      ok: true,
      products: listProducts()
    });
    return;
  }

  if (request.method === "GET" && url.pathname === "/review-statuses") {
    sendJson(response, 200, {
      ok: true,
      reviewStatuses: listReviewStatuses()
    });
    return;
  }

  if (request.method === "POST" && url.pathname === "/dossiers/generate") {
    const body = await readJsonBody(request);
    const result = generateDossier({
      productId: body.productId,
      intake: body.intake,
      options: body.options || {}
    });

    sendJson(response, 200, {
      ok: true,
      reference: result.reference,
      metadata: result.metadata,
      reviewStatus: result.reviewStatus,
      product: result.product,
      analysis: result.analysis,
      markdown: result.markdown
    });
    return;
  }

  if (request.method === "POST" && url.pathname === "/dossiers/export-pdf") {
    const body = await readJsonBody(request);
    const result = generateDossier({
      productId: body.productId,
      intake: body.intake,
      options: body.options || {}
    });
    const pdf = markdownToPdfBuffer(result.markdown, result.metadata);

    sendPdf(response, 200, pdf, `${result.reference}.pdf`);
    return;
  }

  if (request.method === "POST" && url.pathname === "/window/evaluate") {
    const body = await readJsonBody(request);
    const result = evaluateWindowSignal(body.signalInput || body, body.options || {});

    sendJson(response, 200, {
      ok: true,
      reference: result.reference,
      company: result.company,
      score: result.score,
      classification: result.classification,
      signals: result.signals,
      markdown: result.markdown
    });
    return;
  }

  // Static file serving for same-origin deployment
  try {
    let filePath = path.join(STATIC_DIR, url.pathname);
    if (url.pathname.endsWith("/")) {
      filePath = path.join(filePath, "index.html");
    }
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const mime = MIME_TYPES[ext] || "application/octet-stream";
      const content = fs.readFileSync(filePath);
      response.writeHead(200, { "Content-Type": mime });
      response.end(content);
      return;
    }
  } catch (_) {
    // not a file — fall through to SPA fallback
  }

  // SPA fallback: send index.html for all non-API routes (client-side routing)
  try {
    const index = fs.readFileSync(path.join(STATIC_DIR, "index.html"));
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(index);
    return;
  } catch (_) {
    // dist not built yet
  }

  sendJson(response, 404, {
    ok: false,
    error: "Not found"
  });
}

async function readJsonBody(request) {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString("utf8");

  if (!raw.trim()) {
    return {};
  }

  return JSON.parse(raw);
}

function sendJson(response, statusCode, payload) {
  const body = JSON.stringify(payload, null, 2);
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  response.end(body);
}

function sendPdf(response, statusCode, payload, filename) {
  response.writeHead(statusCode, {
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename="${filename}"`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  response.end(payload);
}

function sendEmpty(response, statusCode) {
  response.writeHead(statusCode, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  response.end();
}
