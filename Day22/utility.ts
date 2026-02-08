import { APIRequestContext } from "@playwright/test";

let x : string ="Ravindran" // Here explicit inference means conveying typescript what x is holding

let token: any
let inst_url: any
let tokenType: any
let id : any

export async function generateToken(request:APIRequestContext){

    const response = await request.post(`https://login.salesforce.com/services/oauth2/token`,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "client_id": "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB",
                "client_secret": "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260",
                "username": "ravindran.ramdas@testleaf.com",
                "password": "Ravitestleaf#1234",
                "grant_type": "password"

            }

        })
    const responseBody = await response.json();
    console.log(responseBody);

    console.log(response.status()); // 200 
    console.log(response.statusText());// OK

    token = responseBody.access_token;
    inst_url = responseBody.instance_url
    tokenType = responseBody.token_type
}

/* ******************************************************************** */

export async function createLead(request:APIRequestContext){

    await generateToken(request)

    const response = await request.post(`${inst_url}/services/data/v65.0/sobjects/Lead`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}` // Bearer 00DNS000001rTAX!AQEAQCGih8I780p1QDziNOb1amNKvXAW8zgG4fS3NzR7zy8diCTb1gvjdRg8zsc5LXnVGzlSBvWnFWhk7JPsXmovwNqFDuqk
            },
            data: {
                "Salutation": "Mr.",
                "FirstName": "Ravindran_PW_DecWD",
                "LastName": "280126",
                "Company": "Testleaf/Qeagle"
            }
        })

        const responseBody= await response.json();
        console.log(responseBody);

        console.log(response.status());
        console.log(response.statusText());

        id = responseBody.id  
        console.log(id); 
}


export async function fetchLead(request:APIRequestContext){

 const response = await request.get(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
        {
            headers:{
                "Authorization": `${tokenType} ${token}`
            }
        })

    const responseBody = await response.json();
    console.log(responseBody);

    console.log(response.status());
    console.log(response.statusText());

    return responseBody.LastName //280126
    
}
