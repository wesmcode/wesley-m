import { test, expect } from '@playwright/test'

test.describe('Blog index page', () => {
  test('renders shared TopBar with navigation', async ({ page }) => {
    await page.goto('/')

    const nav = page.locator('nav.top-bar')
    await expect(nav).toBeVisible()

    const brand = nav.locator('.top-bar-brand')
    await expect(brand).toHaveAttribute('href', '/')
    await expect(brand.locator('.brand-full')).toHaveText('Wesley Melo')

    await expect(nav.locator('.top-bar-links .link', { hasText: 'Blog' })).toBeVisible()
    await expect(nav.locator('.top-bar-links .link', { hasText: 'Services' })).toBeVisible()
    await expect(nav.locator('.top-bar-links .link', { hasText: 'Case studies' })).toBeVisible()
  })

  test('renders shared Footer with navigation', async ({ page }) => {
    await page.goto('/')

    const footer = page.locator('#site-footer')
    await expect(footer).toBeVisible()

    const footerNav = footer.locator('nav[aria-label="Footer navigation"]')
    await expect(footerNav).toBeVisible()

    await expect(footer.locator('.footer-brand')).toHaveAttribute('href', '/')
    await expect(footer.locator('.footer-meta')).toContainText('Wesley Melo')
  })

  test('renders skip link targeting #main-content', async ({ page }) => {
    await page.goto('/')
    const skipLink = page.locator('.skip-link')
    await expect(skipLink).toHaveAttribute('href', '#main-content')
  })

  test('blog link has aria-current="page"', async ({ page }) => {
    await page.goto('/')
    const blogLink = page.locator('.top-bar-links .link', { hasText: 'Blog' })
    await expect(blogLink).toHaveAttribute('aria-current', 'page')
  })

  test('LinkedIn opens in new tab', async ({ page }) => {
    await page.goto('/')
    const linkedIn = page.locator('.top-bar-links .link', { hasText: 'LinkedIn' })
    await expect(linkedIn).toHaveAttribute('target', '_blank')
    await expect(linkedIn).toHaveAttribute('rel', /noopener/)
  })
})

test.describe('Work index page', () => {
  test('renders shared Footer', async ({ page }) => {
    await page.goto('/work')

    const footer = page.locator('#site-footer')
    await expect(footer).toBeVisible()
    await expect(footer.locator('.footer-brand')).toHaveAttribute('href', '/')
    await expect(footer.locator('.footer-nav')).toBeVisible()
  })

  test('footer has full nav items (not truncated)', async ({ page }) => {
    await page.goto('/work')
    const footer = page.locator('#site-footer')
    await expect(footer.locator('.footer-nav .link', { hasText: 'Blog' })).toBeVisible()
    await expect(footer.locator('.footer-nav .link', { hasText: 'Services' })).toBeVisible()
    await expect(footer.locator('.footer-nav .link', { hasText: 'LinkedIn' })).toBeVisible()
  })
})

test.describe('Performance: no unnecessary client JS', () => {
  test('blog index does not load excessive JS bundles', async ({ page }) => {
    const jsRequests: string[] = []
    page.on('response', (response) => {
      const url = response.url()
      if (url.endsWith('.js') && !url.includes('_next/static/chunks/webpack')) {
        jsRequests.push(url)
      }
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const totalJsSize = await page.evaluate(() => {
      const entries = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
      return entries
        .filter((e) => e.name.endsWith('.js'))
        .reduce((sum, e) => sum + (e.transferSize || 0), 0)
    })

    // Next.js framework JS is ~120KB compressed in production.
    // Dev mode inflates this with HMR/React DevTools. Budget: 800KB dev, 200KB prod.
    // This test runs against dev server, so use the dev budget.
    expect(totalJsSize).toBeLessThan(800_000)
  })
})

test.describe('Accessibility: shared component structure', () => {
  test('page has exactly one main landmark', async ({ page }) => {
    await page.goto('/')
    const mains = page.locator('main')
    await expect(mains).toHaveCount(1)
  })

  test('page has exactly one footer landmark', async ({ page }) => {
    await page.goto('/')
    const footers = page.locator('footer')
    await expect(footers).toHaveCount(1)
  })

  test('nav landmarks have distinct labels', async ({ page }) => {
    await page.goto('/')
    const navs = page.locator('nav')
    const count = await navs.count()
    const labels: string[] = []
    for (let i = 0; i < count; i++) {
      const label = await navs.nth(i).getAttribute('aria-label')
      if (label) labels.push(label)
    }
    const unique = new Set(labels)
    expect(unique.size).toBe(labels.length)
  })
})
