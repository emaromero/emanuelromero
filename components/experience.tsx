"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export default function Experience() {
  const { language, translations } = useLanguage()

  const experiences = translations[language].experience.items

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="hidden-element"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-[#003A52] dark:text-[#098486]">
            {translations[language].experience.title}
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-[#098486] pl-8 ml-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="mb-12 relative"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -left-12 w-6 h-6 rounded-full bg-[#098486] border-4 border-white dark:border-gray-800"></div>
                  <h3 className="text-xl font-semibold text-[#00667A] dark:text-[#098486]">{exp.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                  <p className="text-base">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
