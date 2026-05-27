import { test, expect } from '@playwright/test'

test.describe('Work index page', () => {
  test('renders dark hero band with title', async ({ page }) => {
    await page.goto('/work')
    await expect(page.locator('.case-hero-title')).toContainText('Case studies')
    await expect(page.locator('.case-hero-band')).toBeVisible()
  })

  test('renders breadcrumb nav inside hero', async ({ page }) => {
    await page.goto('/work')
    const breadcrumb = page.locator('.case-hero-band nav[aria-label="Breadcrumb"]')
    await expect(breadcrumb).toBeVisible()
    await expect(breadcrumb.locator('.link')).toContainText('Home')
  })

  test('renders shared footer with brand crossfade', async ({ page }) => {
    await page.goto('/work')
    const footer = page.locator('#site-footer')
    await expect(footer).toBeVisible()
    await expect(footer.locator('.brand-wrap')).toBeVisible()
    await expect(footer.locator('.brand-full')).toHaveText('Wesley Melo')
  })

  test('CTA links point to services page (not /about)', async ({ page }) => {
    await page.goto('/work')
    const ctaBtn = page.locator('.case-cta-btn').first()
    const href = await ctaBtn.getAttribute('href')
    expect(href).toContain('/services')
  })

  test('has skip link', async ({ page }) => {
    await page.goto('/work')
    await expect(page.locator('.skip-link')).toHaveAttribute('href', '#main-content')
  })

  test('has exactly one footer', async ({ page }) => {
    await page.goto('/work')
    await expect(page.locator('footer')).toHaveCount(1)
  })

  test('nav landmarks have distinct labels', async ({ page }) => {
    await page.goto('/work')
    const navs = page.locator('nav')
    const count = await navs.count()
    const labels: string[] = []
    for (let i = 0; i < count; i++) {
      const label = await navs.nth(i).getAttribute('aria-label')
      if (label) labels.push(label)
    }
    expect(new Set(labels).size).toBe(labels.length)
  })
})
