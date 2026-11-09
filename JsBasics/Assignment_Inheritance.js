/* 1. Basic Inheritance – Employee
Question
Create a Person class with a name property and a displayName() method.
Create an Employee class that extends Person and adds an employeeId.
Display the employee's name and ID. */


// Parent Class
class Person {

    // Constructor to initialize name
    constructor(name) {
        this.name = name;
    }

    // Method to display name
    displayName() {
        console.log("Name:", this.name);
    }
}

// Child Class inherits Person
class Employee extends Person {

    // Constructor for name and employeeId
    constructor(name, employeeId) {

        // Calls parent class constructor
        super(name);

        this.employeeId = employeeId;
    }

    // Method to display employee details
    displayEmployee() {
        this.displayName(); // inherited method
        console.log("Employee ID:", this.employeeId);
    }
}

// Create Employee object
const emp = new Employee("TOM", 101);

// Display details
emp.displayEmployee();

/*

2. super to Call Parent Method
Question
Create a Vehicle class with a start() method.
Create a Car class that extends Vehicle.
Override the start() method in Car, but also call the parent start() method using super.*/

// Parent Class
class Vehicle {

    // Method to start vehicle
    start() {
        console.log("Vehicle is starting...");
    }
}

// Child Class inherits Vehicle
class Car extends Vehicle {

    // Override parent method
    start() {

        // Call parent class method
        super.start();

        // Add car-specific functionality
        console.log("Car is ready to drive.");
    }
}

// Create object of Car
const car = new Car();

// Call start method
car.start();

/*3. E-Commerce Scenario
Question
Create a Product class with:
- product name
- price
- displayProduct() method
Create an ElectronicProduct class that extends Product and adds:
- warranty
Use super() to initialize the parent properties.
 */

// Parent Class
class Product {

    // Constructor to initialize product name and price
    constructor(productName, price) {
        this.productName = productName;
        this.price = price;
    }

    // Method to display product details
    displayProduct() {
        console.log("Product Name:", this.productName);
        console.log("Price:", this.price);
    }
}

// Child Class inherits Product
class ElectronicProduct extends Product {

    // Constructor for all properties
    constructor(productName, price, warranty) {

        // Call parent constructor
        super(productName, price);

        // Initialize child property
        this.warranty = warranty;
    }

    // Method to display all details
    displayDetails() {

        // Call parent method
        this.displayProduct();

        // Display warranty
        console.log("Warranty:", this.warranty);
    }
}

// Create object
const laptop = new ElectronicProduct("Dell Laptop",55000,"2 Years");

// Display details
laptop.displayDetails();