

//start the test runner
import {test,expect} from "@playwright/test";


test("Test for validate google title and url",async({page})=>{

//open application
await page.goto("https://www.google.com/");

//to get the title 
let appTitle:string=await page.title();

//to match exact title
await expect(page).toHaveTitle("Google");//if assertion fail it will throw error after 5sec
console.log("Title validated!");
console.log("Application title is: "+appTitle);

//get the current url of application
let appCurrentUrl:string=page.url();

//exact full url match
await expect(page).toHaveURL("https://www.google.com/");
console.log("Application url: "+appCurrentUrl);

//validate partial url: url must contains google:/Regular expression/
//add before every special symbol just backword slash \
await expect(page).toHaveURL(/google/);
//match google.com: regular expression
await expect(page).toHaveURL(/google\.com/);
await expect(page).toHaveURL(/https\:\/\/www\.google\.com/);
console.log("Partial Url matched!");

//variable based
expect(appCurrentUrl).toBe("https://www.google.com/");
expect(appCurrentUrl).toContain("google.com");





/*
let expTitle="Google";

if(appTitle === expTitle)
{
    console.log("Title matched!");
    
}else
{
    console.log("Title not matched!");
    
}*/





})