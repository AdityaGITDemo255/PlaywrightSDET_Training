

//Synchronous operation: step by step

for(let i=1;i<=5;i++)
{
    console.log(i);
    
}

/*
What is Asynchrouns
=======================
Some tasks may require extra time to complete, such as:

• API calls
• Database operations
• File operations
• Timers
• Network requests

JavaScript does not have to wait for these tasks to complete.
It can continue executing other code while the asynchronous
task is in progress.

Once the asynchronous task is completed, JavaScript handles
its result through the Event Loop.

Therefore, asynchronous programming helps JavaScript
perform time-consuming operations without blocking
the execution of other code.
*/


console.log("Program started....");

// setTimeout(() => {
//     console.log("Task required total 3sec to complete");
    
// },3000);


console.log("Program ends....");

console.log("---------------");

// let response=fetch("https://www.google.com");
//  console.log(response);//Promise { <pending> }
/*
To handle any promise we can design async method and 
use await keyword before the function who is returning promise

In Js if you design any method with async keyword that is call async method
- every async method returns promise

*/

async function getAPITest()
{
    let response=await fetch("https://www.google.com");
    console.log(response);
}

//call
getAPITest();


console.log("----------------");


console.log("Task completed A");

setTimeout(() => {
    console.log("Task completed B");
    
},0);


console.log("Task completed C");
