import { getImage } from "astro:assets";
import avatarSrc from "../assets/ivan-aguilar.webp";
import { absoluteUrl, PROD_SITE } from "./siteEnv";

export { avatarSrc };

/** Avatar optimizado para OG, Twitter Cards y JSON-LD. */
export async function getAvatarOgImage(site: URL | string = PROD_SITE): Promise<string> {
  const optimized = await getImage({
    src: avatarSrc,
    width: 400,
    height: 400,
    format: "webp",
  });
  return absoluteUrl(optimized.src, site);
}
