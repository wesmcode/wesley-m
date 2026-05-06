import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './styles.css'

export const metadata: Metadata = {
  title: 'Direction Challenge — Wesley Melo',
  description:
    'Notes and essays from Wesley Melo on product management, AI/ML, and shipping software.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Direction Challenge — Wesley Melo',
    description:
      'Notes and essays from Wesley Melo on product management, AI/ML, and shipping software.',
    type: 'website',
  },
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
