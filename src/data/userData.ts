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
  link: string;
  github?: string;
  technologies: string[];
  language?: string;
}

export interface UserData {
  name: string;
  role: string;
  bio: string;
  location: string;
  linkedIn: string;
  github: string;
  avatar: string;
  technologies: string[];
  experience: Experience[];
  projects: Project[];
}

export const userData: UserData = {
  name: "Iván Aguilar",
  role: "Software Engineer",
  bio: "Soy un Ingeniero Informático que disfruta transformar ideas en soluciones que ayuden a las personas.\n"+
"En estos más de 7 años, la tecnología ha sido mi lenguaje y el liderazgo mi forma de servir: escuchar, guiar y construir junto a mi equipo.\n"+
"Sigo buscando proyectos donde pueda aportar mi experiencia, pero también seguir aprendiendo, creciendo y dejando una huella positiva en quienes trabajan conmigo.",
  location: "Perú",
  linkedIn: "https://www.linkedin.com/in/ivan-hernan-aguilar-marinos-814771107",
  github: "https://github.com/IvanAM2694",
  avatar: "https://github.com/IvanAM2694.png",
  technologies: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "C#",
    ".NET",
    "Astro",
    "TailwindCSS",
    "Git",
    "SQL",
  ],
  experience: [
    {
      company: "Experis Perú",
      position: "Full Stack Developer",
      startDate: "2024-10", 
      endDate: "Presente",
      description: "",
      technologies: ["C#", "JavaScript", "TypeScript", "React", ".NET", "Postgres", "Azure", "SQL"],
      location: "Trujillo, Perú (Remoto)",
    },
    {
      company: "Wedox",
      position: "Development Integration Lead",
      startDate: "2021-05",
      endDate: "2024-09",
      description: "",
      technologies: ["C#", ".Net", "React", "JavaScript", "OpenUI5", "SQL", "Azure", "Azure DevOps", "SAP ABAP"],
      location: "Trujillo, Perú (Remoto)",
    },
    {
        company: "BUPLAT",
        position: "Product Technical Lead",
        startDate: "2021-05",
        endDate: "2024-09",
        description: "",
        technologies: ["C#", ".Net", "React", "JavaScript", "OpenUI5", "SQL", "Azure", "Azure DevOps", "SAP ABAP"],
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
        description: "Sistema de gestión en consultorio veterinario. Desarrollado en Laravel y React",
        link: "https://github.com/IvanAM2694/#",
        github: "https://github.com/IvanAM2694/#",
        technologies: ["PHP", "Laravel", "React", "TailwindCSS", "Typescript"],
        language: "PHP",
    },
    {
        name: "Peru Ancestral",
        description: "Sitio web de turismo y viaje ancestral en Perú, donde se podia reservar tours y hoteles. Permitia la reserva usando la pasarela de pago IzyPay. Desarrollado en Laravel y React",
        link: "https://github.com/IvanAM2694/#",
        github: "https://github.com/IvanAM2694/#",
        technologies: ["PHP", "Laravel", "React", "TailwindCSS", "Typescript"],
        language: "PHP",
    }/*,
    {
      name: "OrderRange",
      description: "Sistema de gestión de órdenes desarrollado en C#",
      link: "https://github.com/IvanAM2694/OrderRange",
      github: "https://github.com/IvanAM2694/OrderRange",
      technologies: ["C#", ".NET"],
      language: "C#",
    },
    {
      name: "MoneyParts",
      description: "Aplicación para gestión de partes monetarias",
      link: "https://github.com/IvanAM2694/MoneyParts",
      github: "https://github.com/IvanAM2694/MoneyParts",
      technologies: ["C#", ".NET"],
      language: "C#",
    },
    {
      name: "Frontend-Maintenance",
      description: "Aplicación frontend para mantenimiento de sistemas",
      link: "https://github.com/IvanAM2694/Frontend-Maintenance",
      github: "https://github.com/IvanAM2694/Frontend-Maintenance",
      technologies: ["JavaScript", "React"],
      language: "JavaScript",
    },
    {
      name: "Backend-Maintenance",
      description: "API backend para sistemas de mantenimiento",
      link: "https://github.com/IvanAM2694/Backend-Maintenance",
      github: "https://github.com/IvanAM2694/Backend-Maintenance",
      technologies: ["C#", ".NET", "API"],
      language: "C#",
    },*/
  ],
};
