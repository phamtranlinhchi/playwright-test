import { test, expect } from '@playwright/test';
import testInfo from '../utils/test-info.js';

const { testUrl, testTitle, testUsername, testPassword } = testInfo.tacacs;

test(testTitle, async ({ page }) => {
  await page.goto(testUrl, { waitUntil: 'domcontentloaded' });

  await page.fill('input[placeholder="Username"]', testUsername);
  await page.fill('input[placeholder="Password"]', testPassword);

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
