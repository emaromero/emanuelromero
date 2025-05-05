"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

type Translations = {
  [key in Language]: {
    header: {
      description: string
    }
    aboutMe: {
      title: string
      content: string
    }
    experience: {
      title: string
      items: {
        title: string
        period: string
        description: string
      }[]
    }
    portfolio: {
      title: string
      viewProject: string
      projects: {
        title: string
        category: string
        description: string
        url: string
        image: string
      }[]
    }
    downloadCV: {
      title: string
      buttonText: string
    }
    contact: {
      title: string
    }
    cloverDigital: {
      title: string
      description: string
      servicesTitle: string
      services: string[]
      contactButton: string
    }
  }
}

const translations: Translations = {
  es: {
    header: {
      description: "Desarrollador Web, Fotógrafo y Especialista en Marketing Digital",
    },
    aboutMe: {
      title: "Sobre Mí",
      content:
        "Soy Emanuel Romero, freelancer apasionado por el desarrollo web, la fotografía y el marketing digital. Diseño sitios web modernos y funcionales con tecnologías como HTML, CSS, JavaScript y React.js, y creo tiendas online personalizadas en plataformas como Tienda Nube. También realizo fotografía inmobiliaria profesional y gestiono cuentas de Instagram para agentes de Remax, creando contenido visual y campañas en Meta Ads. Estudié en Coderhouse y me mantengo en constante formación para seguir creciendo. Además, cuento con experiencia en atención al cliente y administración, donde me destaqué por mi empatía, organización y capacidad resolutiva. Busco seguir desarrollándome en un entorno remoto donde pueda aportar valor con compromiso, creatividad y una mirada integral.",
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          title: "Desarrollador Web Freelance",
          period: "Jun 2023 - Presente",
          description: "Creación de sitios web y tiendas online con Tienda Nube, React, HTML, CSS, JavaScript.",
        },
        {
          title: "Fotógrafo Inmobiliario",
          period: "2023 - Presente",
          description: "Fotografía profesional para Remax, gestión de Instagram y campañas en Meta Ads.",
        },
        {
          title: "Atención al Cliente (Personal Flow)",
          period: "Jul 2022 - Presente",
          description: "Soporte técnico y resolución de consultas en call center.",
        },
        {
          title: "Atención al Cliente (Cinemark Hoyts)",
          period: "Jul 2019 - Mar 2020",
          description: "Asistencia presencial a clientes.",
        },
      ],
    },
    portfolio: {
      title: "Portafolio",
      viewProject: "Ver Proyecto",
      projects: [
        {
          title: "Pasión por la Náutica",
          category: "React JS",
          description: "Diseño en React con navegación fluida y repositorio en GitHub",
          url: "https://pasionporlanautica.com",
          image: "https://i.postimg.cc/25mXZ0Sd/Pasi-n-por-la-N-utica-www-pasionporlanautica-com.png",
        },
        {
          title: "Plim Plim",
          category: "Tienda Nube",
          description: "Tienda atractiva con catálogo infantil adaptado a venta online",
          url: "https://plimplimpanalerayartdebeb.mitiendanube.com",
          image: "https://i.postimg.cc/bJV648HL/Tienda-Online-de-Plim-Plim-Pa-alera-y-Art-de-beb-plimplimpanalerayartdebeb-mitiendanube-com.png",
        },
        {
          title: "Looki Bar",
          category: "React JS",
          description: "Diseño moderno, sistema de pedidos vía WhatsApp y menú editable desde Google Sheets",
          url: "https://lookibar.vercel.app",
          image: "https://i.postimg.cc/G3SN5PXr/Looki-Bar-Men-Digital-Bar-y-Restaurante-en-Pilar-lookibar-vercel-app.png",
        },
        {
          title: "Estampa",
          category: "Tienda Nube",
          description: "E-commerce con interfaz intuitiva, catálogo optimizado y estrategias SEO",
          url: "https://estampa15.mitiendanube.com",
          image: "https://i.postimg.cc/J4DgVyFX/Estampa-estampa15-mitiendanube-com.png",
        },
        {
          title: "Ringo Intimates",
          category: "Tienda Nube",
          description: "Branding completo, fotografía de productos, SEO optimizado y experiencia de compra mejorada",
          url: "https://ringointimates2.mitiendanube.com",
          image: "https://i.postimg.cc/fLR2HkXJ/Ringo-Intimates-ringointimates2-mitiendanube-com.png",
        },
        {
          title: "SDA – Servicios de Aire Acondicionado",
          category: "HTML/CSS/JS",
          description: "Web institucional con galería, enlaces útiles y diseño moderno desde cero",
          url: "https://www.sda-sa.com.ar",
          image: "https://i.postimg.cc/pdZcYKmw/SERVICIOS-DE-AIRE-ACONDICIONADO-S-A-www-sda-sa-com-ar.png",
        },
        {
          title: "Marine Park",
          category: "HTML/CSS/JS",
          description:
            "Diseño de sitio one-page para guardería náutica. Interfaz clara, enlaces a redes y contacto directo",
          url: "https://www.mpark.com.ar",
          image: "https://i.postimg.cc/QdcyC2hx/MARINE_PARK_-_[www.mpark.com.ar].png",
        },
        {
          title: "Matilda Calzados",
          category: "Tienda Nube",
          description: "Desarrollo completo, carga eficiente de productos y optimización para buscadores",
          url: "https://matildacalzados.mitiendanube.com",
          image: "https://i.postimg.cc/BQrzqSWV/Matilda-Calzados-matildacalzados-mitiendanube-com.png",
        },
      ],
    },
    downloadCV: {
      title: "Descarga mi CV",
      buttonText: "Descargar CV",
    },
    contact: {
      title: "Contáctame",
    },
    cloverDigital: {
      title: "Clover Digital",
      description:
        "Clover Digital es una agencia integral de desarrollo web, marketing digital y fotografía. Ofrecemos soluciones personalizadas para ayudar a tu negocio a destacar en el mundo digital con un enfoque creativo y profesional.",
      servicesTitle: "Nuestros Servicios",
      services: [
        "Desarrollo web personalizado",
        "Diseño de tiendas online",
        "Gestión de redes sociales",
        "Fotografía profesional",
        "Marketing digital",
        "Campañas en Meta Ads",
        "Diseño gráfico",
        "SEO y posicionamiento web",
      ],
      contactButton: "Contáctanos",
    },
  },
  en: {
    header: {
      description: "Web Developer, Photographer and Digital Marketing Specialist",
    },
    aboutMe: {
      title: "About Me",
      content:
        "I'm Emanuel Romero, a freelancer passionate about web development, photography, and digital marketing. I design modern and functional websites using technologies such as HTML, CSS, JavaScript, and React.js, and create custom online stores on platforms like Tienda Nube. I also do professional real estate photography and manage Instagram accounts for Remax agents, creating visual content and Meta Ads campaigns. I studied at Coderhouse and I'm constantly training to continue growing. Additionally, I have experience in customer service and administration, where I stood out for my empathy, organization, and problem-solving skills. I seek to continue developing in a remote environment where I can add value with commitment, creativity, and a comprehensive approach.",
    },
    experience: {
      title: "Experience",
      items: [
        {
          title: "Freelance Web Developer",
          period: "Jun 2023 - Present",
          description: "Creation of websites and online stores with Tienda Nube, React, HTML, CSS, JavaScript.",
        },
        {
          title: "Real Estate Photographer",
          period: "2023 - Present",
          description: "Professional photography for Remax, Instagram management and Meta Ads campaigns.",
        },
        {
          title: "Customer Service (Personal Flow)",
          period: "Jul 2022 - Present",
          description: "Technical support and query resolution in call center.",
        },
        {
          title: "Customer Service (Cinemark Hoyts)",
          period: "Jul 2019 - Mar 2020",
          description: "In-person customer assistance.",
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      viewProject: "View Project",
      projects: [
        {
          title: "Looki Bar",
          category: "React JS",
          description: "Modern design, WhatsApp ordering system and menu editable from Google Sheets",
          url: "https://lookibar.vercel.app",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Plim Plim",
          category: "Tienda Nube",
          description: "Attractive store with children's catalog adapted to online sales",
          url: "https://plimplimpanalerayartdebeb.mitiendanube.com",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Matilda Calzados",
          category: "Tienda Nube",
          description: "Complete development, efficient product loading and search engine optimization",
          url: "https://matildacalzados.mitiendanube.com",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Estampa",
          category: "Tienda Nube",
          description: "E-commerce with intuitive interface, optimized catalog and SEO strategies",
          url: "https://estampa15.mitiendanube.com",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Ringo Intimates",
          category: "Tienda Nube",
          description: "Complete branding, product photography, optimized SEO and improved shopping experience",
          url: "https://ringointimates2.mitiendanube.com",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "SDA – Servicios de Aire Acondicionado",
          category: "HTML/CSS/JS",
          description: "Institutional website with gallery, useful links and modern design from scratch",
          url: "https://www.sda-sa.com.ar",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Marine Park",
          category: "HTML/CSS/JS",
          description:
            "One-page site design for a nautical marina. Clear interface, social media links and direct contact",
          url: "https://www.mpark.com.ar",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Pasión por la Náutica",
          category: "React JS",
          description: "React design with fluid navigation and GitHub repository",
          url: "https://pasionporlanautica.com",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    downloadCV: {
      title: "Download my CV",
      buttonText: "Download CV",
    },
    contact: {
      title: "Contact Me",
    },
    cloverDigital: {
      title: "Clover Digital",
      description:
        "Clover Digital is a comprehensive agency for web development, digital marketing, and photography. We offer customized solutions to help your business stand out in the digital world with a creative and professional approach.",
      servicesTitle: "Our Services",
      services: [
        "Custom web development",
        "Online store design",
        "Social media management",
        "Professional photography",
        "Digital marketing",
        "Meta Ads campaigns",
        "Graphic design",
        "SEO and web positioning",
      ],
      contactButton: "Contact Us",
    },
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  translations: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  return <LanguageContext.Provider value={{ language, setLanguage, translations }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
