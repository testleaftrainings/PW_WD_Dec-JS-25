import { test } from "@playwright/test";
import { createLead, fetchLead, generateToken } from "./utility";

test.use({ storageState: "Data/sf_login_storage.json" })

test(`Learn to do E2E API and UI testing using Playwright`, async ({ page, request }) => {

    await createLead(request)

    let lname = await fetchLead(request) // LastName will be returned 280126

    await page.goto(`https://testleaf22-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home`);

    // await page.getByRole("textbox", { name: "Username" }).fill(`ravindran.ramdas@testleaf.com`);
    // await page.getByRole("textbox", { name: "Password" }).fill(`Ravitestleaf#1234`);

    // await page.getByRole(`button`, { name: "Log In" }).click();

    await page.getByRole(`button`, { name: "App Launcher" }).click();

    await page.getByRole(`button`, { name: "View All Applications" }).click();

    await page.getByPlaceholder(`Search apps or items...`, { exact: true }).fill("Leads");

    await page.getByText(`Leads`, { exact: true }).click();

    await page.getByPlaceholder(`Search this list...`).fill(lname)

    await page.getByPlaceholder(`Search this list...`).press("Enter")

    await page.waitForTimeout(6000);
})