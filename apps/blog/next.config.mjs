import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    // Exclude Next.js internals and static assets from subdomain rewrites so
    // /_next/* and /api/* resolve at the domain root instead of being prefixed
    // with the subdomain's path (which would 404 every CSS/JS chunk).
    const passthrough = '/:path((?!_next/|api/|favicon|images/|css/|js/|resume/).*)'
    return {
      beforeFiles: [
        { source: passthrough, has: [{ type: 'host', value: 'services.wesley-m.com' }], destination: '/services/:path' },
        { source: passthrough, has: [{ type: 'host', value: 'contact.wesley-m.com' }], destination: '/contact/:path' },
        { source: passthrough, has: [{ type: 'host', value: 'resume.wesley-m.com' }], destination: '/resume/:path' },
        { source: passthrough, has: [{ type: 'host', value: 'work.wesley-m.com' }], destination: '/work/:path' },
        { source: passthrough, has: [{ type: 'host', value: 'blog.wesley-m.com' }], destination: '/blog/:path' },
      ],
    }
  },
  async redirects() {
    // Canonicalise: on the apex/www domain, section paths bounce to their
    // subdomain so the subdomain is the single source of truth. The `has`
    // host guard prevents redirect loops on the subdomains themselves.
    const apexHosts = [
      { type: 'host', value: 'wesley-m.com' },
      { type: 'host', value: 'www.wesley-m.com' },
    ]
    const sectionRedirects = process.env.NEXT_PUBLIC_USE_SUBDOMAINS === 'true'
      ? [
          { source: '/services', has: [apexHosts[0]], destination: 'https://services.wesley-m.com', permanent: false },
          { source: '/services', has: [apexHosts[1]], destination: 'https://services.wesley-m.com', permanent: false },
          { source: '/contact', has: [apexHosts[0]], destination: 'https://contact.wesley-m.com', permanent: false },
          { source: '/contact', has: [apexHosts[1]], destination: 'https://contact.wesley-m.com', permanent: false },
          { source: '/resume', has: [apexHosts[0]], destination: 'https://resume.wesley-m.com', permanent: false },
          { source: '/resume', has: [apexHosts[1]], destination: 'https://resume.wesley-m.com', permanent: false },
          { source: '/work', has: [apexHosts[0]], destination: 'https://work.wesley-m.com', permanent: false },
          { source: '/work', has: [apexHosts[1]], destination: 'https://work.wesley-m.com', permanent: false },
          { source: '/work/:slug', has: [apexHosts[0]], destination: 'https://work.wesley-m.com/:slug', permanent: false },
          { source: '/work/:slug', has: [apexHosts[1]], destination: 'https://work.wesley-m.com/:slug', permanent: false },
          { source: '/blog', has: [apexHosts[0]], destination: 'https://blog.wesley-m.com', permanent: false },
          { source: '/blog', has: [apexHosts[1]], destination: 'https://blog.wesley-m.com', permanent: false },
        ]
      : []
    return [
      ...sectionRedirects,
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/blog.html', destination: '/blog', permanent: true },
      { source: '/blog-b.html', destination: '/blog', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/resume.html', destination: '/resume', permanent: true },
      { source: '/playground.html', destination: '/playground', permanent: true },
      { source: '/post.html', destination: '/blog', permanent: true },
      { source: '/about.html', destination: '/', permanent: true },
      { source: '/work.html', destination: '/work', permanent: true },
      { source: '/work/:slug.html', destination: '/work/:slug', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noai, noimageai' },
        ],
      },
    ]
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
