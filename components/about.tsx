"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { Badge, Button } from "@/components/animations/ui-simple"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Code2, Palette, Zap, Coffee, ArrowDown, Github, Mail, Linkedin, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import type React from "react"

// AnimatedCode Component
const codeSnippets = [
  `const developer = {
  name: "Jorge",
  skills: ["React", "Next.js", "TypeScript"],
  passion: "Building amazing UIs"
};`,
  `async function createAwesome() {
  const idea = await brainstorm();
  const design = await prototype(idea);
  return await build(design);
}`,
  `export default function Portfolio() {
  return (
    <motion.div animate={{ opacity: 1 }}>
      <Hero />
      <Projects />
    </motion.div>
  );
}`,
]

function AnimatedCode() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet]

    if (isTyping) {
      if (displayedCode.length < snippet.length) {
        const timeout = setTimeout(() => {
          setDisplayedCode(snippet.slice(0, displayedCode.length + 1))
        }, 30)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayedCode.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedCode(displayedCode.slice(0, -1))
        }, 15)
        return () => clearTimeout(timeout)
      } else {
        setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
        setIsTyping(true)
      }
    }
  }, [displayedCode, isTyping, currentSnippet])

  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-60 animate-pulse" />
      <div className="relative bg-card/90 backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-muted-foreground font-mono ml-2">portfolio.tsx</span>
        </div>
        <div className="p-4 pl-10 font-mono text-sm leading-relaxed min-h-[180px]">
          <pre className="text-primary/90">
            {displayedCode}
            <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse" />
          </pre>
        </div>
        <div className="absolute left-0 top-12 bottom-0 w-10 bg-muted/30 border-r border-border/50 flex flex-col items-end pr-2 pt-4 text-xs text-muted-foreground/50 font-mono">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <span key={n} className="leading-relaxed">
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// GlitchText Component
interface GlitchTextProps {
  text: string
  className?: string
}

function GlitchText({ text, className }: GlitchTextProps) {
  return (
    <span className={cn("relative inline-block group", className)}>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute inset-0 text-primary/50 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-1"
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className="absolute inset-0 text-accent/50 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-2"
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  )
}

// MagneticButton Component
interface MagneticButtonProps {
  children: ReactNode
  className?: string
}

function MagneticButton({ children, className = "" }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 })

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      {children}
    </div>
  )
}

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Java",
  "Spring Boot",
  "Python",
  "SQL",
  "C#",
  "MongoDB",
  "Firebase",
  "Swing",
  "HTML5",
  "CSS3",
  "Unity",
  "Scrum",
  "AppScript",
  "JSON",
  "Tailwind CSS",
  "Git / GitHub",
  "GitHub Actions (CI/CD)",
]


const highlights = [
  { icon: Code2, label: "Clean Code", description: "Código limpio y mantenible" },
  { icon: Palette, label: "UI/UX", description: "Diseño centrado en el usuario" },
  { icon: Zap, label: "Performance", description: "Optimización y velocidad" },
  { icon: Coffee, label: "Passion", description: "Apasionado por aprender" },
]

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col justify-center pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary font-mono text-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Disponible para proyectos
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-primary font-mono text-sm md:text-base tracking-wider">Hola, mi nombre es</p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                <GlitchText text="Jorge Castillo Gordillo" />
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-balance bg-gradient-to-r from-muted-foreground via-foreground to-muted-foreground bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="max-w-xl text-muted-foreground leading-relaxed text-base md:text-lg">
                Desarrollador Full Stack especializado en crear soluciones web centradas en el usuario,
                con formación en Inteligencia Artificial y Big Data, trabajando con{" "}
                <span className="text-primary font-medium hover:underline cursor-pointer">React</span>,{" "}
                <span className="text-primary font-medium hover:underline cursor-pointer">Next.js</span>,{" "}
                <span className="text-primary font-medium hover:underline cursor-pointer">Javascript</span>,{" "}
                <span className="text-primary font-medium hover:underline cursor-pointer">TypeScript</span> y{" "}
                <span className="text-primary font-medium hover:underline cursor-pointer">Java / Spring Boot</span>.
              </p>
              <p className="max-w-xl text-muted-foreground leading-relaxed text-sm md:text-base mt-2">
                Experiencia con{" "}
                <span className="text-primary font-medium">SQL</span>,{" "}
                <span className="text-primary font-medium">MongoDB</span>,{" "}
                <span className="text-primary font-medium">Firebase</span>,{" "}
                <span className="text-primary font-medium">Python</span>,{" "}
                <span className="text-primary font-medium">Git/GitHub</span> y{" "}
                <span className="text-primary font-medium">GitHub Actions (CI/CD)</span>.
              </p>

            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="flex items-center gap-4 text-muted-foreground font-mono text-sm">
                <a
                  href="mailto:tu@email.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  jorgecg519@gmail.com
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <MagneticButton>
                  <Button asChild size="lg" className="font-mono gap-2 group relative overflow-hidden">
                    <a href="#experience">
                      <span className="relative z-10 flex items-center gap-2">
                        Ver proyectos
                        <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                      </span>
                    </a>
                  </Button>
                </MagneticButton>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={700}>
              <div className="flex items-center gap-5 pt-4">
                {[
                  { href: "https://github.com/jorgecg646", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/jorge-castillo-gordillo-3a2a2b241/o", icon: Linkedin, label: "LinkedIn" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Animated code */}
          <ScrollReveal delay={400} className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              <AnimatedCode />
            </div>
          </ScrollReveal>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors hidden md:block group"
          aria-label="Scroll to about section"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </div>
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl whitespace-nowrap">
              <span className="text-primary font-mono text-xl md:text-2xl mr-2">01.</span>
              Sobre mí
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-border via-primary/30 to-transparent" />
          </div>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            <ScrollReveal delay={100}>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                ¡Hola! Soy Jorge, desarrollador Full Stack apasionado por crear productos que viven en internet.
                Mi interés por el desarrollo web comenzó en 2019, cuando empecé a experimentar con HTML, CSS, JavaScript y Python,
                y poco a poco fui incorporando tecnologías de backend como Java, Spring Boot y bases de datos SQL y NoSQL.
              </p>
            </ScrollReveal>
            

            {/* Highlights grid */}
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((item, index) => (
                  <div
                    key={item.label}
                    className="group p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <item.icon className="h-6 w-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <p className="font-medium text-foreground text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-muted-foreground leading-relaxed pt-2">Tecnologías con las que trabajo:</p>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="font-mono text-xs bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 cursor-default px-3 py-1.5"
                  >
                    {skill}
                  </Badge>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-50 blur-lg group-hover:opacity-75 transition-opacity animate-gradient-x bg-[length:200%_auto]" />
              <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30 group-hover:border-primary/50 transition-colors">
                <Image
                  src="./personal.jpg"
                  alt="Jorge Castillo"
                  width={350}
                  height={400}
                  className="h-[400px] w-[350px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
