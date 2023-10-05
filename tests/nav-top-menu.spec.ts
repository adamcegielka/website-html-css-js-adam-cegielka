import { test, expect } from '@playwright/test';

test.describe('Test top navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('verification of locator', async ({ page }) => {
    await page.locator('#about').click();
    await expect(page.locator('#about')).toBeInViewport();
  });

  test('verification of skills locator', async ({ page }) => {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await page.locator('#skills').click();
    await expect(page.locator('#skills')).toBeInViewport();
  });

  test('verification of stats locator', async ({ page }) => {
    const elementId = 'trophy';

    await page.$eval(`#${elementId}`, (element) => {
      element.scrollIntoView();
    });
    await expect(page.locator('#trophy')).toBeInViewport();
    await page.locator('#stats').click();
    await expect(page.locator('#stats')).toBeInViewport();
  });
});
