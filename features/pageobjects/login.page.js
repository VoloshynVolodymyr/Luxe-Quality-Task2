require('dotenv').config();
const Page = require('./page');

class LoginPage extends Page {
    get inputUsername() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('#login-button');
    }

    get errorMessage() {
        return $('h3[data-test="error"]');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.clickLoginButton();
    }

    async clickLoginButton() {
        await this.btnSubmit.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }

    async isRedirectedToInventoryPage() {
        return (
            (await browser.getUrl()) ===
            'https://www.saucedemo.com/inventory.html'
        );
    }

    open() {
        return super.open('');
    }
}

module.exports = new LoginPage();
