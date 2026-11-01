
//Object literal: key:value

let user:{readonly id:number,fname:string,profile:string,address:string}={
    id:101,
    fname:"Jay",
    profile:"QA",
    address:"Pune"
}

console.log(user); //{ id: 101, fname: 'Jay', profile: 'QA', address: 'Pune' }

//get the profile
console.log("Profile details:",user.profile); //Profile details: QA

//modify properties
//user.id=111; //error as read only property
console.log(user); //{ id: 101, fname: 'Jay', profile: 'QA', address: 'Pune' }


//add new property:Property 'address' does not exist on type '{ id: number; fname: string; profile: string; }'.
user.address="Delhi";
console.log(user);

//user.age=30;

//delete the property
//delete user.profile;

/*
1. Why user.address = "Delhi" works?

Because address is already defined in the type:

TypeScript
address: string

So modifying its value is allowed:

TypeScript
user.address = "Delhi";
console.log(user);

Output:

JavaScript
{
id: 101,
fname: "Jay",
profile: "QA",
address: "Delhi"
}
2. Why user.age = 30 gives an error?

Because age is not part of the object type.

TypeScript
user.age = 30;

Error:

TypeScript
Property 'age' does not exist on type ...

TypeScript only allows properties declared in the type.

3. Why user.id = 111 gives an error?

Because id is marked as readonly.

TypeScript
readonly id: number

So:

TypeScript
user.id = 111;

Error:

TypeScript
Cannot assign to 'id' because it is a read-only property.
4. Why can't I delete profile?
TypeScript
delete user.profile;

Error occurs because profile is a required property.

Your type says:

TypeScript
profile: string

which means every user object must always have a profile.

TypeScript prevents deleting required properties.

How to allow deletion?

Make the property optional using ?.

TypeScript
let user: {
readonly id: number,
fname: string,
profile?: string,
address: string
} = {
id: 101,
fname: "Jay",
profile: "QA",
address: "Pune"
};
 
delete user.profile; // ✅ Allowed
console.log(user);
 

Output:

JavaScript
{
id: 101,
fname: "Jay",
address: "Pune"
}
*/

let newUser:{id:number,fname:string,age:number}={
id:201,
fname:"Kiran",
age:20

}
console.log(newUser);

//Property 'fname' is missing in type '{ id: number; age: number; }' but required in type '{ id: number; fname: string; age: number; }'.
// newUser={id:1234,
//     age:25
// };

/*
Type alise
================
- By using same structure /template we can create object
- To create custom object we use type keyword 
- First we have describe prototype and then based on prototype we can create object

In typescript as per structure it only allow modify property but adding new property externally
not allowed and delete also not allowed

- let and const object we can perform same operation , in typescript as per the type we can not change
reference of let and const


readonly keyword
==============
- readonly prevent properties from being reassigned once it is initialized
*/

//structure/template

type studentData={id:number,fname:string,profile:string,address:string};

let s1:studentData={
     id:201,
    fname:"Sagar",
    profile:"dev",
    address:"Us"
}

console.log(s1);
console.log(s1.id);//201
//modify
//s1.id=222;//Cannot assign to 'id' because it is a read-only property.
console.log(s1);
//change reference not allowed in typescript
//Object literal may only specify known properties, and 'orgName' does not exist in type 'studentData'.
// s1={
//      orgName:"Wipro"

// };





const s2:studentData={
    id:202,
    fname:"Smita",
    profile:"QA",
    address:"Us"
}

console.log(s2);

console.log(s2.id);

//modify
//s2.id=1234;Cannot assign to 'id' because it is a read-only property.
console.log(s2);

//change reference
//Cannot assign to 's2' because it is a constant.
//s2={orgName:"HSBC"};








