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

Preview:

```bash
npm run preview:uat
npm run preview:prod
```

## Despliegue

| Entorno | Rama | URL | Método |
|---------|------|-----|--------|
| UAT | `develop` | https://ivanam2694.github.io/Portafolio/ | Automático (GitHub Actions) |
| Producción | `main` | https://ivamlabs.com | Manual (VPS) |

Detalle operativo: [`deploy.md`](deploy.md)

**UAT:** push a `develop` dispara `.github/workflows/deploy-uat.yml`.

**Prod:** tras merge a `main`:

```powershell
python .vps/runners/deploy-prod.py
```

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
│   └── deploy-uat.yml
├── astro.config.mjs
├── deploy.md
└── package.json
```

## Personalización

Edita `src/data/userData.ts` para actualizar información personal, proyectos y experiencia.

## Licencia

MIT
