"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Menu, X, Mail, Globe } from "lucide-react"
import { Button } from "@/components/animations/ui-simple"
import { useLanguage } from "@/components/language-context"

const socialLinks = [
  { icon: Github, href: "https://github.com/jorgecg646", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jorge-castillo-gordillo-3a2a2b241/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:jorgecg519@gmail.com", label: "Email" },
]

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.certificates, href: "#certificates" },
    { name: t.nav.contact, href: "#contact" },
  ]

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
  }, [navItems])

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <header
      className={`fixed left-0 top-1 z-50 w-full transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-background/70" : "bg-transparent"
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
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  <span className="text-primary font-mono text-xs">0{index + 1}.</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all text-sm font-mono"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              {language.toUpperCase()}
            </button>

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
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base font-medium transition-colors hover:text-primary ${activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  <span className="text-primary font-mono text-sm mr-2">0{index + 1}.</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 px-6 pb-6">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all text-sm font-mono"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              {language.toUpperCase()}
            </button>
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
