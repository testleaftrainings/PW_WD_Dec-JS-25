//import {test} from "@playwright/test"
import { ViewLeadPage } from "../pages/06-viewLeadPage";
import {test1} from "../utility/customFixture"

test1(`Login page using POM`,async ({loginfix,welfix,vpfix,homfix,crleadfix,leadfix}) => {

//const vp = new ViewLeadPage(page) // new page reference
await loginfix.loadurl("http://leaftaps.com/opentaps/control/main")
await loginfix.enterCredentails("demosalesmanager","crmsfa")
await loginfix.clickLogin()
await welfix.clickCRM()
await homfix.clickLead()
await leadfix.clickCreateLead()
await crleadfix.enterMandatory()
await crleadfix.clickSubmit()
await vpfix.verifyFirstName()
//await page.waitForTimeout(3000) // This is just to view the completion of the process
   
})