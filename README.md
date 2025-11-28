# Portafolio Personal - Iván Aguilar

Landing page de portafolio personal construida con Astro y TailwindCSS.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante con efectos glassmorphism y animaciones suaves
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **Performance**: Construido con Astro para máxima velocidad
- **Componentes Modulares**: Arquitectura limpia y mantenible

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework web moderno
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS utility-first
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático

## 📦 Instalación

```bash
npm install
```

## 🏃 Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 🏗️ Build

```bash
npm run build
```

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── HeroSection.astro
│   │   ├── ExperienceSection.astro
│   │   ├── TechStackSection.astro
│   │   ├── ProjectsSection.astro
│   │   ├── ContactSection.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── data/
│   │   └── userData.ts
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── base.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 📝 Personalización

Edita `src/data/userData.ts` para actualizar tu información personal, proyectos y experiencia.

## 🌐 Despliegue

Este proyecto puede ser desplegado en:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## 📄 Licencia

MIT

