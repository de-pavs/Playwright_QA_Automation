Ways to run tests with Playwright:

1. Execute everything
npx playwright test

2. Execute a specific test file
npx playwright test testts/assertions.spec.js                  .only still limits which tests are run

3. Execute a specific project
npx playwright test --project=chromium  (firefox/webkit/mobile chrome/mobile safari etc.)

4. By tag (@smoke/ @regression or custom tags)
npx playwrigth test --grep "@smoke"

5. Using test name
npx playwright test --grep "has title"

6. Using VSCode extension
Flask icon on left toolbar

7. Playwright Test UI
npx playwright test --ui

8. Under "scipts" in package.json examples:
"scripts": {
    "test:smoke": "npx playwright test --grep \"@smoke\"",
    "test:regression": "npx playwright test --grep \"@regression\"",
    "test:all": "npm run test:smoke && npm run test:regression"
},
(Now you can run test:smoke command)
npm run test:smoke