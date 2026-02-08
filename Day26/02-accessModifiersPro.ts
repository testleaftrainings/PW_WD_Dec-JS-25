import { EmployeeSignUp } from "./01-accessModifiers";


class HR extends EmployeeSignUp{ 
    
/* // Note : "extends" keyword is used to connect between BaseClass and Derived Class
// This is called Singlr Inheritance */

  dep : string

constructor(){
    super() // Here the parent constructor will be called first 
// super keyword to be used immedialtely/first statement after a constructor is created in the derived/child class that extends/ inheits the base/parent class that has constructor
    this.dep = "QA"
    console.log(`This is a derived class constructor`);   
    
}

empUpdate(){
console.log(this.ephno, this.dep)
//this.ephno=7897836
}

}

const emphr = new HR()
emphr.empUpdate()
emphr.printDetails()
console.log(emphr.readData)
emphr.writeData= 99999
console.log(emphr.readData)