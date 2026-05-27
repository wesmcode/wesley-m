import { BrandWrap } from './BrandWrap'
import { SiteLink } from './SiteLink'

interface NavItem {
  href: string
  label: string
  srSuffix?: string
}

const NAV_ITEMS: NavItem[] = [
  { href: '/blog', label: 'Blog' },
  { href: '/work', label: 'Case studies' },
  { href: '/services', label: 'Services' },
  { href: '/playground', label: 'Playground' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://linkedin.com/in/wesmelo', label: 'LinkedIn' },
]

interface TopBarProps {
  currentPath?: string
}

export function TopBar({ currentPath }: TopBarProps) {
  return (
    <nav className="top-bar" aria-label="Primary">
      <div className="top-bar-inner">
        <BrandWrap variant="top-bar" />
        <div className="top-bar-links">
          {NAV_ITEMS.map((item) => {
            const isCurrent = currentPath === item.href
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
