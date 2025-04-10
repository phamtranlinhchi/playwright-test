import { test, expect } from '@playwright/test';

test('Login Grafana', async ({ page }) => {
  await page.goto('http://10.98.100.188/grafana/login');

  await page.fill('input[name="user"]', 'thrukadmin');
  await page.fill('input[name="password"]', 'thrukadmin');

  await page.click('button[type="submit"]');

  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveURL(/\/grafana\/d\/m22zwHQ4k\/home\?orgId=1&refresh=1m/);

  const cookies = await page.context().cookies();
  const session = cookies.find(c => c.name === 'grafana_session');
  expect(session).toBeTruthy();

});
