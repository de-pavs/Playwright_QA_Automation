import {test, expect} from '@playwright/test'

test.describe("Learn Assertions", () => {
    test('Verify web page behavior', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/')

        // 1. To have URL
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/')

        await page.pause()

        // 2. To have title
        await expect(page).toHaveTitle('The Internet')

    })
    test('Continue with assertions part 1', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/')

        // 3. Assert visibility
        await page.pause()

        await expect(page.locator('h1')).toBeVisible()

        // 4. Assert element to have text
        await expect(page.locator('h2')).toHaveText('Available Examples')

        // 5. Assert contains text
        await expect(page.locator('body')).toContainText('WYSIWYG')
    })
    test('Continue with Assertions part 2', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/')
        
       // 6. Assert count
       await expect(page.locator('a')).toHaveCount(46)

       // 7. To be checked
       await page.goto('https://the-internet.herokuapp.com/checkboxes')

       await page.waitForTimeout(1000);
       await page.waitForLoadState('networkidle');

       let checkbox = page.getByRole('checkbox').nth(0);
       await checkbox.waitFor();

       await page.getByRole('checkbox').nth(0).check();
       await page.getByRole('checkbox').nth(1).uncheck();
       await expect(page.getByRole('checkbox').nth(0)).toBeChecked();
       await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked();

       
    })
    test('Continue with Assertions part 3', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/login')

        // 8. To have value
        await page.locator('#username').fill('tomsmith')
        await expect(page.locator('#username')).toHaveValue('tomsmith')

        // 9. Element is enabled
        await expect(page.locator('button[type="submit"]')).toBeEnabled();
        // await expect(page.locator('button[type="submit"]')).toBeDisabled();
    })
      test('Continue with Assertions part 4', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com')

        // 10. Store text in variable and assert
        const headerText = await page.locator('h1').textContent()
        expect(headerText).toBe('Welcome to the-internet')
      })
})