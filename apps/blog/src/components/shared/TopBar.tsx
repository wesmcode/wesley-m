import { BrandWrap } from './BrandWrap'
import { SiteLink } from './SiteLink'
import { SITE_NAV, type NavItem } from '@/lib/navigation'

interface TopBarProps {
  currentPath?: string
  currentUrl?: string
  items?: NavItem[]
}

export function TopBar({ currentPath, currentUrl, items }: TopBarProps) {
  const nav = items ?? SITE_NAV

  return (
    <nav className="top-bar" aria-label="Primary">
      <div className="top-bar-inner">
        <BrandWrap variant="top-bar" />
        <div className="top-bar-links">
          {nav.map((item) => {
            // Match either a plain path (path-mode) or the absolute subdomain
            // URL (subdomain-mode). Ignore hash-only items.
            const isCurrent = item.href.startsWith('#')
              ? false
              : currentPath === item.href ||
                (!!currentUrl && (currentUrl === item.href || currentUrl === `${item.href}/`))
            return (
              <SiteLink
                key={item.href}
                href={item.href}
                className="link"
                ariaCurrent={isCurrent ? 'page' : undefined}
                tabIndex={isCurrent ? -1 : undefined}
              >
                {item.label}
              </SiteLink>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
