
/*
 (...)spread operator/rest parameter in Js
... spread operator
-----------------------
-Using spread opeeator we can store n number of elements into array
-using same we can pass number of parameters to function(rest parameter)
-Rest parameters used to design dynamic function 
-Rest parameter should be last paremeter of your function

-destructuring (array/object)
------------------------------
It is clean way to retrieve array elements and store it into variable

*/

function getEmployeeData(id,name,...address)
{
console.log("Employee id is: "+id+"\nEmployee name is: "+name+"\nEmployee address is: "+address);

}


//call
getEmployeeData(101,"Sarang","India","Us");
getEmployeeData(201,"Smita","Canada","Us","India","a","b","c","d","e");


console.log("----------");
function programmingSkills(...skill)
{
console.log(skill);

}

programmingSkills("C","C++","Java","Python","C#","Javascript","Typescript")

console.log("-------------");

let toolSkill=(...tool)=>{
return tool;

}


let result=toolSkill("Selenium","Appium","Postman","Cypress");
console.log(result);

//result[]
result.splice(2,0,"Playwright");
console.log(result);

