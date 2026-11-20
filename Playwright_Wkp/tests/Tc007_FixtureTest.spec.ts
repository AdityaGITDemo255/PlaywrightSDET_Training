import {test,expect,firefox,Browser, BrowserContext, Page, webkit, chromium, APIResponse} from "@playwright/test";



test("Test for Browser--->Context---->Page--->Application",async({})=>{

//start firefox session
let browser:Browser=await firefox.launch();

//newContext
let context:BrowserContext=await browser.newContext();

//newPage
let page:Page=await context.newPage();

//open application
await page.goto("https://www.saucedemo.com/");

//wait for 2sec
await page.waitForTimeout(2000);

//close
await page.close();
await context.close();
await browser.close();


    
})

test("Test for Browser-->Context---->TwoTabs with Different application",async({})=>{

//start webkit session
//await webkit.launch();

//start edge browser
let browser:Browser=await chromium.launch({channel:'msedge'});

//newcontext
let context:BrowserContext=await browser.newContext();

//tab1: google
let page1:Page=await context.newPage();
await page1.goto("https://www.google.com");
console.log("Application title: "+await page1.title());


//tab2:facebook 
let page2:Page=await context.newPage();
await page2.goto("https://www.facebook.com");
console.log("Application url is: "+page2.url());

await page2.waitForTimeout(2000);

//close
await page1.close();
await context.close();
await browser.close();





})

test("Tets for Browser-->TwoContext-->page-->RolebasedApplication",async({})=>{

//start chrome browser session 
let browser:Browser=await chromium.launch({channel:'chrome'});

//two windows
let context1:BrowserContext=await browser.newContext();
let context2:BrowserContext=await browser.newContext();

//context1--->page--->google
let page1:Page=await context1.newPage();
await page1.goto("https://www.google.com");

//context2--->page--->swaglabs
let page2:Page=await context2.newPage();
await page2.goto("https://www.saucedemo.com/");

await page2.waitForTimeout(3000);


await browser.close();


})


//APi testing: Backend side testing
test("Test for GET API request",async({request})=>{

    let response:APIResponse=await request.get("https://restful-booker.herokuapp.com/booking");

    //status code should be 200
    expect(response.status()).toBe(200);
    console.log("ApI response code is: "+response.status());

    //status message should be OK
    expect(response.statusText()).toBe("OK");
    console.log("API Response message is: "+response.statusText());
    
    //json Response:json()
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    




})