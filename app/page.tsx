import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { ContactForm } from "@/components/contact-form"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <About />
      <Projects />
      <ContactForm />
      <footer className="mt-8 border-t border-[var(--border)]/60 py-8 text-center text-sm text-foreground/70">
        <span>© {new Date().getFullYear()} NEONDEV — Built with ❤️ and TypeScript</span>
      </footer>
    </main>
  )
}
