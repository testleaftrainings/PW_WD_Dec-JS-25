

import { test as baseT, Page } from "@playwright/test";

//Note " baseT is another name alis name for test"

type myFixture = {   
page1:Page                        
}


export const test1 = baseT.extend<myFixture>({

page1: async({page},use)=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.getByRole("textbox",{name:"username"}).fill("DemoSalesmanager")
    await page.getByLabel("Password").fill("crmsfa")
    await page.getByRole("button",{name:"Login"}).click()
    await page.getByText("CRM/SFA").click()

    await use(page) 
// use sepeartes pre-written setup code** that runs **before your test starts** and  
// **cleanup code** that runs **after your test ends**.
 //   await page.close()


}

})

/* Notes :

Normal page fixture : OPen browser, Open new context, open new page

CUstomised page fixture : OPen browser, Open new context, open new page + login fucntionality*/