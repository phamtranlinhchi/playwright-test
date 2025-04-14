import { test, expect } from '@playwright/test';
import testInfo from '../utils/test-info.js';

const { testUrl, testTitle, testUsername, testPassword } = testInfo.rundeck_nmaa;

test(testTitle, async ({ page }) => {
  const response = await page.goto(testUrl, { waitUntil: 'domcontentloaded'});

  expect(response.status()).toBe(200);

  await page.fill('input[name="j_username"]', testUsername);
  await page.fill('input[name="j_password"]', testPassword);

  await page.click('#btn-login');

  await page.waitForURL(/\/menu\/home/)

  await page.waitForLoadState('domcontentloaded');
});
