"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Github, MessageCircle } from "lucide-react"

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [hash, setHash] = useState<string>("")

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "#home")
    onHashChange()
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return (
    <header className="header-backdrop shadow-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo & Brand */}
        <Link
          href="#home"
          className="flex items-center gap-2 text-balance text-xl md:text-2xl font-bold tracking-tight"
          aria-label="Sanskar Sontakke"
        >
          <img src="/images/profile-sanskar.png" alt="Logo" className="h-8 w-8 rounded-full" />
          <span className="ml-1 text-[oklch(0.78_0.17_230)] drop-shadow-[0_0_12px_oklch(0.78_0.17_230)]">Sanskar</span>
        </Link>
        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm md:text-base font-semibold">
          {links.map((l) => {
            const active = hash === l.href
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`transition-colors hover:text-[oklch(0.78_0.17_230)] ${active ? "text-[oklch(0.78_0.17_230)] underline underline-offset-8 decoration-[oklch(0.78_0.17_230)]/60 card-glow" : "text-foreground/80"}`}
                >
                  {l.label}
                </a>
              </li>
            )
          })}
        </ul>
        {/* Social Icons */}
        <div className="flex gap-3">
          <a href="https://github.com/SanskarSontakke" target="_blank" rel="noopener" aria-label="GitHub" className="rounded-full p-2 hover:bg-[oklch(0.78_0.17_230)]/10">
            <Github size={22} className="text-[oklch(0.88_0.08_230)]" />
          </a>
        </div>
      </nav>
    </header>
  )
}
