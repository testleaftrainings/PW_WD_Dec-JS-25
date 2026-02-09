import { Page } from "@playwright/test";

export abstract class PWWrapper{

      page: Page // Global declaration // Explicit inference
    //lppage == page
        constructor(Lpage: Page) { // Parameterized constructor // name and id is local variable
        this.page = Lpage // empName which global variable/property is assigned the value of local variabloe name which is "Hari"

        //1.Lpage == page got it at the time of object creation passed as a constructor argument
        //2. Gpage == Lpage local variable Tpage is assigning the value to the GLobal variable lppage
        //3. Gpage can be used in all the methods inside the class using "this" keyword

    }
async clearAndFill(locator:string,data:string){

       await this.page.locator(locator).clear();
       await this.page.locator(locator).fill(data);


}

}