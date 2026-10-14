


function getUserDetails(name="abcd")
{
    console.log("User name is: "+name);
    

}

//call
getUserDetails("Pavan");
getUserDetails(1234);
//getUserDetails();//User name is: undefined
//after default parameter setup
getUserDetails(); //abcd

console.log("-----------------");

/**
 * 
 * @param {string} bname 
 */
function launchBrowser(bname="safari")
{
    switch(bname.toLowerCase().trim())
    {
        case "chrome":
            console.log("Test case is executing on chrome!");
            break;

        case "edge":
            console.log("Test case is executing on edge!");
            break;
        case "firefox":
            console.log("Test case is executing on firefox!");
            break;
       default:
        //bname="chrome";
            console.log("Browser not matched test is running on default browser "+bname);
            
    }

}

launchBrowser("chrome");
launchBrowser("firefox");
launchBrowser();//default parameter
launchBrowser("safari");//default case
launchBrowser("Edge")
