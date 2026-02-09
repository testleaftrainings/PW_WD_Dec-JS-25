/* 
Actions:
1. Loading url.
2. Enter Credentials
3. Click Login. */

import { chromium, Page } from "@playwright/test"
//import { selectors } from "./locators"
import { PWWrapper } from "../utility/playwrightWrapper"

export class LoginPage extends PWWrapper {

    async loadurl(url: string) {
        await this.page.goto(url)   // goto(), locator() all these methods are dependent on "page"
    }

    async enterCredentails(username: string, password: string) {

        // await this.page.locator(this.Loginselectors.login).fill(username);
        // await this.page.locator(this.Loginselectors.PwdField).fill(password)
        await this.clearAndFill(this.Loginselectors.usernameField, username)
        await this.clearAndFill(this.Loginselectors.PwdField, password)
    }

    async clickLogin() {
        await this.page.locator(this.Loginselectors.submitBtn).click()
    }



    Loginselectors = {
        "usernameField": "#username",
        "PwdField": "#password",
        "submitBtn": `.decorativeSubmit`
    }

}


