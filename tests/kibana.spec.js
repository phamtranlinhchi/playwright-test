import { test, expect } from '@playwright/test';

test('Login Kibana', async ({ page }) => {
  await page.goto('https://10.98.100.186/kibana/login?next=%2Fkibana%2F');

  await page.fill('input[name="username"]', 'elastic');
  await page.fill('input[name="password"]', 'juniper@123');

  await page.click('button[type="submit"]'); 

  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveURL(/\/kibana\/app\/home/);

  await expect(page.locator('text=Welcome home')).toBeVisible();

});
