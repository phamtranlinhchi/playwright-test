import { test, expect } from '@playwright/test';
import testInfo from '../utils/test-info.js';

const { testUrl, testTitle } = testInfo.docxtemplate;

test(testTitle, async ({ page }) => {
  const response = await page.goto(testUrl, { waitUntil: 'domcontentloaded' });

  expect(response.status()).toBe(200);

});

