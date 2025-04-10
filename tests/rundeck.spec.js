import { test, expect } from '@playwright/test';

test('Rundeck login successfully', async ({ page }) => {
  const response = await page.goto('/rundeck', { waitUntil: 'domcontentloaded'});

  expect(response.status()).toBe(200);

  await page.fill('input[name="j_username"]', 'thrukadmin');
  await page.fill('input[name="j_password"]', 'thrukadmin');

  await page.click('#btn-login');

  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveURL(/\/menu\/home/);
});
