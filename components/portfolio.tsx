"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "./language-provider"

export default function Portfolio() {
  const { language, translations } = useLanguage()
  const projects = translations[language].portfolio.projects

  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="hidden-element"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-[#003A52] dark:text-[#098486]">
            {translations[language].portfolio.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg?height=200&width=300"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500"
                    style={{
                      transform: activeProject === index ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#003A52] dark:text-[#098486]">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.category}</p>
                  <p className="text-sm mb-4">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[#098486] text-white rounded-md hover:bg-[#00667A] transition-colors duration-300"
                  >
                    {translations[language].portfolio.viewProject}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
