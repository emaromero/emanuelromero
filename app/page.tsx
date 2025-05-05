"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Header from "@/components/header"
import AboutMe from "@/components/about-me"
import Experience from "@/components/experience"
import Portfolio from "@/components/portfolio"
import DownloadCV from "@/components/download-cv"
import Contact from "@/components/contact"
import { useLanguage } from "@/components/language-provider"
import CloverDigital from "@/components/clover-digital"
import Navbar from "@/components/navbar"

export default function Home() {
  const { language } = useLanguage()

  // Animación para elementos al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.1 },
    )

    const hiddenElements = document.querySelectorAll(".hidden-element")
    hiddenElements.forEach((el) => observer.observe(el))

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navbar />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Header />

        <div className="container mx-auto px-4 py-8">
          <AboutMe />
          <CloverDigital />
          <Experience />
          <Portfolio />
          <DownloadCV />
          <Contact />
        </div>
      </motion.div>
    </main>
  )
}
