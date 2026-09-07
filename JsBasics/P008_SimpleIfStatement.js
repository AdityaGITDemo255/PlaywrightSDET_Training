
/*
Simple If: validate single true condition

*/




console.log("Program started.....");

//validate current year +ve scenario
let currentYear=2026;

if(currentYear === 2026)
{
    console.log("Current year match!");
    
}

console.log("Program ends!");

console.log("-----------");


//-ve scenario 
if(currentYear === 2027)
{
    console.log("Current year matched!");
    
}

console.log("done!");


/*
Validate BaseUrl 
---------------
1.test for protocol (https/http)
2.Url should not be null
3.url should be equal

String Methods
--------------
1.For equality use ===
2.for partial match includes()

*/

//test equality
let actUrl="https://www.amazon.in";
let expUrl="https://www.amazon.in";

if(actUrl === expUrl)
{
    console.log("Url matched...Test Pass!");
    
}

//test partial substring

if(actUrl.includes("https"))
{
    console.log("BaseUrl is valid!");
    
}







