import { test, expect } from '@playwright/test';
import testInfo from '../utils/test-info.js';

const { testUrl, testTitle, testUsername, testPassword } = testInfo.bng;

test(testTitle, async ({ page }) => {
  const response = await page.goto(testUrl, { waitUntil: 'domcontentloaded'});

  expect(response.status()).toBe(200);

  await page.fill('input[aria-label="Username"]', testUsername);
  await page.fill('input[aria-label="Password"]', testPassword);

  await page.click('button[kind="secondaryFormSubmit"]');

  await page.waitForLoadState('domcontentloaded');

  await expect(page.locator('button[kind="primary"] strong')).toHaveText('SELECT');

});
