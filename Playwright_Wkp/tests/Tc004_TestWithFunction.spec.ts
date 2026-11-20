//without test runner

import { chromium,Browser,BrowserContext,Page, webkit, firefox } from "@playwright/test";

//IIFE:Immediate invoke function expression

(async()=>{
   
    //start session with chrome browser

    //create chrome session 
    //let browser:Browser=await chromium.launch({headless:false,channel:'chrome'});

    //create msedge session
    //let browser:Browser=await chromium.launch({headless:false,channel:'msedge'});
    //modern approach 
    //create chromium session
    //let browser:Browser=await chromium.launch({headless:false}); //here only channel needed if we need edge browser

    //create webkit session
    let browser:Browser=await webkit.launch({headless:false});

    //create firefox session
    //let browser:Browser=await firefox.launch({headless:false});

    //open context: browser.newContext()
    let context:BrowserContext=await browser.newContext();

    //open new tab: context.newPage()
    let page:Page=await context.newPage();

    //open application
   await page.goto("https://www.facebook.com");

    console.log("Title is: "+await page.title());
    

    //static wait: debugging method
    await page.waitForTimeout(2000);

//to close session
await page.close();
await context.close();
await browser.close();
    
}

)();


