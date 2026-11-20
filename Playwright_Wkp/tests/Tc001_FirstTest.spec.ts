

//start test runner
import {test} from "@playwright/test"


test("Test for Google application launch process",async({page})=>{

    //open application:goto(url)
    await page.goto("https://www.google.com");  // as return title is promised null so noneed to store.

    //get the current title of application: title()
    let appTitle:string=await page.title();
    console.log("Application title is: "+appTitle);


    //OR

    console.log("Application title is: "+await page.title());
    
    


})


