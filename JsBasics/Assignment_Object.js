/* Program 1. Student Object 
Create a student object with the following properties: 
• id  
• name  
• age  
• course  
• marks  
Perform the following: 
1. Print the complete object.  
2. Print the student's name.  
3. Print the student's marks.  
4. Change the student's course.  
5. Update the student's marks.  
6. Add a new property city.  
7. Delete the age property.   */

// Create a student object
let student = {
    id: 101,
    name: "Aditya",
    age: 25,
    course: "BCA",
    marks: 85
};

// 1. Print the complete object
console.log("Student Object:", student);

// 2. Print the student's name
console.log("Name:", student.name);

// 3. Print the student's marks
console.log("Marks:", student.marks);

// 4. Change the student's course
student.course = "MCA";
console.log("Updated Course:", student.course);

// 5. Update the student's marks
student.marks = 92;
console.log("Updated Marks:", student.marks);

// 6. Add a new property city
student.city = "Bhubaneswar";
console.log("After Adding City:", student);

// 7. Delete the age property
delete student.age;
console.log("After Deleting Age:", student);

/* 
Program 2. Employee Object 
Create an employee object containing: 
id 
name 
department 
designation 
salary 
Perform: 
1. Access each property using dot notation.  
2. Access each property using bracket notation.  
3. Update the salary.  
4. Add a location property.  
5. Delete the designation property.  */


// Create an employee object
let employee = {
    id: 101,
    name: "Aditya",
    department: "QA",
    designation: "Senior Test Engineer",
    salary: 80000
};

// 1. Access each property using dot notation
console.log("ID:", employee.id);
console.log("Name:", employee.name);
console.log("Department:", employee.department);
console.log("Designation:", employee.designation);
console.log("Salary:", employee.salary);

// 2. Access each property using bracket notation
console.log("ID:", employee["id"]);
console.log("Name:", employee["name"]);
console.log("Department:", employee["department"]);
console.log("Designation:", employee["designation"]);
console.log("Salary:", employee["salary"]);

// 3. Update the salary
employee.salary = 90000;
console.log("Updated Salary:", employee.salary);

// 4. Add a location property
employee.location = "Bhubaneswar";
console.log("Location:", employee.location);

// 5. Delete the designation property
delete employee.designation;

// Print final object
console.log("Final Employee Object:", employee);


/* 
program 3.Create a testData object containing: 
username 
password 
browser 
environment 
timeout 
Use Object.keys() to: 
1. Get all property names.  
2. Count the number of properties.  
3. Check whether username exists.  */

// Create testData object
let testData = {
    username: "admin",
    password: "admin123",
    browser: "chrome",
    environment: "QA",
    timeout: 30000
};

// 1. Get all property names
let keys = Object.keys(testData);
console.log("Property Names:", keys);

// 2. Count the number of properties
console.log("Total Properties:", keys.length);

// 3. Check whether username exists
console.log("Username Exists:", keys.includes("username"));

/* 
Program 4.Create an object containing test configuration: 
browser: "chromium" 
headless: true 
timeout: 30000 
retries: 2 
Use Object.values() to: 
1. Display all values.  
2. Check whether "chromium" exists.  
3. Count the number of configuration values.  */

// Create configuration object
let config = {
    browser: "chromium",
    headless: true,
    timeout: 30000,
    retries: 2
};

// Get all values from the object
let values = Object.values(config);

// 1. Display all values
console.log("All Values:", values);

// 2. Check whether "chromium" exists
console.log("Chromium Exists:", values.includes("chromium"));

// 3. Count the number of configuration values
console.log("Total Values:", values.length);


/* 
Program 5.Create a user object: 
username 
role 
department 
experience 
Use Object.entries() to print: 
username : standard_user 
role : tester 
department : QA 
experience : 5  */

// Create object
let user = {
    username: "standard_user",
    role: "tester",
    department: "QA",
    experience: 5
};

// Object.entries() returns key-value pairs
let entries = Object.entries(user);

// Iterate through each pair
for (let [key, value] of entries) {

    // Print property and value
    console.log(key + " : " + value);
}

/* Program 6.Create: 
const user = { 
name: "John", 
role: "Tester", 
city: "Pune" 
}; 
Create a new object that: 
• Contains all properties of user.  
• Changes role to "Automation Engineer".  
• Adds experience: 5.  
The original object should remain unchanged. */ 


const userr = {
  name: "John",
  role: "Tester",
  city: "Pune"
};

const updatedUser = {...userr}; //copy object using spread operator

  
console.log("Original Object:", userr);
console.log("New Object:", updatedUser);

//Changes role to "Automation Engineer".  
updatedUser.role = "Automation Engineer";

//Adds experience: 5

updatedUser.experience = 5;

console.log("New Object:", updatedUser);

/* 
Program 7.Playwright Configuration Object 
Create a configuration object: 
browser 
baseURL 
headless 
timeout 
retries 
Example: 
{ 
} 
browser: "chromium", 
baseURL: "https://example.com", 
headless: true, 
timeout: 30000, 
retries: 2 
Perform: 
1. Print all configuration values.  
2. Change the browser.  
3. Change the timeout.  
4. Add screenshot: "only-on-failure".  
5. Check whether retries exists.  
6. Create a copy with a different baseURL.  
 */

// Playwright Configuration Object
const configg = {
  browser: "chromium",
  baseURL: "https://example.com",
  headless: true,
  timeout: 30000,
  retries: 2
};

// 1. Print all configuration values
console.log("Browser:", configg.browser);
console.log("Base URL:", configg.baseURL);
console.log("Headless:", configg.headless);
console.log("Timeout:", configg.timeout);
console.log("Retries:", configg.retries);

// 2. Change the browser
configg.browser = "firefox";
console.log("Updated Browser:", configg.browser);

// 3. Change the timeout
configg.timeout = 60000;
console.log("Updated Timeout:", configg.timeout);

// 4. Add screenshot
configg.screenshot = "only-on-failure";
console.log("Screenshot Setting:", configg.screenshot);

// 5. Check whether retries exists
console.log("Retries exists:", "retries" in configg);

// 6. Create a copy with a different baseURL
const newConfig = {
  ...configg,
  baseURL: "https://playwright.dev"
};

console.log("Copied Configuration:");
console.log(newConfig);