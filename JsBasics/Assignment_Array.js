/*

1. Employee Management System 
Scenario: 
A company stores employee names in an array. 
Question: 
Declare an array with employee names "Rahul", "Priya", "Amit" and 
perform the following operations: 
1. Add "Sneha" to the employee list  
2. Remove the last employee from the list  
3. Add "Manager" at the beginning of the list  
4. Remove the first employee from the list 
*/
console.log("Question 1-------------------------------------------");

let employee = ["Rahul", "Priya", "Amit"]
console.log(employee);

employee.push("Sneha");
console.log(employee);
employee.pop();
console.log(employee);
employee.unshift("Manager");
console.log(employee);
employee.shift();
console.log(employee);

console.log("Question 2-------------------------------------------");
/*
2. Shopping Cart Application 
Scenario: 
An e-commerce website manages products in a shopping cart. 
Question: 
Declare an array with "Mobile", "Laptop", "Mouse" and: 
1. Add "Keyboard" to the cart  
2. Display all products in reverse order  
3. Convert all cart items into a single string separated by " | "  

*/

let cart = ["Mobile", "Laptop", "Mouse"];
console.log(cart);
let revCart = cart.reverse();
console.log(revCart);
//console.log(cart);

console.log(cart.join(" | "));
 
console.log("Question 3 -------------------------------------------");

/*

3. Browser Tabs Automation 
Scenario: 
A browser automation framework tracks currently opened tabs. 
Question: 
Declare an array with "Google", "YouTube", "ChatGPT" and: 
1. Close the last opened tab  
2. Add "GitHub" as the first tab  
3. Display tabs in reverse order  
*/

let tabs = ["Google", "YouTube", "ChatGPT"];
console.log(tabs);
tabs.pop();
console.log(tabs);
tabs.unshift("GitHub");
console.log(tabs);
console.log(tabs.reverse());
console.log("Question 4 -------------------------------------------");

/*
4. Food Delivery Orders 
Scenario: 
A food delivery application maintains current orders. 
Question: 
Declare an array with "Pizza", "Burger", "Pasta" and: 
1. Add "Sandwich" to the orders  
2. Remove the first order  
3. Display all orders as a comma-separated string  
*/

let orders = ["Pizza", "Burger", "Pasta"];
console.log("Initial Orders:", orders);

orders.push("Sandwich");
console.log("After Adding Sandwich:", orders);

orders.shift();
console.log("After Removing First Order:", orders);

let ordersString = orders.join(", ");
console.log("Orders as String:", ordersString);
console.log("Question 5 -------------------------------------------");

/*
5. Student Attendance System 
Scenario: 
A school application maintains student attendance. 
Question: 
Declare an array with "Ankit", "Riya", "Karan" and: 
1. Add "Neha" at the beginning  
2. Remove the last student from the list  
3. Create a separate copy of the attendance list 
*/

let students = ["Ankit", "Riya", "Karan"];
console.log("Initial Attendance:", students);

students.unshift("Neha");
console.log("After Adding Neha at Beginning:", students);

students.pop();
console.log("After Removing Last Student:", students);

let copyList = [...students];
console.log("Copied Attendance List:", copyList);

console.log("Question 6 -------------------------------------------");

/*
6. QA Test Case Management 
Scenario: 
A QA engineer stores executed test cases. 
Question: 
Declare an array with "LoginTest", "PaymentTest", "SearchTest" and: 
1. Create another copy of the same array  
2. Extract only the first 2 test cases  
3. Display test cases in reverse order  
*/

let testCases = ["LoginTest", "PaymentTest", "SearchTest"];
console.log("Initial Test Cases:", testCases);

let copyCases = [...testCases];
console.log("Copied Test Cases:", copyCases);

let firstTwo = testCases.slice(0, 2);
console.log("First Two Test Cases:", firstTwo);

console.log("Reversed Test Cases:", firstTwo.reverse());
console.log("Question 7 -------------------------------------------");

/*

7. Movie Recommendation App 
Scenario: 
A movie application stores recommended movies. 
Question: 
Declare an array with "Inception", "Avatar", "Titanic" and: 
1. Add "Interstellar" to the movie list  
2. Replace "Titanic" with "Jawan"  
3. Convert all movie names into a single string separated by "-"  

*/
let movies = ["Inception", "Avatar", "Titanic"];
console.log("Initial Movies:", movies);

movies.push("Interstellar");
console.log("After Adding Interstellar:", movies);

let index1= movies.indexOf("Titanic")
movies[index1]= "Jawan";
console.log("After Replacing Titanic with Jawan:", movies);

let movieString = movies.join("-");
console.log("Movies as String:", movieString);

console.log("Question 8 -------------------------------------------");

/*

8. Product Inventory Management 
Scenario: 
An admin manages product inventory. 
Question: 
Declare an array with "Mobile", "Laptop", "Tablet", "Camera" and: 
1. Remove "Tablet" from inventory  
2. Add "Smart Watch" after "Laptop"  
3. Create a duplicate copy of updated inventory  
*/

let inventory = ["Mobile", "Laptop", "Tablet", "Camera"];

inventory.splice(2, 1); 
console.log(inventory);

inventory.splice(2, 0, "Smart Watch"); 
console.log(inventory);
let duplicateInventory = [...inventory];
console.log(duplicateInventory);

console.log("Question 9 -------------------------------------------");
/*

9. Online Course Platform 
Scenario: 
An online learning platform stores enrolled courses. 
Question: 
Declare an array with "JavaScript", "Playwright", "Cypress" and: 
1. Remove the first course  
2. Add "TypeScript" at the beginning  
3. Extract only the last 2 courses  

*/

let courses = ["JavaScript", "Playwright", "Cypress"];
console.log("Initial Courses:", courses);

courses.shift();
console.log("After Removing First Course:", courses);

courses.unshift("TypeScript");
console.log("After Adding TypeScript at Beginning:", courses);

let lastTwo = courses.slice(-2);
console.log("Last Two Courses:", lastTwo);


console.log("Question 10 -------------------------------------------");
/*

10. Music Playlist Application 
Scenario: 
A music app stores favorite songs. 
Question: 
Declare an array with "Song1", "Song2", "Song3" and: 
1. Display playlist in reverse order  
2. Remove the last song  
3. Add "NewSong" at the beginning  
4. Convert playlist into a single string 
*/

let playlist = ["Song1", "Song2", "Song3"];
console.log("Initial Playlist:", playlist);


console.log("Playlist in Reverse Order:", playlist.reverse());
//console.log(playlist);

playlist.pop();
console.log("After Removing Last Song:", playlist);

playlist.unshift("NewSong");
console.log("After Adding NewSong at Beginning:", playlist);

let playlistString = playlist.join(", ");
console.log("Playlist as String:", playlistString);

console.log("Question 11 -------------------------------------------");


/*
11. Bug Tracking System 
Scenario: 
A software team tracks bugs using arrays. 
Question: 
Declare an array with "Bug101", "Bug102", "Bug103" and: 
1. Add "Bug104"  
2. Remove "Bug102"  
3. Create a copy of the bug list  


*/
let bugs = ["Bug101", "Bug102", "Bug103"];
console.log("Initial Bugs:", bugs);

bugs.push("Bug104");
console.log("After Adding Bug104:", bugs);

bugs.splice(1, 1);
console.log("After Removing Bug102:", bugs);

let copyBugs = [...bugs];
console.log("Copied Bug List:", copyBugs);

/*

12. Daily Tasks Planner 
Scenario: 
A task planner application stores daily tasks. 
Question: 
Declare an array with "Wake Up", "Exercise", "Study" and: 
1. Add "Meeting" to the task list  
2. Remove the first task  
3. Reverse all tasks  
4. Display all tasks in a single string separated by " -> " 

*/
console.log("Question 12 -------------------------------------------");

let tasks = ["Wake Up", "Exercise", "Study"];
console.log("Initial Tasks:", tasks);

tasks.push("Meeting");
console.log("After Adding Meeting:", tasks);

tasks.shift();
console.log("After Removing First Task:", tasks);

tasks.reverse();
console.log("After Reversing Tasks:", tasks);

let taskString = tasks.join(" -> ");
console.log("Tasks as String:", taskString);


console.log("Question 13 -------------------------------------------");
/*


13. Mobile Contacts List 
Scenario: 
A mobile app stores contact names. 
Question: 
Declare an array with "Ram", "Shyam", "Mohan" and: 
1. Add "Sita" at the beginning  
2. Remove the last contact  
3. Extract only the first 2 contacts 
*/

let contacts = ["Ram", "Shyam", "Mohan"];
console.log("Initial Contacts:", contacts);

contacts.unshift("Sita");
console.log("After Adding Sita at Beginning:", contacts);

contacts.pop();
console.log("After Removing Last Contact:", contacts);

let firstTwoo = contacts.slice(0, 2);
console.log("First Two Contacts:", firstTwoo);

console.log("Question 14 -------------------------------------------");


/*
14. Sports Team Selection 
Scenario: 
A coach manages selected players. 
Question: 
Declare an array with "Virat", "Rohit", "Gill" and: 
1. Add "Hardik" to the team  
2. Replace "Gill" with "KL Rahul"  
3. Display players in reverse order 

*/

let team = ["Virat", "Rohit", "Gill"];
console.log("Initial Team:", team);

team.push("Hardik");
console.log("After Adding Hardik:", team);

team.splice(2, 1, "KL Rahul"); 
console.log("After Replacing Gill with KL Rahul:", team);

console.log("Team in Reverse Order:", team.reverse());


console.log("Question 15 -------------------------------------------");

/*
15. Real-Time Automation Framework Scenario 
Scenario: 
An automation framework stores failed test names. 
Question: 
Declare an array with "LoginFail", "CheckoutFail", "SearchFail" and: 
1. Add "ProfileFail"  
2. Remove the first failed test  
3. Create another copy of the failed tests array  
4. Extract only the first 2 failed tests  
5. Replace "CheckoutFail" with "PaymentFail"  
6. Convert all failures into a single comma-separated string

*/

let failedTests = ["LoginFail", "CheckoutFail", "SearchFail"];
console.log("Initial Failed Tests:", failedTests);

failedTests.push("ProfileFail");
console.log("After Adding ProfileFail:", failedTests);

failedTests.shift();
console.log("After Removing First Failed Test:", failedTests);

let copyTests = [...failedTests];
console.log("Copied Failed Tests:", copyTests);

console.log("First Two Failed Tests:", failedTests.slice(0, 2));
//console.log(failedTests);

failedTests.splice(0, 1, "PaymentFail");
console.log("After Replacing CheckoutFail with PaymentFail:", failedTests);

console.log("Failures as String:", failedTests.join(", "));
