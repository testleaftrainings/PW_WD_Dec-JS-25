

class ElementActions {

//METHOD SIGNATURE

public click(element: string): void
public click(element: string,forceClick:boolean): void

//SINGLE METHOD IMPLEMENTATION

    click(element: string,forceClick?:boolean): void{

        if(forceClick){ // forceClick is optional parameter, it can be undefined, so we need to check if it is true or not
        console.log(`Forcible Clicking on element ${element}`);
    }else{
        console.log(`Normal Clicking on element ${element}`);
    }

    //NORMAL METHODOVERADING IS NOT POSSIBLE IN TYPESCRIPT. WE CAN ACHIEVE THE SAME USING OPTIONAL PARAMETERS
    // click(element: string,forceClick:boolean): void{
    //     console.log(`Clicking on element ${element}`);
    // }

}
}

const actions = new ElementActions();

actions.click("#LoginButton",true);
