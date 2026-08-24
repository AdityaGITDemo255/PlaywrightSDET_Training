/*


Assignment 1 — Student Information 
Problem Statement 
Create variables to store the following information about a student: 
•	Student name 
•	Student age 
•	Is the student currently enrolled? 
•	Student grade 
•	Student email 

Print all the values and their data types. 



*/




let StudentName = 'Hare Ram';
let StudentAge = 37;
let studetStatus = true;
let studentGrade = 'A';
let studentEmail = `hareRam@hotmail.com`
console.log(StudentName);
console.log(typeof StudentName);

console.log(StudentAge);
console.log(typeof StudentAge);

console.log(studetStatus);
console.log(typeof studetStatus);

console.log(studentGrade);
console.log(typeof studentGrade);

console.log(studentEmail);
console.log(typeof studentEmail);



/*

Assignment 2 — Identify the Data Type 
Problem Statement 
Create variables for the following values: 
100 
"100" 
true 
undefined 
null 
12345678901234567890n 


*/

let num = 100;
let score ="100";
let  status = true;
let x;
let stdCategory =null;
let t = 12345678901234567890n;


/*
Assignment 3 — var, let, and const
Problem Statement
Create three variables:
companyName
employeeName
employeeId
Use:
•
var for company name
•
let for employee name
•
const for employee ID
Then:
1.
Print all values.
2.
Reassign companyName.
3.
Reassign employeeName.
4.
Try to reassign employeeId.
Observe what happens.

*/






var companyName = 'Accenture Strategy';
let employeeName = 'Pratik Nayak';
const employeeId= 'A45TR4478';

console.log(companyName);
console.log(employeeName);
console.log(employeeId);

companyName = 'TCS';
employeeName = 'Matt Demon';
employeeId= 'A45T2555'; //TypeError: Assignment to constant variable

/*
Assignment 4 — Predict the Output 
Give students the following code without the solution initially. 
Problem Statement 
Predict the output before executing the program. 
var x = 10;  
let y = 20; 
const z = 30; 
console.log(x); //10
console.log(y); //20
console.log(z);//30
x = 100; 
y = 200; 
console.log(x); //100
console.log(y); //200
console.log(z); // 30

*/


/*
Assignment 5 — Find the Error 
Problem Statement 
Identify which statements will produce an error. 
var a = 10; 
a = 20; 
let b = 30; 
b = 40; 
const c = 50; 
c = 60;  //error 

*/

/*
Assignment 6 — Mixed Data Types 
Problem Statement 
Create variables representing an employee: 
Employee name 
Employee ID 
Salary 
Is employee permanent? 
Joining date 
Manager name 
Use appropriate primitive data types. 
Print the values and their types. 

*/

let employeeName1 = 'Divakar';
const EmpId1 = "TTE987";
let sal = 120000;
let EmpStatus1 = true;
const JoiningDate = '16th-Sep-2015';
let manager = 'Jacob Ray';

console.log(employeeName1);
console.log(typeof employeeName1);

console.log(EmpId1);
console.log(typeof EmpId1);


console.log(sal);
console.log(typeof sal);


console.log(EmpStatus1);
console.log(typeof EmpStatus1);


console.log(JoiningDate);
console.log(typeof JoiningDate);


console.log(manager);
console.log(typeof manager);


/*

Assignment 7 — Employee Profile 
Problem Statement 
Create an employee profile using JavaScript variables. 
Your program should store: 
•	Employee name 


•	Employee ID 
•	Age 
•	Salary 
•	Department 
•	Is employee active? 
•	Manager 
•	Employee joining date 
•	A very large employee reference number using BigInt 

Use a suitable variable declaration (var, let, or const) for each. 

*/

let Emp1 ="Jack Stone";
const empId2 = 'TR12345';
var age =34;
var sal1 = 23000.76
const Department = 'BFSI';
let IsEmployeeActive = true;
let manager1= 'Tom Clancy';
const EmpJoiningDate ='23-Aug-1997';
let EmpRefNo = 123456789098n;

let age22 = 25; 
var age22 = 30; 
console.log(age22); 






