"use client";

import { motion } from "framer-motion";
import { LINKS } from "@/lib/utils/constants";

export default function SecurityJourney() {
  const platforms = [
    {
      name: "Root-Me",
      username: "adrienlsl",
      score: "210 points",
      rank: "Curious",
      description: "19 challenges résolus",
      link: LINKS.rootme,
    },
    {
      name: "HackTheBox Academy",
      path: "Junior Analyst",
      description: "Utilisé principalement pour la théorie",
      link: null,
    },
    {
      name: "TryHackMe",
      username: "adrien.lsl",
      description: "Je préfère Root-Me pour le moment",
      link: null,
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
            Cybersécurité & CTF
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Parcours en cybersécurité
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {platforms.map((platform, index) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-dark-card p-8 rounded-xl border border-gray-700 hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 ${platform.link ? 'cursor-pointer' : ''}`}
              >
                <h3 className="text-2xl font-bold text-blue-400 mb-4">{platform.name}</h3>
                {platform.username && (
                  <p className="text-gray-400 text-sm mb-2">@{platform.username}</p>
                )}
                {platform.score && (
                  <p className="text-blue-400 font-semibold mb-2 text-lg">{platform.score}</p>
                )}
                {platform.rank && (
                  <p className="text-gray-400 text-sm mb-4">Rang: {platform.rank}</p>
                )}
                {platform.path && (
                  <p className="text-gray-400 text-sm mb-4">Path: {platform.path}</p>
                )}
                <p className="text-gray-300">{platform.description}</p>
                {platform.link && (
                  <p className="text-blue-400 text-sm mt-4 font-semibold">Cliquez pour voir mon profil →</p>
                )}
              </motion.div>
            );

            if (platform.link) {
              return (
                <a
                  key={platform.name}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {CardContent}
                </a>
              );
            }

            return <div key={platform.name}>{CardContent}</div>;
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-dark-card p-8 rounded-xl border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-blue-400 mb-6">Writeups & Labs</h3>
            <p className="text-gray-300 mb-4 text-lg">
              Découverte de vulnérabilités et résolution de challenges CTF. 
            </p>
            <p className="text-gray-400 mb-6 text-base">
              Sur mon GitHub, vous trouverez mes projets personnels d'entraînement : petits labs pour mieux comprendre des failles de sécurité, 
              projets de cours (SQL, C#, C).
            </p>
            <motion.a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/50 transition-all"
            >
              Voir sur GitHub →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
