import test from '@playwright/test'

test("Handle the frame with index",async({page})=>{
await page.goto("https://www.leafground.com/frame.xhtml")
//index value starts from 0
const count = page.frames()
console.log("Total frames are: "+count.length);
//main window or main page will considered as frame 0
//mainpage[0] -> frame 1[1] -> frame 2[2]
 const frame1= count[1] //switch to frame 1
 await frame1.locator("#Click").click()
 await page.waitForTimeout(3000);

//1,2,3,4,5-hum
//0,1,2,3,4-sys
//nested frame

const frame4=count[4]
await frame4.locator("#Click").click()
await page.waitForTimeout(3000);
})