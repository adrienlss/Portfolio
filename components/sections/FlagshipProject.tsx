"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { PREPAVENIR_INFO } from "@/lib/utils/constants";

export default function FlagshipProject() {
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
            {PREPAVENIR_INFO.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            {PREPAVENIR_INFO.description}
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto">
            {PREPAVENIR_INFO.longDescription}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border-2 border-gray-700 shadow-2xl hover:border-blue-600 transition-all">
              <Image
                src="/images/prepavenir-screenshot-1.png"
                alt="Plateforme PrepAvenir"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-blue-400">Fonctionnalités Principales</h3>
              <ul className="space-y-3">
                {PREPAVENIR_INFO.features.map((feature, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-3">
                    <span className="text-blue-500 mt-1 text-xl">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 text-blue-400">Stack Technique</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-300 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {PREPAVENIR_INFO.stack.frontend.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 bg-dark-card border border-gray-700 rounded-lg text-sm font-semibold text-gray-300 hover:bg-gray-800 hover:border-blue-600 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-300 mb-2">Backend & Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {PREPAVENIR_INFO.stack.backend.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (PREPAVENIR_INFO.stack.frontend.length + index) * 0.05 }}
                        className="px-4 py-2 bg-dark-card border border-gray-700 rounded-lg text-sm font-semibold text-gray-300 hover:bg-gray-800 hover:border-blue-600 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-300 mb-2">Déploiement</h4>
                  <div className="flex flex-wrap gap-2">
                    {PREPAVENIR_INFO.stack.deployment.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (PREPAVENIR_INFO.stack.frontend.length + PREPAVENIR_INFO.stack.backend.length + index) * 0.05 }}
                        className="px-4 py-2 bg-dark-card border border-gray-700 rounded-lg text-sm font-semibold text-gray-300 hover:bg-gray-800 hover:border-blue-600 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 text-blue-400">Architecture</h3>
              <div className="bg-dark-card p-6 rounded-xl border border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-blue-500" />
                    <div>
                      <span className="text-gray-300 text-lg font-semibold">Frontend</span>
                      <p className="text-gray-500 text-sm">{PREPAVENIR_INFO.architecture.frontend}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pl-8">
                    <div className="w-px h-8 bg-gray-700" />
                  </div>
                  <div className="flex items-center gap-4 pl-8">
                    <div className="w-4 h-4 rounded-full bg-blue-600" />
                    <div>
                      <span className="text-gray-300 text-lg font-semibold">Backend API</span>
                      <p className="text-gray-500 text-sm">{PREPAVENIR_INFO.architecture.backend}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pl-8">
                    <div className="w-px h-8 bg-gray-700" />
                  </div>
                  <div className="flex items-center gap-4 pl-16">
                    <div className="w-4 h-4 rounded-full bg-gray-500" />
                    <div>
                      <span className="text-gray-300 text-lg font-semibold">Database & Auth</span>
                      <p className="text-gray-500 text-sm">{PREPAVENIR_INFO.architecture.database} + {PREPAVENIR_INFO.architecture.auth}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pl-16">
                    <div className="w-4 h-4 rounded-full bg-blue-500" />
                    <div>
                      <span className="text-gray-300 text-lg font-semibold">IA</span>
                      <p className="text-gray-500 text-sm">{PREPAVENIR_INFO.architecture.ai}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-blue-400">Points Forts Techniques</h3>
              <ul className="space-y-2">
                {PREPAVENIR_INFO.highlights.map((highlight, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2 text-sm">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button href={PREPAVENIR_INFO.website} variant="primary" external>
                Visiter le site →
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
