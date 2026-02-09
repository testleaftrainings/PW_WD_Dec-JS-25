

import { test as baseT } from "@playwright/test";
import { LoginPage } from "../pages/01-loginPage";
import { WelcomePage } from "../pages/02-welcomePage";
import { HomePage } from "../pages/03-homePage";
import { LeadPage } from "../pages/04-leadPage";
import { CreateLeadPage } from "../pages/05-createPage";
import { ViewLeadPage } from "../pages/06-viewLeadPage";

//Note " baseT is another name alis name for test"

type myFixture = {   
loginfix:LoginPage,
welfix:WelcomePage,
homfix:HomePage,
leadfix:LeadPage,
crleadfix:CreateLeadPage,
vpfix:ViewLeadPage                  
}


export const test1 = baseT.extend<myFixture>({

loginfix: async({page},use)=>{    
    const lop = new LoginPage(page)    
    await use(lop) 
},

welfix: async({page},use)=>{    
    const wp = new WelcomePage(page)    
    await use(wp) 
},
homfix: async({page},use)=>{    
    const hp = new HomePage(page)    
    await use(hp) 
},
leadfix: async({page},use)=>{    
    const lp = new LeadPage(page)    
    await use(lp) 
},
crleadfix: async({page},use)=>{    
    const clp = new CreateLeadPage(page)    
    await use(clp) 
},
vpfix: async({page},use)=>{    
    const vp = new ViewLeadPage(page)    
    await use(vp) 
},
//Note : loginfix contains page ficture as well as the object of the class LoginPage


})

/* Notes :

Normal page fixture : OPen browser, Open new context, open new page

CUstomised page fixture : OPen browser, Open new context, open new page + login fucntionality*/