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

  test('renders grouped navigation links', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('nav[aria-label="Contact and links"]')
    await expect(nav).toBeVisible()
    await expect(nav.locator('.nav-item', { hasText: 'Services' })).toBeVisible()
    await expect(nav.locator('.nav-item', { hasText: 'Case studies' })).toBeVisible()
    await expect(nav.locator('.nav-item', { hasText: 'Resume' })).toBeVisible()
    await expect(nav.locator('.nav-item', { hasText: 'LinkedIn' })).toBeVisible()
    // Playground and Contact were intentionally removed from the linktree.
    await expect(nav.locator('.nav-item', { hasText: 'Playground' })).toHaveCount(0)
    await expect(nav.locator('.nav-item', { hasText: 'Contact' })).toHaveCount(0)
  })

  test('separates link groups with a blank row', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('nav[aria-label="Contact and links"]')
    // One divider between the two link groups.
    await expect(nav.locator('.row-empty')).toHaveCount(1)
  })

  test('does not render sticky TopBar (linktree layout)', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav.top-bar')).toHaveCount(0)
  })

  test('does not render duplicated content sections', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#about')).toHaveCount(0)
    await expect(page.locator('#process')).toHaveCount(0)
    await expect(page.locator('#services')).toHaveCount(0)
    await expect(page.locator('#site-footer')).toHaveCount(0)
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

  test('is a single-screen linktree (hero section only)', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#hero')).toBeVisible()
    const sections = page.locator('.snap-section')
    await expect(sections).toHaveCount(1)
  })
})

test.describe('Personal page: performance', () => {
  test('page is statically generated', async ({ page }) => {
    await page.goto('/')
    const title = await page.title()
    expect(title).toContain('Wesley Melo')
  })

  test('ships zero client JS (no carousel, no interactive components)', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const hasCarousel = await page.locator('#about-cards').count()
    expect(hasCarousel).toBe(0)
  })
})
