/*
Program 4: Employee Class 
Problem Statement: 
Create an Employee class with name, salary, and 
department. Create a method that calculates a 10% bonus and 
displays the total salary. 

*/

class Employee
{

    //global data
    empName;
    salary;
    department;
    //Any common data for all objects declared with static keyword
    //static Keyword: creates only one time memory for variable and share same memory to all object
    //to call it use className.variable
    static orgName="Wipro"; 

    constructor(empName,salary,department)//local
    {
        this.empName=empName;
        this.salary=salary;
        this.department=department;
        
    }


    calculateTotalSaralry()
    {
        let bonus=this.salary*10/100;
        console.log("Total bonus:",bonus);
        let totalSalary=this.salary+bonus;
        console.log("Total Salary is: "+totalSalary);
               
    }

    getDetails()
    {
        console.log("Oraganization Name is: "+Employee.orgName);
        console.log("Employee name is: ",this.empName);
        console.log("Employee Basic Salry: ",this.salary);
        console.log("Employee department is: ",this.department);
         
    }


}

//object
let emp1=new Employee("Sarang",50000,"Dev");
emp1.getDetails();
emp1.calculateTotalSaralry();

console.log("----------");


let emp2=new Employee("Jay",87000,"Qa");
emp2.getDetails();

console.log("----------");

let emp3=new Employee("Sneha",60000,"Dev");
emp3.getDetails();

