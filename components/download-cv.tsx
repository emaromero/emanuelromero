"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export default function DownloadCV() {
  const { language, translations } = useLanguage()

  return (
    <section id="download" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="hidden-element"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-[#003A52] dark:text-[#098486]">
            {translations[language].downloadCV.title}
          </h2>

          <motion.a
            href="https://drive.google.com/uc?export=download&id=1hyFVKTIjtZj2n1yi-4XBMUuPN9LVTtWC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#003A52] text-white rounded-md font-semibold text-lg hover:bg-[#00667A] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-download mr-2"></i>
            {translations[language].downloadCV.buttonText}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
