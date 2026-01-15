"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavigationCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  href: string;
  delay: number;
}

function NavigationCard({ title, subtitle, description, icon, gradient, href, delay }: NavigationCardProps) {
  return (
    <Link href={href} className="block">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        whileHover={{ scale: 1.05, y: -10 }}
        className="relative group cursor-pointer"
      >
        <div className={`absolute inset-0 ${gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity`} />
        <div className="relative bg-dark-card border-2 border-gray-700 rounded-2xl p-8 h-full hover:border-blue-600 transition-all duration-300">
          <div className="text-5xl mb-4">{icon}</div>
          <h3 className="text-3xl font-bold mb-2 text-white">
            {title}
          </h3>
          <p className="text-xl text-gray-400 mb-4">{subtitle}</p>
          <p className="text-gray-300">{description}</p>
          <div className="mt-6 flex items-center text-blue-400 group-hover:translate-x-2 transition-transform">
            <span className="font-semibold">Explorer →</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function NavigationHub() {
  const sections = [
    {
      title: "Développement",
      subtitle: "Full-Stack & IA",
      description: "Découvrez PrepAvenir, une plateforme EdTech complète construite avec React, Next.js et Mistral AI.",
      icon: "⚡",
      gradient: "bg-gradient-to-br from-blue-900 to-blue-800",
      href: "/development",
    },
    {
      title: "Infrastructure & Lab",
      subtitle: "Ops & Réseau",
      description: "Expérience avec Proxmox, DynFi et projets d'infrastructure pour DaVinciCode.",
      icon: "🔧",
      gradient: "bg-gradient-to-br from-gray-700 to-gray-800",
      href: "/infrastructure",
    },
    {
      title: "Sécurité",
      subtitle: "CTF & Pentest",
      description: "Parcours en cybersécurité via Root-Me, HackTheBox et TryHackMe.",
      icon: "🛡️",
      gradient: "bg-gradient-to-br from-blue-900 to-blue-800",
      href: "/security",
    },
  ];

  return (
    <section className="py-20 bg-dark-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Découvrez Mon Travail
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Naviguez à travers mes projets et compétences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <NavigationCard key={section.title} {...section} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
