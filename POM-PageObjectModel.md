Benefits of POM - Page Object Model
* Easier to read: Keeps test code clean and easy to understand
* Reusability: You can reuse code for interacting with the same page across multiple tests
* Maintainability: If something changes on the page, you only need to update it one place


Project Structure:
project-name-root-dir/
  pages/
    LoginPage.js
    SecurePage.js
    ChecboxesPage.js
    PomManager.js
  tests/
    test.spec.js
  utils/utils
    CommonActions.js