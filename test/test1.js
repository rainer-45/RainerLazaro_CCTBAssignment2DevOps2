const { By, Key, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function test_case() {

    //Set Chrome option
    let options = new chrome.Options();
    options.addArguments('headless');
    options.addArguments('disable-gpu')
    options.setChromeBinaryPath('/usr/bin/google-chrome');

    // Create a Driver
    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

    try {
        //Send driver to website
        await driver.get("http://18.215.174.194/");

        //await driver.get('http://<TESTING-WEB-SERVER-IP>/');
    await driver.findElement(By.name('name')).sendKeys('Alice');
    await driver.findElement(By.name('email')).sendKeys('alice@example.com');
    await driver.findElement(By.name('role')).sendKeys('Developer');
    await driver.findElement(By.id('submit')).click();
    console.log('Test Success');
       } catch (e) {
    console.log('Test Failed', e);
  } finally {
    await driver.quit();
  }


}
test_case();