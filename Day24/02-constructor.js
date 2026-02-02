// //Scenario1 => Basic creation of class and calling the method
// class Employee{
//     empName="Ravindran" // property is global
//     payroll(){
//         console.log(`Employee payroll process ${this.empName}`);
//     }
// }
// const emp = new Employee()
// emp.payroll() 
// //Scenario2 : Methods with parameter (Local variable)
// class Employee1 {
//     empDetails(empName : string,empId : string){ // empName and empId ==> local variable to capture the value passed through an argument at the time of calling of the method
//         console.log(`Employee name is ${empName}, id is ${empId}`); //empName = Ravi and empId=Emp123       
//     }
// }
// const emp1 = new Employee1()
// emp1.empDetails("Ravi","Emp123") // 
//Scenario3 : Special method called "constructor"
// class Employee2 {
//     constructor(){ // Default constructor
//         console.log("This is a special method called constructor");       
//     }
//     payroll(){
//         console.log("Employee payroll process");       
//     }
// }
//  new Employee2()// object creation => the special method called constructor is called immedialtely when an object is being created
//Scenario4 => Parameterized constructor
var Employee3 = /** @class */ (function () {
    function Employee3(name, id) {
        console.log("Parametrized consdtructor ".concat(name, "and id ").concat(id)); //name = "Hari" and id = "emp123"
        this.empName = name; // empName which global variable/property is assigned the value of local variabloe name which is "Hari"
        this.empId = id;
    }
    Employee3.prototype.printEmployeeDetails = function () {
        console.log("Employee name is ".concat(this.empName, " , id is ").concat(this.empId));
    };
    return Employee3;
}());
var emp3 = new Employee3("Hari", "emp123");
emp3.printEmployeeDetails();
