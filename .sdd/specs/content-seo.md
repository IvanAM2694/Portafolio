# Spec — Contenido y SEO

> Decisiones de contenido aprobadas.

## Experiencia laboral

### Wedox (única entrada)

- **Empresa:** Wedox
- **Cargo:** Development Integration Lead
- **Producto:** BUPLAT — plataforma producto de Wedox; mencionar en description, no como empresa separada
- **Periodo:** 2021-05 — 2024-09

### Experis Perú

- Description: desarrollo full stack en asignación internacional (.NET, React, PostgreSQL, Azure).

## Proyectos

| Proyecto | URL demo | GitHub | Estado |
|----------|----------|--------|--------|
| VetERP | Pendiente | Pendiente | Mostrar sin links externos |
| Peru Ancestral | Pendiente | Pendiente | Mostrar sin links externos |

Proyectos C# históricos: **eliminados** del dataset (no comentados).

## SEO por entorno

| Entorno | URL | Indexación |
|---------|-----|------------|
| Prod | https://ivamlabs.com | `index, follow` + canonical self |
| UAT | https://ivanam2694.github.io/Portafolio/ | `noindex, follow` + canonical → prod |

UAT sigue desplegándose en GitHub Pages; no compite con prod en buscadores.

## CV descargable

- **Ubicación:** `public/cv-ivan-aguilar.pdf`
- **URL pública prod:** https://ivamlabs.com/cv-ivan-aguilar.pdf
- **URL UAT:** https://ivanam2694.github.io/Portafolio/cv-ivan-aguilar.pdf
- Referencia en datos: `userData.cvPath`

## Meta title (prod, target)

`Iván Aguilar — Ingeniero de Software | IvamDEV`

## Fase 1 — completada

- [x] SEO: meta, OG, Twitter, canonical, JSON-LD Person/WebSite
- [x] UAT: `noindex, follow` + canonical → prod
- [x] `robots.txt` y `sitemap.xml` dinámicos
- [x] React eliminado (0 KB JS cliente pesado)
- [x] Botón Descargar CV en hero
- [x] Tokens paleta IvamDEV (cyan/slate) en `base.css` + Tailwind `ivam.*`
- [x] `prefers-reduced-motion`, skip link, aria menú móvil

## Fase 2 — completada

- [x] Avatar local en `src/assets/ivan-aguilar.jpg` (sin dependencia de GitHub CDN)
- [x] `<Image>` de Astro + `sharp`: WebP, `loading="eager"`, `fetchpriority="high"`, srcset responsive
- [x] OG / Twitter / JSON-LD usan URL absoluta del avatar optimizado (`src/utils/avatar.ts`)
- [x] `userData.avatar` eliminado (fuente única: assets)
- [x] Plantilla Nginx prod con cache: `/_astro/*` immutable 1y, estáticos 30d, HTML `no-cache` → `deploy/nginx/portafolio-prod-ssl.conf` (aplicada en VPS 2026-07-06)

## Fase 3 — completada

- [x] Tipografías self-hosted: **Outfit** (display) + **Source Sans 3** (cuerpo) vía `@fontsource`
- [x] OG image **1200×630** generada en build (`scripts/generate-og.mjs` → `src/assets/og-social.jpg`)
- [x] Meta `og:image:width/height/alt`; JSON-LD Person sigue con foto (avatar); OG social con tarjeta dedicada
- [x] Covers de proyectos: **retirados** (placeholders SVG sin screenshots reales; reintroducir con WebP cuando existan capturas)
- [x] Scroll spy en navbar (`IntersectionObserver`) + links DRY en `src/data/navSections.ts`
- [x] Meta title prod: `Iván Aguilar — Ingeniero de Software | IvamDEV`

## Sitemap

Generado en `src/pages/sitemap.xml.ts` (una URL). `robots.txt` apunta a `/sitemap.xml`.
