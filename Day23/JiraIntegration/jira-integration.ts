import axios from "axios"

const endpoint="https://manual-testing-demoproject.atlassian.net/rest/api/2/issue"
const username ="ravindranr90@gmail.com"
const apiKey = "ATATT3xFfGF0aMAr-S2ikrqjSN3bjeb_X4sYJbPZ9KuQj2Y9WxLsgqtlSTOdEdRFqayjII-AWqVPQS5SXaKYrnZpANrTSRZRHw2qt6Pl6dSwh8ihQYTQ7xI7p6A0JCg_wH1XXMj5F-_D1djy8Ws8GaeRdjbTgob7Po0jMff2hBZ3-LVlCd4Tp6k=20D31381"
const projectId="PC"


export async function createJiraIssue(summary:string, description:string){

const issueRequestJson = {
    "fields":{
        "project":{
            "key":projectId
        },
         "summary":summary,
    "description":description,
    "issuetype":{
        "name":"Bug"
    }
    }

}

await axios.post(endpoint,issueRequestJson,
    {
        auth:{
            username:username,
            password :apiKey 
        },
        headers:{
            'Content-Type':`application/json`
        }
    }

)

}

//Send the POST request

