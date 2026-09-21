/*
Array
===========
- It is Dynamic data structure
- Array can store collection of data/element
- Array is single variable can store collection of data
- Array is 0 index based
- Array is non primitive

Syntax
=========
let arraVariable=[val1,val2,val3...n]

Ways to declare
------------------
1.Array literal
2.Array constructor
3.Array.of()...ES6

Types of Array
----------------
1.Single dimensional (1D)
2.Multi dimensional (2D)

Iteration techniques
-----------------------
1.Simple for loop
2.for...of loop---applicable for string and array

3.for...in loop--applicable for object

*/


let arr=[10,20,30,40,50,60,70];
console.log(arr);
console.log(arr.length);//5


console.log("-----simple for loop-----");

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    
}


/*
for...of loop
--------------
- for...of loop iterates over values
- for...of loop use for array and string iteration

for...in loop
---------------
- for...in loop iterates over index/keys
- for...in loop use for object (literal) iteration
*/


console.log("------for...of loop------");


for(let i of arr)
{
    console.log(i);
    
}

console.log("------for...in loop------");

for(let i in arr)
{
    console.log(i);
    
}

console.log("---------");

for(let i in arr)
{
    console.log("at index: "+i+" value is: "+arr[i]);
    
}



