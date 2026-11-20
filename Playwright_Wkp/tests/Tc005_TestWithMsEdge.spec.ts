
import {test,expect, chromium, Browser, BrowserContext, Page} from "@playwright/test"

test("Test for MsEdgebrowser",async({})=>{

    //open browser
    let browser:Browser=await chromium.launch({headless:false,channel:'msedge'});

    //open context
    let context:BrowserContext=await browser.newContext();

    //open tab/page
    let page:Page=await context.newPage();

    //open application
    await page.goto("https://www.google.com");

    console.log("Title is: "+ await page.title());

    //wait for  2sec
    await page.waitForTimeout(2000);

    //close the session
    await page.close();
    await context.close();
    await browser.close();
    
    
})

//multiple context and multiple pages.....next class
