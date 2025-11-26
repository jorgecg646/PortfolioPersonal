"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

const experiences = [
  {
    company: "Kyndyrl",
    role: "Frontend Developer",
    period: "Marzo 2025 — Junio 2025",
    description: [
      "Desarrollo de un dashboard web para Ka0s, utilizando flujos CI/CD con GitHub Actions para generar la estructura HTML, CSS y JavaScript.",
      "Integración de la información del sistema mediante archivos JSON, asegurando una carga de datos consistente y mantenible.",
      "Despliegue continuo del dashboard en el servidor web, mejorando la rapidez y fiabilidad en la entrega de nuevas versiones.",
    ],
    technologies: ["Python", "HTML", "JavaScript", "Taylwind CSS", "JSON", "GitHub Actions (CI/CD)"],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 md:py-32">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl whitespace-nowrap">
            <span className="text-primary font-mono text-xl md:text-2xl mr-2">02.</span>
            Experiencia
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-5 py-3 text-left text-sm font-mono whitespace-nowrap transition-all relative",
                  "border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",
                  activeTab === index
                    ? "text-primary border-primary bg-primary/5"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {exp.company}
                {activeTab === index && (
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary md:hidden" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 min-h-[320px]">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">
                {experiences[activeTab].role} <span className="text-primary">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-muted-foreground">{experiences[activeTab].period}</p>
              <ul className="space-y-3">
                {experiences[activeTab].description.map((item, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground group">
                    <span className="text-primary mt-1.5 group-hover:scale-125 transition-transform">▹</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4">
                {experiences[activeTab].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
