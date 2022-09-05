const {Given,Then} = require('@cucumber/cucumber');
const{expect} = require('@playwright/test'); //A space is required
const url="http://127.0.0.1:5500/";

Given('a user opens the app', async function () {

    // Write code here that turns the phrase above into concrete actions
    await page.goto(url);

  });

Then('the display should show the following value:{string}', async function (string) { 

    // Write code here that turns the phrase above into concrete actions
    const display = await page.locator('data-testid=display').getAttribute('value');
    expect(display).toBe(string);
    
});