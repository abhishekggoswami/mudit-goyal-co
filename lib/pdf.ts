import { PDFDocument } from "pdf-lib/dist/pdf-lib.js";
import fontkit from "@pdf-lib/fontkit";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { agreementBlocks } from "@/content/terms-and-conditions";
import { RA_CONFIG } from "@/lib/constants";
import type { AcceptanceRecord } from "@/types/acceptance";

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN = 52;
const FOOTER_HEIGHT = 66;
const CONTENT_BOTTOM = MARGIN + FOOTER_HEIGHT;
const LINE_GAP = 5;

type PdfState = { pdf: any; pages: any[]; page: any; y: number; regular: any; bold: any; record: AcceptanceRecord };

function cleanPdfText(value: string) {
  return value;
}

function wrap(text: string, font: any, size: number, maxWidth: number): string[] {
  const words = cleanPdfText(text).split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) { current = candidate; continue; }
    if (current) lines.push(current);
    if (font.widthOfTextAtSize(word, size) <= maxWidth) current = word;
    else {
      let piece = "";
      for (const character of word) {
        if (font.widthOfTextAtSize(piece + character, size) > maxWidth && piece) { lines.push(piece); piece = character; }
        else piece += character;
      }
      current = piece;
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : [""];
}

function addPage(state: PdfState) {
  state.page = state.pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  state.pages.push(state.page);
  state.y = PAGE_HEIGHT - MARGIN;
}

function ensureSpace(state: PdfState, height: number) {
  if (state.y - height < CONTENT_BOTTOM) addPage(state);
}

function drawLines(state: PdfState, lines: string[], font: any, size: number) {
  const lineHeight = size + LINE_GAP;
  for (const line of lines) {
    ensureSpace(state, lineHeight);
    state.page.drawText(line, { x: MARGIN, y: state.y - size, size, font });
    state.y -= lineHeight;
  }
}

function drawParagraph(state: PdfState, text: string) {
  const lines = wrap(text, state.regular, 9.6, PAGE_WIDTH - MARGIN * 2);
  drawLines(state, lines, state.regular, 9.6);
  state.y -= 8;
}

function drawListItem(state: PdfState, marker: string, text: string, indent = 0) {
  const itemX = MARGIN + (indent * 16);
  const markerWidth = state.regular.widthOfTextAtSize(marker, 9.6);
  const textX = itemX + markerWidth + 6;
  const lines = wrap(text, state.regular, 9.6, PAGE_WIDTH - MARGIN - textX);
  const lineHeight = 9.6 + LINE_GAP;
  for (const [index, line] of lines.entries()) {
    ensureSpace(state, lineHeight);
    if (index === 0) state.page.drawText(marker, { x: itemX, y: state.y - 9.6, size: 9.6, font: state.regular });
    state.page.drawText(line, { x: textX, y: state.y - 9.6, size: 9.6, font: state.regular });
    state.y -= lineHeight;
  }
  state.y -= 8;
}

function drawHeading(state: PdfState, text: string, level: 2 | 3 = 2) {
  const size = level === 2 ? 13 : 10.8;
  state.y -= 7;
  drawLines(state, wrap(text, state.bold, size, PAGE_WIDTH - MARGIN * 2), state.bold, size);
  state.y -= 5;
}

function drawFooter(page: any, index: number, total: number, font: any, record: AcceptanceRecord) {
  const y = 46;
  page.drawLine({ start: { x: MARGIN, y: y + 25 }, end: { x: PAGE_WIDTH - MARGIN, y: y + 25 }, thickness: 0.6 });
  const text = `Accepted By: ${cleanPdfText(record.fullName)}  |  Mobile: ${record.mobile}\nAccepted On: ${record.acceptedAtFormatted}  |  Acceptance ID: ${record.acceptanceId}`;
  const lines = text.split("\n");
  lines.forEach((line, lineIndex) => page.drawText(line, { x: MARGIN, y: y + 13 - (lineIndex * 10), size: 7.3, font }));
  const pageText = `Page ${index + 1} of ${total}`;
  page.drawText(pageText, { x: PAGE_WIDTH - MARGIN - font.widthOfTextAtSize(pageText, 7.3), y: y - 7, size: 7.3, font });
}

export async function createAcceptancePdf(record: AcceptanceRecord): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  pdf.setTitle("Terms & Conditions Agreement - Electronic Acceptance Record");
  pdf.setAuthor(RA_CONFIG.name);
  pdf.setSubject(`Acceptance ID: ${record.acceptanceId}`);
  pdf.registerFontkit(fontkit);
  const regularBytes = await readFile(path.join(process.cwd(), "public", "fonts", "NotoSans-Regular.ttf"));
  const boldBytes = await readFile(path.join(process.cwd(), "public", "fonts", "NotoSans-Bold.ttf"));
  const regular = await pdf.embedFont(regularBytes, { subset: true });
  const bold = await pdf.embedFont(boldBytes, { subset: true });
  const first = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  const state: PdfState = { pdf, pages: [first], page: first, y: PAGE_HEIGHT - MARGIN, regular, bold, record };

  drawLines(state, [cleanPdfText(RA_CONFIG.name)], bold, 17);
  drawLines(state, ["Terms & Conditions Agreement"], bold, 12);
  drawLines(state, [`SEBI Registration Number: ${RA_CONFIG.sebiRegistrationNumber}`], regular, 9);
  state.y -= 12;
  for (const block of agreementBlocks) {
    if (block.type === "heading") drawHeading(state, block.text, block.level);
    else if (block.type === "paragraph") drawParagraph(state, block.text);
    else drawListItem(state, block.marker, block.text, block.indent);
  }
  drawHeading(state, "Electronic Acceptance Record");
  const details = [
    ["Client Name", record.fullName], ["Mobile Number", record.mobile], ["Acceptance Date & Time", record.acceptedAtFormatted],
    ["Timezone", "Asia/Kolkata (IST)"], ["Acceptance ID", record.acceptanceId], ["Agreement Version", record.agreementVersion],
    ["Research Analyst", RA_CONFIG.name], ["Business", RA_CONFIG.businessName], ["SEBI Registration Number", RA_CONFIG.sebiRegistrationNumber]
  ];
  for (const [label, value] of details) drawParagraph(state, `${label}: ${value}`);
  drawHeading(state, "Client Declaration", 3);
  drawParagraph(state, "I confirm that I have read and understood the Terms & Conditions applicable to the research services and have voluntarily provided my acceptance to be bound by them.");
  drawParagraph(state, "This record represents electronic acceptance captured through the Research Analyst's Terms Acceptance Portal. It is not represented by this application as an Aadhaar eSign or Aadhaar OTP authenticated signature.");
  state.pages.forEach((page, index) => drawFooter(page, index, state.pages.length, regular, record));
  return pdf.save();
}
