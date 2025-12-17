//scoping 
//var scoping ->function scoped or global scoped
//let and const -> block scoped ->{}

var week="Wendesday"
{
    var day="Monday"
    let month="January"
    //let month
    const year=2024

    console.log("Inside the Block : "+month)
    console.log("Inside the Block : "+day)
    console.log("Indside the Block : "+week)

}
//console.log("Outside the Block : "+month)//ReferenceError: month is not defined 
    console.log("Outside the Block : "+day) 
        console.log("outside the Block : "+week)
