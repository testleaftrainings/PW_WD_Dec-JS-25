import {test} from "@playwright/test"
import { ViewLeadPage } from "../pages/06-viewLeadPage";

test(`Login page using POM`,async ({page}) => {

// const browser = await chromium.launch({ headless: false })
// //open the window
// const context = await browser.newContext()
// //open the page
// const page = await context.newPage()
//  // blank page/*  */

const vp = new ViewLeadPage(page) // new page reference
await vp.loadurl("http://leaftaps.com/opentaps/control/main")
await vp.enterCredentails("demosalesmanager","crmsfa")
await vp.clickLogin()
await vp.clickCRM()
await vp.clickLead()
await vp.clickCreateLead()
await vp.enterMandatory()
await vp.clickSubmit()
await vp.verifyFirstName()
await page.waitForTimeout(3000) // This is just to view the completion of the process
   
})