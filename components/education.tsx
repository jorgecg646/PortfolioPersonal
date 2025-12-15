"use client"

import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { useLanguage } from "@/components/language-context"

export function Education() {
  const { t } = useLanguage()

  const education = [
    {
      degree: t.education.dam.degree,
      institution: "IES PADRE SUAREZ",
      location: "Granada, España",
      period: "2023 — 2025",
      description: t.education.dam.description,
      achievements: t.education.dam.achievements,
    },
    {
      degree: t.education.ia.degree,
      institution: "IES PUNTA DEL VERDE",
      location: "Sevilla, España",
      period: "2025 — 2026",
      description: t.education.ia.description,
      achievements: [],
    },
  ]

  return (
    <section id="education" className="py-24 md:py-32">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl whitespace-nowrap">
            <span className="text-primary font-mono text-xl md:text-2xl mr-2">04.</span>
            {t.education.title}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-border via-primary/30 to-transparent" />
        </div>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent md:-translate-x-px" />

        <div className="space-y-12">
          {education.map((edu, index) => (
            <ScrollReveal key={edu.degree} delay={index * 150}>
              <div className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "md:direction-rtl"}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30 md:-translate-x-1/2 -translate-x-1/2" />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}
                >
                  <div className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative">
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <div className="p-2 rounded-xl bg-primary/10 text-primary">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-sm text-primary flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5" />
                          {edu.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>

                      <p className="text-primary font-medium mb-1">{edu.institution}</p>

                      <p
                        className={`text-sm text-muted-foreground flex items-center gap-1.5 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        {edu.location}
                      </p>

                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{edu.description}</p>

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        {edu.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="text-xs font-mono px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
