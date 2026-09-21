

//variable
//let: redeclaration not allowed and reassignment allowed

let age=20;
//let age=30;//Cannot redeclare block-scoped variable 'age'.
age=30;
console.log("Age: "+age);//30

//const: Immutable , redeclaration and reassignment not allowed for const
const orgName="BeizzIT";
//const orgName="BeizzIT";//Cannot redeclare block-scoped variable 'orgName'.
//orgName="HSBC";//TypeError: Assignment to constant variable.

console.log("--------------");

//object

let user1={
    id:1010,
    fname:"Smita"
}

console.log(user1);//{ id: 1010, fname: 'Smita' }
//basic operation

//insert new property
user1.phno=9809809;
console.log(user1);//{ id: 1010, fname: 'Smita', phno: 9809809 }

//modify any property
user1.id=2020;
console.log(user1);//{ id: 2020, fname: 'Smita', phno: 9809809 }

//delete any property
delete user1.fname;
console.log(user1);//{ id: 2020, phno: 9809809 }

//Changing the reference of object
user1={address:"Pune"};
console.log(user1);//{ address: 'Pune' }

console.log("-------------");
/*
- on const object we can perform all operations(insert/modify/delete)
- const object always make refrence immutable

*/


const user2={
    id:3030,
    fname:"Kiran",
    profile:"QA"
}

console.log(user2);//{ id: 3030, fname: 'Kiran', profile: 'QA' }

//insert new property
user2.salary=90000;
console.log(user2);//{ id: 3030, fname: 'Kiran', profile: 'QA', salary: 90000 }

//modify 
user2.profile="SDET";
console.log(user2);//{ id: 3030, fname: 'Kiran', profile: 'SDET', salary: 90000 }

//delete 
delete user2.salary;
console.log(user2);//{ id: 3030, fname: 'Kiran', profile: 'SDET' }


//changing the reference
//user2={location:"Us"};//TypeError: Assignment to constant variable.

//const keyword always make reference immutable