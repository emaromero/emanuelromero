"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export default function Header() {
  const { language, translations } = useLanguage()

  return (
    <motion.header
      id="header"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#003A52] to-[#098486] text-white text-center px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-6"
      >
        <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="https://i.postimg.cc/pLs2LXKx/perfil-romero-redondo.png"
            alt="Emanuel Romero"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Emanuel Romero
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl max-w-2xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {translations[language].header.description}
      </motion.p>

      <motion.div
        className="absolute bottom-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </motion.header>
  )
}
