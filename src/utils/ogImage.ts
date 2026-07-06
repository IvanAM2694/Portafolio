import { getImage } from "astro:assets";
import ogSocialSrc from "../assets/og-social.jpg";
import { absoluteUrl, PROD_SITE } from "./siteEnv";

export { ogSocialSrc };

/** Imagen OG 1200×630 para redes sociales. */
export async function getOgSocialImage(site: URL | string = PROD_SITE): Promise<string> {
  const optimized = await getImage({
    src: ogSocialSrc,
    width: 1200,
    height: 630,
    format: "jpg",
  });
  return absoluteUrl(optimized.src, site);
}
