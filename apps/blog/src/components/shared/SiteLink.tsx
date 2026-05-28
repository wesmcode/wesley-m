import Link from 'next/link'
import type { ReactNode } from 'react'

interface SiteLinkProps {
  href: string
  className?: string
  children: ReactNode
  ariaCurrent?: 'page' | undefined
  tabIndex?: number
}

export function SiteLink({ href, className = 'link', children, ariaCurrent, tabIndex }: SiteLinkProps) {
  const isAbsolute = href.startsWith('http') || href.startsWith('//')
  // wesley-m.com subdomains are same-site: plain <a>, no new tab.
  const isSameSite = isAbsolute && href.includes('wesley-m.com')
  const isExternal = isAbsolute && !isSameSite
  const isHash = href.startsWith('#')

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        aria-current={ariaCurrent}
        tabIndex={tabIndex}
      >
        {children}
      </a>
    )
  }

  if (isHash || isSameSite) {
    return (
      <a href={href} className={className} aria-current={ariaCurrent} tabIndex={tabIndex}>
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className={className}
      aria-current={ariaCurrent}
      tabIndex={tabIndex}
    >
      {children}
    </Link>
  )
}
