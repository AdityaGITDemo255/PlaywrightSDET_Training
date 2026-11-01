/*
Array
==========
- Array is Dynamic data structure which store collection of data

Array Js
============
let arrayVariable=[val1,val2,val3...];

Array in Ts
===============
let arrayVariable:datatype[]=[val1,val2,val3...];

OR

let arrayVariable:Array<datatype>=[val1,val2,val3...];

*/




let id:number[]=[10,20,30,40,50];
console.log(id);//[ 10, 20, 30, 40, 50 ]
console.log(typeof id);//object
//signle value from array
console.log(id[0]);//10
console.log(id[4]);//50
console.log(id[9]);//undefined

console.log("Total elements are: "+id.length);//5


console.log("------------");
//Using Array interface
let location:Array<string>=["Mumbai","Delhi","Pune"];
console.log(location);
console.log(typeof location);
console.log("Total Locations: "+location.length);//3

//single entry
console.log(location[2]);//Pune
console.log(location[5]);//undefined

console.log("--------------");

let studentData:Array<any>=[101,"Sarang","Pune",798709809,'M'];
console.log(studentData);

console.log("-------------");
//Methods
console.log(id);//[ 10, 20, 30, 40, 50 ]
let x=id.push(60);
console.log(x);//6
console.log(id);//[ 10, 20, 30, 40, 50, 60 ]

id.unshift(9);
console.log(id);//[ 9, 10, 20, 30,  40, 50, 60]

console.log(id.pop());//60

console.log(id);//[ 9, 10, 20, 30, 40, 50 ]

console.log(id.shift());//9
console.log(id);

//splice()
let deletedEle=id.splice(2,1);
console.log(deletedEle);//30
console.log(id); //[ 10, 20, 40, 50 ]

//map(), filter(),reduced(),includes(),join(),copy[spread operator...]

//includes()

console.log(location);//[ 'Mumbai', 'Delhi', 'Pune' ]

if(location.includes("Pune"))
{
    console.log("Location Found!");
    
}
else
{
    console.log("Location Not Found!");
    
}



















