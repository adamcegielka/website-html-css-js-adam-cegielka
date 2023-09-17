import { test, expect } from '@playwright/test';

test.describe('Test homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('check of the page title and address', async ({ page }) => {
    await expect(page).toHaveTitle(/Adam Cegiełka - My Portfolio/);
    await expect(page).toHaveURL('https://adamcegielka.pl/');
  });

  test('verification of locators', async ({ page }) => {
    await expect(page.locator('.titleMessage')).toContainText('ADAM CEGIEŁKA');
    await expect(page.locator('.next')).toBeVisible();
    await expect(page.locator('.prev')).toBeVisible();
    await expect(page.locator('#slides')).toBeVisible();
    await expect(page.locator('.main')).toHaveCount(1);
    await expect(page.locator('.slides-navigation')).toBeTruthy();
  });
});
