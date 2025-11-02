import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { ContactForm } from "@/components/contact-form"
import { SectionTitle } from "@/components/section-title"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <div className="gradient-section-bg pb-10">
        <Hero />
      </div>
      <div className="gradient-section-bg py-10">
        <About />
        {/* TODO: SkillsDisplay component to be added here for modularity */}
        {/* <SkillsDisplay /> */}
      </div>
      {/* Roadmap placeholder coming soon */}
      {/* <Roadmap /> */}
      <div className="py-10">
        <Projects />
      </div>
      <div className="gradient-section-bg py-10">
        <ContactForm />
      </div>
      <footer className="mt-8 border-t border-[var(--border)]/60 py-8 text-center text-sm text-foreground/70">
        <span>© {new Date().getFullYear()} NEONDEV — Built with ❤️ and TypeScript</span>
      </footer>
    </main>
  )
}
