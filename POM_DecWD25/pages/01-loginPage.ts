/* 
Actions:
1. Loading url.
2. Enter Credentials
3. Click Login. */

import { chromium, Page} from "@playwright/test"

export class LoginPage {

    page : Page // Global declaration // Explicit inference
//lppage == page
    constructor(Lpage:Page){ // Parameterized constructor // name and id is local variable
        this.page=Lpage // empName which global variable/property is assigned the value of local variabloe name which is "Hari"

       //1.Lpage == page got it at the time of object creation passed as a constructor argument
        //2. Gpage == Lpage local variable Tpage is assigning the value to the GLobal variable lppage
        //3. Gpage can be used in all the methods inside the class using "this" keyword
    
    }

    async loadurl(url:string) {
             await this.page.goto(url)   // goto(), locator() all these methods are dependent on "page"
            }

    async enterCredentails(username:string, password:string) {

        await this.page.locator(`#username`).fill(username);
        await this.page.locator(`#password`).fill(password)
    }

    async clickLogin() {

        await this.page.locator(`.decorativeSubmit`).click()
    }

  


}

// async function doLogin(){

// const browser = await chromium.launch({ headless: false })
// //open the window
// const context = await browser.newContext()
// //open the page
// const page = await context.newPage()
//  // blank page/*  */

// const login = new LoginPage(page) // blank page
// await login.loadurl("http://leaftaps.com/opentaps/control/main")
// await login.enterCredentails("demosalesmanager","crmsfa")
// await login.clickLogin()

// await page.waitForTimeout(3000) // This is just to view the process
// await login.closeBrowser()


// }


// doLogin()