import Link from 'next/link'

const TIMELINE = [
  { company: 'Code and Theory', href: 'https://www.codeandtheory.com', years: '2025', present: true },
  { company: 'Liferay', href: 'https://www.liferay.com', years: '2023', end: '2025' },
  { company: 'ThoughtWorks', href: 'https://www.thoughtworks.com', years: '2020', end: '2023' },
  { company: 'Accenture', href: 'https://www.accenture.com/', years: '2014', end: '2019' },
]

const NAV_GROUPS: Array<Array<{ href: string; label: string; newTab?: boolean; external?: boolean }>> = [
  [
    { href: '/blog', label: 'Blog' },
    { href: '/work', label: 'Case studies' },
    { href: '/services', label: 'Services' },
    { href: '/playground', label: 'Playground' },
  ],
  [
    { href: 'https://linkedin.com/in/wesmelo', label: 'LinkedIn', external: true },
  ],
  [
    { href: '/resume', label: 'Resume', newTab: true },
    { href: '/contact', label: 'Contact' },
  ],
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
            {NAV_GROUPS.map((group, gi) => (
              <div key={gi}>
                {gi > 0 && <div className="row-empty" />}
                {group.map((item) => (
                  <div className="row" key={item.href}>
                    {item.external ? (
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
              </div>
            ))}
          </nav>
        </div>
      </section>
    </main>
  )
}
