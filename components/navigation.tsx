"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Menu, X, Mail } from "lucide-react"
import { Button } from "@/components/animations/ui-simple"

const navItems = [
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
  { name: "Educación", href: "#education" },
  { name: "Certificados", href: "#certificates" },
  { name: "Contacto", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/jorgecg646", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jorge-castillo-gordillo-3a2a2b241/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:jorgecg519@gmail.com", label: "Email" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 top-1 z-50 w-full transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#" className="text-xl font-bold text-foreground hover:text-primary transition-colors font-mono">
          {"<Dev />"}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                    activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <span className="text-primary font-mono text-xs">0{index + 1}.</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base font-medium transition-colors hover:text-primary ${
                    activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <span className="text-primary font-mono text-sm mr-2">0{index + 1}.</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 px-6 pb-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
