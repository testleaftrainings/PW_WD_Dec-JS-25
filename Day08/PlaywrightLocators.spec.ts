import { test } from '@playwright/test'

test("Locators",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.getByRole("textbox",{name:"username"}).fill("DemoSalesmanager")
    await page.getByLabel("Password").fill("crmsfa")
    await page.getByRole("button",{name:"Login"}).click()
    await page.getByText("CRM/SFA").click()
    





})