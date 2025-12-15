"use client"

import { Button } from "@/components/animations/ui-simple"
import { Mail, Github, Linkedin, Send } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { useLanguage } from "@/components/language-context"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 md:py-32">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl whitespace-nowrap">
            <span className="text-primary font-mono text-xl md:text-2xl mr-2">06.</span>
            {t.contact.title}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-border via-primary/30 to-transparent" />
        </div>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                {t.contact.heading}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t.contact.description}
              </p>

              {/* Social links with icons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="https://github.com/jorgecg646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <Github className="h-5 w-5" />
                  <span className="font-medium text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jorge-castillo-gordillo-3a2a2b241/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/50 text-secondary-foreground hover:bg-[#0077B5] hover:text-white transition-all group"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="font-medium text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right side - Email card */}
          <ScrollReveal delay={200}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />

              <div className="relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-primary/10">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t.contact.writeTo}</p>
                    <p className="text-lg font-bold text-foreground">Email</p>
                  </div>
                </div>

                <p className="text-xl font-mono text-foreground mb-6 break-all">jorgecg519@gmail.com</p>

                <div className="flex gap-3">
                  <Button asChild className="flex-1 gap-2 group/btn">
                    <a href="mailto:jorgecg519@gmail.com">
                      <Send className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      {t.contact.sendEmail}
                    </a>
                  </Button>
                </div>

                {/* Availability indicator */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                    </span>
                    {t.contact.availableFreelance}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
