import { ExternalLink, Github, Folder, Star, GitFork, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/animations/ui-simple"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

const featuredProjects = [
  {
    title: "ProHogar APP",
    description: "Aplicación movil para la contratación de servicios del hogar, que permite a los usuarios buscar, comparar y solicitar profesionales de forma sencilla y centralizada.",
    image: "/ProHogar.png",
    technologies: ["Unity", "Android", "Firebase", "IOS", "C#"],
    github: "https://github.com/jorgecg646/ProHogar",
    // live: "https://example.com",
    stars: 128,
    forks: 11,
  }
]

/**const otherProjects = [
  {
    title: "CLI Tool",
    description: "Herramienta de línea de comandos para automatizar tareas de desarrollo.",
    technologies: ["Node.js", "Commander", "Chalk"],
    github: "https://github.com",
  },
  {
    title: "VS Code Extension",
    description: "Extensión para VS Code que mejora la productividad con snippets personalizados.",
    technologies: ["TypeScript", "VS Code API"],
    github: "https://github.com",
  },
  {
    title: "Portfolio v1",
    description: "Primera versión de mi portfolio personal construido con Gatsby.",
    technologies: ["Gatsby", "GraphQL", "Styled Components"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Weather App",
    description: "Aplicación del clima con geolocalización y pronóstico de 7 días.",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Markdown Editor",
    description: "Editor de markdown en tiempo real con preview y exportación a PDF.",
    technologies: ["React", "Remark", "jsPDF"],
    github: "https://github.com",
  },
  {
    title: "URL Shortener",
    description: "Acortador de URLs con analytics y códigos QR personalizados.",
    technologies: ["Next.js", "MongoDB", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
  },
]**/

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl whitespace-nowrap">
            <span className="text-primary font-mono text-xl md:text-2xl mr-2">03.</span>
            Proyectos
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-border via-primary/30 to-transparent" />
        </div>
      </ScrollReveal>

      {/* Featured Projects */}
      <div className="space-y-24 mb-24">
        {featuredProjects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 100}>
            <div
              className={`group grid gap-12 lg:gap-16 ${
                index % 2 === 1 ? "lg:grid-cols-2 lg:direction-rtl" : "lg:grid-cols-2"
              } items-center`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <a
                  href={"project.live"}
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
                <p className="text-primary font-mono text-sm mb-2 tracking-wider">Proyecto Destacado</p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  <a
                    href={""}
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
                  className={`flex flex-wrap gap-3 mb-5 font-mono text-sm text-muted-foreground ${
                    index % 2 === 1 ? "lg:justify-start" : "lg:justify-end"
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
                  {/*<a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>*/}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      
      
      {/* Other Projects 
      <ScrollReveal>
        <h3 className="text-xl font-bold text-foreground text-center mb-10">Otros proyectos destacados</h3>
      </ScrollReveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 75}>
            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:-translate-y-2 group overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Folder className="h-7 w-7" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                      aria-label="GitHub Repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="px-2 py-1 rounded-md bg-secondary/30">
                      {tech}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>*/}
    </section>
      )
}
