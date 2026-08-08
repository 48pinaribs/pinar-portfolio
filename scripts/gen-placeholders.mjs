// Generates simple solid/gradient placeholder PNGs (pure Node, no deps)
// for project gallery images, and a minimal placeholder CV PDF.
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function lerp(a, b, t) {
  return Math.round(a + (b - a) * t);
}

/** Diagonal 2-color gradient PNG, RGB, 8-bit. */
function makeGradientPng(width, height, colorA, colorB) {
  const [ar, ag, ab] = hexToRgb(colorA);
  const [br, bg, bb] = hexToRgb(colorB);

  const rowBytes = width * 3;
  const raw = Buffer.alloc((rowBytes + 1) * height);
  for (let y = 0; y < height; y++) {
    const rowStart = y * (rowBytes + 1);
    raw[rowStart] = 0; // filter type: none
    for (let x = 0; x < width; x++) {
      const t = (x / (width - 1) + y / (height - 1)) / 2;
      const px = rowStart + 1 + x * 3;
      raw[px] = lerp(ar, br, t);
      raw[px + 1] = lerp(ag, bg, t);
      raw[px + 2] = lerp(ab, bb, t);
    }
  }

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type RGB
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const idatData = deflateSync(raw);
  const png = Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", idatData),
    chunk("IEND", Buffer.alloc(0)),
  ]);
  return png;
}

const ROOT = path.join(process.cwd(), "public", "projects");
const PROJECTS = [
  { slug: "otootag", base: "#2946D8", tint: "#8FA2F0" },
  { slug: "web-development", base: "#0E9F6E", tint: "#8FE0C5" },
  { slug: "meta-ads", base: "#8B5CF6", tint: "#CBB8FA" },
];

for (const p of PROJECTS) {
  const dir = path.join(ROOT, p.slug);
  mkdirSync(dir, { recursive: true });
  for (let i = 1; i <= 3; i++) {
    const png =
      i % 2 === 1
        ? makeGradientPng(640, 400, p.base, p.tint)
        : makeGradientPng(640, 400, p.tint, p.base);
    const file = path.join(dir, `0${i}.png`);
    writeFileSync(file, png);
    console.log("wrote", file);
  }
}

// Minimal valid placeholder PDF (single blank-ish page with a text label).
const pdfText = "CV placeholder - Pinar - replace with real CV PDF";
const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length ${pdfText.length + 40} >>
stream
BT /F1 18 Tf 72 700 Td (${pdfText}) Tj ET
endstream
endobj
xref
0 6
0000000000 65535 f
trailer
<< /Size 6 /Root 1 0 R >>
startxref
0
%%EOF
`;
writeFileSync(path.join(process.cwd(), "public", "cv-pinar.pdf"), pdf, "utf8");
console.log("wrote public/cv-pinar.pdf (placeholder)");
