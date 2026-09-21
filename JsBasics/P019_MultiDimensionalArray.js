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

let multiD=[
    ["Amit","amit123"],
    ["Pooja","pooja123"],
    ["Kiran","kiran123","abcd"],
    ["Parag","parag123"]
]

console.log(multiD);
console.log(typeof multiD);//object
//row-->cell-->value
console.log("Number of rows: "+multiD.length);//4
console.log("Number of columns: "+multiD[0].length);//2
console.log(multiD[2].length);//3


console.log(multiD[2][0]);//Kiran

console.log(multiD[3][1]);//parag123

//existing row and wrong column number:undefined
console.log(multiD[0][5]);//undefined

//for wrong row index +column: 
//console.log(multiD[8][0]);//TypeError: Cannot read properties of undefined (reading '0')

console.log("----------Iteration-----------");

for(let i=0;i<multiD.length;i++)
{
    let row="";
    for(let j=0;j<multiD[i].length;j++)
    {
        row=row+multiD[i][j]+"  ";
        
    }
    console.log(row);
    
}

let num=123;
console.log(typeof num);
let arr=[num];
console.log(arr);
console.log(typeof arr);//object



















