

import {test,expect} from "@playwright/test"


test("Test for SwagLab application launch",async({page})=>{

await page.goto("https://www.saucedemo.com/");


let appTitle:string=await page.title();
let titleStatus:boolean=appTitle === "Swag Labs";

await expect(page).toHaveTitle("Swag Labs");//page level assertion
//Ensures that value is true in a boolean context
expect(titleStatus).toBeTruthy();//generic assertion
expect(appTitle).toBe("Swag Labs");

console.log("Application title matched: "+appTitle);

await page.waitForTimeout(2000);

})