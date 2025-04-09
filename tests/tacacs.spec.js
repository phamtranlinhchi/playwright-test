import { test, expect } from '@playwright/test';

test('Login Tacacsgui and Check status active', async ({ page }) => {
  await page.goto('https://10.98.100.120:4443/auth/login');

  await page.fill('input[placeholder="Username"]', 'tacgui');
  await page.fill('input[placeholder="Password"]', 'juniper@123');

  await page.click('#kt_login_signin_submit');

  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveURL(/\/dashboard/);

  const content = await page.content();

  expect(content.toLowerCase()).toContain('active');

});
