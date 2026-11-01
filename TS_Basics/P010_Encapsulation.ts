/*
Encapsulation
======================
Binding data and function in single unit

Purpose:
===========
Data hiding/ information hiding /data security

How to Implement?
=====================
- data we have to declare with private keyword as private data  
and access of data we can provide with public method(getters and setters)

Automation
====================
Page Object Model


Ts support Access modifier
=============================
1.private: private data can be accessible only within class
2.public
3.protected

*/


export class EmployeeDetails
{
    //data
    empId:number;
    empName:string;
    private salary:number=50000;

    //constructor
    constructor(id:number,name:string)
    {
        this.empId=id;
        this.empName=name;
    }

    //methods
    showEmpDetails()
    {
        console.log("Employee name: "+this.empName+"\nEmployee Id: "+this.empId+"\nSalary is: "+this.salary);
        
    }

    //setter
    setSalary(salary:number)
    {
        this.salary=salary;
    }

    //access
    getSalary()
    {
        console.log(this.salary);
        
    }



}




