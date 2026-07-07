# Dirección visual — IvamDEV

> Decisión aprobada. Fase 3 del roadmap SDD.

## Marca

| Elemento | Valor |
|----------|-------|
| Nombre comercial | **IvamDEV** |
| Nombre personal | Iván Aguilar |
| Dominio prod | https://ivamlabs.com |
| UAT | GitHub Pages (`develop`) |

**Uso en UI:** Navbar y footer muestran **IvamDEV** como marca principal; el hero mantiene el nombre completo para SEO y confianza personal.

## Tono

Paleta **tecnológica sobria** — profesional, legible, sin maximalismo ni gradientes exagerados.

Evitar: purple-on-dark genérico, glassmorphism pesado, emojis como iconografía principal, animaciones constantes.

## Tokens de color (propuesta)

```css
:root {
  --color-bg:        #0b0f14;   /* slate profundo */
  --color-surface:   #141a22;   /* cards */
  --color-border:    #1e293b;
  --color-text:      #e2e8f0;
  --color-muted:     #94a3b8;
  --color-accent:    #06b6d4;   /* cyan tech — acento principal */
  --color-accent-2:  #3b82f6;   /* blue — acento secundario, uso moderado */
}
```

Gradientes: solo en titulares de sección, cyan → blue suave (no purple).

## Tipografía

- **Display / marca:** fuente geométrica técnica (ej. `Outfit` o `Plus Jakarta Sans`)
- **Cuerpo:** sans legible (ej. `Inter` o `Source Sans 3`)
- Self-hosted vía `@fontsource` o archivos en `public/fonts/`
- `font-display: swap`

## Componentes clave (fase 3)

- Tech stack: SVG (Simple Icons), no emojis
- Proyectos: cards sin link roto; badge "Próximamente" si no hay URL
- Hero: CTA "Descargar CV" → `public/cv-ivan-aguilar.pdf`
- Timeline: una entrada Wedox (BUPLAT como contexto de producto)

## Accesibilidad

- Contraste AA mínimo en texto sobre `--color-surface`
- `prefers-reduced-motion`: desactivar float/bounce/ping
- Focus visible en navegación y CTAs
