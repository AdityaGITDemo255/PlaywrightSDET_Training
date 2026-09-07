
/*
If-else statement: true/false condition
*/


//validate age of user: voting :age >18

let age=10;

if(age>=18)
{
console.log("Valid age!");

}else
{
    console.log("Invalid age");
    
}

console.log("---------------");
//validate API status code should be 201

let statusCode=301;


if(statusCode === 201)
{
    console.log("Successfull response for POST call!");
    
}else
{
    console.log("Post call Fail!");
    
}
console.log("-------------------");


//API testing scenario 
//validate range 200-299--->successfull

let responseCode=244;

if(responseCode>=200 && responseCode<=299)
{
    console.log("This is successfull response!");
    
}else
{
    console.log("Response code is invalid!");
    
}





