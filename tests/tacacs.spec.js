import { test, expect } from '@playwright/test';

test('Login Tacacsgui and Check status active', async ({ page }) => {
  await page.goto('https://10.98.100.120:4443/auth/login');

  await page.fill('input[placeholder="Username"]', 'tacgui');
  await page.fill('input[placeholder="Password"]', 'juniper@123');

  await page.click('#kt_login_signin_submit');

  await page.waitForURL(/\/dashboard/);

  const responsePromise = page.waitForResponse(res =>
    res.url().includes('/api/tacacs/reports/general') && res.status() === 200
  );

  const response = await responsePromise;
  const body = await response.json();
  const tacStatus = body.widgets?.[0]?.tac_status;
  expect(tacStatus).toBe('active');

});
