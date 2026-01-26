import avatarImage from "../assets/avatar.png";

export const profileData = {
  pii: {
    name: "Tadeo Daniel Leon Ferense",
    shortName: "Tadeo Leon Ferense",
    email: "leonferenesetadeo@gmail.com",
    phone: "(+54) 11 3065 0188",
    linkedin: "https://www.linkedin.com/in/tadeo-leon-ferenese",
    github: "https://github.com/TadeoLeonFerenese",
    location: "Buenos Aires, Argentina",
  },
  hero: {
    level: 99,
    class: "Software Developer",
    specialization: "PHP/Laravel & React",
    title: "Técnico Universitario en Programación",
    avatarUrl: avatarImage,
    experienceText:
      "10 Years of Infrastructure Mastery evolved into Software Development.",
  },
  stats: {
    // Stats ajustados según experiencia real del CV
    str: 80, // Backend (PHP/Laravel) - Experiencia reciente desde 2025 + Node.js bootcamp
    int: 85, // Logic/Problem Solving - 10 años de soporte técnico + análisis estadístico
    dex: 85, // Frontend (React/JavaScript/Android) - Desde bootcamp 2020 + app móvil completa
    vit: 95, // Resilience - 10 años en soporte técnico de alta demanda
    luk: 50,
  },
  about: {
    summary:
      "Técnico Universitario en Programación (2025) y Desarrollador de Software Junior. Actualmente integro el equipo de desarrollo del Poder Judicial, realizando mantenimiento y actualizaciones tanto en frontend como en backend para sistemas de gestión interna. Cuento con 10 años de trayectoria previa en soporte técnico, lo que me brinda una base sólida en resolución de problemas e infraestructura. Busco consolidar mi perfil técnico en equipos de desarrollo.",
    history: [
      {
        role: "Desarrollador de Software (PHP/Laravel)",
        company: "Poder Judicial de la Nación",
        area: "Área de Planificación",
        date: "Jun 2025 - Presente",
        desc: "Mantenimiento y actualización de código frontend y backend en sistemas internos (Escuela Judicial, Gestión de Auditorías UAI y Registro de Pliego de Bases). Implementación de modificaciones en vistas y lógica de negocio utilizando PHP, Laravel y tecnologías web estándar. Gestión de entornos locales de desarrollo y pruebas en máquinas virtuales (Oracle VirtualBox).",
      },
      {
        role: "Analista de Soporte Técnico Especializado",
        company: "Poder Judicial de la Nación",
        area: "Dirección Gral. de Tecnología",
        date: "Nov 2020 - May 2025",
        desc: "Gestión de infraestructura crítica y resolución de incidencias de hardware/software en entornos de alta demanda. Diagnóstico avanzado de fallas en S.O y redes, reporte de bugs al equipo de desarrollo.",
      },
      {
        role: "Analista de Soporte Técnico",
        company: "Pentacom S.A.",
        area: "Innovación IT",
        date: "Mar 2015 - Nov 2020",
        desc: "Mantenimiento preventivo/correctivo, migraciones de sistemas y cumplimiento estricto de SLAs.",
      },
    ],
  },
  skills: {
    backend: ["PHP", "Laravel", "Node.js", "API REST", "MVC", "Apache/Nginx"],
    databases: ["PostgreSQL", "SQLite", "MySQL", "TablePlus"],
    frontend: ["JavaScript", "React.js", "HTML5", "CSS3", "Tailwind", "Android"],
    infra: ["Linux", "Git/GitHub", "Docker", "VirtualBox"],
    data: ["Python", "Pandas", "NumPy", "Matplotlib", "Análisis"],
  },
  education: [
    {
      degree: "Técnico Universitario en Programación",
      institution: "Universidad Nacional Guillermo Brown (UNaB)",
      status: "Graduado (2025) | Promedio: 8.50",
      details: 'Tesis "Stockeate": App móvil Android para control de stock integrada con PostgreSQL y SQLite.',
    },
    {
      degree: "Tecnicatura en Ciencia de Datos (En curso)",
      institution: "Universidad Nacional Guillermo Brown (UNaB)",
      status: "En curso (Feb 2025 - Presente)",
      details: "Estado: 64% aprobado | Promedio: 8.33 | Foco en Estadística y Python.",
    },
    {
      degree: "Programación Full Stack (MERN)",
      institution: "Coding Bootcamp",
      status: "Graduado (2020 - 2021)",
      details: "Stack: MongoDB, Express, React, Node.js.",
    },
  ],
};
