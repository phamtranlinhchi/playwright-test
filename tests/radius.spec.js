import { test, expect } from '@playwright/test';

test('Login Radius', async ({ page }) => {
  await page.goto('http://10.98.100.182:8000/login.php');

  await page.fill('input[name="operator_user"]', 'administrator');
  await page.fill('input[name="operator_pass"]', 'radius');

  await page.click('button[type="submit"]');

  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveURL(/\/home-main.php/);

  await expect(page.locator('h1:text("Home")')).toBeVisible();

});
