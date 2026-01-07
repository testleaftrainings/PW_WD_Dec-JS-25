import test from '@playwright/test'

test("Handle the frame with FrameObject",async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")

//frameObject-> name attribute and url-> src  
//frame({name:''})?
await page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator("#Click").click()

})
