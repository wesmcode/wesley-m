import { describe, it, expect } from 'vitest'
import { urls } from '@/lib/urls'

// In the test env NEXT_PUBLIC_USE_SUBDOMAINS is unset, so the helper returns
// plain paths. This guards the local/preview fallback behaviour.
describe('urls (path mode)', () => {
  it('returns root path for home', () => {
    expect(urls.home).toBe('/')
  })

  it('returns section paths', () => {
    expect(urls.work).toBe('/work')
    expect(urls.services).toBe('/services')
    expect(urls.contact).toBe('/contact')
    expect(urls.resume).toBe('/resume')
    expect(urls.blog).toBe('/blog')
    expect(urls.playground).toBe('/playground')
    expect(urls.about).toBe('/about')
  })

  it('builds case-study paths from a slug', () => {
    expect(urls.workCase('enterprise-ai-platform-launch')).toBe('/work/enterprise-ai-platform-launch')
  })

  it('keeps LinkedIn as an absolute external URL', () => {
    expect(urls.linkedin).toBe('https://linkedin.com/in/wesmelo')
  })
})
