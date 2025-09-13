const { Builder, By } = require('selenium-webdriver');
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
        await driver.get('http://172.31.26.43');

        // Fill the form
        await driver.findElement(By.name('name')).sendKeys('Rainer');
        await driver.findElement(By.name('email')).sendKeys('rainer@example.com');
        await driver.findElement(By.name('role')).sendKeys('Developer');

        // Submit the form
        await driver.findElement(By.css('button[type="submit"]')).click();

        console.log("Test Success");
} catch (e) {
    console.log('Test Failed', e);
    } finally {
        await driver.quit();
    }
})();