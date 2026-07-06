# Portafolio Personal - Iván Aguilar (Ivam DEV)

Landing page de portafolio personal construida con Astro y TailwindCSS.

## Características

- Diseño moderno con efectos glassmorphism y animaciones suaves
- Totalmente responsivo
- Performance optimizada con Astro SSG
- Componentes modulares

## Tecnologías

- [Astro](https://astro.build/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Local: http://localhost:4321/Portafolio (base path UAT por defecto)

## Build por entorno

| Comando | Entorno | Site | Base |
|---------|---------|------|------|
| `npm run build:uat` | UAT / local | github.io | `/Portafolio` |
| `npm run build:prod` | Producción | ivamlabs.com | `/` |

Preview local:

```bash
npm run preview:uat
npm run preview:prod
```

En producción el build de `main` corre en **GitHub Actions**, no en local ni en el VPS.

## Despliegue

| Entorno | Rama | URL | Build | Deploy |
|---------|------|-----|-------|--------|
| UAT | `develop` | https://ivanam2694.github.io/Portafolio/ | GitHub Actions | GitHub Pages |
| Producción | `main` | https://ivamlabs.com | GitHub Actions | VPS (rsync SSH) |

Detalle operativo, secrets y checklist: [`deploy.md`](deploy.md)

**Workflows:**

- UAT: `.github/workflows/deploy-uat.yml` (push `develop`)
- Prod: `.github/workflows/deploy-prod.yml` (push `main`)

## Estructura del proyecto

```
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── data/
│   ├── pages/
│   └── styles/
├── .github/workflows/
│   ├── deploy-uat.yml
│   └── deploy-prod.yml
├── astro.config.mjs
├── deploy.md
└── package.json
```

## Personalización

Edita `src/data/userData.ts` para actualizar información personal, proyectos y experiencia.

## Licencia

MIT
