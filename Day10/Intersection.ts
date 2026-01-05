// AND condition 
let val:number&boolean

// type alies -> custom name to type
type emp={

    empName:string
    empID:number
} 

type stud={
    stdName:string
    stdID?:number //optional parameter
}

type clg=emp&stud

let details:clg={
    empName:"Dilip",
    empID:56,
    stdName:"Kumar",
    

}

console.log(details , typeof details)




//optional parameter   - '?'
//url?:string

function data(empname:string,empno?:number,status?:boolean){
console.log(empname,empno,status)
}

data("Dilip",123,true)