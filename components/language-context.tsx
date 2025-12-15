"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import esTranslations from "@/lib/translations/es.json"
import enTranslations from "@/lib/translations/en.json"

type Language = "es" | "en"

type Translations = typeof esTranslations

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Translations> = {
    es: esTranslations,
    en: enTranslations,
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("es")

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language | null
        if (savedLang && (savedLang === "es" || savedLang === "en")) {
            setLanguage(savedLang)
        }
    }, [])

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang)
        localStorage.setItem("language", lang)
        document.documentElement.lang = lang
    }

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage: handleSetLanguage,
                t: translations[language],
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
