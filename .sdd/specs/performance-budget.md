# Spec — Performance budget (Fase 4 Verify)

> Umbrales acordados para el portafolio Astro SSG (IvamDEV).

## Objetivos

| Métrica | Target | Herramienta |
|---------|--------|-------------|
| LCP | ≤ 2.5 s | Lighthouse |
| CLS | ≤ 0.1 | Lighthouse |
| TBT | ≤ 200 ms | Lighthouse |
| JS cliente | ~0 KB (solo islands inline mínimas) | Build / Lighthouse |
| Performance score | ≥ 85 | Lighthouse CI |
| Accessibility | ≥ 90 | Lighthouse CI |
| SEO | ≥ 92 | Lighthouse CI |
| Best practices | ≥ 90 | Lighthouse CI |

## Artefactos prod (referencia post-build UAT)

| Recurso | Objetivo |
|---------|----------|
| HTML `index.html` | < 50 KB |
| CSS total | < 25 KB |
| Avatar hero | WebP vía Astro Image, `fetchpriority=high` |
| Fuentes | Self-hosted `@fontsource`, `font-display: swap` |

## CI — Lighthouse

- **Workflow:** `.github/workflows/verify-lighthouse.yml`
- **Trigger:** push/PR a `main`, `workflow_dispatch`
- **Config:** `lighthouserc.cjs` (preview **prod** en `127.0.0.1:4321/` — UAT tiene `noindex` y baja el score SEO)
- **Upload:** temporary-public-storage (reporte en logs del job)

## Verificación local

```powershell
npm run verify
# UAT artifact checks (post build:uat):
npm run build:uat
npm run verify:static:uat
```

## Checklist manual pre-merge a `main`

- [ ] `npm run verify` en verde
- [ ] UAT GitHub Pages carga sin 404 (CV, favicon, `/_astro/*`)
- [ ] Meta `noindex` en UAT, canonical → prod
- [ ] Scroll spy y menú móvil OK en móvil real
- [ ] CV descarga PDF (no HTML)

## Fase 4 — completada

- [x] `performance-budget.md` (este documento)
- [x] `lighthouserc.cjs` con umbrales
- [x] Workflow `verify-lighthouse.yml`
- [x] Script `npm run verify` / `verify:lighthouse`
