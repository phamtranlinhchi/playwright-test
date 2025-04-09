import { test, expect } from '@playwright/test';

test('Streamlit page returns 200 and does not contain "value error"', async ({ page }) => {
  const response = await page.goto('/streamlit/', { waitUntil: 'domcontentloaded' });

  // Check status 200
  expect(response.status()).toBe(200);

  // Check content does not include "value error"
  const content = await page.content();
  expect(content.toLowerCase()).not.toContain('value error');
});
