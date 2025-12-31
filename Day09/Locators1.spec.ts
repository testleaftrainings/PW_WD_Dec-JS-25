import { test } from '@playwright/test'

test("Locators with inbuild methods", async ({ page }) => {

    await page.goto("https://parabank.parasoft.com/parabank/index.htm")

    await page.getByRole('link',{name:'Forgot login info?'}).click()

    //await page.getByAltText("ParaBank").click()
    await page.getByTitle("ParaBank").click()

    await page.getByText("Locations").first().click()

    await page.getByRole('button', { name: 'Search' }).click()
   const a=  page.getByPlaceholder("Search")
    await a.fill('xyz')
    await a.press('Enter')


	
})