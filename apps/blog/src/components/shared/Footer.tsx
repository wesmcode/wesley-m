import { BrandWrap } from './BrandWrap'
import { SiteLink } from './SiteLink'
import { SITE_NAV } from '@/lib/navigation'

interface FooterProps {
  currentPath?: string
  wrapperClass?: string
}

export function Footer({ currentPath, wrapperClass }: FooterProps) {
  return (
    <footer id="site-footer" aria-label="Site footer">
      <div className={wrapperClass || undefined}>
        <div className="footer-row">
          <BrandWrap variant="footer" />
          <nav className="footer-nav" aria-label="Footer navigation">
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
          </nav>
        </div>
        <div className="footer-meta">&copy; {new Date().getFullYear()} Wesley Melo</div>
      </div>
    </footer>
  )
}
