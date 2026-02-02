
class LoginPage{ // WelcomePage // HomePage // LeadPage // LeadCreationPage

   //properties
    username ="democsr2"
    password = "crmsfa"
    clickLogin ="SubmitButton"

    //methods => Actionable

    fillCredentials(){
        console.log(`Fill the credentials username ${this.username}`);// "this" keyword to acces the properies inside a method of the current class
        console.log(`Fill the credentials password ${this.password}`);    

    }

    clickButton(){
        console.log(`Click the Submit button ${this.clickLogin}`);
        
    }

   }

const login = new LoginPage() // Syntax to create an object to invoke a method // perform an action
login.fillCredentials() // First actionable performed by calling a method fillCredentials() inside a class
login.clickButton() // Second actionable performed by calling a method clickButton() insode a class


/* function -> Named Function

fillCredentials(){

}

fillCredentials()
*/

// const locators = {
// username : "#username"

// }