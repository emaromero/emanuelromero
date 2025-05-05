"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export default function AboutMe() {
  const { language, translations } = useLanguage()

  return (
    <section id="about" className="py-20">
      <motion.div
        className="hidden-element"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-[#003A52] dark:text-[#098486]">
          {translations[language].aboutMe.title}
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">{translations[language].aboutMe.content}</p>
        </div>
      </motion.div>
    </section>
  )
}
