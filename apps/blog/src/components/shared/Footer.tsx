import { BrandWrap } from './BrandWrap'
import { SiteLink } from './SiteLink'
import { SITE_NAV, type NavItem } from '@/lib/navigation'

interface FooterProps {
  currentPath?: string
  wrapperClass?: string
  items?: NavItem[]
  variant?: 'full' | 'minimal'
}

export function Footer({ currentPath, wrapperClass, items, variant = 'full' }: FooterProps) {
  if (variant === 'minimal') {
    return (
      <footer id="site-footer" aria-label="Site footer">
        <div className={wrapperClass || undefined}>
          <div className="footer-meta">&copy; {new Date().getFullYear()} Wesley Melo</div>
        </div>
      </footer>
    )
  }

  const nav = items ?? SITE_NAV

  return (
    <footer id="site-footer" aria-label="Site footer">
      <div className={wrapperClass || undefined}>
        <div className="footer-row">
          <BrandWrap variant="footer" />
          <nav className="footer-nav" aria-label="Footer navigation">
            {nav.map((item) => {
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
          </nav>
        </div>
        <div className="footer-meta">&copy; {new Date().getFullYear()} Wesley Melo</div>
      </div>
    </footer>
  )
}
