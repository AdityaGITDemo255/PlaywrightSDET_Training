console.log("Question 1-----------------------------------");

/*
Program 1: Create a Student Class 
Problem Statement: 
Create a Student class with properties name, age, and course. Create 
two objects and display their details. 

*/


class Student
{
name;
age;
id ;

constructor(name,age,id)
{
this.name= name;
this.age = age;
this.id = id;


}

getStudent()
{
console.log("Student Name is :",this.name);
console.log("Student Age is :",this.age);
console.log("Student Id is :",this.name);

}



}


const obj =new Student("Tom",30,"IRC664D");
obj.getStudent();
console.log("----------------------------------------");


const obj2 =new Student("Yakub",45,"IRC676D");
obj2.getStudent();

console.log("Question 2-----------------------------------");

/*
Program 2: Bank Account Class 
Problem Statement: 
Create a BankAccount class with the following: 
• accountHolder  
• balance  
• deposit()  
• withdraw()  
• checkBalance()
*/



class BankAccount {
  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance = this.balance + amount;
  }

  withdraw(amount) {
    this.balance = this.balance - amount;
  }

  checkBalance() {
    console.log("Account Holder: " + this.accountHolder);
    console.log("Balance: " + this.balance);
    console.log("-------------------");
  }
}


const account1 = new BankAccount("Michel", 1000);

account1.checkBalance();

account1.deposit(500);
account1.checkBalance();

account1.withdraw(200);
account1.checkBalance();


console.log("Question 3-----------------------------------");

/*
Program 3: Student literal object 
Problem Statement: 
Create a student object with the properties name, age, course, and 
marks. Print all the details.

*/


const student = {
  name: "Jack",
  age: 22,
  course: "Computer Science",
  marks: 85
};


console.log("Name: " + student.name);
console.log("Age: " + student.age);
console.log("Course: " + student.course);
console.log("Marks: " + student.marks);


/*
Program 4: Employee Class 
Problem Statement: 
Create an Employee class with name, salary, and 
department. Create a method that calculates a 10% bonus and 
displays the total salary.
*/

class Employee {
  constructor(name, salary, department) {
    this.name = name;
    this.salary = salary;
    this.department = department;
    
  }

  getEmployee() {
    const bonus = (this.salary * 10) / 100;
    const totalSalary = this.salary + bonus;
    console.log("Employee Name: " + this.name);
    console.log("Department: " + this.department);
    console.log("Base Salary: " + this.salary);
    console.log("Bonus (10%): " + bonus);
    console.log("Total Salary: " + totalSalary);
    console.log("-------------------");
  }
}

const emp1 = new Employee("Jackob", 50000, "IT");
const emp2 = new Employee("Riya", 60000, "HR");

emp1.getEmployee();
emp2.getEmployee();
