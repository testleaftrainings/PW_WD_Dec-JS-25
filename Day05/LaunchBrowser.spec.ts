import test, { chromium } from "@playwright/test";

test("Launch Browser",async()=>{
    //launch browser 
    //mode ->npx playwright show-report headless mode
    const browser=  await chromium.launch({channel:'chrome',headless:false})
    //open the window
    const context=  await browser.newContext()
    //open the page
    const page= await context.newPage()
    //load the url 
     await page.goto("https://www.facebook.com")
//npx playwright test LaunchBrowser.spec.ts

})