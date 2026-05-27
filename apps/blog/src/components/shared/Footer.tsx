import { BrandWrap } from './BrandWrap'
import { SiteLink } from './SiteLink'

interface FooterNavItem {
  href: string
  label: string
  srSuffix?: string
}

const FOOTER_NAV: FooterNavItem[] = [
  { href: '/blog', label: 'Blog' },
  { href: '/work', label: 'Case studies' },
  { href: '/services', label: 'Services' },
  { href: '/playground', label: 'Playground' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://linkedin.com/in/wesmelo', label: 'LinkedIn' },
]

interface FooterProps {
  currentPath?: string
  wrapperClass?: string
}

export function Footer({ currentPath, wrapperClass }: FooterProps) {
  return (
    <footer id="site-footer" aria-label="Site footer">
      <div className={wrapperClass}>
        <div className="footer-row">
          <BrandWrap variant="footer" />
          <nav className="footer-nav" aria-label="Footer navigation">
            {FOOTER_NAV.map((item) => {
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
