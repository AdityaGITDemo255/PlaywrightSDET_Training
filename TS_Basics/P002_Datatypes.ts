/*

Type Inference
====================
It is property of typescript that even though you have not declare 
any data type then typescript understand it based in the value assign


Primitive
=============
1.number
2.string
3.boolean
4.undefined
5.null
6.bigIn
7.symbol


NonPrimitive
---------------
-Object
-Array

TypeScript
================
any,unknown,union,void,never


*/

//1.number

let age:number=20;
let timeout:number=30000;

//age='hiij';//Type 'string' is not assignable to type 'number'.
let statusCode:number=200;
console.log("Age is: "+age);
console.log(`timeout is: ${timeout}`);
console.log("Status code is: ",statusCode);

console.log("------------------");

//2.boolean:true/false
let isActive:boolean=true;
let isPaymentSuccessfull:boolean=false;
console.log("Status is: "+isActive);
console.log("Is Payment successfull?: "+isPaymentSuccessfull);

console.log("------------------");
//3.string
let userName:string="Admin";
let password:string="admin123";
let baseUrl:string="https://www.google.com";

console.log("username is: "+userName+"\nPassword is: "+password+"\nBaseUrl is: "+baseUrl);

//4.null:intentially value is empty
let browserName=null;
console.log(browserName);//null
console.log(typeof browserName);//object

//5. undefined: Variable declared without initialization then value and type will become undefined
let browserVersion;
console.log(browserVersion);//undefined
console.log(typeof browserVersion);//undefined

console.log("-----Typescript data types------");

/*
any:
- Typescript allows almost anything

UseCases: for dynamic data and in case of API 
*/

let bookingId:any;
bookingId=1234;
bookingId="abcd";
bookingId=true;
bookingId=null;
console.log(bookingId);

/*
unknown:
- Type is not known
-safer than any type
It will maintain type safety

scenario: API response /external data that you dont know yet/trust
*/

let responseData:unknown;

responseData=1234;
responseData="API response";
responseData=false;

console.log(responseData);
console.log(typeof responseData);




let x:any=10;
let n:number=x;
console.log(x);
if(typeof x=== 'number')
{
    console.log(typeof x);
    
}

let p:any;
console.log(p);//undefined
console.log(typeof p);//undefined


let y:unknown;
console.log(y);//undefined
console.log(typeof y);//undefined


//y:unknown="abcd";//'unknown' only refers to a type, but is being used as a value here.
//let m:string=y;//Type 'unknown' is not assignable to type 'string'.


let ss:any="abcd";
let tt:string=ss;
console.log(typeof tt);
console.log(tt);


//union (|)

let postalCode:string|number;
postalCode="411047";
postalCode=411047;
postalCode="true"
//postalCode=true;//Type 'boolean' is not assignable to type 'string | number'.

console.log(postalCode);

console.log("----------Function with return type and parameters------");


console.log("-------Function basics-----");
//void: It is return type 
// -function does not return any thing

function getPostalCode(code:string|number):void
{
console.log(code);

}

//call
getPostalCode("411047");
getPostalCode(411047);
//getPostalCode(true)Argument of type 'boolean' is not assignable to parameter of type 'string | number'.


function getData(data:number|boolean):number|boolean
{
    return data;
}


console.log(getData(true));
console.log(getData(1234));
let d1:number|boolean=getData(false);
console.log(d1);//false






//function without any return then we can specify return type as void
function displayInfo()
{
    console.log("Hello All!");
    
}

displayInfo();


function testNumberIsEven(num:number):number
{
    if(num%2===0)
    {
       return num;
    }else
    {
        return -1
    }
    
}


let evenRes:number=testNumberIsEven(10);
console.log(evenRes);

let res:number=testNumberIsEven(3);
console.log(res);



function getPageTitle():string
{
    return "apptitle";
}
 let title:string = getPageTitle();
 console.log(title);
 

/*

never
===========
- It is applicable to function
- never keyword use as return type of function
-never means function will never complete or execute completelly 

-UseCase: In Automation to design custom utility for Errors


-Error is class in Js/ts
Handling error try-catch and finally

throw keyword:throw new error we use throw keyword
throw new Error("Element not found!")
 
*/


//design function which throws error
//utility
function throwElementError():never
{
    throw new Error("Expected Element is not found!");
}

//call
//throwElementError();


function testHyperLink(ele:string):void
{
    if(ele === "link")
    {
        console.log("element found!");
        
    }else
    {
        //utility : custom error
     throwElementError();

    }

}

testHyperLink("link");
testHyperLink("button");









