

import { EmployeeDetails } from "./P010_Encapsulation.js";

//Object
let e1:EmployeeDetails=new EmployeeDetails(101,"Pooja");
e1.showEmpDetails();
//Property 'salary' is private and only accessible within class 'EmployeeDetails'.
//console.log("Salary: "+e1.salary);

e1.getSalary();

//modify
e1.setSalary(890000);

e1.getSalary();



let e2:EmployeeDetails=new EmployeeDetails(201,"Jay");
e2.showEmpDetails();

e2.setSalary(900000);

e2.getSalary();