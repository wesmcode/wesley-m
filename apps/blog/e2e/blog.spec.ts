import { test, expect } from '@playwright/test'

test.describe('Blog (MDX)', () => {
  test('index lists the seed post', async ({ page }) => {
    await page.goto('/blog')
    await expect(page.locator('h1')).toHaveText('Blog')
    const link = page.locator('.post-row-link', { hasText: 'The blog is back' })
    await expect(link).toBeVisible()
  })

  test('clicking a post opens the article', async ({ page }) => {
    await page.goto('/blog')
    await page.locator('.post-row-link', { hasText: 'The blog is back' }).click()
    await expect(page).toHaveURL(/\/blog\/the-blog-is-back$/)
    await expect(page.locator('h1.post-title')).toHaveText('The blog is back')
    await expect(page.locator('.prose p').first()).toBeVisible()
  })

  test('article ships Article JSON-LD', async ({ page }) => {
    await page.goto('/blog/the-blog-is-back')
    const jsonLd = await page.locator('script[type="application/ld+json"]').first().textContent()
    expect(jsonLd).toBeTruthy()
    const data = JSON.parse(jsonLd!)
    expect(data['@type']).toBe('Article')
    expect(data.headline).toBe('The blog is back')
  })

  test('top bar contains the Blog nav item', async ({ page }) => {
    await page.goto('/blog')
    const blogLink = page.locator('.top-bar-links .link', { hasText: 'Blog' })
    await expect(blogLink).toBeVisible()
  })

  test('unknown slugs 404', async ({ page }) => {
    const response = await page.goto('/blog/not-a-real-post')
    expect(response!.status()).toBe(404)
  })
})
