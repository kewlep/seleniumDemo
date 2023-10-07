const{Builder, By, Key} = require ("selenium-webdriver");

async function example(){

//launch the browser
let driver = await new Builder().forBrowser("firefox").build();

//navigate to the application
await driver.get("https://lambdatest.github.io/sample-todo-app/")

//add an item
await driver.findElement (By .ld ("sampletodotext")).sendkeys ("Learn Seleniun", Key.RETURN);


//close the browser
await driver.quit0();



}
example()
