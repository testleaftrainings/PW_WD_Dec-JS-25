import test from '@playwright/test'

import loginInfo from '../../Utils/LT_Login.json'

//test.use({storageState})

let value=loginInfo[0]
//DemoSalesManager
//for(let value of) loginInfo{}

test(`Read the Json File ${value.TestID}`,async({page})=>{
/*//${}
   // console.log("Hi 'welcome's"+value.TestID)
console.log(`Read value : ${value.username}`)*/

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill(value.username)
await page.locator("#password").fill(value.password)
await page.locator(".decorativeSubmit").click()
await page.waitForTimeout(3000)

})
