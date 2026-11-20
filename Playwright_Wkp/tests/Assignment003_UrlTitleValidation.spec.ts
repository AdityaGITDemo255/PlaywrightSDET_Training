/* Assignment3:Test on Msedge
write script to open Msedge browser
Navigate to website https://automationplayground.com/crm/ 
verify title Customer Service
verify url contains com/crm */

////Enable chromium browser engine playwright.config
// {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//start test runner 
import {Browser, BrowserContext, chromium, expect, firefox, Page, test} from "@playwright/test";

test("TestCase_03_TitleURL_Validation_MsEdge",async({})=>{

//write script to open Msedge browser

let browser:Browser = await chromium.launch({channel:"msedge"});
let context:BrowserContext= await browser.newContext();
let page:Page = await context.newPage();

//Navigate to website https://automationplayground.com/crm/ 
await page.goto("https://automationplayground.com/crm/");

//verify title Customer Service

await expect(page).toHaveTitle("Customer Service");


//verify url contains automationplayground.com 

await expect(page).toHaveURL(/com\/crm/);

});