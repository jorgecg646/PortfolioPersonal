import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Certificates } from "@/components/certificates"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ProgressBar } from "@/components/animations/progress-bar"
import { CursorGlow } from "@/components/animations/cursor-glow"
import { FloatingShapes } from "@/components/animations/floating-shapes"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <FloatingShapes />
      <CursorGlow />
      <ProgressBar />
      <Navigation />
      <main className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
        <About />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
