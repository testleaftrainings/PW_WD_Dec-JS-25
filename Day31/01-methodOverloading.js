var ElementActions = /** @class */ (function () {
    function ElementActions() {
    }
    //SINGLE METHOD IMPLEMENTATION
    ElementActions.prototype.click = function (element, forceClick) {
        if (forceClick) { // forceClick is optional parameter, it can be undefined, so we need to check if it is true or not
            console.log("Forcible Clicking on element ".concat(element));
        }
        else {
            console.log("Normal Clicking on element ".concat(element));
        }
        //NORMAL METHODOVERADING IS NOT POSSIBLE IN TYPESCRIPT. WE CAN ACHIEVE THE SAME USING OPTIONAL PARAMETERS
        // click(element: string,forceClick:boolean): void{
        //     console.log(`Clicking on element ${element}`);
        // }
    };
    return ElementActions;
}());
var actions = new ElementActions();
actions.click("#LoginButton", true);
