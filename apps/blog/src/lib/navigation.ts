import { urls } from './urls'

export interface NavItem {
  href: string
  label: string
}

export const SITE_NAV: NavItem[] = [
  { href: urls.work, label: 'Case studies' },
  { href: urls.services, label: 'Services' },
  { href: urls.playground, label: 'Playground' },
  { href: urls.contact, label: 'Contact' },
  { href: urls.linkedin, label: 'LinkedIn' },
]

// Services subdomain nav. Same-page anchors stay as hashes (the services page
// is served at the subdomain root, so #faq / #book resolve on the current page).
export const SERVICES_NAV: NavItem[] = [
  { href: urls.work, label: 'Case studies' },
  { href: urls.services, label: 'Services' },
  { href: '#faq', label: 'FAQ' },
  { href: '#book', label: 'Book a call' },
]

// Work subdomain nav. "Case studies" points at the work subdomain root.
export const WORK_NAV: NavItem[] = [
  { href: urls.work, label: 'Case studies' },
  { href: urls.services, label: 'Services' },
  { href: urls.contact, label: 'Contact' },
  { href: urls.linkedin, label: 'LinkedIn' },
]
