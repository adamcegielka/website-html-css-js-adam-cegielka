import { test, expect } from '@playwright/test';

test.describe('Test top navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('verification of locators', async ({ page }) => {
    await page.locator('#about').click();
  });
});