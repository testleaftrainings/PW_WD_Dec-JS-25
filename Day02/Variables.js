//var -> Redeclaration and Reassignment allowed
var input ="10"
//reassignment
input ="30"
//redeclaration
var input =true
console.log(input)

//let -> Reassignment allowed, Redeclaration not allowed
let data=2026
data="Dilip" //reassignment
//let data="Dilip" //redeclaration not allowed
console.log(data)

//const -> Reassignment and Redeclaration not allowed

const pi=3.14
pi=3.15
console.log(pi)