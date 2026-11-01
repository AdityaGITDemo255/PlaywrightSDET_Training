/*
Polymorphism
============
Where one thing in multiple form we can reuse

types
==========
1.compile time poly(does not support)/Method overloading not supported
ts--->js--->execute

2.Run time Poly(Inheritance)
*/


class Test {

login()
{
    console.log("Login with default credentials....");
    
}

//same name differnt signature
//login(un:string,psw:string)//Duplicate function implementation.
// {
//     console.log("Login with default credentials....");
    
// }

}

//object
let t1:Test=new Test();
t1.login();


//function

function testData()
{
console.log("This is testData()");

}


//function testData(data:string)//Duplicate function implementation.
// {
//     console.log("This is testData()with parameters");
    
// }

console.log("-------Solution is prototype based-----");

//Prototype
function calculation(num1:number,num2:number):number;
function calculation(num1:string,num2:number):string;
function calculation(num1:number,num2:string):string;
function calculation(num1:string,num2:boolean):string;

//def

function calculation(num1:any,num2:any):any
{

return num1+num2;

}

//call
console.log(calculation(100,200));
console.log(calculation("Hello",10));
console.log(calculation("Hello",true));
console.log(calculation(10,"false"));




