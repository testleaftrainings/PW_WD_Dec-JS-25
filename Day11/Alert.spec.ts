//default playwright features for handling the alert
//autodismisses the alert

import test from '@playwright/test'

test("Alert handling - Auto Dismiss", async ({ page }) => {

    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.click("(//span[text()='Show'])[2]")
})

//Page.on() and Page.once()
//page.on() -> handle multiple alerts
//page.once() -> handle single alert -> first alert only

test("Alert handling - Using Page.once()", async ({ page }) => {

    page.once('dialog', dialogBox=>{
        console.log("Type of the alert is :"+ dialogBox.type())
        console.log("Message of the alert is :"+ dialogBox.message())
        if(dialogBox.type() === 'alert'){
             dialogBox.accept()
        }else if(dialogBox.type() === 'confirm'){
            dialogBox.accept()
        }
    })
    

await page.goto("https://www.leafground.com/alert.xhtml")

//confirm alert
    await page.click("(//span[text()='Show'])[2]")
    await page.waitForTimeout(5000)

//simple alert === alert
await page.click("(//span[text()='Show'])[1]")
await page.waitForTimeout(5000)


})

test.only("Alert handling - Using Page.on()", async ({ page }) => {
//page.on -> multiple alerts
    page.on('dialog', dialogBox=>{
        console.log("Type of the alert is :"+ dialogBox.type())
        console.log("Message of the alert is :"+ dialogBox.message())
        if(dialogBox.type() === 'alert'){
             dialogBox.accept()
        }else if(dialogBox.type() === 'confirm'){
            dialogBox.accept()
        }
    })
    

await page.goto("https://www.leafground.com/alert.xhtml")



//simple alert === alert
await page.click("(//span[text()='Show'])[1]")
await page.waitForTimeout(5000)

//confirm alert
    await page.click("(//span[text()='Show'])[2]")
    await page.waitForTimeout(5000)


})