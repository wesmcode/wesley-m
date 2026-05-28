import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { SkipLink, TopBar, Footer } from '@/components/shared'
import { SERVICES_NAV } from '@/lib/navigation'
import '@/styles/globals.css'
import './services.css'
import './contact.css'

export const metadata: Metadata = {
  title: 'Services: Wesley Melo',
  description:
    'Product, AI, and platform bottlenecks cost quarters. Wesley Melo finds the expensive problem, shapes the plan, and stays embedded until the work ships. Fixed-price audits, 90-day resets, platform assessments.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  icons: { icon: '/favicon.svg' },
  robots: { index: true, follow: true },
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services: Wesley Melo',
    description:
      'Product, AI, and platform bottlenecks cost quarters. Find the expensive problem, shape the plan, stay embedded until the work ships.',
    type: 'website',
    url: 'https://wesley-m.com/services',
    images: [{ url: 'https://wesley-m.com/images/wesley-services.jpg', alt: 'Portrait of Wesley Melo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services: Wesley Melo',
    description:
      'Product, AI, and platform bottlenecks cost quarters. Find the expensive problem, shape the plan, stay embedded until the work ships.',
    images: ['https://wesley-m.com/images/wesley-services.jpg'],
  },
  other: {
    robots: 'noai, noimageai, noarchive, nosnippet',
  },
}

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Wesley Melo, Fractional PM & Growth/AI Consultant',
              url: 'https://wesley-m.com/services',
              image: 'https://wesley-m.com/images/wesley-services.jpg',
              provider: {
                '@type': 'Person',
                name: 'Wesley Melo',
                url: 'https://wesley-m.com',
                jobTitle: 'Fractional Product Manager',
                sameAs: ['https://linkedin.com/in/wesmelo'],
              },
              areaServed: 'Worldwide (remote)',
              serviceType: [
                'Product audit',
                'Discovery sprint',
                'OKR & roadmap reset',
                'Platform modernization assessment',
                'AI readiness & pilot roadmap',
                'Multi-CMS / headless migration',
                'Hourly advisory',
              ],
            }),
          }}
        />
      </head>
      <body>
        <SkipLink />
        <TopBar currentPath="/services" items={SERVICES_NAV} />
        <div className="page">
          <main id="main-content">{children}</main>
        </div>
        <Footer variant="minimal" wrapperClass="page" />
      </body>
    </html>
  )
}
