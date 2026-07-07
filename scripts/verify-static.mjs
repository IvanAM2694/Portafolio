#!/usr/bin/env node
/**
 * Verificación estática post-build (complemento a Lighthouse).
 * Falla si faltan artefactos críticos en dist/.
 *
 * VERIFY_PROFILE=prod (default) — build prod, indexable, canonical ivamlabs.com
 * VERIFY_PROFILE=uat — build UAT GitHub Pages, noindex + base /Portafolio/
 */
import { readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const profile = process.env.VERIFY_PROFILE ?? "prod";
const root = join(import.meta.dirname, "..");
const dist = join(root, "dist");

const requiredFiles = [
  "index.html",
  "robots.txt",
  "sitemap.xml",
  "favicon.svg",
  "cv-ivan-aguilar.pdf",
];

let failed = false;

function check(name, ok, detail = "") {
  if (ok) {
    console.log(`[OK] ${name}${detail ? ` — ${detail}` : ""}`);
  } else {
    console.error(`[FAIL] ${name}${detail ? ` — ${detail}` : ""}`);
    failed = true;
  }
}

if (!existsSync(dist)) {
  console.error("[FAIL] dist/ no existe. Ejecutar npm run build:prod primero.");
  process.exit(1);
}

console.log(`Perfil: ${profile}`);

for (const file of requiredFiles) {
  const path = join(dist, file);
  check(file, existsSync(path), existsSync(path) ? `${statSync(path).size} bytes` : "missing");
}

const html = readFileSync(join(dist, "index.html"), "utf8");

if (profile === "uat") {
  check("meta robots noindex (UAT)", /noindex/i.test(html));
} else {
  check("meta robots index (prod)", /index,\s*follow/i.test(html));
  check("sin noindex (prod)", !/noindex/i.test(html));
}

check("canonical ivamlabs.com", html.includes("https://ivamlabs.com/"));
check("og:image", html.includes("og:image"));
check("JSON-LD Person", html.includes('"@type":"Person"') || html.includes('"@type": "Person"'));
check("Descargar CV", html.includes("Descargar CV"));

const astroDir = join(dist, "_astro");
check("_astro/ generado", existsSync(astroDir));

process.exit(failed ? 1 : 0);
