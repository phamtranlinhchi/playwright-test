import { test, expect } from '@playwright/test';
import testInfo from '../utils/test-info.js';

const { testUrl, testTitle, testUsername, testPassword } = testInfo.grafana;

test(testTitle, async ({ page }) => {
  const response = await page.goto(testUrl, { waitUntil: 'domcontentloaded' });
  expect(response.status()).toBe(200);

  await page.fill('input[name="user"]', testUsername);
  await page.fill('input[name="password"]', testPassword);

  await page.click('button[type="submit"]');

  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveURL(/\/grafana\/d\/m22zwHQ4k\/home\?orgId=1&refresh=1m/);

  const cookies = await page.context().cookies();
  const session = cookies.find(c => c.name === 'grafana_session');
  expect(session).toBeTruthy();
});
