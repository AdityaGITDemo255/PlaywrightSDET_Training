/* Assignment2:Test on Firefox
write script to open Firefox browser
Navigate to website https://automationplayground.com/crm/ 
verify title Customer Service
verify url contains automationplayground.com */

//Enable browser engine playwright.config
//   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },

import {Browser, BrowserContext, expect, firefox, Page, test} from "@playwright/test";
test("TestCase_02_TitleURL_Validation_Firefox",async({})=>{

// create Firefox Browser session 

let browser:Browser =await firefox.launch();
let context:BrowserContext= await browser.newContext();
let page:Page = await context.newPage();

//Navigate to website https://automationplayground.com/crm/ 
await page.goto("https://automationplayground.com/crm/");

//verify title Customer Service

await expect(page).toHaveTitle("Customer Service");


//verify url contains automationplayground.com 

await expect(page).toHaveURL(/automationplayground\.com/);

});