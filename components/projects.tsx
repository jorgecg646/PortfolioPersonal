"use client"

import { ExternalLink, Github, Folder, Star, GitFork, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/animations/ui-simple"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { useLanguage } from "@/components/language-context"

export function Projects() {
  const { t } = useLanguage()

  const featuredProjects = [
    {
      title: "ProHogar APP",
      description: t.projects.prohogar.description,
      image: "/ProHogar.png",
      technologies: ["Unity", "Android", "Firebase", "IOS", "C#"],
      github: "https://github.com/jorgecg646/ProHogar",
      stars: 128,
      forks: 11,
    },
    {
      title: "AgroGestion",
      description: t.projects.agrogestion.description,
      image: "/AgroGestion.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Netlify", "Supabase"],
      github: "https://github.com/jorgecg646/AgroGestion",
      live: "https://agrogestionext.netlify.app",
      stars: 128,
      forks: 11,
    },
  ]

  return (
    <section id="projects" className="py-24 md:py-32">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl whitespace-nowrap">
            <span className="text-primary font-mono text-xl md:text-2xl mr-2">03.</span>
            {t.projects.title}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-border via-primary/30 to-transparent" />
        </div>
      </ScrollReveal>

      {/* Featured Projects */}
      <div className="space-y-24 mb-24">
        {featuredProjects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 100}>
            <div
              className={`group grid gap-12 lg:gap-16 ${index % 2 === 1 ? "lg:grid-cols-2 lg:direction-rtl" : "lg:grid-cols-2"
                } items-center`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-2xl"
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </a>
              </div>

              {/* Project Info */}
              <div className={`${index % 2 === 1 ? "lg:order-1 lg:text-left" : "lg:order-2 lg:text-right"}`}>
                <p className="text-primary font-mono text-sm mb-2 tracking-wider">{t.projects.featured}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="bg-card/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-border/50 mb-5 hover:border-primary/30 transition-colors">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 mb-5 font-mono text-sm text-muted-foreground ${index % 2 === 1 ? "lg:justify-start" : "lg:justify-end"
                    }`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech} className="hover:text-primary transition-colors">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className={`flex items-center gap-5 ${index % 2 === 1 ? "lg:justify-start" : "lg:justify-end"}`}>
                  <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Star className="h-4 w-4" /> {project.stars}
                    </span>
                    <span className="flex items-center gap-1 hover:text-primary transition-colors">
                      <GitFork className="h-4 w-4" /> {project.forks}
                    </span>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    aria-label="GitHub Repository"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
