"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "./language-provider"

export default function CloverDigital() {
  const { language, translations } = useLanguage()

  return (
    <section id="clover-digital" className="py-20 bg-gradient-to-r from-[#003A52] to-[#098486] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="hidden-element"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">{translations[language].cloverDigital.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#003A52]/80 to-[#098486]/80 z-10 flex items-center justify-center">
                  <h3 className="text-4xl font-bold text-white">Clover Digital</h3>
                </div>
                <Image src="https://i.postimg.cc/855ZZYJg/Clover-Digital-Servicios-Digitales-en-Buenos-Aires-cloverdigital-vercel-app.png" alt="Clover Digital" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-6">{translations[language].cloverDigital.description}</p>

              <h3 className="text-xl font-semibold mb-4">{translations[language].cloverDigital.servicesTitle}</h3>

              <ul className="space-y-3">
                {translations[language].cloverDigital.services.map((service, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mr-3 mt-1 text-[#098486] bg-white rounded-full p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-white text-[#003A52] rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  {translations[language].cloverDigital.contactButton}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
