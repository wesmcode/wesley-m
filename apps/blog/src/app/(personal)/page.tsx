import Link from 'next/link'
import { SITE_NAV } from '@/lib/navigation'

const TIMELINE = [
  { company: 'Code and Theory', href: 'https://www.codeandtheory.com', years: '2025', present: true },
  { company: 'Liferay', href: 'https://www.liferay.com', years: '2023', end: '2025' },
  { company: 'ThoughtWorks', href: 'https://www.thoughtworks.com', years: '2020', end: '2023' },
  { company: 'Accenture', href: 'https://www.accenture.com/', years: '2014', end: '2019' },
]

const HERO_NAV: Array<{ href: string; label: string; newTab?: boolean }> = [
  ...SITE_NAV.filter((n) => n.href !== '/contact'),
  { href: '/resume', label: 'Resume', newTab: true },
  ...SITE_NAV.filter((n) => n.href === '/contact'),
]

export default function PersonalPage() {
  return (
    <main id="main-content">
      <section id="hero" className="snap-section outer" aria-label="Introduction">
        <div className="inner">
          <header>
            <div className="row"><h1><span>Wesley</span> <span>Melo</span></h1></div>
            <div className="row"><p>Product Manager</p></div>
          </header>
          <div className="row-empty" />

          <section aria-label="Work history">
            {TIMELINE.map((t) => (
              <div className="timeline-row" key={t.company}>
                <a href={t.href} target="_blank" rel="noopener noreferrer" className="link company">{t.company}</a>
                <span className="years">
                  {t.years}{' '}
                  <span aria-hidden="true">{'→︎'}</span>
                  <span className="sr-only">to</span>{' '}
                  {t.present ? (
                    <><span aria-hidden="true">{'····'}</span><span className="sr-only">present</span></>
                  ) : t.end}
                </span>
              </div>
            ))}
          </section>

          <div className="row-empty" />

          <nav aria-label="Contact and links">
            {HERO_NAV.map((item) => (
              <div className="row" key={item.href}>
                {item.href.startsWith('http') ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="link nav-item">
                    <span className="button-label">{item.label}</span>
                    <span className="mobile-only" aria-hidden="true">[{'→︎'}]</span>
                  </a>
                ) : (
                  <Link href={item.href} className="link nav-item" {...(item.newTab ? { target: '_blank', rel: 'noopener' } : {})}>
                    <span className="button-label">{item.label}</span>
                    {item.newTab ? <span className="sr-only"> (opens in new tab)</span> : null}
                    <span className="mobile-only" aria-hidden="true">[{'→︎'}]</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </section>
    </main>
  )
}
