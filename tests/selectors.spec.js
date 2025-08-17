import {test, expect} from '@playwright/test'

test("Learning selectors", async ({page}) => {
    // Navigate to the page
    await page.goto('http://127.0.0.1:5500/clickME.html')

    // 1 Selecting by ID
    await page.locator('#clickButton').click()

    // 2 Selecting by Class
    await page.locator('.button-style').click()

    // 3 By Tag and Class
    await page.locator('button.button-style').click()

    // 4. By Attribute Value
    await page.locator('[data-action="increment"]').click()
    await page.locator('[id="clickButton"]').click()
    await page.locator('[class="button-style"]').click()

    // 5. By Partial Attribute Value
    await page.locator('[role*="but"]').click()

    // 6. By Text content
    await page.locator('text=CLICK ME').click()

    // 7. Combine selectors for percision (class and text - find exact text match)
    await page.locator('.button-style:text("CLICK ME")').click()

    // 8. Find elements containing specific, has-text
    await page.locator('button:has-text("CLICK M")').click()

    // 9. Attribute and text combination
    await page.locator('[data-action="increment"]:text("CLICK ME")').click()

    // 10. Playwright locators https://playwright.dev/docs/locators
    await page.getByText('CLICK ME').click()

    // 11. By Role (https://regex101.com/)
    await page.getByRole('button', {name: 'CLICK ME'}).click()

    await page.pause()
    // Assert the counter
    await expect(page.locator('#counter')).toContainText('13')

// await page.locator().click()
    await page.pause()

})