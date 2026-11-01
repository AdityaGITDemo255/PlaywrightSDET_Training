
/*
Tuple
========
- Tuple is Typescript array type where the 
numberof elements,type and order of elements are known and defined in advanced

- To design fixed size array we use tuple type


*/

//tuple array
let studentData:[number,string,number,boolean,string]=[101,"sarang",80,true,"Pune"];
console.log(studentData);
console.log(typeof studentData);
console.log("Total Entries: "+studentData.length);

console.log(studentData[0]);
//console.log(studentData[8]);//Tuple type '[number, string, boolean, string]' of length '4' has no element at index '8'.
//Js behaviour

//methods
studentData.push(100);
console.log(studentData); //[ 101, 'sarang', 80, true, 'Pune', 100 ]

studentData.unshift(100);
console.log(studentData); //[ 100, 101, 'sarang', 80, true, 'Pune', 100 ]

console.log("-------------");
let loginData:[string,string]=["Admin","admin123"];
console.log(loginData); //[ 'Admin', 'admin123' ]

console.log(loginData[0]);//Admin
console.log(loginData[1]);//admin123

//console.log(loginData[2]);//Tuple type '[string, string]' of length '2' has no element at index '2'.
//Ts--->Js---->executing
//Modification apply to Js array
loginData.push("1234");
console.log(loginData);
console.log(loginData.length);
//console.log(loginData[2]); //Tuple type '[string, string]' of length '2' has no element at index '2'.










