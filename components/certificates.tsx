"use client"

import { Award, ExternalLink, Calendar, CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { useState } from "react"
import { useLanguage } from "@/components/language-context"

const certificates = [
  {
    title: "PET CERTIFICATE IN ENGLISH (B1)",
    issuer: "Cambridge University Press & Assessment English",
    date: "2017",
    credentialId: "177ES4455008",
    link: "https://www.cambridgeenglish.org/educators-organisations/accept-verify-exams/higher-education-institutions/verify-results-online/",
    skills: ["B1 English", "Reading", "Writing", "Listening", "Speaking"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Google",
    date: "2025",
    credentialId: "14444776",
    link: "https://www.cloudskillsboost.google/public_profiles/7fc0fab6-dd0b-424a-baa6-3f9e4b189b08/badges/14444776?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    skills: ["Responsible AI", "AI Principles",],
    color: "from-blue-600 to-indigo-500",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google",
    date: "2025",
    credentialId: "14444506",
    link: "https://www.cloudskillsboost.google/public_profiles/7fc0fab6-dd0b-424a-baa6-3f9e4b189b08/badges/14444506?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    skills: ["Generative AI", "Machine Learning", "AI Models"],
    color: "from-blue-600 to-indigo-500",
  },
  {
    title: "Curso de Web scraping: Extracción de datos en la Web",
    issuer: "OpenWebinars",
    date: "2025",
    credentialId: "bXBL",
    link: "https://openwebinars.net/cert/bXBL",
    skills: ["Web Scraping", "Python", "BeautifulSoup", "Requests"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Fundamentos de React",
    issuer: "OpenWebinars",
    date: "2025",
    credentialId: "ma1u7QuJ",
    link: "https://openwebinars.net/certificacion/ma1u7QuJ",
    skills: ["React", "JavaScript", "Frontend Development"],
    color: "from-purple-500 to-pink-500",
  },
]

export function Certificates() {
  const { t } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="certificates" className="py-24 md:py-32">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl whitespace-nowrap">
            <span className="text-primary font-mono text-xl md:text-2xl mr-2">05.</span>
            {t.certificates.title}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-border via-primary/30 to-transparent" />
        </div>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <ScrollReveal key={cert.title} delay={index * 100}>
            <div
              className="group relative h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated border gradient */}
              <div
                className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 blur transition-all duration-500`}
              />

              <div className="relative h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-transparent transition-all overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <Award className="w-full h-full" />
                </div>

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} shadow-lg`}>
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                      aria-label={t.certificates.viewCredential}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>

                  {/* Date and ID */}
                  <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {cert.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                      {t.certificates.verified}
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential ID on hover */}
                  <div
                    className={`mt-4 pt-4 border-t border-border/50 transition-all duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                  >
                    <p className="text-xs font-mono text-muted-foreground">ID: {cert.credentialId}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
