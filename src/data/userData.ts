export interface Experience {
  company: string;
  position: string;
  startDate: string; // Formato: "YYYY-MM" o "YYYY"
  endDate: string | "Presente"; // "Presente" para trabajos actuales
  description: string;
  technologies?: string[];
  location?: string;
}

export interface Project {
  name: string;
  description: string;
  link?: string;
  github?: string;
  technologies: string[];
  language?: string;
}

export interface UserData {
  brandName: string;
  name: string;
  role: string;
  bio: string;
  heroSummary: string;
  heroEyebrow: string;
  yearsExperience: number;
  heroHighlights: string[];
  location: string;
  linkedIn: string;
  github: string;
  /** Ruta pública al CV. Colocar el archivo en public/cv-ivan-aguilar.pdf */
  cvPath: string;
  technologies: string[];
  experience: Experience[];
  projects: Project[];
}

export const userData: UserData = {
  brandName: "IvamDEV",
  name: "Iván Aguilar",
  role: "Software Engineer",
  cvPath: "/cv-ivan-aguilar.pdf",
  bio:
    "Soy un Ingeniero Informático que disfruta transformar ideas en soluciones que ayuden a las personas.\n" +
    "En estos más de 7 años, la tecnología ha sido mi lenguaje y el liderazgo mi forma de servir: escuchar, guiar y construir junto a mi equipo.\n" +
    "Sigo buscando proyectos donde pueda aportar mi experiencia, pero también seguir aprendiendo, creciendo y dejando una huella positiva en quienes trabajan conmigo.",
  heroSummary:
    "Ingeniero Informático con más de 7 años transformando ideas en soluciones útiles con .NET, React y Azure. Combino liderazgo técnico — escuchar, guiar y construir en equipo — con productos que escalan.",
  heroEyebrow: "Bienvenido a mi portafolio",
  yearsExperience: 7,
  heroHighlights: [".NET", "React", "Azure", "PostgreSQL"],
  location: "Trujillo - Perú",
  linkedIn: "https://www.linkedin.com/in/ivan-hernan-aguilar-marinos-814771107",
  github: "https://github.com/IvanAM2694",
  technologies: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "C#",
    ".NET",
    "PHP",
    "Laravel",
    "Astro",
    "TailwindCSS",
    "PostgreSQL",
    "SQL Server",
    "Azure",
    "Git",
  ],
  experience: [
    {
      company: "Experis Perú",
      position: "Full Stack Developer",
      startDate: "2024-10",
      endDate: "Presente",
      description:
        "Desarrollo full stack en asignación para cliente retail (RealPlaza) vía Experis. Implementación de funcionalidades en .NET y React, modelado y consultas en PostgreSQL, y despliegues en Azure. Trabajo remoto desde Trujillo en equipo ágil.",
      technologies: [
        "C#",
        "JavaScript",
        "TypeScript",
        "React",
        ".NET",
        "Postgres",
        "Azure",
        "SQL",
      ],
      location: "Trujillo, Perú (Remoto)",
    },
    {
      company: "Wedox",
      position: "Development Integration Lead",
      startDate: "2021-05",
      endDate: "2024-09",
      description:
        "Liderazgo de integración y desarrollo en Wedox. Trabajo directo sobre BUPLAT, la plataforma producto de la empresa, con responsabilidades de liderazgo técnico, arquitectura de integraciones y evolución del stack (.NET, React, SAP).",
      technologies: [
        "C#",
        ".Net",
        "React",
        "JavaScript",
        "OpenUI5",
        "SQL",
        "Azure",
        "Azure DevOps",
        "SAP ABAP",
      ],
      location: "Trujillo, Perú (Remoto)",
    },
    {
      company: "WES",
      position: "BPM Developer",
      startDate: "2021-03",
      endDate: "2021-05",
      description: "Desarrollo BPM en BIZAGI para cliente SC Johnson",
      technologies: ["C#", ".Net", "SQL", "BPMN", "BIZAGI"],
      location: "Trujillo, Perú (Remoto)",
    },
    {
      company: "iDO Consulting",
      position: "Analista de soporte y desarrollo",
      startDate: "2020-01",
      endDate: "2021-03",
      description: "Soporte en SAP PI/PO, ECC y CRM para clientes en México ",
      technologies: ["C#", ".Net", "SQL", "BPMN", "OpenUI5"],
      location: "Trujillo, Perú (Remoto)",
    },
    // Agregar más experiencias según tu historial en LinkedIn...
  ],
  projects: [
    {
      name: "VetERP",
      description:
        "Sistema de gestión para consultorio veterinario. Laravel + React + TypeScript.",
      technologies: ["PHP", "Laravel", "React", "TailwindCSS", "TypeScript"],
      language: "PHP",
    },
    {
      name: "Peru Ancestral",
      description:
        "Plataforma de turismo ancestral en Perú con reserva de tours y hoteles e integración de pagos IzyPay. Laravel + React.",
      technologies: ["PHP", "Laravel", "React", "TailwindCSS", "TypeScript"],
      language: "PHP",
    },
  ],
};
