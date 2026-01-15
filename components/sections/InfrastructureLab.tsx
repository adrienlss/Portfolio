"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { LINKS } from "@/lib/utils/constants";

interface ProjectCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  link?: string;
  linkLabel?: string;
}

function ProjectCard({ title, company, period, description, technologies, link, linkLabel }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-dark-card p-8 rounded-xl border border-gray-700 hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h3 className="text-3xl font-bold text-blue-400 mb-2">{title}</h3>
          <p className="text-gray-300 font-semibold text-lg">{company}</p>
        </div>
        <span className="text-gray-400 text-sm mt-2 md:mt-0 px-4 py-2 bg-dark-bg rounded-full border border-gray-700">
          {period}
        </span>
      </div>
      <ul className="space-y-3 mb-6">
        {description.map((item, index) => (
          <li key={index} className="text-gray-300 flex items-start gap-3">
            <span className="text-blue-500 mt-1 text-xl">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-dark-bg border border-gray-700 rounded-lg text-sm text-gray-400 font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>
      {link && linkLabel && (
        <Button href={link} variant="outline" external>
          {linkLabel} →
        </Button>
      )}
    </motion.div>
  );
}

export default function InfrastructureLab() {
  const projects = [
    {
      title: "Stage Infrastructure & Réseaux",
      company: "DynFi",
      period: "Juin - Juillet 2025",
      description: [
        "Administration de clusters Proxmox avec configuration avancée des interfaces réseaux",
        "Configuration VLAN et agrégation de liens (Bonding) pour la segmentation réseau",
        "Compréhension approfondie des mécanismes de routage et de commutation en environnement de production",
        "Participation au maintien opérationnel des VMs et conteneurs (LXC/Docker) critiques",
      ],
      technologies: ["Proxmox", "VLAN", "Bonding", "Linux", "Docker", "LXC"],
      link: LINKS.dynfi,
      linkLabel: "Visiter DynFi",
    },
    {
      title: "Projet Infrastructure",
      company: "DaVinciCode - Association Cyber",
      period: "En cours",
      description: [
        "Mise en place d'un VPN pour l'accès distant sécurisé via Proxmox",
        "Déploiement d'une VM Ubuntu Server avec Firezone pour la gestion centralisée du VPN",
        "Configuration et maintenance de l'infrastructure réseau de l'association",
        "Monitoring des services et participation aux workshops et compétitions CTF internes",
      ],
      technologies: ["Proxmox", "Ubuntu Server", "Firezone", "VPN", "Linux", "Monitoring"],
      link: LINKS.davincicode,
      linkLabel: "Visiter DaVinciCode",
    },
  ];

  return (
    <section className="py-20 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Infrastructure & Home Lab
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprendre le "bruit sous le capot" - Ops & Réseau
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
