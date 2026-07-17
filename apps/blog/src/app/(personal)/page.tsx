import { urls } from '@/lib/urls'

const TIMELINE = [
  { company: 'Code and Theory', href: 'https://www.codeandtheory.com', years: '2025', present: true },
  { company: 'Liferay', href: 'https://www.liferay.com', years: '2023', end: '2025' },
  { company: 'ThoughtWorks', href: 'https://www.thoughtworks.com', years: '2020', end: '2023' },
  { company: 'Accenture', href: 'https://www.accenture.com/', years: '2014', end: '2019' },
]

// Grouped by intent; a blank row divides each group.
const LINK_GROUPS: Array<Array<{ href: string; label: string; newTab?: boolean; external?: boolean }>> = [
  // What I do
  [
    { href: urls.services, label: 'Services' },
    { href: urls.work, label: 'Case studies' },
    { href: urls.blog, label: 'Blog' },
  ],
  // Me + reach
  [
    { href: urls.resume, label: 'Resume', newTab: true },
    { href: urls.linkedin, label: 'LinkedIn', external: true },
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
            {LINK_GROUPS.map((group, gi) => (
              <div key={gi}>
                {gi > 0 && <div className="row-empty" />}
                {group.map((item) => {
                  const opensNewTab = item.newTab || item.external
                  return (
                    <div className="row" key={item.label}>
                      <a
                        href={item.href}
                        className="link nav-item"
                        {...(opensNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {item.label}
                        {item.newTab ? <span className="sr-only"> (opens in new tab)</span> : null}
                      </a>
                    </div>
                  )
                })}
              </div>
            ))}
          </nav>
        </div>
      </section>
    </main>
  )
}
