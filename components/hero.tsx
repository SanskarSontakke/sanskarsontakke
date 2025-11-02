import Image from "next/image"
import { Github, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-28">
        {/* Left copy */}
        <div className="space-y-6">
          <p className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            {"Hi, I'm"}{" "}
            <span className="text-[oklch(0.78_0.17_230)] drop-shadow-[0_0_16px_oklch(0.78_0.17_230)]">Sanskar Sontakke</span>
            <br />
            <span className="text-4xl md:text-6xl">Web Developer</span>
          </p>
          {/* New: gradient subtitle */}
          <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-indigo-400 text-lg md:text-xl">
            Full-Stack | Ed-Tech | AI Builder 
          </p>
          <div className="flex gap-3 mb-4">
            <a href="https://github.com/SanskarSontakke" target="_blank" rel="noopener" aria-label="GitHub" className="rounded-full p-2 hover:bg-[oklch(0.78_0.17_230)]/10"><Github size={24} className="text-[oklch(0.88_0.08_230)]" /></a>
          </div>
          <div>
            <a
              href="#contact"
              className="btn-neon inline-flex items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right portrait with neon ring */}
        <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
          <div className="absolute inset-0 rounded-full neon-ring" aria-hidden />
          <Image
            src="/images/profile-sanskar.png"
            alt="Sanskar Sontakke"
            fill
            sizes="(min-width: 768px) 20rem, 16rem"
            className="rounded-full object-cover"
            priority
          />
          {/* Small floating glows */}
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-full blur-2xl"
            style={{ background: "radial-gradient(closest-side, oklch(0.78 0.17 230)/.35, transparent 65%)" }}
          />
        </div>
      </div>
    </section>
  )
}
