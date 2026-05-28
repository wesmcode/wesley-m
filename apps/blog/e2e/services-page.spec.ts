import { test, expect } from '@playwright/test'

test.describe('Services page', () => {
  test('returns the services title', async ({ page }) => {
    await page.goto('/services')
    await expect(page).toHaveTitle(/Services: Wesley Melo/)
  })

  test('marks Services as the current nav item', async ({ page }) => {
    await page.goto('/services')
    const current = page.locator('.top-bar-links [aria-current="page"]')
    await expect(current).toHaveText('Services')
  })

  test('renders hero with title and portrait', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('.hero-title')).toBeVisible()
    await expect(page.locator('.hero-figure img').first()).toBeVisible()
  })

  test('renders the offerings table with all three audience columns', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('.otable-col')).toHaveCount(3)
    await expect(page.locator('.otable-name', { hasText: 'Product audit' }).first()).toBeVisible()
  })

  test('renders pricing, FAQ, and the booking section', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('.faq-item').first()).toBeVisible()
    await expect(page.locator('.booking-embed')).toHaveCount(1)
    await expect(page.locator('.contact-form')).toHaveCount(1)
  })

  test('FAQ items expand on click', async ({ page }) => {
    await page.goto('/services')
    const firstFaq = page.locator('.faq-item').first()
    await expect(firstFaq.locator('.faq-answer')).not.toBeVisible()
    await firstFaq.locator('summary').click()
    await expect(firstFaq.locator('.faq-answer')).toBeVisible()
  })

  test('booking embed sits left of the contact form in the book grid', async ({ page }) => {
    await page.goto('/services')
    const grid = page.locator('.book-grid')
    await expect(grid.locator('.booking-embed')).toHaveCount(1)
    await expect(grid.locator('.contact-form')).toHaveCount(1)
  })

  test('page has black background theme', async ({ page }) => {
    await page.goto('/services')
    const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
    expect(bg).toBe('rgb(19, 19, 19)')
  })

  test('has exactly one main and one footer', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('main')).toHaveCount(1)
    await expect(page.locator('footer')).toHaveCount(1)
  })
})
