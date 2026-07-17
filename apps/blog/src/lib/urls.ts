// Central URL builder. In production each section lives on its own subdomain
// (services.wesley-m.com, work.wesley-m.com, ...). The subdomain rewrite in
// next.config.mjs serves the section content at the subdomain root, so links
// must point at the subdomain, NOT at the /section path (which would get
// double-prefixed and 404).
//
// Locally (and in preview), NEXT_PUBLIC_USE_SUBDOMAINS is unset, so links fall
// back to plain paths and everything works on a single localhost origin.

const useSubdomains = process.env.NEXT_PUBLIC_USE_SUBDOMAINS === 'true'

const sub = (name: string, path: string) =>
  useSubdomains ? `https://${name}.wesley-m.com` : path

export const urls = {
  home: useSubdomains ? 'https://www.wesley-m.com' : '/',
  work: sub('work', '/work'),
  workCase: (slug: string) =>
    useSubdomains ? `https://work.wesley-m.com/${slug}` : `/work/${slug}`,
  services: sub('services', '/services'),
  contact: sub('contact', '/contact'),
  resume: sub('resume', '/resume'),
  blog: sub('blog', '/blog'),
  blogPost: (slug: string) =>
    useSubdomains ? `https://blog.wesley-m.com/${slug}` : `/blog/${slug}`,
  linkedin: 'https://linkedin.com/in/wesmelo',
}
