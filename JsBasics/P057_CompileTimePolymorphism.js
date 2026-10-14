/*
Polymorphism
===============
- One thing we can reuse in many form

Purpose
==========
- Reusability of method

Types of Polymorphism
===========================
1.Compile time polymorphism
2.Run time polymorphism


1.Compile time / Method overloading
=======================
Method can be overloaded when same name method is declared in same class multiple time with
different signature

What is different signature
==============================
1. Number of paremeters
2. type of parameters can change
3. change order of paremeters

In Js as this language is interpreter based and dicisions at only run time so no compilation phase
so Js does not support method overloading.


*/


class TestLogin
{


    login()
    {
        console.log("Login with default credentials....");
        
    }

     login(username,password)
    {
        console.log("Login with valid credentials...."+username+" : "+password);
        
    }

    login(otp)
    {
        console.log("Login with otp"+otp);
        
    }

}


//object
const t1=new TestLogin();
t1.login("Admin","admin123");


//function overloading

function testData()
{
    console.log("Function for testing data....");
    
}

function testData(data)//SyntaxError: Identifier 'testData' has already been declared
{
    console.log("Function for testing data...."+data);
    
}


//call
//testData();

