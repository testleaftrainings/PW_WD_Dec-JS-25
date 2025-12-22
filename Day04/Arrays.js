//[] -> array

let value=[23,"Javascript",false,,null]
//let empName=["Ravi","Dinesh",""]
//find length of the array
//5 -> array index value start from'0'

console.log("length of the array :",value.length)

console.log("Index of 2 :",value[3])

//push,pop,unshift,shift
//push and pop
//push -> add value in end the array
value.push("Dilip")
console.log(value)
//pop-> remove the value from end the array
value.pop()
console.log(value)

value[3]=78
console.log(value)
//unshift and shift
//unshift -> add the value in start of the array
//shift -> remove the value in start of the array
value.unshift(true)
console.log(value)
value.shift()
console.log(value)

let num=[3,6,1,true,8,"d",,null]
num.sort()
console.log(num)

//for..of and ForEach
for( val of num){
    console.log(val)
}

//forEach
num.forEach((a)=>{
    console.log(a)
})



// for(let i=0;i<num;i++){
// }