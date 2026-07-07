import type { SimpleIcon } from "simple-icons";
import {
  siAstro,
  siDotnet,
  siGit,
  siJavascript,
  siLaravel,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import { CUSTOM_TECH_ICONS, type TechIconData } from "./customTechIcons";

export type { TechIconData };

/** Simple Icons primero; si no existe → customTechIcons (SVG propio). Ver .cursor/rules/tech-icons.mdc */

const SIMPLE_ICON_MAP: Record<string, SimpleIcon> = {
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  React: siReact,
  "Node.js": siNodedotjs,
  ".NET": siDotnet,
  PHP: siPhp,
  Laravel: siLaravel,
  Astro: siAstro,
  TailwindCSS: siTailwindcss,
  PostgreSQL: siPostgresql,
  Git: siGit,
};

function fromSimpleIcon(icon: SimpleIcon): TechIconData {
  return { title: icon.title, path: icon.path, hex: icon.hex };
}

export function getTechIcon(name: string): TechIconData | undefined {
  const simple = SIMPLE_ICON_MAP[name];
  if (simple) return fromSimpleIcon(simple);
  return CUSTOM_TECH_ICONS[name];
}
