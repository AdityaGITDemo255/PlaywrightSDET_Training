
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

//start test runner
import {test,expect} from "@playwright/test";


test("Test for Orangehrm application title and url validation",async({page})=>{

//open application
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//get the title: title()
let appTitle:string=await page.title();

//Page level assertion: autowait of 5sec is applicable here
await expect(page).toHaveTitle("OrangeHRM");

//variable level assertion: toBe() ===
expect(appTitle).toBe("OrangeHRM");

console.log("Application title: "+appTitle);

//to get the url : url()
let appUrl:string=page.url();

//full match
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//partial url- index
await expect(page).toHaveURL(/index/);


//partial url index.php
await expect(page).toHaveURL(/index\.php/);

console.log("Application url is: "+appUrl);

//variable level assertion
expect(appUrl).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
expect(appUrl).toContain("index.php");

console.log("Application url is: "+appUrl);







})