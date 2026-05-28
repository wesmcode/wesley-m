import { test, expect } from '@playwright/test'

test.describe('Work index', () => {
  test('returns the case studies title', async ({ page }) => {
    await page.goto('/work')
    await expect(page).toHaveTitle(/Case studies: Wesley Melo/)
  })

  test('renders the hero with the case index', async ({ page }) => {
    await page.goto('/work')
    await expect(page.locator('.hero-title')).toContainText('shipped')
    await expect(page.locator('.hero-index-item')).toHaveCount(7)
  })

  test('case index links resolve to case-study routes', async ({ page }) => {
    await page.goto('/work')
    const first = page.locator('.hero-index-item').first()
    const href = await first.getAttribute('href')
    expect(href).toMatch(/\/work\/[a-z-]+$|work\.wesley-m\.com\/[a-z-]+$/)
  })

  test('renders the companies strip', async ({ page }) => {
    await page.goto('/work')
    await expect(page.locator('.companies-strip')).toBeVisible()
  })

  test('has TopBar and a single footer', async ({ page }) => {
    await page.goto('/work')
    await expect(page.locator('nav.top-bar')).toBeVisible()
    await expect(page.locator('footer')).toHaveCount(1)
  })
})

test.describe('Case study detail', () => {
  const slug = 'enterprise-ai-platform-launch'

  test('renders the case hero, body, and outcomes', async ({ page }) => {
    await page.goto(`/work/${slug}`)
    await expect(page.locator('.case-hero-title')).toBeVisible()
    await expect(page.locator('.case-outcome').first()).toBeVisible()
    await expect(page.locator('.case-body')).toBeVisible()
  })

  test('renders the sticky engagement rail', async ({ page }) => {
    await page.goto(`/work/${slug}`)
    await expect(page.locator('.case-rail-block').first()).toBeVisible()
  })

  test('related cards and CTA resolve to real links', async ({ page }) => {
    await page.goto(`/work/${slug}`)
    await expect(page.locator('.case-related-card').first()).toBeVisible()
    const cta = page.locator('.case-cta-btn').first()
    const href = await cta.getAttribute('href')
    expect(href).toBeTruthy()
  })

  test('unknown slug returns 404', async ({ page }) => {
    const res = await page.goto('/work/does-not-exist')
    expect(res?.status()).toBe(404)
  })
})
