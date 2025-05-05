"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export default function Contact() {
  const { language, translations } = useLanguage()

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="hidden-element"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-[#003A52] dark:text-[#098486]">
            {translations[language].contact.title}
          </h2>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col space-y-6">
              <motion.a
                href="https://wa.me/5491164473603"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full mr-4">
                  <i className="fab fa-whatsapp text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#003A52] dark:text-[#098486]">WhatsApp</h3>
                  <p className="text-gray-600 dark:text-gray-400">+54 9 11 6447-3603</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:cloverdigitalarg@gmail.com"
                className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#003A52] text-white rounded-full mr-4">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#003A52] dark:text-[#098486]">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">cloverdigitalarg@gmail.com</p>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
