
/*

In Ts Error is predefined interface

Error
=============
When errors occur in code/app and it interrupt execution flow and code will never complete
then to maintail normal flow of the execution we need to handle error

Error handling ways
========================
try and catch block

finally block
================
- finally block should be use with try block
- any code if we place inside finally block that will always execute with or without error
- Special code like server/dbserver close features we use to write inside finally block

throw keyword
===============
to craete custom error we use throw keyword
-throw keyword used to throw at a time one error

*/

//design function which throw some error
/*
function division(num1:number,num2:number):number
{
   if(num2===0)
   {
    //throw new error
    throw new Error("Divide by 0 Error: Infinity");

   }else{
    return num1/num2;
   }
    

}

//call
console.log(division(100,10));
console.log(division(100,0));

*/

//JSON payload
let payload=`{
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}`

console.log(payload);
console.log(typeof payload);//string

function parsing()
{
    try{
    //Converts a JavaScript Object Notation (JSON) string into an object.
    let jsObject=JSON.parse("payload");//"payload" is not valid JSON
    console.log(jsObject);
    console.log(typeof jsObject);
    }catch(error)//here erroe is variable name
    {
        //handling solution
        console.log("Please provide valid json data");
        
    }
}


//call
parsing();



console.log("-------------------");
function division(num1:number,num2:number):number
{
    try{
   if(num2===0)
   {
    //throw new error
    throw new Error("Divide by 0 Error: Infinity");

   }else{
    return num1/num2;
   }}catch(e)
   {
    console.log("Please provide second number other that 0");
    return num2;
    
   }
    

}

console.log(division(10,10));//1
console.log(division(10,0));

console.log("-----------------");

//try-finally block

function testBrowser(bname:string)
{
    try{
    if(bname === "chrome")
    {
        console.log("Test case is executing on Chrome!");
        
    }else{
        //throw error
        throw new Error("Invalid Browser:  "+bname);
    }
}catch(e)
{
console.log('Please provide browser name only chrome!');

}
finally{
    console.log("Finally block executed....");
    console.log("Server closed!");
    
    
}
}

testBrowser("edge");
console.log("-------");

testBrowser("chrome");















