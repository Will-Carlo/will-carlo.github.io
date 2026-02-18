import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// --- Interfaces (Definiciones de Tipo) ---
export interface Social {
  icon: LucideIcon;
  url: string;
  label: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  photo: string;
  socials: Social[];
  cvUrl: string;
}

export interface TechItem {
  name: string;
  logo: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  type: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

// --- Datos ---

export const profile: Profile = {
  name: "Will Carlo", 
  role: "Java & React Developer | SaaS Specialist",
  bio: "Soy desarrollador de software especializado en la creación de sistemas empresariales y plataformas SaaS. Me enfoco en escribir código limpio, mantenible y seguro. Tengo experiencia construyendo sistemas completos desde el backend hasta el frontend.",
  photo: "/profile.jpg", 
  socials: [
    { icon: Github, url: "https://github.com/Will-Carlo", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/will-carlo/", label: "LinkedIn" },
    { icon: Mail, url: "mailto:will.carlo@outlook.com", label: "Email" },
  ],
  cvUrl: "/cv-wilder-fernando-carlo.pdf"
};

export const technologies: TechItem[][] = [
  // Fila 1: Backend
  [
    { name: "Java", logo: "☕" },
    { name: "Spring Boot", logo: "🍃" },
    { name: "Spring Security", logo: "🔒" },
    { name: "JWT", logo: "🔑" },
    { name: "Hibernate", logo: "🗃️" },
    { name: "MySQL", logo: "🐬" },
    { name: "REST APIs", logo: "🔗" },
  ],
  // Fila 2: Frontend
  [
    { name: "React", logo: "⚛️" },
    { name: "DaisyUI", logo: "🌼" },
    { name: "Tailwind CSS", logo: "🌊" },
    { name: "Context API", logo: "🧠" },
    { name: "Axios", logo: "📡" },
    { name: "HTML/CSS", logo: "🎨" },
  ],
  // Fila 3: Tools & Others
  [
    { name: "Docker", logo: "🐳" },
    { name: "Git", logo: "📚" },
    { name: "C# .NET", logo: "#️⃣" },
    { name: "Python", logo: "🐍" },
    { name: "Linux VPS", logo: "🐧" },
    { name: "Nginx", logo: "🌐" },
  ]
];

export const projects: Project[] = [
  {
    title: "Comerzia SaaS",
    description: "Plataforma multi-tenant para gestión de inventarios y ventas con arquitectura modular.",
    tags: ["Java", "Spring Boot", "Spring Security", "React", "JWT", "JPA/Hibernate", "SaaS", "DaysiUI", "Tailwind CSS", "MySQL"],
    image: "/projects/comerzia.jpg",
    link: "#",
    type: "SaaS Platform"
  },
  {
    title: "Travesía",
    description: "SaaS para agencias de turismo, gestión de paquetes, afiliados y comisiones.",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA/Hibernate", "MySQL", "React", "DaisyUI", "Cloudinary", "APIs REST"],
    image: "/projects/travesia.jpg",
    link: "#",
    type: "SaaS Platform"
  },
  {
    title: "RRHH System",
    description: "Sistema integral para gestión de Recursos Humanos, control de asistencias, sueldos y bonos.",
    tags: ["Java", "JSF", "PrimeFaces", "MySQL", "Hibernate", "JPA"],
    image: "/projects/rrhh.jpg",
    link: "#",
    type: "Enterprise Monolith"
  },
  {
    title: "Bolivia Decide",
    description: "Simulador de elecciones digitales y análisis de tendencias con autenticación Google.",
    tags: ["Spring Boot", "Spring Security", "OAuth2", "React", "Analytics", "APIs REST"],
    image: "/projects/bolivia.jpg",
    link: "#",
    type: "Web App"
  },
  {
    title: "WhatsApp Bot",
    description: "Bot conversacional automatizado integrado con ChatGPT y Meta API.",
    tags: ["Python", "WhatsApp API", "ChatGPT API", "APIs REST", "Automation"],
    image: "/projects/bot.jpg",
    link: "#",
    type: "Automation"
  },
  {
    title: "Biometric App",
    description: "Aplicación de escritorio para control de asistencia offline/online con huella digital.",
    tags: ["C# .NET", "Windows Forms", "SQLite", "DigitalPersona", "APIs REST"],
    image: "/projects/bio.jpg",
    link: "#",
    type: "Desktop App"
  },
  {
    title: "Mumanal",
    description: "Sistema de registro de vouchers.",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA/Hibernate", "MySQL", "React", "DaisyUI", "APIs REST"],
    image: "/projects/mumanal.jpg",
    link: "#",
    type: "Web App"
  }
];

export const certifications: Certification[] = [
  {
    title: "Oracle Certified Professional: Java SE 11",
    issuer: "Oracle",
    date: "2024",
    image: "/certs/oracle.png"
  },
  {
    title: "Spring Boot Specialist",
    issuer: "Udemy / Pivotal",
    date: "2023",
    image: "/certs/spring.png"
  },
];