import Image from "next/image"

export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-28">
        {/* Left copy */}
        <div className="space-y-6">
          <p className="text-4xl md:text-6xl font-bold leading-tight">
            {"Hi, I'm"}{" "}
            <span className="text-[oklch(0.78_0.17_230)] drop-shadow-[0_0_16px_oklch(0.78_0.17_230)]">Sanskar Sontakke</span>
            <br />
            <span className="text-4xl md:text-6xl">Web Developer</span>
          </p>
          <p className="max-w-xl text-balance text-base md:text-lg text-foreground/80">
            Full-Stack Developer | Ed-Tech Enthusiast | Creator of ReactiQuiz 🧠✨
          </p>
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
