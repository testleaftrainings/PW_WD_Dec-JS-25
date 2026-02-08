import { test } from "@playwright/test";

test(`Storage state`, async ({page}) => {

    await page.goto(`https://login.salesforce.com/?locale=in`);

await page.getByLabel(`Username`).fill(`ravindran.ramdas@testleaf.com`)// label tag

//await page.getByRole(`textbox`,{name:"Username"}).fill(`ravindran.ramdas@testleaf.com`); // Accessibilty

await page.getByRole(`textbox`,{name:"Password"}).fill("Ravitestleaf#1234")

await page.getByRole(`button`,{name:"Log In"}).click();

await page.getByTitle(`App Launcher`,{exact:true}).click();
    //Get the login details
    await page.context().storageState({path:"Data/sf_login_storage.json"})  
})