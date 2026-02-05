
import { test } from "@playwright/test";
import {SBIBank} from "./abstraction"

test(`SBI Bank test case`,async () => {
        const sb = new SBIBank();
        sb.openAccount();                                               
        sb.depositMoney();
        sb.withdrawalMoney();
        console.log(sb.interestRatePolicy()); 
        sb.auditTranscations();
})