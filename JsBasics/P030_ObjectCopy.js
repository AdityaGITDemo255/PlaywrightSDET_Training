
/*
Spread operator(...)
------------------------
To copy array and Object we use (...)spread operator

*/

const student1={
    sid:101,
    sname:'Jay',
    subject:'Testing'
}

console.log(student1);

console.log("------");

const student2={...student1};
console.log(student2);

//modify
student2.sid=102;
student2.sname="Smita"
console.log(student2);

// === will compare object reference
console.log(student1===student2);

console.log(student1==student2);

