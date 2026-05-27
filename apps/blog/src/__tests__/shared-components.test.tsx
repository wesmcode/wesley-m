import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { SkipLink } from '@/components/shared/SkipLink'
import { BrandWrap } from '@/components/shared/BrandWrap'
import { SectionHead } from '@/components/shared/SectionHead'
import { SiteLink } from '@/components/shared/SiteLink'
import { TopBar } from '@/components/shared/TopBar'
import { Footer } from '@/components/shared/Footer'

// next/link renders as plain <a> in test env
vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [k: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}))

describe('SkipLink', () => {
  it('renders with correct target and class', () => {
    render(<SkipLink />)
    const link = screen.getByText('Skip to content')
    expect(link).toHaveAttribute('href', '#main-content')
    expect(link).toHaveClass('skip-link')
  })
})

describe('BrandWrap', () => {
  it('renders top-bar variant with brand crossfade markup', () => {
    const { container } = render(<BrandWrap variant="top-bar" />)
    const link = container.querySelector('.top-bar-brand')
    expect(link).toBeTruthy()
    expect(link).toHaveAttribute('href', '/')
    expect(container.querySelector('.brand-full')).toHaveTextContent('Wesley Melo')
    expect(container.querySelector('.brand-short')).toHaveAttribute('aria-hidden', 'true')
    expect(container.querySelector('.brand-diamond')).toBeTruthy()
  })

  it('renders footer variant', () => {
    const { container } = render(<BrandWrap variant="footer" />)
    const link = container.querySelector('.footer-brand')
    expect(link).toBeTruthy()
    expect(link).toHaveAttribute('href', '/')
  })

  it('wraps in .brand-wrap container', () => {
    const { container } = render(<BrandWrap variant="top-bar" />)
    expect(container.querySelector('.brand-wrap')).toBeTruthy()
  })
})

describe('SiteLink', () => {
  it('renders internal link without target/rel', () => {
    render(<SiteLink href="/blog">Blog</SiteLink>)
    const link = screen.getByText('Blog')
    expect(link).toHaveAttribute('href', '/blog')
    expect(link).not.toHaveAttribute('target')
    expect(link).not.toHaveAttribute('rel')
  })

  it('renders external link with target=_blank and rel=noopener', () => {
    render(<SiteLink href="https://linkedin.com/in/wesmelo">LinkedIn</SiteLink>)
    const link = screen.getByText('LinkedIn')
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/wesmelo')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('supports aria-current for active page', () => {
    render(<SiteLink href="/blog" ariaCurrent="page">Blog</SiteLink>)
    const link = screen.getByText('Blog')
    expect(link).toHaveAttribute('aria-current', 'page')
  })

  it('applies default .link class', () => {
    render(<SiteLink href="/test">Test</SiteLink>)
    expect(screen.getByText('Test')).toHaveClass('link')
  })
})

describe('SectionHead', () => {
  it('renders label, title, and subtitle', () => {
    render(<SectionHead label="Engagements" title="Ways to work together" subtitle="Pick the shape" />)
    expect(screen.getByText('Engagements')).toHaveClass('section-label')
    expect(screen.getByText('Ways to work together')).toHaveClass('section-title')
    expect(screen.getByText('Pick the shape')).toHaveClass('section-sub')
  })

  it('omits label when not provided', () => {
    const { container } = render(<SectionHead title="Title only" />)
    expect(container.querySelector('.section-label')).toBeNull()
    expect(screen.getByText('Title only')).toHaveClass('section-title')
  })

  it('omits subtitle when not provided', () => {
    const { container } = render(<SectionHead label="Label" title="Title" />)
    expect(container.querySelector('.section-sub')).toBeNull()
  })
})

describe('TopBar', () => {
  it('renders as nav with Primary aria-label', () => {
    render(<TopBar />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(nav).toHaveClass('top-bar')
  })

  it('renders all nav items', () => {
    render(<TopBar />)
    expect(screen.getByText('Blog')).toBeTruthy()
    expect(screen.getByText('Case studies')).toBeTruthy()
    expect(screen.getByText('Services')).toBeTruthy()
    expect(screen.getByText('Playground')).toBeTruthy()
    expect(screen.getByText('Contact')).toBeTruthy()
    expect(screen.getByText('LinkedIn')).toBeTruthy()
  })

  it('marks current page with aria-current', () => {
    render(<TopBar currentPath="/blog" />)
    const blogLink = screen.getByText('Blog')
    expect(blogLink).toHaveAttribute('aria-current', 'page')
    expect(blogLink).toHaveAttribute('tabindex', '-1')
  })

  it('does not mark non-current pages', () => {
    render(<TopBar currentPath="/blog" />)
    const servicesLink = screen.getByText('Services')
    expect(servicesLink).not.toHaveAttribute('aria-current')
  })

  it('renders LinkedIn as external link', () => {
    render(<TopBar />)
    const linkedIn = screen.getByText('LinkedIn')
    expect(linkedIn).toHaveAttribute('target', '_blank')
    expect(linkedIn).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('contains brand-wrap with link to root', () => {
    const { container } = render(<TopBar />)
    const brand = container.querySelector('.top-bar-brand')
    expect(brand).toHaveAttribute('href', '/')
  })
})

describe('Footer', () => {
  it('renders as footer with correct aria-label', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo', { name: 'Site footer' })
    expect(footer).toHaveAttribute('id', 'site-footer')
  })

  it('renders all nav items', () => {
    render(<Footer />)
    expect(screen.getByRole('navigation', { name: 'Footer navigation' })).toBeTruthy()
    expect(screen.getByText('Blog')).toBeTruthy()
    expect(screen.getByText('Services')).toBeTruthy()
    expect(screen.getByText('LinkedIn')).toBeTruthy()
  })

  it('marks current page in footer nav', () => {
    render(<Footer currentPath="/services" />)
    const servicesLink = screen.getByText('Services')
    expect(servicesLink).toHaveAttribute('aria-current', 'page')
  })

  it('applies wrapperClass to inner div', () => {
    const { container } = render(<Footer wrapperClass="footer-inner" />)
    expect(container.querySelector('.footer-inner')).toBeTruthy()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(`© ${year} Wesley Melo`)).toBeTruthy()
  })

  it('contains brand-wrap with link to root', () => {
    const { container } = render(<Footer />)
    const brand = container.querySelector('.footer-brand')
    expect(brand).toHaveAttribute('href', '/')
  })
})
