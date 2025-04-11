import { test, expect } from '@playwright/test';
import testInfo from '../utils/test-info.js';

const { testUrl, testTitle, testUsername, testPassword } = testInfo.radius;

test(testTitle, async ({ page }) => {
  await page.goto(testUrl, { waitUntil: 'domcontentloaded' });

  await page.fill('input[name="operator_user"]', testUsername);
  await page.fill('input[name="operator_pass"]', testPassword);

  await page.click('button[type="submit"]');

  await page.waitForURL(/\/home-main.php/);
  
  await page.waitForLoadState('domcontentloaded');

  await expect(page.locator('h1:text("Home")')).toBeVisible();

});
