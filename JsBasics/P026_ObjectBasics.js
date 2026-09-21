
/*
Object:
-------------
-Object is real world entity which has state and behavior
-Object is instance of class

-In Js everything is dynamic object
-In Js If you follow literal way then object is key:value pair
If you follow class level object then we use new keyword to
declare object
-Object is phisical and logical

Class
----------
- Class is collection of similar type of objects
- Class is blueprint,template to define object
- Class is logical entity

Object Ways in Js
-----------------
1.Object lietral
2.Class level object(ES6)

3.Constcrutor function(ES6)
4.Prototype based object



*/

console.log("----Object literal object-----");

let user={};
console.log(user);//{}
console.log(typeof user);//Object

let person={
    //data
    id:1010,
    fname:"Sarang",
    project:['Selenium','API'],

    //Method
   read:function()
    {
        console.log("This is read() method....");
        
    }

}
console.log(person);
console.log(typeof person);

/*
How to read properties from object
-----------------------------------
1. dot notation
-----------------------
ObjectName.key

2.square bracket notation []
-----------------------------
objectname["key"]

*/

console.log(person.id);
console.log(person.fname);
console.log(person.project);
//method call
person.read();

console.log("--------");
console.log(person["fname"]);
console.log(person['project']);
//call method
person['read']();



//insert new property
person.phno=89089809;
console.log(person);


//modify existing property
person.id=2020;
console.log(person);

console.log("---------");

console.log(person.project[0])//Selenium
person.project[0]="Playwright";
console.log(person);


//delete properties
delete person.phno;
console.log(person);

// delete person.read;
// console.log(person);

delete person.project[1];
console.log(person);


console.log("--------------");
/*
for...in loop
--------------------
-Iterates over keys and index

*/

//key 
for(let i in person)
{
    console.log(i);
    
}

console.log("---------------");

//key -value
for(let i in person)
{
    console.log(person[i]);
    
}
















