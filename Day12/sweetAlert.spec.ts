import test from '@playwright/test'

test("sweet alert",async({page})=>{

await page.goto("https://www.leafground.com/alert.xhtml")
await page.locator("(//span[text()='Show'])[3]").click()
await page.locator("//span[@class='ui-icon ui-icon-closethick']").first().click()
})