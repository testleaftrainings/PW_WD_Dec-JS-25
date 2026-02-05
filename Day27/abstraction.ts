

abstract class BaseBank{

    /* Notes:
    1, We will not able call the resuable methods in our  abstract.(case auditTranscations()) using a object 
    2. In abstract class we will have implemented as well as unimplemented method (method signature)*/

    auditTranscations(){ // concerete method
        console.log("Transactions audited by RBI");
        
    }

    abstract interestRatePolicy() : number //Unimpelemented method / method signature
}


export class SBIBank extends BaseBank{ // Concrete class 
 
    openAccount(){
        console.log("SBI account opened");        
    }

    depositMoney(){
        console.log("SBI Money depositing limit");
        
    }
 withdrawalMoney(){
        console.log("SBI Money withdrawal limit");
        
    }

     interestRatePolicy(): number {
        return 7.0
    }
 

}



class HDFCBank extends BaseBank{
 openAccount(){
        console.log("HDFC account opened");        
    }

    depositMoney(){
        console.log("HDFC Money depositing limit");
        
    }
 withdrawalMoney(){
        console.log("HDFC Money withdrawal limit");
        
    }

    interestRatePolicy(): number {
        return 5.0
    }
    
}