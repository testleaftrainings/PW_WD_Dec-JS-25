import { expect, test } from "@playwright/test";


test(`Learn Visual Regression testing`,async ({page}) => {
  
    
    await page.goto(`https://www.flipkart.com/`);

    const ss = await page.screenshot(); // baseline image => used to compare with the forthcoming screenshot

    expect(ss).toMatchSnapshot();
    
})
