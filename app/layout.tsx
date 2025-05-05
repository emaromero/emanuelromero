import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "CV de Emanuel Romero",
  description: "Portafolio y CV de Emanuel Romero, desarrollador web, fotógrafo y especialista en marketing digital",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        try {
          const storedTheme = localStorage.getItem('theme')
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
          
          // Establecer dark como predeterminado
          if (storedTheme === 'light') {
            document.documentElement.classList.remove('dark')
          } else {
            document.documentElement.classList.add('dark')
          }
        } catch (e) {}
      })()
    `,
          }}
        />
      </head>
      <body className={`${poppins.variable} font-poppins`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
