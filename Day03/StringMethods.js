let values="Playwright@20 05"
//count number of chars -> length
console.log("Total number of chars :",values.length)
//index start from '0'

//charAt -> print value based on index
console.log("charAt value :",values.charAt(5))

//upper or lower case
let nan="javaScript"
console.log("upper case :",nan.toUpperCase())
console.log("Lower case :",nan.toLowerCase())

//concat
let a="Play"
let b="wright"
console.log(a.concat(b))

//split 
let info="week1 Basic of JavaScript"
let sm=info.split(" ")
console.log(sm)
for(let i=0;i<sm.length;i++){
    console.log(sm[i])
}