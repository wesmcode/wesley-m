import { test, expect } from '@playwright/test'

// Pages that render the shared TopBar + Footer chrome.
const CHROME_PAGES = ['/services', '/contact', '/work', '/blog']

test.describe('Shared chrome', () => {
  for (const path of CHROME_PAGES) {
    test(`${path} renders the sticky TopBar with brand + nav`, async ({ page }) => {
      await page.goto(path)
      const nav = page.locator('nav.top-bar')
      await expect(nav).toBeVisible()
      await expect(nav.locator('.top-bar-brand')).toBeVisible()
      await expect(nav.locator('.top-bar-links .link').first()).toBeVisible()
    })

    test(`${path} has exactly one main and one footer landmark`, async ({ page }) => {
      await page.goto(path)
      await expect(page.locator('main')).toHaveCount(1)
      await expect(page.locator('footer')).toHaveCount(1)
    })

    test(`${path} skip link targets #main-content`, async ({ page }) => {
      await page.goto(path)
      await expect(page.locator('.skip-link')).toHaveAttribute('href', '#main-content')
    })

    test(`${path} nav landmarks have distinct aria-labels`, async ({ page }) => {
      await page.goto(path)
      const navs = page.locator('nav')
      const count = await navs.count()
      const labels: string[] = []
      for (let i = 0; i < count; i++) {
        const label = await navs.nth(i).getAttribute('aria-label')
        if (label) labels.push(label)
      }
      expect(new Set(labels).size).toBe(labels.length)
    })
  }
})

test.describe('TopBar nav (path mode)', () => {
  test('marks the current page active and excludes it from tab order', async ({ page }) => {
    await page.goto('/services')
    const current = page.locator('.top-bar-links [aria-current="page"]')
    await expect(current).toHaveCount(1)
    await expect(current).toHaveAttribute('tabindex', '-1')
  })

  test('LinkedIn opens in a new tab (work nav)', async ({ page }) => {
    await page.goto('/work')
    const linkedIn = page.locator('.top-bar-links .link', { hasText: 'LinkedIn' })
    await expect(linkedIn).toHaveAttribute('target', '_blank')
    await expect(linkedIn).toHaveAttribute('rel', /noopener/)
  })
})
