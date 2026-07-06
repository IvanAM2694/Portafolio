# Despliegue — Portafolio Ivam DEV

Bitácora operativa. Sin secretos.

## Entornos

| Entorno | Rama | Build | Deploy | URL | Automatización |
|---------|------|-------|--------|-----|----------------|
| UAT | `develop` | GitHub Actions | GitHub Pages | https://ivanam2694.github.io/Portafolio/ | `deploy-uat.yml` |
| Producción | `main` | GitHub Actions | VPS (rsync SSH) | https://ivamlabs.com | `deploy-prod.yml` |

## Flujo Git

1. Feature branch → PR a `develop`
2. Merge a `develop` → deploy automático UAT (GitHub Pages)
3. Validar UAT
4. PR `develop` → `main`
5. Merge a `main` → build en GitHub Actions + rsync al VPS

## UAT — GitHub Pages

**Workflow:** [`.github/workflows/deploy-uat.yml`](.github/workflows/deploy-uat.yml)

- Trigger: push a `develop` o `workflow_dispatch`
- Build env: `PUBLIC_SITE_URL=https://IvanAM2694.github.io`, `PUBLIC_BASE_PATH=/Portafolio`

**Build local (preview):**

```powershell
npm run build:uat
npm run preview:uat
```

**GitHub Settings (una vez):**

- Pages → Source: **GitHub Actions**
- Environment `github-pages` debe permitir rama `develop`
- No asignar `ivamlabs.com` como custom domain en Pages (prod usa VPS)

## Producción — VPS (automático)

**Workflow:** [`.github/workflows/deploy-prod.yml`](.github/workflows/deploy-prod.yml)

| Fase | Dónde | Qué hace |
|------|-------|----------|
| Build | GitHub Actions | `npm ci` + `npm run build:prod` → `dist/` |
| Deploy | VPS | rsync `dist/` → `/var/www/portafolio-prod`; Nginx sirve |

El VPS **no compila**. Solo recibe artefactos ya generados.

- Trigger: push a `main` o `workflow_dispatch` (rama `main`)
- Redeploy sin commit: Actions → Deploy Production to VPS → Run workflow

### Repository secrets (verificación)

Settings: https://github.com/IvanAM2694/Portafolio/settings/secrets/actions

| Secret | Obligatorio |
|--------|-------------|
| `VPS_HOST` | Sí (`148.113.180.152`) |
| `VPS_PORT` | Sí (`65535`) |
| `VPS_USER` | Sí (`ubuntu`) |
| `VPS_SSH_KEY` | Sí (deploy key sin passphrase) |

```powershell
gh secret list
```

El workflow incluye paso **Verify SSH connection** (`SSH_OK`, `APP_ROOT_OK`) antes del rsync.

| Resultado | Causa probable |
|-----------|----------------|
| `Permission denied (publickey)` | Clave incorrecta, passphrase, o pública no en VPS |
| `Connection refused` / timeout | `VPS_HOST` o `VPS_PORT` incorrectos |
| `APP_ROOT` falla | Falta `/var/www/portafolio-prod` en VPS |

### Fallback manual (emergencia)

Si GitHub Actions falla:

```powershell
git checkout main
git pull origin main
npm run build:prod
python .vps/runners/deploy-prod.py --skip-build
```

Requisitos: Python 3, `paramiko`, acceso SSH local.

### Infra VPS

| Parámetro | Valor |
|-----------|-------|
| Host | `148.113.180.152` |
| Puerto SSH | `65535` |
| App root | `/var/www/portafolio-prod` |
| Nginx site | `portafolio-prod` |
| Dominio | `ivamlabs.com` |
| Config nginx | `deploy/nginx/portafolio-prod-ssl.conf` (HTTPS + cache) → `.vps/environments/portafolio-prod/nginx.conf` |

Logs locales: `.vps/logs/deploy-prod-prod.log`

### DNS

| Registro | Tipo | Valor |
|----------|------|-------|
| `@` | A | `148.113.180.152` |
| `www` | A | `148.113.180.152` |

## Checklist pre-deploy prod

- [ ] UAT validado en GitHub Pages
- [ ] `develop` mergeado a `main`
- [ ] `gh secret list` muestra los 4 secrets obligatorios
- [ ] Workflow `Deploy Production to VPS` en verde
- [ ] https://ivamlabs.com responde 200

## Bitácora

| Fecha | Entorno | Acción | Notas |
|-------|---------|--------|-------|
| 2026-07-06 | prod | CI GitHub Actions + rsync SSH | Reemplaza deploy manual habitual |
| 2026-07-06 | prod | Fase 2 performance | Avatar local + Astro Image; plantilla Nginx cache `deploy/nginx/` |
| 2026-07-06 | prod | Nginx cache aplicado | `deploy-prod.py --setup-only`; HTTPS OK; headers verificados |
