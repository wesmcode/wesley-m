import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { SkipLink } from '@/components/shared'
import { urls } from '@/lib/urls'
import '@/styles/globals.css'
import './home.css'

export const metadata: Metadata = {
  title: 'Wesley Melo: Fractional Product Manager',
  description:
    'Wesley Melo. Fractional product manager. I find expensive product, AI, and platform bottlenecks before teams waste a quarter building the wrong thing.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  robots: { index: true, follow: true },
  alternates: { canonical: urls.home },
  openGraph: {
    title: 'Wesley Melo: Fractional Product Manager',
    description:
      'I find expensive product, AI, and platform bottlenecks before teams waste a quarter building the wrong thing.',
    type: 'website',
    url: urls.home,
    images: [{ url: 'https://www.wesley-m.com/images/wesley-services.jpg', alt: 'Portrait of Wesley Melo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wesley Melo: Fractional Product Manager',
    description:
      'I find expensive product, AI, and platform bottlenecks before teams waste a quarter building the wrong thing.',
    images: ['https://www.wesley-m.com/images/wesley-services.jpg'],
  },
  icons: { icon: '/favicon.svg' },
  other: {
    robots: 'noai, noimageai',
  },
}

export default function PersonalLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfilePage',
              mainEntity: {
                '@type': 'Person',
                name: 'Wesley Melo',
                jobTitle: 'Fractional Product Manager',
                url: urls.home,
                knowsAbout: [
                  'Fractional product management',
                  'Product strategy',
                  'AI product development',
                  'Platform modernization',
                ],
                sameAs: [urls.linkedin],
              },
            }),
          }}
        />
      </head>
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  )
}
