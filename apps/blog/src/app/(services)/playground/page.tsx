import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Playground: Wesley Melo',
  description: 'Small apps, experiments, and tools built for fun. A personal sandbox for ideas that don\'t need a business case.',
  alternates: { canonical: '/playground' },
}

export default function PlaygroundPage() {
  return (
    <>
      <section className="hero" aria-label="Playground">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="section-label">Sandbox</p>
            <h1 className="hero-title">Play<br />ground</h1>
            <p className="hero-lede">Small apps built for fun. No client. No deadline. No business case. Just ideas that wanted to exist.</p>
          </div>
          <div className="hero-decoration" aria-hidden="true">
            <div className="diamond-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <span key={n} className={`diamond diamond-${n}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="apps" aria-label="Apps and experiments">
        <div className="apps-head">
          <p className="section-label">Experiments</p>
          <p className="apps-count"><span className="apps-count-num">0</span> apps live</p>
        </div>
        <div className="apps-empty">
          <div className="empty-diamond" aria-hidden="true" />
          <p className="empty-text">First experiments incoming. This grid fills as things ship.</p>
        </div>
      </section>
    </>
  )
}
