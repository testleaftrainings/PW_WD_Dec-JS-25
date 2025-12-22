//-> ParstInt -> convert string value into number
let price="2500"
let num=parseInt(price)
console.log(num , typeof(num))

//substring -> print the data based on index (+ve index value)
let topic="Playwright"
//starting index from 2 ->aywright
//starting and ending index-1 (2,7)=>(2,6)->aywri
let start=topic.substring(3)
console.log(start)
let end=topic.substring(3,8)
console.log(end)

//slice -> same as substring(both +ve , -ve)
let cc="JavaScript"
//10
let sliceValue=cc.slice(-4,-2)
//10-2->8
//10-4->6 (8,5)
console.log(sliceValue)