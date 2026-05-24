export function table(headers, rows) {
  const safeRows = rows.length > 0 ? rows : [headers.map(() => "-")];
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...safeRows.map((row) => `| ${row.map(formatCell).join(" | ")} |`)
  ].join("\n");
}

export function bullets(items) {
  if (!items || items.length === 0) {
    return "- No items generated.";
  }

  return items.map((item) => `- ${item}`).join("\n");
}

export function numbered(items) {
  if (!items || items.length === 0) {
    return "1. No items generated.";
  }

  return items.map((item, index) => `${index + 1}. ${item}`).join("\n");
}

export function section(number, title, body) {
  return `## Section ${number} - ${title}\n\n${body.trim()}`;
}

export function appendices(body) {
  return `## Appendix\n\n${body.trim()}`;
}

function formatCell(value) {
  return `${value ?? "-"}`
    .replace(/\r?\n/g, "<br>")
    .replace(/\|/g, "/")
    .trim();
}
