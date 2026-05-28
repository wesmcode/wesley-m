import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/:path*', has: [{ type: 'host', value: 'services.wesley-m.com' }], destination: '/services/:path*' },
        { source: '/:path*', has: [{ type: 'host', value: 'contact.wesley-m.com' }], destination: '/contact/:path*' },
        { source: '/:path*', has: [{ type: 'host', value: 'resume.wesley-m.com' }], destination: '/resume/:path*' },
        { source: '/:path*', has: [{ type: 'host', value: 'work.wesley-m.com' }], destination: '/work/:path*' },
        { source: '/:path*', has: [{ type: 'host', value: 'blog.wesley-m.com' }], destination: '/blog/:path*' },
      ],
    }
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/blog.html', destination: '/blog', permanent: true },
      { source: '/blog-b.html', destination: '/blog', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/resume.html', destination: '/resume', permanent: true },
      { source: '/playground.html', destination: '/playground', permanent: true },
      { source: '/post.html', destination: '/blog', permanent: true },
      { source: '/about.html', destination: '/', permanent: true },
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
