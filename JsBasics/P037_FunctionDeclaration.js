/*
Functions
===============
1.Function declaration
2.Function Expression
    2.1.Anonymous function(function without name)
    2.1 Arrow function(shortHand function)


*/

console.log("--------Function without any parameter------");

function test1()//0 parameter
{
    console.log("This is function declaration calling....");
    
}

//call
console.log(typeof test1);//function
test1();


console.log("--------Function with parameters------");
/*
What is parameters
----------------------
Parameter represent variable which store certain data
-At the time of defining function we declare parameter

What is Arguments
------------------------
-Aruments are actual data which we pass at the time calling that function

*/
//attached document with function

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 */
function addition(num1,num2)//2 parameters local variable
{
console.log("Addition is: "+(num1+num2));

}

addition(100,200);//300
addition("Hello",100);
addition(5000,77);

//Scenario:Execute test case on selected browser(chrome/egde/firefox)

/**
 * 
 * @param {string} browserName 
 */
function launchBrowser(browserName)
{
    switch (browserName.toLowerCase()) {
        case "chrome":
            console.log("Launch Chrome browser");
            break;
        case "edge":
            console.log("Launch Edge browser");
            break;
        case "firefox":
            console.log("Launch Firefox browser");
            break;
    
        default:
            console.log("Wrong Browser");
            break;
    }

}

//call
launchBrowser("edge");
launchBrowser("Edge");

//launchBrowser(1234);//TypeError: browserName.toLowerCase is not a function

console.log("--------Function with parameters and return keyword------");

/*
return Keyword
-----------------
-To return any value/output/data from frunction we use return keyword
-return statement should be the last statement of your function
-return statement return the result to calling function

-From the calling function either you store return result or print it
*/


/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function multiplication(a,b)
{
    return a*b;
}

//call
let result=multiplication(10,10);
console.log("Multiplication is: "+result);

//OR

console.log("Multiply result: "+multiplication(100,200));




function test3()
{
    return "Hello";

}


console.log(test3());

//real usecase

function getTitle()
{
    return "title";
}


//Arrow function
//IIFE:Immediate invoke function expression
//rest parameter
//defualt parameter

//call backfunction
//Array : map(),filter(),forEach(),reduce()

//OOP
