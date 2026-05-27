import { test, expect } from '@playwright/test'

test.describe('Services page', () => {
  test('renders TopBar with services marked current', async ({ page }) => {
    await page.goto('/services')
    const nav = page.locator('nav.top-bar')
    await expect(nav).toBeVisible()
    const servicesLink = nav.locator('.top-bar-links .link', { hasText: 'Services' })
    await expect(servicesLink).toHaveAttribute('aria-current', 'page')
  })

  test('renders hero section with title and photo', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('.hero-title')).toContainText('Ways to')
    await expect(page.locator('.hero-figure img').first()).toBeVisible()
  })

  test('renders all 7 service offerings', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('.offer')).toHaveCount(7)
    await expect(page.locator('.offer h3', { hasText: 'Product audit' })).toBeVisible()
    await expect(page.locator('.offer h3', { hasText: 'Hourly advisory' })).toBeVisible()
  })

  test('renders offering group labels', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('.offer-group-label', { hasText: 'For founder-led teams' })).toBeVisible()
    await expect(page.locator('.offer-group-label', { hasText: 'For established companies' })).toBeVisible()
    await expect(page.locator('.offer-group-label', { hasText: 'Either side of the line' })).toBeVisible()
  })

  test('renders how I work section with 3 cards', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('.expect-card')).toHaveCount(3)
    await expect(page.locator('.expect-card h3', { hasText: 'Embedded, not advisory' })).toBeVisible()
  })

  test('renders 5 buyer cards', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('.buyer-card')).toHaveCount(5)
    await expect(page.locator('.buyer-card-wide')).toHaveCount(1)
  })

  test('renders pricing section with 2 cards', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('.pricing-card')).toHaveCount(2)
    await expect(page.locator('.pricing-card-featured')).toHaveCount(1)
    await expect(page.locator('.pricing-value', { hasText: '$4k' })).toBeVisible()
    await expect(page.locator('.pricing-value', { hasText: '$5k' })).toBeVisible()
  })

  test('renders FAQ with 7 items', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('.faq-item')).toHaveCount(7)
  })

  test('FAQ items expand on click', async ({ page }) => {
    await page.goto('/services')
    const firstFaq = page.locator('.faq-item').first()
    const answer = firstFaq.locator('.faq-answer')
    await expect(answer).not.toBeVisible()
    await firstFaq.locator('summary').click()
    await expect(answer).toBeVisible()
  })

  test('renders booking embed and contact form', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('.booking-embed iframe')).toHaveCount(1)
    await expect(page.locator('.contact-form')).toHaveCount(1)
    await expect(page.locator('.contact-form-heading', { hasText: 'Send a message' })).toBeVisible()
  })

  test('renders footer with services marked current', async ({ page }) => {
    await page.goto('/services')
    const footer = page.locator('#site-footer')
    await expect(footer).toBeVisible()
    await expect(footer.locator('.footer-brand')).toHaveAttribute('href', '/')
  })

  test('page has black background theme', async ({ page }) => {
    await page.goto('/services')
    const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
    expect(bg).toBe('rgb(19, 19, 19)')
  })

  test('has exactly one main landmark', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('main')).toHaveCount(1)
  })

  test('has exactly one footer', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('footer')).toHaveCount(1)
  })
})
