/** URL canónica de producción (ivamlabs.com). UAT siempre apunta aquí. */
export const PROD_SITE = "https://ivamlabs.com";

export const isProdBuild = import.meta.env.ASTRO_ENV === "prod";

export function prodCanonical(path = ""): string {
  const base = PROD_SITE.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function absoluteUrl(path: string, site: URL | string): string {
  const base = typeof site === "string" ? site : site.href;
  return new URL(path.replace(/^\//, ""), base.endsWith("/") ? base : `${base}/`).href;
}
