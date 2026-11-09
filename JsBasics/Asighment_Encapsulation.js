/* Assignments On Encapsulation
------------------------------
1. Student Record System  
Problem Statement:  
Create a Student class that uses encapsulation to protect its data. The 
class should have the following  
private fields:  
• name (String)  
• rollNumber (int)  
• grade (char)  
Provide appropriate getter and setter methods to access and modify 
the values. Also, create method  
that:  
• Creates a new student object  
• Sets the data using setters  
• Displays the data using getters  
and test it in separate class 
2. Online Shopping – Product Class */

class Student {
    #name;
    #rollNumber;
    #grade;

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setRollNumber(rollNumber) {
        this.#rollNumber = rollNumber;
    }

    getRollNumber() {
        return this.#rollNumber;
    }

    setGrade(grade) {
        this.#grade = grade;
    }

    getGrade() {
        return this.#grade;
    }
}

class TestStudent {
    constructor() {
        const student = new Student();

        student.setName("Macloid");
        student.setRollNumber(101);
        student.setGrade("A");

        console.log("Name:", student.getName());
        console.log("Roll Number:", student.getRollNumber());
        console.log("Grade:", student.getGrade());
    }

    
}

const objj = new TestStudent();




/*
Problem Statement 
Build a JavaScript class Product that stores the following product 
details: 
• productId – number 
• productName – string 
• price – number 
• quantityInStock – number 
Requirements 
1. All fields must be private using JavaScript private fields (#). 
2. Provide public getters and setters for all fields. 
3. Add validation to the setters: 
o price must be greater than 0. 
o quantityInStock must be 0 or greater. 
4. productName should not be empty. 
5. Create an object of the Product class. 
6. Use the public setters to set or modify product details. 
7. Use the public getters to retrieve and display product details. 
8. Try accessing a private field directly from outside the class and 
observe what happens. */ 

// Product Class using Encapsulation
class Product {

    // Private fields (cannot be accessed directly outside the class)
    #productId;
    #productName;
    #price;
    #quantityInStock;

    // Setter for Product ID
    setProductId(id) {
        this.#productId = id;
    }

    // Getter for Product ID
    getProductId() {
        return this.#productId;
    }

    // Setter for Product Name
    // Product name should not be empty
    setProductName(name) {
        if (name.trim() !== "") {
            this.#productName = name;
        } else {
            console.log("Product name cannot be empty");
        }
    }

    // Getter for Product Name
    getProductName() {
        return this.#productName;
    }

    // Setter for Price
    // Price must be greater than 0
    setPrice(price) {
        if (price > 0) {
            this.#price = price;
        } else {
            console.log("Price must be greater than 0");
        }
    }

    // Getter for Price
    getPrice() {
        return this.#price;
    }

    // Setter for Quantity
    // Quantity cannot be negative
    setQuantityInStock(quantity) {
        if (quantity >= 0) {
            this.#quantityInStock = quantity;
        } else {
            console.log("Quantity cannot be negative");
        }
    }

    // Getter for Quantity
    getQuantityInStock() {
        return this.#quantityInStock;
    }
}

// Create Product Object
const product = new Product();

// Set values using setters
product.setProductId(1);
product.setProductName("Laptop");
product.setPrice(50000);
product.setQuantityInStock(25);

// Display values using getters
console.log("ID:", product.getProductId());
console.log("Name:", product.getProductName());
console.log("Price:", product.getPrice());
console.log("Stock:", product.getQuantityInStock());

// Trying to access private field directly
// This will give an error because #price is private

// console.log(product.#price);

// Error:
// SyntaxError: Private field '#price' must be declared in an enclosing class








/*
Problem 3: Bank Account 
Create a BankAccount class. 
Requirements: 
• Create a private variable #balance.  
• Create methods:  
o deposit(amount)  
o withdraw(amount)  
o getBalance()  
• The balance should not be directly accessible from outside the 
class.  
• Prevent withdrawal if the amount is greater than the available 
balance */ 

// BankAccount class using Encapsulation
class BankAccount {

    // Private variable to store account balance
    // Cannot be accessed directly outside the class
    #balance = 0;

    // Method to deposit money into the account
    deposit(amount) {

        // Add deposit amount to current balance
        this.#balance += amount;

        console.log(`Deposited: ${amount}`);
    }

    // Method to withdraw money from the account
    withdraw(amount) {

        // Check if sufficient balance is available
        if (amount <= this.#balance) {

            // Deduct amount from balance
            this.#balance -= amount;

            console.log(`Withdrawn: ${amount}`);

        } else {

            // Execute when withdrawal amount is greater than balance
            console.log("Insufficient Balance");
        }
    }

    // Method to check current balance
    getBalance() {
        return this.#balance;
    }
}

// Create BankAccount object
const account = new BankAccount();

// Deposit Rs.5000
account.deposit(5000);

// Withdraw Rs.2000
account.withdraw(2000);

// Display remaining balance
console.log("Balance:", account.getBalance());

console.log("Try to withdraw Rs.4000");
// Current balance is only Rs.3000
account.withdraw(4000);


/*
Problem 4: Student Marks 
Create a Student class. 
Requirements: 
• Private property: #marks  
• Method: setMarks(marks)  
• Method: getMarks()  
• Marks must be between 0 and 100.  
• Invalid marks should not be stored.
 */

// Student class using Encapsulation

class Student {

    // Private property
    // Cannot be accessed directly outside the class
    #marks;

    // Method to set marks
    setMarks(marks) {

        // Check if marks are between 0 and 100
        if (marks >= 0 && marks <= 100) {

            // Store marks if valid
            this.#marks = marks;

        } else {

            // Display message for invalid marks
            console.log("Invalid Marks");
        }
    }

    // Method to get marks
    getMarks() {

        // Return stored marks
        return this.#marks;
    }
}

// Create Student object
const student = new Student();

// Set valid marks
student.setMarks(85);

// Display marks
console.log("Marks:", student.getMarks());

// Try setting invalid marks
student.setMarks(120);

console.log("Previous valid marks remain unchanged!");
console.log("Marks:", student.getMarks());
