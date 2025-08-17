import LoginPage from "../pages/LoginPage.js";
import SecurePage from "../pages/SecurePage.js";
import CheckboxesPage from "../pages/CheckboxesPage.js";

export default class  PomManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page)
        this.securePage = new SecurePage(page)
        this.checkboxesPage = new CheckboxesPage(page)
    }
}