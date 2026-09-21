/*
Problem 1 — UI Price and Quantity
A product page returns the following values as strings:
let price = "500";
let quantity = "3";
Calculate the total price.

Expected Output:
1500 */

let price = "500";
let quantity = "3";
console.log(Number(price) * Number(quantity));

/*

Problem 2 — UI Price + Tax
The UI returns:
let price = "1000";
let tax = "200";
Calculate the final price.

Expected Output:
1200


*/
console .log("Problem 2 -------------------------------------------------")
let price2 = "1000";
let tax2 = "200";
console.log(Number(price2) + Number(tax2));


/*

Problem 3 — Understand + Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual + expected); //10020


*/
console .log("Problem 3 -------------------------------------------------")

let actual = "100";
let expected = 20;

console.log(actual + expected);


console .log("Problem 4 -------------------------------------------------")


/*
Problem 4 — Understand - Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual - expected);// 80


*/

let actual2 = "100";
let expected2 = 20;

console.log(actual - expected);

console .log("Problem 5 -------------------------------------------------")

/*
Problem 5 — UI Value and Assertion
A UI displays:
100
The automation code receives it as:
let actualPrice = "100";
let expectedPrice = 100;
Check the result of:
console.log(actualPrice == expectedPrice);
console.log(actualPrice === expectedPrice);
*/


let actualPrice = "100";
let expectedPrice = 100;

console.log(actualPrice == expectedPrice);
console.log(actualPrice === expectedPrice);

console .log("Problem 6-------------------------------------------------")
/* 
Problem 6 — Fix the Assertion
The following automation code is failing:
let actualPrice = "500";
let expectedPrice = 500;
console.log(actualPrice === expectedPrice);


*/

let actualPrice2 = "500";
let expectedPrice2 = 500;
console.log(Number(actualPrice2) === expectedPrice2);

console .log("Problem 7 -------------------------------------------------");


/* 

Problem 7 — Environment Variable
An automation framework reads the timeout from an environment variable:
let timeout = "30000";
Convert it into a number and print:
The value
Its data type

Expected Output:
30000
number



*/

let timeout = "30000";
let sleep = Number(timeout);
console.log(sleep);

console.log(typeof sleep);

console .log("Problem 8 -------------------------------------------------");

/* 
Problem 8 — Order ID
An API returns:
let orderId = 12345;
Convert the order ID into a string and create:
ORDER-12345


*/


let orderId = 12345;
console.log("ORDER-"+12345);
console .log("Problem 9 -------------------------------------------------");
/*
Problem 9 — Boolean API Value
An API returns:
let status = "true";
Convert this value into an actual Boolean.

Expected Output:
true
boolean

*/

let status2 = "true";

let status1 = Boolean(status2)
console.log(status1);
console.log(typeof status1);

console .log("Problem 10 -------------------------------------------------");

/*Problem 10 — Input Field Value
A Playwright test retrieves a quantity from an input field:
let quantity = "5";
The expected quantity is:
let expectedQuantity = 5;
*/

let quantityy = "5";
console.log("The Expected Quantity is :"+quantityy);

console .log("Problem 11 -------------------------------------------------");

/*
Problem 11 — Calculate Cart Total
An e-commerce application provides:
let price = "799";
let quantity = "2";
let discount = "100";
Calculate:
(price × quantity) - discount

Expected Output:
1498
*/

let price3 = "799";
let quantity3 = "2";
let discount3 = "100";

console.log(Number(price3)*Number(quantity3)- Number(discount3));

