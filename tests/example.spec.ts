import { test, expect } from '@playwright/test';

test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("mytest", async ({page}) => {
  await page.goto('https://staging:543testStaging@stg.psychicvop.com/')
  await page.goto('https://stg.psychicvop.com/register')
  await page.setViewportSize({width: 1820, height: 1080})
})
