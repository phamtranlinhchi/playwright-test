import { test, expect } from '@playwright/test';
import testInfo from '../utils/test-info.js';

const { testUrl, testTitle, testUsername, testPassword } = testInfo.kibana;

test(testTitle, async ({ page }) => {
  const response = await page.goto(testUrl, { waitUntil: 'domcontentloaded' });

  expect(response.status()).toBe(200);

  await page.fill('input[name="username"]', testUsername);
  await page.fill('input[name="password"]', testPassword);

  await page.click('button[type="submit"]'); 

  await page.waitForURL(/\/kibana\/app\/home/);
  
  await page.waitForLoadState('domcontentloaded');

  await expect(page.locator('text=Welcome home')).toBeVisible();

});
