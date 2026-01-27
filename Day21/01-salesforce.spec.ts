
//To do in POSTMAN API testing for SERVICE NOW:

/* 1. Endpoint
2. Headers
3. Authorization
4. Request Body.
5. HTTP Methods - CRUD operation- POST, GET, PATCH... */



import { expect, test } from "@playwright/test";

let token: any
let inst_url: any
let tokenType: any


test.describe.serial(`Sales API testing`,async () => {

let id : any
test(`Generate a token`, async ({ request }) => {

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

    expect(response.status()).toBe(200);    
    expect(response.statusText()).toBe("OK");

    token = responseBody.access_token;
    inst_url = responseBody.instance_url
    tokenType = responseBody.token_type
})


test(`Create a Lead for Salesforce`, async ({ request }) => {

    const response = await request.post(`${inst_url}/services/data/v65.0/sobjects/Lead`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}` // Bearer 00DNS000001rTAX!AQEAQCGih8I780p1QDziNOb1amNKvXAW8zgG4fS3NzR7zy8diCTb1gvjdRg8zsc5LXnVGzlSBvWnFWhk7JPsXmovwNqFDuqk

            },
            data: {
                "Salutation": "Mr.",
                "FirstName": "Ravindran_PW_DecWD via PlaywrightAPI",
                "LastName": "PlaywrightTrainer",
                "Company": "Testleaf/Qeagle"
            }
        })

        const responseBody= await response.json();
        console.log(responseBody);

        console.log(response.status());
        console.log(response.statusText());

        expect(response.status()).toBe(201);
        expect(response.statusText()).toBe("Created");

        id = responseBody.id  
        console.log(id);      

})

test(`Fetch the specific lead from salesforce`,async ({request}) => {
    

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

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    
    })

test(`Update a Lead for Salesforce`, async ({ request }) => {

    const response = await request.post(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}` // Bearer 00DNS000001rTAX!AQEAQCGih8I780p1QDziNOb1amNKvXAW8zgG4fS3NzR7zy8diCTb1gvjdRg8zsc5LXnVGzlSBvWnFWhk7JPsXmovwNqFDuqk

            },
            data: {
                "Salutation": "Mr.",
                "FirstName": "Ravindran_PW_DecWD via PlaywrightAPI",
                "LastName": "Updated-PlaywrightTrainer",
                "Company": "Updated-Testleaf/Qeagle"
            }
        })


        console.log(response.status());
        console.log(response.statusText());
        expect(response.status()).toBe(204);
        expect(response.statusText()).toBe("No Content");   

})

test(`Delete the specific lead from salesforce`,async ({request}) => {
    

    const response = await request.delete(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
        {
            headers:{
                "Authorization": `${tokenType} ${token}`
            }
        })


    console.log(response.status());
    console.log(response.statusText());

    expect(response.status()).toBe(204);
    expect(response.statusText()).toBe("No Content");
    
    })


})
/* Short-cut for paragraph commenting alt+shift+a
Short-cut for formating your code alt+shift+f  */