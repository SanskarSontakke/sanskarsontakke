import type React from "react"
export function SectionTitle({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <h2 id={id} className="section-title">
        {children}
      </h2>
      <div className="section-underline" role="presentation" />
    </div>
  )
}
