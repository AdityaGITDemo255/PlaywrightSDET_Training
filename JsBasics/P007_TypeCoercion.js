/*
Type casting:
==============
One type of data we can conver into other type
-type casting in Js applicable for 3 types string,number,boolean


1.Implicit casting
=======================
-Js Engine will take care this conversion
-Is is known as type coercion


2.Explicit Casting
=======================
-It is manual conversion
-It is we can implement using constructor
Number()
String()
Boolean()

Note
--------
For type conversion data must be compatible

Boolean Conversion
======================
1.truthy values
-----------------------
- Any true value in boolean context we called truthy
Example: any nonzero number,non empty string

2.falsy values
-------------------
Any false value in boolean context we called falsy
-In Js there are total 5 falsy values
Example: 0,""(empty string),NaN,null,undefined


*/
console.log("------String coversion--------");
/*
When an expression combine string,number and boolean value with + operator
then the number and boolean values automatically converted into string and string concatentination
is performed.

number/boolean----->string
*/

let a="hello"+100+true;//100 and true both coerced into string
console.log(a);//hello100true
console.log(typeof a);//string

let b=100+25+"Hi";//100+25=125+"hi"-->here 125 is coerced into string
console.log(b);//125hi
console.log(typeof b);//string

let c=100+true+"100";//100+true(1)=101 then "101" coerced into string
console.log(c);//101100
console.log(typeof c);//string

console.log(200+"10"+100+10);//2001010010

console.log(true+30);//31

console.log(true+"30");//true30

console.log(100+false+"50"+false);//10050false
console.log("------Number conversion-----");
/*
string/boolean-->number
When an expression combine string,number and boolean value with arithemetic (-,/,*,%)operators
then the string and boolean values automatically converted into number only if they are compatible to number conversion

*/

let x="Hello"-100;
console.log(x);//NaN
console.log(typeof x);//number

let d="100"/10;//"100"--100=100/10=10 here "100" coerced into number
console.log(d);//10
console.log(typeof d);//number

//expression with boolean and number---numberconversion
console.log(true+50);//1+50=51//boolean converted into number
console.log(true*10);//1*10=10
console.log(false*10);//0*10=0

let e=100-"50"/true;//"50 "coerced into number 50 and true -->1
console.log(e);//50
console.log(typeof e);//number

let f=90-"30"+true;//"30" and true coerced into number
console.log(f);//61
console.log(typeof f);//number

let y="78"-15+100+"56";
console.log(y);//16356
console.log(typeof y);//string

console.log("----Explicit conversion-----");

console.log("---Number()--------");

//string--->number
let s1="1234";
console.log(s1);//1234
console.log(typeof s1);//string

//string--->number
let stringToNumber=Number(s1);

console.log(stringToNumber);//1234
console.log(typeof stringToNumber);//number

//boolean --->number
console.log(Number(true));//1
console.log(Number(false));//0


console.log("----String()-----");

let num=90;
console.log(num);//90
console.log(typeof num);//number

//number-->string
let numToString=String(num);

console.log(numToString);//90
console.log(typeof numToString);//string

//boolean --->string
let i=true;
let booleanToString=String(i);
console.log(booleanToString);//true
console.log(typeof booleanToString);//string

console.log("-----------");

/*
Scenario: validate of amount from bill

test for amount should be less than 10000
*/

let bill="Your total amount is 5000";
//extract the 5000==>"5000"
let data=bill.split(" ")[4];

console.log(data);//5000
console.log(typeof data);//string

//convertion for "5000"===>5000

let amount=Number(data);
console.log(amount);//5000
console.log(typeof amount);//number

//compare
if(amount<10000)
{
    console.log("Amount is valid...test is pass!");
    
}else{
     console.log("Amount is not valid...test is fail!");
}

console.log("----Boolean conversion-------");
/*Boolean Conversion
======================
1.truthy values
-----------------------
- Any true value in boolean context we called truthy
Example: any nonzero number,non empty string

2.falsy values
-------------------
Any false value in boolean context we called falsy
-In Js there are total 5 falsy values
Example: 0,""(empty string),NaN,null,undefined
*/

console.log(Boolean("Jay"));//truthy-true
console.log(Boolean(67));//true
console.log(Boolean(-89));//true
console.log(Boolean(78.88));//true
console.log(Boolean(true));//true
console.log("----------");

console.log(Boolean(""));//falsy-false

console.log(Boolean(0));//false

console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false
console.log(Boolean(false));//falsy


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
//loose equality ==

console.log("100"==100);//string--->number//true
console.log(100=="100");//true

//edge case/special case--->true
console.log(null == undefined);//true
console.log(null == 0);//false


//strict equality ===(recommended)
console.log("100" === 100);//false
console.log(null === undefined);//false


//implicit casting applicable for relational operator
console.log("100">10);

console.log(100>=100<"100");
//true<"100"

console.log("true"+100);

console.log("true"-100); //NaN

console.log(true-100);//-99


console.log(null+1);//1





























