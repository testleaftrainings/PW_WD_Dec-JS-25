let empName1="Dinesh"
//hseniD
let rev=""
for(let i=empName1.length;i>=0;i--){
    //[h,s,e,n,i,D]
    rev=rev+empName1.charAt(i)
    //hseniD
   // console.log(empName1.charAt(i))
}
console.log(rev)


let content="Java"
let final =content.split("").reverse().join("")
console.log(final)