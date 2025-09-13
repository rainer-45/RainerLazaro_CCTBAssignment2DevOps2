const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function testForm() {
    let options = new chrome.Options();
    options.addArguments("--headless=new");       // headless mode for EC2
    options.addArguments("--no-sandbox");         // required on Linux servers
    options.addArguments("--disable-dev-shm-usage"); // avoids /dev/shm issues

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        // Replace this with your page URL
        await driver.get('http://18.215.174.194');

        // Fill the form
        await driver.findElement(By.name('name')).sendKeys('Rainer');
        await driver.findElement(By.name('email')).sendKeys('rainer@cctb.com');
        await driver.findElement(By.name('role')).sendKeys('Developer');

        // Submit the form
        await driver.findElement(By.id('teamForm')).submit();

        // Wait for error message to appear
        const errorMsg = await driver.wait(
            until.elementLocated(By.id('errorMsg')),
            2000
        );

        const text = await errorMsg.getText();
        if (text === "All fields are required!") {
            console.log("Test Failed");
            //process.exit(1);
      } else {
            console.log("Test Passed");
        }
    } finally {
        await driver.quit();
    }
})();