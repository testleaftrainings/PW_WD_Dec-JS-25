import test from '@playwright/test'

test("Using Page Fixture",async({page})=>{

    await page.goto("https://www.gmail.com")

})