/*
Functions
===============
1.Function declaration
2.Function Expression
    2.1.Anonymous function(function without name)
    2.1 Arrow function(shortHand function)

*/

console.log("-----Anonymous function without parameter----");

let test1=function()
            {
                console.log("This is Anonymous function is calling....");
                
            }


//call
console.log(typeof test1);
test1();


console.log("-----Anonymous function with parameter----");


/**
 * 
 * @param {string} userName 
 * @param {string} password 
 */

let login=function(userName,password)
{
    console.log("Hello "+userName+" your password is:  "+password);
    
}

//call
login("Admin","Admin123");



console.log("-----Anonymous function with parameter & return keyword----");

/*
design function which returns status(true/false)of browser and if browser launch then open application
*/

/**
 * 
 * @param {string} browserName 
 */
let isBrowserLaunched=function(browserName)
{
    switch(browserName.toLowerCase())
    {
        case "chrome":
            console.log("Launch Chrome browser");
            return true;
            break;
        case "edge":
            console.log("Launch Edge browser");
            return true;
            break;
        case "firefox":
            console.log("Launch Firefox browser");
            return true;
            break;
    
        default:
            console.log("Wrong Browser...Its not launched");
            return false;
            break;
    }

}

//call
if(isBrowserLaunched("safari"))
{
    console.log("Open Application......");
    
}
else{
    console.log("Skip this process...");
    
}