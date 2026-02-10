import { test1 } from "./fixture";

test1(`Using custom fixture`,async ({page1}) => {
    

    console.log(await page1.title());

    await page1.locator(`//a[text()="Accounts"]`).click();
    


})