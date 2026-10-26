export interface Experience {
  company: string;
  position: string;
  startDate: string; // Formato: "YYYY-MM" o "YYYY"
  endDate: string | "Presente"; // "Presente" para trabajos actuales
  description: string;
  technologies?: string[];
  location?: string;
}

export interface ProjectGalleryImage {
  /** Archivo en src/assets/projects */
  file: string;
  alt: string;
}

export interface Project {
  name: string;
  description: string;
  link?: string;
  github?: string;
  technologies: string[];
  language?: string;
  gallery?: ProjectGalleryImage[];
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
      description: "Sistema de gestión para consultorio veterinario.",
      technologies: ["PHP", "Laravel", "React", "TailwindCSS", "TypeScript"],
      language: "PHP",
      gallery: [
        {
          file: "veterp-inicio.webp",
          alt: "Panel de control de VetERP, con acciones rápidas y el resumen del día.",
        },
        {
          file: "veterp-pacientes.webp",
          alt: "Listado de pacientes de VetERP, con especie, raza y propietario.",
        },
        {
          file: "veterp-citas.webp",
          alt: "Agenda de citas de VetERP en vista de calendario.",
        },
        {
          file: "veterp-historias.webp",
          alt: "Historias clínicas de VetERP, con código, paciente y fecha de admisión.",
        },
        {
          file: "veterp-atenciones.webp",
          alt: "Cola de atenciones veterinarias de VetERP, filtrada por fecha y estado.",
        },
        {
          file: "veterp-veterinarios.webp",
          alt: "Maestro de veterinarios de VetERP, con colegiatura y especialidad.",
        },
        {
          file: "veterp-spa.webp",
          alt: "Servicios de spa de VetERP: baño, corte y desmotado.",
        },
        {
          file: "veterp-examenes.webp",
          alt: "Catálogo de exámenes médicos de VetERP.",
        },
        {
          file: "veterp-especies.webp",
          alt: "Especies atendidas en VetERP, con abreviatura y correlativo.",
        },
        {
          file: "veterp-configuracion.webp",
          alt: "Configuración general del consultorio en VetERP: identidad, colores y logo.",
        },
      ],
    },
    {
      name: "Peru Ancestral",
      description:
        "Plataforma de turismo ancestral en Perú con reserva de tours y hoteles e integración de pagos IzyPay.",
      technologies: ["PHP", "Laravel", "React", "TailwindCSS", "TypeScript"],
      language: "PHP",
    },
    {
      name: "Centro Neurológico Integral",
      description:
        "Sitio web del centro médico en Magdalena del Mar: especialidades, procedimientos y equipo.",
      link: "https://centroneurologicointegral.com/",
      technologies: ["Astro"],
      language: "Astro",
      gallery: [
        {
          file: "cni-inicio.webp",
          alt: "Inicio del Centro Neurológico Integral, con el mensaje de especialistas en neurología para niños y adultos.",
        },
        {
          file: "cni-nosotros.webp",
          alt: "Sección institucional: experiencia clínica e innovación tecnológica en Magdalena.",
        },
        {
          file: "cni-especialidades.webp",
          alt: "Especialidades del centro: neurología, neuropediatría, cardiología, medicina física, psicología y psiquiatría.",
        },
        {
          file: "cni-procedimientos.webp",
          alt: "Procedimientos del centro y formulario para reservar una consulta.",
        },
        {
          file: "cni-doctores.webp",
          alt: "Equipo médico del inicio: neurólogos con opción de reservar cita.",
        },
        {
          file: "cni-blog.webp",
          alt: "Bloque de enfermedades neurológicas: ACV, demencia por Alzheimer y migraña.",
        },
        {
          file: "cni-neurologia.webp",
          alt: "Página de neurología: clínica neurológica especializada en Lima.",
        },
        {
          file: "cni-neurologia-servicios.webp",
          alt: "Exámenes diagnósticos de neurología: electromiografía, electroencefalograma y potenciales evocados.",
        },
        {
          file: "cni-neurologia-equipo.webp",
          alt: "Staff médico de neurología, con colegiatura y botón para reservar cita.",
        },
        {
          file: "cni-neuropediatria.webp",
          alt: "Página de neuropediatría: diagnóstico y tratamiento en neurología pediátrica.",
        },
      ],
    },
  ],
};
