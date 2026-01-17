import avatarImage from "../assets/avatar.jpg";

export const profileData = {
  pii: {
    name: "Tadeo Daniel Leon Ferense",
    shortName: "Tadeo Leon Ferense",
    email: "leonferensetadeo@gmail.com",
    phone: "(+54) 11 3065 0188",
    linkedin: "https://www.linkedin.com/in/tadeo-leon-ferense/",
    github: "https://github.com/TadeoLeonFerense",
    location: "Buenos Aires, Argentina", // Inferido del prefijo +54
  },
  hero: {
    level: 99,
    class: "Software Developer", // Base class
    specialization: "PHP/Laravel & React", // Subclass
    title: "Técnico Universitario en Programación",
    avatarUrl: avatarImage, // Local asset import for reliable bundling
    experienceText:
      "10 Years of Infrastructure Mastery evolved into Software Development.",
  },
  stats: {
    // Stats based on skills (Arbitrary gamified values)
    str: 85, // Backend (PHP/Laravel)
    int: 90, // Problem Solving (10 Years Support)
    dex: 75, // Frontend (React)
    vit: 100, // Resilience (Support background)
    luk: 50,
  },
  about: {
    summary:
      "Técnico Universitario en Programación (2025) y Desarrollador de Software Junior. Integro el equipo del Poder Judicial de la Nación, manteniendo sistemas críticos en PHP/Laravel. Cuento con 10 años de trayectoria previa en soporte técnico e infraestructura, lo que me brinda una base sólida en resolución de problemas.",
    history: [
      {
        role: "Desarrollador de Software (PHP/Laravel)",
        company: "Poder Judicial de la Nación",
        date: "Jun 2025 - Presente",
        desc: "Mantenimiento y actualización de código frontend y backend en sistemas internos. Gestión de entornos locales con Docker/VirtualBox.",
      },
      {
        role: "Analista de Soporte Técnico Especializado",
        company: "Poder Judicial de la Nación",
        date: "Nov 2020 - May 2025",
        desc: "Gestión de infraestructura crítica y resolución de incidencias de hardware/software.",
      },
      {
        role: "Analista de Soporte Técnico",
        company: "Pentacom S.A.",
        date: "Mar 2015 - Nov 2020",
        desc: "Mantenimiento preventivo/correctivo y cumplimiento de SLAs.",
      },
    ],
  },
  skills: {
    backend: ["PHP", "Laravel", "Node.js", "API REST", "MVC"],
    frontend: ["JavaScript (ES6+)", "React.js", "Tailwind", "HTML5", "CSS3"],
    infra: ["Linux (Admin)", "Git/GitHub", "Docker", "Oracle VirtualBox"],
    data: ["Python", "Pandas", "NumPy", "SQL (PostgreSQL, MySQL, SQLite)"],
  },
  education: [
    {
      degree: "Técnico Universitario en Programación",
      institution: "Universidad Nacional Guillermo Brown (UNaB)",
      status: "Graduado (2025) | Promedio: 8.50",
    },
    {
      degree: "Tecnicatura en Ciencia de Datos",
      institution: "Universidad Nacional Guillermo Brown (UNaB)",
      status: "En curso (Feb 2025 - Presente)",
    },
  ],
};
