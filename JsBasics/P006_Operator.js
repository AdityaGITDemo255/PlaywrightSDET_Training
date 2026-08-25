/*
1.Arithemetic operator
----------------------------
+,-,*,/,%

Unary Operators
-----------------------
++    --

2.Relational operators
-------------------------
>,>=,<,<=,!=

equality
------------
1.Loose equality ==
2.Strict Equality ===

4.Logical Operators
------------------------
&&(AND), ||(OR), !(NOT)


*/

console.log("Lets learn operator in Js!");
console.log("------Arithemetic Operators------");
let num1=100,num2=10;
console.log(num1+num2);
console.log("Addition is: "+num1+num2);//Addition is: 10010
console.log("Addition is: "+(num1+num2));//Addition is: 110
console.log("Subtraction is: "+(num1-num2));
console.log("Multiplication is: "+(num1*num2));
console.log("Division is: "+(num1/num2));
console.log("Modulus is: "+(num1%num2));

console.log(`Addition is: ${num1+num2}`);


console.log('-----Interview questions-----');
console.log(90/0);//Infinity
console.log(-80/0);//-Infinity
console.log("Hello"/8);//NaN: Not a number
console.log(undefined/5);//NaN
console.log(0/5);//0
console.log(0/0);//NaN

//null representation in number
console.log(Number(true));//1

console.log(Number(false));//0

console.log(Number(null));//0

console.log(null/5);//0

console.log(Number("hello"));//NaN

console.log(Number(undefined));//NaN

console.log("-------Unary Operator-----");

/*

num1++    ++num1   --num1   num1--

++(Increment)
---------------------
1.preIncrement  ++num1     num1=num1+1
-------------------------------------
value will increment first and then use it

2.postIncrement num1++    num1=num+1
----------------------------------------
value will use first and then increment


--(Decrement)

*/