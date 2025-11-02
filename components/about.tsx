import { SectionTitle } from "./section-title"

type Skill = { name: string; percent: number }
const skills: Skill[] = [
  { name: "JavaScript", percent: 95 },
  { name: "React", percent: 90 },
  { name: "Node.js", percent: 85 },
  { name: "UI/UX Design", percent: 80 },
]

export function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row gap-8 py-16 md:py-24 max-w-6xl mx-auto px-6">
      {/* About Card */}
      <div className="glass-card card-glow flex-1 p-8 space-y-6 leading-relaxed text-foreground/85 transition-all">
        <SectionTitle id="about-title">About Me</SectionTitle>
        <p>
          {"I'm"} a passionate full-stack developer with 1 year of experience creating dynamic web applications. My
          journey in tech began when I built my first website at 13, and {"I've"} been hooked ever since.
        </p>
        <p>
          I specialize in modern JavaScript frameworks and have a keen eye for design. My approach combines technical
          expertise with creative problem-solving to deliver exceptional user experiences.
        </p>
        {/* Experience toggle placeholder */}
        <div>
          <span className="inline-block rounded-lg px-3 py-1 bg-[oklch(0.78_0.17_230)]/10 font-bold text-[oklch(0.78_0.17_230)]">1+ Years Experience</span>
        </div>
      </div>

      {/* Skills Card */}
      <div className="glass-card card-glow flex-1 p-8 transition-all">
        <SectionTitle id="skills-title">Skills</SectionTitle>
        <div className="space-y-5 pt-4">
          {skills.map((s) => (
            <div key={s.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>{s.name}</span>
                <span className="text-foreground/70">{s.percent}%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-[oklch(0.22_0_255)]/50">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${s.percent}%`,
                    background: "linear-gradient(90deg, oklch(0.70 0.15 230), oklch(0.82 0.12 230))",
                    boxShadow: "0 0 12px color-mix(in oklab, oklch(0.78 0.17 230) 45%, transparent 55%)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
