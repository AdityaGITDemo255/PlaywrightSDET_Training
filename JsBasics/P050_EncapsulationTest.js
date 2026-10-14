

import { EmployeeInfo } from "./P049_Encapsulation.js";

let e1=new EmployeeInfo(101,"Jay");
e1.getData();

//private data  access only using setters() and getters()
let salary=e1.getEsalary();
console.log(salary);

e1.setEsalary(898908090);
console.log(e1.getEsalary());//898908090


e1.setEsalary(777);//Change Rejected

console.log(e1.getLocation());


console.log("--------------");

let e2=new EmployeeInfo(201,"Kiran");
e2.setEsalary(999999999);
console.log(e2.getEsalary());

console.log(e2.getLocation());




