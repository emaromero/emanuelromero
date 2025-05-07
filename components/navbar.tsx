"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "./language-provider"
import { ModeToggle } from "./mode-toggle"
import { LanguageToggle } from "./language-toggle"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("header")
  const { language, translations } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  // Detectar scroll para mostrar/ocultar navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Detectar sección activa
    const handleActiveSection = () => {
      const sections = ["header", "about", "clover-digital", "experience", "portfolio", "download", "contact"]

      const scrollPosition = window.scrollY + 300

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("scroll", handleActiveSection)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleActiveSection)
    }
  }, [])

  const navItems = [
    { id: "header", label: { es: "Inicio", en: "Home" } },
    { id: "about", label: { es: "Sobre Mí", en: "About Me" } },
    { id: "experience", label: { es: "Experiencia", en: "Experience" } },
    { id: "portfolio", label: { es: "Portafolio", en: "Portfolio" } },
    { id: "contact", label: { es: "Contacto", en: "Contact" } },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: id === "header" ? 0 : element.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  const isDark = theme === "dark"

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 right-0 z-50 ${isDark ? "bg-gray-900" : "bg-white"} shadow-md`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Nombre */}
              <div className="flex-shrink-0 font-bold text-[#003A52] dark:text-[#098486]">Emanuel Romero</div>

              {/* Navegación Desktop */}
              <div className="hidden md:flex items-center space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      activeSection === item.id
                        ? "text-[#098486] dark:text-[#098486]"
                        : "text-gray-600 dark:text-gray-300 hover:text-[#098486] dark:hover:text-[#098486]"
                    }`}
                  >
                    {item.label[language]}
                  </button>
                ))}
                <div className="flex items-center ml-4 space-x-2">
                  <ModeToggle />
                  <LanguageToggle />
                </div>
              </div>

              {/* Botón de menú móvil */}
              <div className="md:hidden flex items-center">
                <div className="flex items-center space-x-2 mr-4">
                  <ModeToggle />
                  <LanguageToggle />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-600 dark:text-gray-300 hover:text-[#098486] dark:hover:text-[#098486] focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Menú móvil */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`md:hidden ${isDark ? "bg-gray-900" : "bg-white"} shadow-lg`}
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                        activeSection === item.id
                          ? "text-white bg-[#098486]"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {item.label[language]}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
