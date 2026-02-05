import { LeadPage } from "./04-leadPage";


export class CreateLeadPage extends LeadPage{

async enterMandatory(){

    await this.page.locator(`#createLeadForm_companyName`).fill("Testleaf")
     await this.page.locator(`#createLeadForm_firstName`).fill("Ravindran")
      await this.page.locator(`#createLeadForm_lastName`).fill("R")
}


async clickSubmit(){
    await this.page.locator(".smallSubmit").click()
}
}