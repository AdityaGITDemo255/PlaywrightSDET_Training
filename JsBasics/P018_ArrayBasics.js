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

console.log("-----Array Literal------");

let arr=[];
console.log(arr);//[]
console.log(typeof arr);//object
console.log(arr[0]);//undefined

console.log("------");
let sid=[101,102,103,104,105];

console.log("Total length is: ",sid.length);//5
console.log(sid);//[ 101, 102, 103, 104, 105 ]

//single element
console.log(sid[2]);//103
console.log(sid[4]);//105

//wrong index number: array returns you undefined
console.log(sid[9]);//undefined

console.log(sid[-5]);//undefined

console.log("-----------");

let empData=["Sarang","Pune",'M',40,87988900,89.55];
console.log(empData);
console.log("Total data: "+empData.length);
console.log(empData[3]);//40

console.log("-----Array Constructor------");
/*
Constructor
---------------
- this is special method used to initialize object
- constructor get called at the time of Object creation

-In Js class based object we create using new keyword
Syntax:
===============
let arr=new Array(val1,val2...n)

*/

let data=new Array(10,20,30,40,50);
console.log("Total elements: "+data.length);//5
console.log(data);//[ 10, 20, 30, 40, 50 ]

//single element
console.log(data[2]);//30
console.log(data[-1]);//undefined

/*
when Array constructor works with single element as number
so this will consider number as length
*/

let marks=new Array(6);
console.log("Total elements: "+marks.length);//6
console.log(marks);//[ <6 empty items> ]
console.log(marks[3]);//undefined
console.log(marks[10]);//undefined


let d1=new Array("Pune");
console.log("Total elements: "+d1.length);//1
console.log(d1);//[ 'Pune' ]
console.log(d1[4]);//undefined
console.log(d1[0]);//Pune



//RangeError: Invalid array length
// let d2=new Array(5.6);
// console.log(d2.length);
// console.log(d2);


console.log("-----Array.of() added in ES6------");

let s1=Array.of(10,20,30,40,50,'pune','Mumbai');
console.log("Total Elements are: "+s1.length);//7
console.log(s1);//[ 10, 20, 30, 40, 50, 'pune', 'Mumbai' ]
console.log(typeof s1);//object


let s2=Array.of(10);
console.log(s2.length);//1
console.log(s2);//[10]



console.log("---------------");

let i=[10,20,30,40,50];//size=5
console.log(i[3]);

//at 8th position we wanted to add data
i[8]="Aditya";

console.log(i);//[ 10, 20, 30, 40, 50, <3 empty items>, 'Aditya' ]
console.log(i[6]);//undefined

console.log("-----");
let j=new Array(1);
console.log(j.length);//1
console.log(j);//[ <1 empty item> ]
j[3]=10;
console.log(j);//[ <3 empty items>, 10 ]
j[3]=90;
console.log(j);




























