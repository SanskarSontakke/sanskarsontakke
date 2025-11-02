import Image from "next/image"
import { SectionTitle } from "./section-title"
import { Globe, Code } from "lucide-react"

type Project = {
  title: string
  description: string
  img: string
  tags: string[]
  demo?: string
  code?: string
}

const projects: Project[] = [
  {
    title: "ReactiQuiz",
    description:
      "An open-source, AI-powered quiz platform for students and learners. Built with React, Vercel, and a Turso edge database. Sharpening Minds, One Quiz at a Time.",
    img: "/reactiquiz.png",
    tags: ["React", "node.js", "Turso"],
    demo: "https://reactiquiz.vercel.app",
    code: "https://github.com/ReactiQuiz/reactiquiz",
  },
  {
    title: "Project Halo ( Alpha )",
    description: "Generate professional exam papers and educational content with AI-powered precision.",
    img: "/project-halo.png",
    tags: ["React", "node.js", "Vercel"],
    demo: "#projects",
    code: "#projects",
  },
  {
    title: "VedicAstroAI ( Beta )( Github )",
    description: "VedicAstroAI is an AI-powered astrology application based on Vedic astrology principles. It provides personalized horoscopes, daily predictions, compatibility checks, and remedies.",
    img: "/vedic-astro-ai.png",
    tags: ["React", "node.js", "Gemini API"],
    demo: "#projects",
    code: "https://github.com/vedicastroai2611/VedicAstroAI",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <SectionTitle id="projects-title">Projects</SectionTitle>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pt-10 md:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="glass-card card-glow transition-all"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
              <Image src={p.img || "/placeholder.svg"} alt={`${p.title} screenshot`} fill className="object-cover" />
            </div>
            <div className="space-y-4 p-5">
              <h3 className="text-lg font-semibold text-[oklch(0.78_0.17_230)]">{p.title}</h3>
              <p className="text-sm text-foreground/80">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[oklch(0.22_0_255)] px-3 py-1 text-xs text-[oklch(0.88_0.08_230)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-2 flex items-center gap-4 text-sm">
                <a href={p.demo} className="inline-flex items-center gap-2 hover:text-[oklch(0.88_0.08_230)]">
                  <Globe size={18} aria-hidden />
                  Live Demo
                </a>
                <a href={p.code} className="inline-flex items-center gap-2 hover:text-[oklch(0.88_0.08_230)]">
                  <Code size={18} aria-hidden />
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
