
/* 
Assignment1:Open website and verify title.
Steps
Navigate to website https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Verify page title
Verify URL
Expected
Correct title OrangeHRM should display
Correct URL should open

 */


// import test runner

import {expect, test} from "@playwright/test";



//start testcase 
test("Title_Url_Validation",async({page})=>{

//Navigate to website https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//Verify page title
let ExpectedTille:string ="OrangeHRM";
let ActualTitle:string = await page.title();  //capture current title of OrangeHrm page

//page level assertion 
await expect(page).toHaveTitle(ExpectedTille);


// variable level assertion

expect(ActualTitle).toBe(ExpectedTille);
console.log("Application Title is:"+ActualTitle);

//verify Url

let ActualUrl:string=page.url();
let ExpectedUrl:string = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

//page level assertion 
await expect(page).toHaveURL(ExpectedUrl);

//variable leve assertion 
expect(ActualUrl).toBe(ExpectedUrl);


//verify partial url 

//page level assertion -- url contains orangehrmlive.com 

expect(page).toHaveURL(/orangehrmlive\.com/);

//variable level assertion

expect(ActualUrl).toContain("orangehrmlive.com")

console.log("Application URL is :"+ActualUrl);





});