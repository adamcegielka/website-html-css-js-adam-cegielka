import { test, expect } from '@playwright/test';

test.describe.parallel('Test top navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('verification of locator', async ({ page }) => {
    await page.locator('#about').click();
    await expect(page.locator('#about')).toBeInViewport({ timeout: 30000 });
  });

  test('verification of skills locator', async ({ page }) => {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await page.locator('#skills').click();
    await expect(page.locator('#skills')).toBeInViewport({ timeout: 30000 });
  });

  test('verification of stats locator', async ({ page }) => {
    const elementId = 'trophy';

    await page.$eval(`#${elementId}`, (element) => {
      element.scrollIntoView();
    });
    await expect(page.locator('#trophy')).toBeInViewport({ timeout: 30000 });
    await page.locator('#stats').click();
    await expect(page.locator('#stats')).toBeInViewport({ timeout: 30000 });
  });

  test.only('verification of contact locator', async ({ page }) => {
    const elementId = 'paragliding';

    await page.$eval(`#${elementId}`, (element) => {
      element.scrollIntoView();
    });
    await expect(page.locator('#paragliding')).toBeInViewport({ timeout: 30000 });
    await page.locator('#contact').click();
    await expect(page.locator('#contact')).toBeInViewport({ timeout: 30000 });
  });

  test('verification of portfolio locator', async ({ page }) => {
    const elementId = 'about';

    await page.$eval(`#${elementId}`, (element) => {
      element.scrollIntoView();
    });
    await expect(page.locator('#about')).toBeInViewport({ timeout: 30000 });
    await page.locator('#portfolio').click();
    await expect(page.locator('#portfolio')).toBeInViewport({ timeout: 30000 });
  });

  test('verification of paragliding locator', async ({ page }) => {
    const elementId = 'skills';

    await page.$eval(`#${elementId}`, (element) => {
      element.scrollIntoView();
    });
    await expect(page.locator('#skills')).toBeInViewport({ timeout: 30000 });
    await page.locator('#paragliding').click();
    await expect(page.locator('#paragliding')).toBeInViewport({ timeout: 30000 });
  });

  test('verification of trophy locator', async ({ page }) => {
    const elementId = 'stats';

    await page.$eval(`#${elementId}`, (element) => {
      element.scrollIntoView();
    });
    await expect(page.locator('#stats')).toBeInViewport({ timeout: 30000 });
    await page.locator('#trophy').click();
    await expect(page.locator('#trophy')).toBeInViewport({ timeout: 30000 });
  });
});
