/*
IIFE function
-------------
Immediate invoke function expression in Js
*/

(
function()
{
    console.log("This is function1");
    
})();//call

console.log("-------------");

(function(name)
{
    console.log("Hello "+name);
    
})("Kiran");
console.log("-------------");

((un,psw)=>{
console.log("Username is: "+un);
})("admin","admin123");