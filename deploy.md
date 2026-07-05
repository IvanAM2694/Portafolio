# Despliegue — Portafolio Ivam DEV

Bitácora operativa. Sin secretos.

## Entornos

| Entorno | Rama | Destino | URL | Automatización |
|---------|------|---------|-----|----------------|
| UAT | `develop` | GitHub Pages | https://ivanam2694.github.io/Portafolio/ | GitHub Actions (`deploy-uat.yml`) |
| Producción | `main` | VPS Nginx | https://ivamlabs.com | Manual (`deploy-prod.py`) |

## Flujo Git

1. Feature branch → PR a `develop`
2. Merge a `develop` → deploy automático UAT (GitHub Pages)
3. Validar UAT
4. PR `develop` → `main`
5. Deploy manual prod (ver abajo)

## UAT — GitHub Pages (automático)

**Workflow:** [`.github/workflows/deploy-uat.yml`](.github/workflows/deploy-uat.yml)

- Trigger: push a `develop` o `workflow_dispatch`
- Build env: `PUBLIC_SITE_URL=https://IvanAM2694.github.io`, `PUBLIC_BASE_PATH=/Portafolio`

**Build local UAT:**

```powershell
npm run build:uat
npm run preview:uat
```

**GitHub Settings (una vez):**

- Pages → Source: **GitHub Actions**
- No asignar `ivamlabs.com` como custom domain en Pages (prod usa VPS)

## Producción — VPS (manual)

**Requisitos:** Python 3, `paramiko` (`pip install paramiko`), Node.js, acceso SSH al VPS.

### Bootstrap inicial (una sola vez)

```powershell
cd D:\IvanAguilar\Repositorios\Portafolio

# Replicar credenciales SSH del workspace
python .vps/runners/sync-access.py

# Primer deploy (build + artefactos + nginx)
python .vps/runners/deploy-prod.py

# HTTPS con certbot
python .vps/runners/configure-https.py --profile prod
```

### Deploy de cada release

```powershell
git checkout main
git pull origin main
python .vps/runners/deploy-prod.py
```

Opciones:

- `--skip-build` — sube `dist/` existente sin recompilar

**Build local prod:**

```powershell
npm run build:prod
npm run preview:prod
```

### DNS (registrador ivamlabs.com)

| Registro | Tipo | Valor |
|----------|------|-------|
| `@` | A | `148.113.180.152` |
| `www` | A | `148.113.180.152` |

Eliminar registros que apunten `ivamlabs.com` a GitHub Pages (`185.199.x.x`).

Verificar:

```powershell
nslookup ivamlabs.com
```

Debe resolver a `148.113.180.152`.

### Infra VPS

| Parámetro | Valor |
|-----------|-------|
| Host | `148.113.180.152` |
| Puerto SSH | `65535` |
| App root | `/var/www/portafolio-prod` |
| Nginx site | `portafolio-prod` |
| Config nginx | `.vps/environments/portafolio-prod/nginx.conf` |

Logs: `.vps/logs/deploy-prod-prod.log`, `.vps/logs/configure-https-prod.log`

## Checklist pre-deploy prod

- [ ] UAT validado en GitHub Pages
- [ ] `develop` mergeado a `main`
- [ ] `npm run build:prod` exitoso local
- [ ] DNS apunta al VPS
- [ ] `python .vps/runners/deploy-prod.py` completado
- [ ] https://ivamlabs.com responde

## Bitácora

| Fecha | Entorno | Acción | Notas |
|-------|---------|--------|-------|
| | | | |
