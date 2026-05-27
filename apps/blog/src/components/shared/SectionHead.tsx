import type { ReactNode } from 'react'

interface SectionHeadProps {
  label?: string
  title: ReactNode
  subtitle?: string
}

export function SectionHead({ label, title, subtitle }: SectionHeadProps) {
  return (
    <div className="section-head">
      {label ? <p className="section-label">{label}</p> : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-sub">{subtitle}</p> : null}
    </div>
  )
}
