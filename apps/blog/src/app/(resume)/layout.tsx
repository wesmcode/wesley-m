import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Resume: Wesley Melo',
  description: 'Resume of Wesley Melo, Senior Product Manager with 6+ years of experience in agile development, SaaS platforms, AI/ML products, and cross-functional team leadership.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  icons: { icon: '/favicon.svg' },
  robots: 'noai, noimageai, noarchive, nosnippet',
  alternates: { canonical: '/resume' },
}

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
