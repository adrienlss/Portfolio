export const LINKS = {
  github: "https://github.com/adrienlss",
  linkedin: "https://www.linkedin.com/in/adrien-l-542421343",
  rootme: "https://www.root-me.org/adrienlsl?lang=fr",
  prepavenir: "https://prepavenir.eu/",
  davincicode: "https://davincicode.fr/",
  dynfi: "https://dynfi.com/",
  email: "adrien.lassus.saintloubert@gmail.com",
};

export const PERSONAL_INFO = {
  name: "Adrien Lassus",
  title: "Élève Ingénieur 2ème année Prépa Intégrée @ESILV | Vers Majeure Cybersécurité & Objets Connectés",
  status: "Recherche d'Alternance (3 ans) • Sept 2026",
  availability: "Rythme: 2 sem. Entreprise / 3 sem. École",
  location: "Paris, France",
  email: LINKS.email,
};

export const TECH_STACK = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  backend: [
    "Node.js",
    "Python",
    "PostgreSQL",
    "SQL",
  ],
  security: [
    "Burp Suite",
    "Nmap",
    "Git",
    "Linux",
    "Docker",
  ],
};

export const PREPAVENIR_INFO = {
  title: "PrepAvenir - Plateforme EdTech de Préparation au Concours Avenir",
  description: "Plateforme web complète pour accompagner les élèves de Terminale dans leur préparation au Concours Avenir.",
  longDescription: "PrepAvenir est une plateforme web de préparation au Concours Avenir, conçue pour accompagner les élèves de Terminale dans leur réussite. Le site propose une organisation claire par matières, avec un accès structuré aux cours, fiches de révision et exercices types. Il intègre également une IA d'entraînement, des concours blancs et un accompagnement à l'orientation.",
  stack: {
    frontend: [
      "React 18.3.1",
      "Vite 5.4.1",
      "TypeScript 5.5.3",
      "React Router DOM",
      "TanStack Query",
      "Shadcn/ui",
      "Tailwind CSS 3.4.11"
    ],
    backend: [
      "Next.js",
      "Node.js",
      "Supabase PostgreSQL",
      "Supabase Auth",
      "Mistral AI",
      "Resend API"
    ],
    deployment: [
      "Vercel (Frontend & Backend)",
      "Supabase Cloud"
    ]
  },
  features: [
    "Organisation par matières (cours, fiches, exercices)",
    "Assistant IA d'entraînement (Mistral AI)",
    "Concours blancs et annales corrigées",
    "Système d'authentification complet",
    "Gestion de profil utilisateur",
    "Accompagnement à l'orientation",
    "Chatbot intelligent",
    "Interface responsive et moderne"
  ],
  architecture: {
    frontend: "React + Vite + TypeScript",
    backend: "Next.js API (projet séparé)",
    database: "Supabase PostgreSQL",
    auth: "Supabase Auth",
    ai: "Mistral AI",
    email: "Resend API (via Edge Functions)"
  },
  website: LINKS.prepavenir,
  highlights: [
    "Architecture frontend/backend séparée pour une meilleure scalabilité",
    "Intégration d'une IA conversationnelle pour l'accompagnement pédagogique",
    "Système d'authentification sécurisé avec Supabase",
    "Interface utilisateur moderne avec Shadcn/ui et Tailwind CSS",
    "State management avancé avec TanStack Query",
    "Déploiement continu sur Vercel avec CI/CD"
  ]
};
