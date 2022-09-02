const {Given,Then} = require('@cucumber/cucumber');

const url="http://127.0.0.1:5500/";

Given('a user opens the app', async function () {
    // Write code here that turns the phrase above into concrete actions
    await page.goto(url);
  });

Then('the display should show the following value:{string}', function (string) {      
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});