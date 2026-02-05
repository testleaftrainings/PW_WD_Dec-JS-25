import { LoginPage } from "./01-loginPage";


export class WelcomePage extends LoginPage{

    async clickCRM(){ // it is going to perform the click action on CRM button
        await this.page.locator(`//a[contains(text(),"CRM")]`).click()
    }
}