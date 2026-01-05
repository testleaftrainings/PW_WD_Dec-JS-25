// AND condition 
var val;
var details = {
    empName: "Dilip",
    empID: 56,
    stdName: "Kumar",
};
console.log(details, typeof details);
//optional parameter   - '?'
//url?:string
function data(empname, empno, status) {
    console.log(empname, empno, status);
}
data("Dilip", 123, true);
