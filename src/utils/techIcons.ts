import type { SimpleIcon } from "simple-icons";
import {
  siAstro,
  siDotnet,
  siGit,
  siJavascript,
  siNodedotjs,
  siPostgresql,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

export const TECH_ICON_MAP: Record<string, SimpleIcon> = {
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  React: siReact,
  "Node.js": siNodedotjs,
  "C#": siDotnet,
  ".NET": siDotnet,
  Astro: siAstro,
  TailwindCSS: siTailwindcss,
  Git: siGit,
  SQL: siPostgresql,
};

export function getTechIcon(name: string): SimpleIcon | undefined {
  return TECH_ICON_MAP[name];
}
