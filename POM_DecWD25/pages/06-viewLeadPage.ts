import { CreateLeadPage } from "./05-createPage";


export class ViewLeadPage extends CreateLeadPage{

    async verifyFirstName(){
        const fNAme =await this.page.locator("#viewLead_firstName_sp").innerText();

        console.log(fNAme);
        
    }
}