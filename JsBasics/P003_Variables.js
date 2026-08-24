
/*
Variable 
===========
Name of storage location is called variable

In Js 3 keywords we use to declare variable
---------------------------------------------
var, let , const

var(Older/not recommended)
======================
-Scope: Global + function
-Var is fully hoised
-Redeclaration is allowed
-Reassignment is allowed

modern syntax
-----------------
let
=============
-Scope: Global + Block scope
-For Mutable data use let
-let is hoisted but let initialize in temporal ded zone so 
if you try to access before delcration then you wil get Refrence error
- Redecalartion is not allowed
- Reassignment is allowed

const
================
-Scope: Global + Block scope
-For Immutable data use const
-const is hoisted but const initialize in temporal ded zone so 
if you try to access before delcration then you wil get Refrence error
- Redecalartion is not allowed
- Reassignment is not allowed


Syntax:
===========
let id=101;
let name="Jay";




*/


//redeclaration & reassignment allowed
var id=101;
var id=201;
var id=301;

console.log(id);//301
console.log(typeof id);//number


//reassignment
id='1234';
console.log(id);
console.log(typeof id);//string



//let redeclaration not allowed and reassignment allowed rule
let toolName="Selenium";
//let toolName="Playwright";//SyntaxError: Identifier 'toolName' has already been declared

toolName="Playwright";

console.log(toolName);


//const redeclaration & reassignment not allowed

const vendorName="Microsoft";

//const vendorName="Microsoft";//SyntaxError: Identifier 'vendorName' has already been declared

//vendorName="Google"//TypeError: Assignment to constant variable.
console.log(vendorName);

console.log("----Global scope------");
//Global scope: anything declare inside Js file outside any block or function is global scope data

var fname="Hiteshi";
let location="Us";
const emailId="hiteshi@gmail.com";

console.log(fname);
console.log(location);
console.log(emailId);

//global data we can access everywhere means inside function also
console.log("----Call global data through function----");

//escape character \n for new line
function show()
{
console.log("FirstName: "+fname+"\n & location: "+location+"\n & emailId: "+emailId);
}

//call

show();