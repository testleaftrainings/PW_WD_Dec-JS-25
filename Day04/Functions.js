//Named functions add()
function add(value){
console.log(value)
}

//call the function
add(56)
add(true)

//AnonymousFunction -> function(){}  ->setTimeout
setTimeout(function(){
    console.log("Welcome")
},2000)


//2015 -> ES6 -> function -> arrow function -> ()=>
let arrow=(studId,StdName)=> {(studId+" "+StdName)
console.log(arrow(45,"Java"))
}

