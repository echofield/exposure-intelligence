const PAGE = {
  width: 595.28,
  height: 841.89,
  marginLeft: 54,
  marginRight: 54,
  marginTop: 58,
  marginBottom: 54
};

export function markdownToPdfBuffer(markdown, metadata = {}) {
  const pages = paginate(markdown, metadata);
  const objects = [];
  const contentObjectIds = [];
  const pageObjectIds = [];

  objects.push("<< /Type /Catalog /Pages 2 0 R >>");
  objects.push(null);
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>");

  for (const page of pages) {
    const content = renderPageContent(page);
    const contentObjectId = objects.length + 1;
    contentObjectIds.push(contentObjectId);
    objects.push(`<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}\nendstream`);

    const pageObjectId = objects.length + 1;
    pageObjectIds.push(pageObjectId);
    objects.push([
      "<< /Type /Page",
      "/Parent 2 0 R",
      `/MediaBox [0 0 ${PAGE.width} ${PAGE.height}]`,
      "/Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >>",
      `/Contents ${contentObjectId} 0 R`,
      ">>"
    ].join(" "));
  }

  objects[1] = `<< /Type /Pages /Kids [${pageObjectIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageObjectIds.length} >>`;

  const infoObjectId = objects.length + 1;
  objects.push([
    "<<",
    `/Title (${escapePdfString(metadata.productName || "Exposure Intelligence Dossier")})`,
    `/Author (${escapePdfString(metadata.partnerFirmName || "Exposure Intelligence")})`,
    `/Subject (${escapePdfString(metadata.referenceId || "Generated dossier")})`,
    ">>"
  ].join(" "));

  return buildPdf(objects, infoObjectId);
}

function paginate(markdown, metadata) {
  const maxWidth = PAGE.width - PAGE.marginLeft - PAGE.marginRight;
  const sourceLines = [
    ...metadataCoverLines(metadata),
    "",
    ...markdown.split(/\r?\n/)
  ];
  const pages = [];
  let current = [];
  let y = PAGE.height - PAGE.marginTop;

  for (const rawLine of sourceLines) {
    const parsed = parseLine(rawLine);
    const wrapped = wrapText(parsed.text, parsed.fontSize, maxWidth);
    const lines = wrapped.length > 0 ? wrapped : [""];

    for (const text of lines) {
      const lineHeight = parsed.lineHeight;

      if (y - lineHeight < PAGE.marginBottom) {
        pages.push(current);
        current = [];
        y = PAGE.height - PAGE.marginTop;
      }

      current.push({
        text,
        x: PAGE.marginLeft,
        y,
        font: parsed.font,
        fontSize: parsed.fontSize
      });
      y -= lineHeight;
    }

    if (parsed.after > 0) {
      y -= parsed.after;
    }
  }

  if (current.length > 0) {
    pages.push(current);
  }

  return pages.length > 0 ? pages : [[{
    text: "Exposure Intelligence",
    x: PAGE.marginLeft,
    y: PAGE.height - PAGE.marginTop,
    font: "F2",
    fontSize: 18
  }]];
}

function metadataCoverLines(metadata) {
  return [
    "# Partner-Branded Metadata",
    `Partner firm name: ${metadata.partnerFirmName || "[PARTNER FIRM NAME]"}`,
    `Partner logo placeholder: ${metadata.partnerLogoPlaceholder || "[PARTNER LOGO PLACEHOLDER]"}`,
    `Prepared for: ${metadata.preparedFor || "[PREPARED FOR]"}`,
    `Product name: ${metadata.productName || "Exposure Intelligence Dossier"}`,
    `Date basis: ${metadata.dateBasis || new Date().toISOString().slice(0, 10)}`,
    `Reference ID: ${metadata.referenceId || "[REFERENCE ID]"}`,
    `Review status: ${metadata.reviewStatus || "draft"}`,
    "",
    "Disclaimer block:",
    metadata.disclaimerBlock || "This artifact surfaces conditions. Counsel names the law.",
    ""
  ];
}

function parseLine(rawLine) {
  const line = rawLine.trimEnd();

  if (line.startsWith("# ")) {
    return style(line.slice(2), "F2", 20, 27, 8);
  }

  if (line.startsWith("## ")) {
    return style(line.slice(3), "F2", 14, 20, 5);
  }

  if (line.startsWith("### ")) {
    return style(line.slice(4), "F2", 11, 16, 3);
  }

  if (line.startsWith("> ")) {
    return style(line.slice(2), "F1", 8.5, 12, 1);
  }

  if (line.startsWith("|")) {
    return style(line, "F3", 7.4, 10, 1);
  }

  if (line.startsWith("- ") || /^\d+\.\s/.test(line)) {
    return style(line, "F1", 9.4, 13, 1);
  }

  if (line === "---") {
    return style("------------------------------------------------------------", "F3", 8, 10, 4);
  }

  if (line === "") {
    return style("", "F1", 9.5, 11, 2);
  }

  return style(stripMarkdown(line), "F1", 9.6, 13, 1);
}

function style(text, font, fontSize, lineHeight, after) {
  return {
    text: sanitizeText(text),
    font,
    fontSize,
    lineHeight,
    after
  };
}

function stripMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

function wrapText(text, fontSize, maxWidth) {
  if (!text) {
    return [""];
  }

  const approxCharWidth = fontSize * 0.5;
  const maxChars = Math.max(42, Math.floor(maxWidth / approxCharWidth));
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";

  for (const word of words) {
    if (word.length > maxChars) {
      if (current) {
        lines.push(current);
        current = "";
      }
      lines.push(...breakLongWord(word, maxChars));
      continue;
    }

    const candidate = current ? `${current} ${word}` : word;

    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }

  if (current) {
    lines.push(current);
  }

  return lines;
}

function breakLongWord(word, maxChars) {
  const chunks = [];

  for (let index = 0; index < word.length; index += maxChars) {
    chunks.push(word.slice(index, index + maxChars));
  }

  return chunks;
}

function renderPageContent(lines) {
  return lines.map((line) => [
    "BT",
    `/${line.font} ${line.fontSize} Tf`,
    "1 0 0 1 " + fixed(line.x) + " " + fixed(line.y) + " Tm",
    `(${escapePdfString(line.text)}) Tj`,
    "ET"
  ].join("\n")).join("\n");
}

function buildPdf(objects, infoObjectId) {
  const chunks = ["%PDF-1.4\n"];
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(chunks.join(""), "latin1"));
    chunks.push(`${index + 1} 0 obj\n${object}\nendobj\n`);
  });

  const xrefOffset = Buffer.byteLength(chunks.join(""), "latin1");
  chunks.push(`xref\n0 ${objects.length + 1}\n`);
  chunks.push("0000000000 65535 f \n");

  for (let index = 1; index < offsets.length; index += 1) {
    chunks.push(`${String(offsets[index]).padStart(10, "0")} 00000 n \n`);
  }

  chunks.push([
    "trailer",
    `<< /Size ${objects.length + 1} /Root 1 0 R /Info ${infoObjectId} 0 R >>`,
    "startxref",
    `${xrefOffset}`,
    "%%EOF"
  ].join("\n"));

  return Buffer.from(chunks.join(""), "latin1");
}

function sanitizeText(text) {
  return `${text}`
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "-");
}

function escapePdfString(text) {
  return sanitizeText(text)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function fixed(value) {
  return Number(value).toFixed(2);
}
