import { test, expect } from '@playwright/test'

test.describe('Legacy .html redirects', () => {
  test('services.html redirects to /services', async ({ page }) => {
    const response = await page.goto('/services.html')
    expect(page.url()).toContain('/services')
    expect(response?.status()).toBeLessThan(400)
  })

  test('blog.html redirects to /blog', async ({ page }) => {
    const response = await page.goto('/blog.html')
    expect(page.url()).toContain('/blog')
    expect(response?.status()).toBeLessThan(400)
  })

  test('index.html redirects to /', async ({ page }) => {
    const response = await page.goto('/index.html')
    expect(page.url()).not.toContain('.html')
    expect(response?.status()).toBeLessThan(400)
  })
})

test.describe('Content protection headers', () => {
  test('pages include X-Robots-Tag noai header', async ({ page }) => {
    const response = await page.goto('/')
    const robotsTag = response?.headers()['x-robots-tag']
    expect(robotsTag).toContain('noai')
  })
})
