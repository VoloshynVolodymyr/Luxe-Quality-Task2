const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('./../pageobjects/login.page');
const assert = require('assert');

Given(
    'User is located on the main page of saucedemo website',
    async function () {
        await loginPage.open();
    }
);

When('User clicks the {string} button', async function (button) {
    if (button === 'Login') {
        await loginPage.clickLoginButton();
    }
});

When(
    'User logs in with valid credentials and click on the Login button',
    async function () {
        const user = process.env.STANDARD_USER;
        const password = process.env.STANDARD_PASSWORD;
        await loginPage.login(user, password);
    }
);

Then(
    'User should see {string} error message',
    async function (expectedErrorMessage) {
        const errorMessage = await loginPage.getErrorMessage();
        assert.strictEqual(errorMessage, expectedErrorMessage);
    }
);

Then('User should be redirected to the inventory page', async function () {
    const isRedirected = await loginPage.isRedirectedToInventoryPage();
    assert.strictEqual(
        isRedirected,
        true,
        'User was not redirected to the inventory page'
    );
});
