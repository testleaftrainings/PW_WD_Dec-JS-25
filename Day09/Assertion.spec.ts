import { expect, test } from '@playwright/test'

test("Assertion Auto Retry", async ({ page }) => {

await page.goto("https://www.leafground.com/input.xhtml")

await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeEnabled()
//toBeDisabled({timeout:10000})

console.log("Assertion Pass")
})
// npx playwright test Assertion.spec.ts --debug


test.only("Assertion Non -Retry ",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

   const title= await page.title()
   const exTitle="Leaftaps - testLeaf Automation Platform"
    expect.soft(exTitle).toEqual(title)
console.log("Pass")



})