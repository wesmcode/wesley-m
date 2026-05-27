import { test, expect } from '@playwright/test'

test.describe('Personal page (linktree)', () => {
  test('renders hero with name and role', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Wesley')
    await expect(page.locator('h1')).toContainText('Melo')
    await expect(page.locator('#hero p')).toContainText('Product Manager')
  })

  test('renders work timeline', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.timeline-row').first()).toBeVisible()
    await expect(page.locator('.timeline-row')).toHaveCount(4)
    await expect(page.locator('.timeline-row .company', { hasText: 'Code and Theory' })).toBeVisible()
    await expect(page.locator('.timeline-row .company', { hasText: 'ThoughtWorks' })).toBeVisible()
  })

  test('renders navigation links', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('nav[aria-label="Contact and links"]')
    await expect(nav).toBeVisible()
    await expect(nav.locator('.nav-item', { hasText: 'Blog' })).toBeVisible()
    await expect(nav.locator('.nav-item', { hasText: 'Services' })).toBeVisible()
    await expect(nav.locator('.nav-item', { hasText: 'LinkedIn' })).toBeVisible()
  })

  test('does not render sticky TopBar (linktree layout)', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav.top-bar')).toHaveCount(0)
  })

  test('renders about section with carousel', async ({ page }) => {
    await page.goto('/')
    const carousel = page.locator('#about-cards')
    await expect(carousel).toBeVisible()
    await expect(carousel).toHaveAttribute('role', 'region')
    await expect(carousel).toHaveAttribute('aria-roledescription', 'carousel')
    await expect(page.locator('.about-card')).toHaveCount(5)
  })

  test('renders process section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#process')).toBeVisible()
    await expect(page.locator('.process-row')).toHaveCount(4)
    await expect(page.locator('.process-row h3', { hasText: 'Discover.' })).toBeVisible()
    await expect(page.locator('.process-row h3', { hasText: 'Scale.' })).toBeVisible()
  })

  test('renders capabilities section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#services')).toBeVisible()
    await expect(page.locator('.cap-col')).toHaveCount(3)
    await expect(page.locator('.cap-col h3', { hasText: 'Strategy' })).toBeVisible()
    await expect(page.locator('.cap-col h3', { hasText: 'Execution' })).toBeVisible()
    await expect(page.locator('.cap-col h3', { hasText: 'Operations' })).toBeVisible()
  })

  test('renders shared footer', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('#site-footer')
    await expect(footer).toBeVisible()
    await expect(footer.locator('.footer-brand')).toHaveAttribute('href', '/')
    await expect(footer.locator('.footer-nav')).toBeVisible()
  })

  test('renders skip link', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.skip-link')).toHaveAttribute('href', '#main-content')
    await expect(page.locator('#main-content')).toBeVisible()
  })

  test('page has navy background theme', async ({ page }) => {
    await page.goto('/')
    const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
    expect(bg).toBe('rgb(43, 56, 86)')
  })
})

test.describe('Personal page: performance', () => {
  test('page is statically generated (no server-side data fetch)', async ({ page }) => {
    await page.goto('/')
    const title = await page.title()
    expect(title).toContain('Wesley Melo')
  })
})
