#!/usr/bin/env node
/**
 * Genera og-social.jpg (1200×630) para Open Graph / Twitter Cards.
 * Ejecutar antes del build: npm run og:generate
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const avatarPath = join(root, "src/assets/ivan-aguilar.webp");
const outPath = join(root, "src/assets/og-social.jpg");

const WIDTH = 1200;
const HEIGHT = 630;
const AVATAR_SIZE = 280;

const backgroundSvg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b0f14"/>
      <stop offset="100%" stop-color="#141a22"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect x="0" y="0" width="8" height="${HEIGHT}" fill="url(#accent)"/>
  <circle cx="980" cy="120" r="180" fill="#06b6d4" opacity="0.06"/>
  <circle cx="1050" cy="520" r="120" fill="#3b82f6" opacity="0.08"/>
  <text x="400" y="240" fill="#e2e8f0" font-family="Segoe UI, system-ui, sans-serif" font-size="56" font-weight="700">Iván Aguilar</text>
  <text x="400" y="310" fill="#06b6d4" font-family="Segoe UI, system-ui, sans-serif" font-size="32" font-weight="600">Software Engineer · IvamDEV</text>
  <text x="400" y="370" fill="#94a3b8" font-family="Segoe UI, system-ui, sans-serif" font-size="26">.NET · React · Laravel · Azure</text>
  <text x="400" y="430" fill="#64748b" font-family="Segoe UI, system-ui, sans-serif" font-size="22">ivamlabs.com</text>
</svg>`;

async function main() {
  const avatarCircle = await sharp(readFileSync(avatarPath))
    .resize(AVATAR_SIZE, AVATAR_SIZE, { fit: "cover" })
    .composite([
      {
        input: Buffer.from(
          `<svg width="${AVATAR_SIZE}" height="${AVATAR_SIZE}"><circle cx="${AVATAR_SIZE / 2}" cy="${AVATAR_SIZE / 2}" r="${AVATAR_SIZE / 2}" fill="white"/></svg>`
        ),
        blend: "dest-in",
      },
    ])
    .png()
    .toBuffer();

  const ring = await sharp({
    create: {
      width: AVATAR_SIZE + 16,
      height: AVATAR_SIZE + 16,
      channels: 4,
      background: { r: 6, g: 182, b: 212, alpha: 1 },
    },
  })
    .composite([
      {
        input: await sharp({
          create: {
            width: AVATAR_SIZE + 8,
            height: AVATAR_SIZE + 8,
            channels: 4,
            background: { r: 11, g: 15, b: 20, alpha: 1 },
          },
        })
          .png()
          .toBuffer(),
        left: 4,
        top: 4,
      },
      { input: avatarCircle, left: 8, top: 8 },
    ])
    .png()
    .toBuffer();

  const output = await sharp(Buffer.from(backgroundSvg))
    .composite([{ input: ring, left: 64, top: Math.round((HEIGHT - AVATAR_SIZE - 16) / 2) }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();

  writeFileSync(outPath, output);
  console.log(`OG image: ${outPath} (${output.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
