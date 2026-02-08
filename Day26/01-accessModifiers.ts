import { loadavg } from "node:os";


export class EmployeeSignUp{ // class name is pascal case

    
public eName : string;// properties are camelcase //By default the accessModifier is public
public static eid : string;
protected readonly ephno : number
private eSalary : number

constructor(){ // properties initialized using a special method called constructor
this.eName="Hari",
EmployeeSignUp.eid="Emp123"
this.ephno= 7897978789
this.eSalary= 76876
 console.log(`This is a base class constructor`);
}

printDetails(){
    console.log(`The emp details ${this.eName} : ${EmployeeSignUp.eid} : ${this.ephno} : ${this.eSalary}`);
    
}

public get readData(){ // "get" method helps to retrieve the private properties of a class
   return this.eSalary // Here "get" method gives permision to access the private properties to public 
}

public set writeData(newSal : number){ //Here newSal = 99999
    this.eSalary = newSal /// Here eSalary == newSal = 99999
}

}

// const emp = new EmployeeSignUp()
// emp.printDetails()
// console.log(emp.readData) // here emp.readData returns the salary when it is called - the old salary

// emp.writeData= 99999
// console.log(emp.readData); // here call emp.readData return the new Salary by using "set" keyword
