import test  from '@playwright/test'

test("Locator using with Css",async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")

await page.locator("#username").fill("DemoSalesManager")

await page.locator("[name='PASSWORD']").fill("crmsfa")

await page.locator(".decorativeSubmit").click()

await page.waitForTimeout(4000)

//get the title
let title =await page.title()
console.log(title)

await page.locator("text='CRM/SF'").click()









})