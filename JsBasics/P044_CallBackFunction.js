
/*
Call Back function/ Higher order function
--------------------------------------------------
When we pass function as argument/parameter into other function then that will become callback

*/


//precondition 
function getName(name)
{
console.log("Hello "+name);

}

//Business logic
function greet(name,fun)//  here fun is function
{
fun(name); //Internally : getName("Arun")
}

//call
greet("Arun",getName);//getName() is call back

console.log("---------------------");

let add=(num1,num2)=>{console.log("Addition is: "+(num1+num2));}
let sub=(num1,num2)=>{console.log("Subtraction is: "+(num1-num2));}
let mul=(num1,num2)=>{console.log("Multiplication is: "+(num1*num2));}
let div=(num1,num2)=>{console.log("Division  is: "+(num1/num2));}
let mod=(num1,num2)=>{console.log("Modulus is: "+(num1%num2));}


//business logic
function calculation(n1,n2,fun)// fun parameter name for callBackfunction
{
   fun(n1,n2);
}

//call
calculation(100,200,add);//here add is callback
calculation(10,10,mul);//mul is callback
calculation(200,20,div);//div is callback
calculation(400,30,sub);//sub is callback

add(1000,2000);//not callback







