import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Home | LimeMonitor');
});

test('get started link', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Get Started');
  await expect(page).toHaveTitle('Installation | LimeMonitor');
});
