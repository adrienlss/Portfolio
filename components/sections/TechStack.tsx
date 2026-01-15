"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/utils/constants";

export default function TechStack() {
  const categories = [
    { title: "Frontend", items: TECH_STACK.frontend, color: "blue" },
    { title: "Backend/Data", items: TECH_STACK.backend, color: "gray" },
    { title: "Security/Tools", items: TECH_STACK.security, color: "blue" },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          title: "text-blue-400",
          border: "border-blue-600/30",
          badge: "border-blue-500/50 text-blue-300 hover:bg-blue-500/10",
        };
      case "gray":
        return {
          title: "text-gray-300",
          border: "border-gray-700/30",
          badge: "border-gray-600/50 text-gray-300 hover:bg-gray-600/10",
        };
      default:
        return {
          title: "text-blue-400",
          border: "border-blue-600/30",
          badge: "border-blue-500/50 text-blue-300 hover:bg-blue-500/10",
        };
    }
  };

  return (
    <section id="tech-stack" className="py-20 bg-dark-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compétences techniques et outils que j'utilise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className={`bg-dark-card p-6 rounded-lg border ${colors.border} hover:border-opacity-60 transition-all`}
              >
                <h3 className={`text-2xl font-bold mb-6 text-center ${colors.title}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.2 + itemIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-4 py-2 bg-dark-bg border rounded-lg text-sm font-semibold transition-colors cursor-default ${colors.badge}`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
