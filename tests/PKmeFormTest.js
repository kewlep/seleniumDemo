const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/firefox');

// Set up Chrome options (You may need to adjust the path to your ChromeDriver executable)
const options = new chrome.Options();
options.addArguments('--start-maximized'); // Maximize the browser window

// Initialize the WebDriver
const driver = new Builder()
    .forBrowser('firefox')
    .setChromeOptions(options)
    .build();

// Navigate to the web page
driver.get('https://philipkewley.me/index_new.html');

// Wait for the contact form to load
driver.wait(until.elementLocated(By.id('contactForm')), 5000);

// Fill in the contact form
driver.findElement(By.id('name')).sendKeys('John Doe');
driver.findElement(By.id('email')).sendKeys('johndoe@example.com');
driver.findElement(By.id('message')).sendKeys('This is a test message.');

// Click the "Send message" button
driver.findElement(By.id('sendMessageButton')).click();

// Wait for a few seconds (You can adjust the time as needed to see the result)
driver.sleep(5000);

// Close the browser
driver.quit();
