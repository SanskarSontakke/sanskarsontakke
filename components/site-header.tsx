"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

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
    <header className="header-backdrop">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="text-balance text-xl md:text-2xl font-semibold tracking-wide"
          aria-label="Sanskar Sontakke"
        >
          <span className="text-[oklch(0.78_0.17_230)] drop-shadow-[0_0_12px_oklch(0.78_0.17_230)]">Sanskar Sontakke</span>
        </Link>

        <ul className="flex gap-6 text-sm md:text-base">
          {links.map((l) => {
            const active = hash === l.href
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`transition-colors hover:text-[oklch(0.88_0.08_230)] ${active ? "text-[oklch(0.88_0.08_230)] underline underline-offset-8 decoration-[oklch(0.78_0.17_230)]/60" : "text-foreground/90"}`}
                >
                  {l.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
