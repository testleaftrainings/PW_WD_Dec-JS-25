function orderFood(payment,val){
    console.log("Food order",val)

    setTimeout(()=>{
        prepareFood(payment)//prepare food
       //callback()
    },5000)
}

function prepareFood(payment){
    console.log("Prepare food")
   // callback() //delivery 
   delivery(payment)
}

function delivery(payment){
    console.log("food Delivered")
    payment() //payment
}

function payment(){
console.log("Done")
}


orderFood(payment,"hi")


//1 or 2 -> call back
//more than 2 function-> callback hell