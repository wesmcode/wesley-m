import { BrandWrap } from './BrandWrap'
import { SiteLink } from './SiteLink'
import { SITE_NAV } from '@/lib/navigation'

interface TopBarProps {
  currentPath?: string
}

export function TopBar({ currentPath }: TopBarProps) {
  return (
    <nav className="top-bar" aria-label="Primary">
      <div className="top-bar-inner">
        <BrandWrap variant="top-bar" />
        <div className="top-bar-links">
          {SITE_NAV.map((item) => {
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
