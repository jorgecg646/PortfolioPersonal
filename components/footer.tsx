"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { useLanguage } from "@/components/language-context"

const socialLinks = [
  { icon: Github, href: "https://github.com/jorgecg646", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jorge-castillo-gordillo-3a2a2b241/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:jorgecg519@gmail.com", label: "Email" },
]

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.certificates, href: "#certificates" },
    { name: t.nav.contact, href: "#contact" },
  ]

  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm">
      {/* Back to top button */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:scale-110 transition-transform"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-5 w-5" />
        </a>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold text-foreground font-mono">
              {"<Dev />"}
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">{t.footer.contact}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>jorgecg519@gmail.com</p>
              <p>Sevilla, España</p>
              <div className="flex items-center gap-2 pt-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-green-500 text-xs">{t.footer.available}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono flex items-center gap-1">
            {t.footer.designedBy}
          </p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
