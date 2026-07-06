/** Ruta pública con base path de Astro (UAT /Portafolio/, prod /). */
export function publicAsset(path: string): string {
  const filename = path.replace(/^\//, "");
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${filename}`;
}
