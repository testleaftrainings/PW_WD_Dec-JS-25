let pm=new Promise((resolve,reject)=>{
console.log("Order food")
// setTimeout(()=>{
//     resolve("Food is ready")
// },5000)
resolve("Hi")
reject("Welcome")
})

pm.then(res=>console.log(res)).catch(err=>console.log(err))


//es8 -> 2017
//asycn and await 
async function ada(){
    await pm() // -> promise
}