var LoginPage = /** @class */ (function () {
    function LoginPage() {
        //properties
        this.username = "democsr2";
        this.password = "crmsfa";
        this.clickLogin = "SubmitButton";
    }
    //methods => Actionable
    LoginPage.prototype.fillCredentials = function () {
        console.log("Fill the credentials username ".concat(this.username)); // "this" keyword to acces the properies inside a method of the current class
        console.log("Fill the credentials password ".concat(this.password));
    };
    LoginPage.prototype.clickButton = function () {
        console.log("Click the Submit button ".concat(this.clickLogin));
    };
    return LoginPage;
}());
var login = new LoginPage(); // Syntax to create an object to invoke a method // perform an action
login.fillCredentials(); // First actionable performed by calling a method fillCredentials() inside a class
login.clickButton(); // Second actionable performed by calling a method clickButton() insode a class
/* function -> Named Function

fillCredentials(){

}

fillCredentials()
*/ 
