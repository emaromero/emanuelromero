"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="rounded-full bg-white dark:bg-gray-800 px-3"
    >
      {language === "es" ? "EN" : "ES"}
    </Button>
  )
}
