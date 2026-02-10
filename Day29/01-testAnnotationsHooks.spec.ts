import test from '@playwright/test';
import fs from 'fs'

import { parse } from 'csv-parse/sync';
import path from 'path';


test.describe.serial(`Test executed in the serial mode`,async () => {
    
let value : any[]
//Data connectivity -> set first in the script --> beforeAll

test.beforeAll(`Read data from CSV`,async () => {
console.log(`Before ALl executed ones for data connectivity`);

const csvPath = path.join(__dirname, '../../Data/Utils', 'LT_Login.csv');

value=parse(fs.readFileSync(csvPath),{
    columns:true,
    skip_empty_lines :true
})
})
//const data=value[0]


test.beforeEach(`Befor Each test axecution of lead and accounts module at the time of test execution`,async({page})=>{
console.log(`BeforeEach executed for each and every module`);
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill(value[0].username)
await page.locator("#password").fill(value[0].password)
await page.locator(".decorativeSubmit").click();
await page.locator(`//a[contains(text(),"CRM")]`).click()
await page.waitForTimeout(3000)
})

test(`Lead Module`,async ({page}) => {
    console.log(`Executiong the lead module`);

    await page.locator(`//a[text()="Create Lead"]`).click()
    await page.waitForTimeout(3000)
})

test(`Account Module`,async ({page}) => {
    console.log(`Executiong the Account module`);

    await page.locator(`//a[text()="Create Account"]`).click()
    await page.waitForTimeout(3000)
})

test.afterEach(`Fectch the test ststus pf wach test`,async ({},testinfo) => {
    console.log(`Executiog after each test execution`);
    console.log(testinfo.status);
    console.log(testinfo.title); 
})

test.afterAll(`Test report generation`,async () => {
    console.log(`afterAll test exection ones the entire Report shared to JIRA platform`);
    
})
})
/* Notes :

login page --> Lead Module
           ---> Account Module*/