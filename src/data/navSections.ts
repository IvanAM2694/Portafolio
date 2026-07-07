export const navSections = [
  { id: "home", label: "Inicio" },
  { id: "experience", label: "Experiencia" },
  { id: "technologies", label: "Tecnologías" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
] as const;

export type NavSectionId = (typeof navSections)[number]["id"];

export const navSectionIds: NavSectionId[] = navSections.map((s) => s.id);
