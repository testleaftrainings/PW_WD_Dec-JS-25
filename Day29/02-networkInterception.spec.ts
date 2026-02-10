import { test } from "@playwright/test";

//test.use({ storageState: "Data/sf_login_storage.json" })

test(`Learn network interception using Playwright`, async ({ page, request }) => {


    page.route(`**/aura?preloadActions`,async (route,request) => {
            if(request.method()==='POST'){

                console.log(`Request URL : ${request.url()}`);
                console.log(`Request headers: ${JSON.stringify (request.headers(),null,2)}`);               
                /* This null,2 will:
                COnvert the headerrs object in to JSON string.
                null 2 addes indentation for better readability */
            }else{
                route.continue(); // means continue to interact with your server
            }


    })



    await page.goto(`https://login.salesforce.com/?locale=in`);

    await page.getByRole("textbox", { name: "Username" }).fill(`ravindran.ramdas@testleaf.com`);
    await page.getByRole("textbox", { name: "Password" }).fill(`Ravitestleaf#1234`);

    await page.getByRole(`button`, { name: "Log In" }).click();

    await page.getByRole(`button`, { name: "App Launcher" }).click();

    await page.getByRole(`button`, { name: "View All Applications" }).click();

    await page.getByPlaceholder(`Search apps or items...`, { exact: true }).fill("Leads");

    await page.getByText(`Leads`, { exact: true }).click();

    await page.waitForTimeout(6000);
})