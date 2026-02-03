import {test, chromium} from "@playwright/test"
import { LoginPage } from "./01-loginPage";

test(`Login page using POM`,async ({page}) => {

// const browser = await chromium.launch({ headless: false })
// //open the window
// const context = await browser.newContext()
// //open the page
// const page = await context.newPage()
//  // blank page/*  */

const login = new LoginPage(page) // blank page
await login.loadurl("http://leaftaps.com/opentaps/control/main")
await login.enterCredentails("demosalesmanager","crmsfa")
await login.clickLogin()

await page.waitForTimeout(3000) // This is just to view the process
await login.closeBrowser()
   
})