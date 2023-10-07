const{Builder, By, Key} = require ("selenium-webdriver");

async function example(){

//launch the browser
let driver = await new Builder().forBrowser("firefox").build();

//navigate to the application
await driver.get("https://philipkewley.me/index_new.html")

//
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


await driver.findElement (By .ld ("sampletodotext")).sendkeys ("Learn Seleniun", Key.RETURN);


//close the browser
await driver.quit0();



}
example()
