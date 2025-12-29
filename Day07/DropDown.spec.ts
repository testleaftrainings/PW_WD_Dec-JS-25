import { test } from '@playwright/test'
test("select and Option Tag",async({page})=>{
await page.goto("https://www.leafground.com/select.xhtml")

await page.selectOption(".ui-selectonemenu",{label:"Playwright"})
await page.waitForTimeout(3000)
await page.selectOption(".ui-selectonemenu",{index:1})
})

test("Non Select tag",async({page})=>{
await page.goto("https://www.leafground.com/select.xhtml")
await page.locator("[id='j_idt87:country_label']").click()
await page.locator("[id='j_idt87:country_4']").click()

//await page.locator("(//input[@class='inputLogin'])[2]").fill("Demo")

})