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


Run time Polymorphism
============================
- Classes must be in Is-A relation
- when we declare same name method with same signature in parent and child class then child class 
will override parent class method.

-updated results from child object

*/


class Parent
{
    color()
    {
        console.log("Red");
        
    }

}

class Child extends Parent
{
    color()
    {
        console.log("Blue");
        
    }

    getData()
    {
        console.log("Test data...");
        
    }
}

//object
//parent class object
const p1=new Parent();
p1.color();//Red

//child class object
const c1=new Child();
c1.color();//Blue

/*
Run time Polymorphism
------------------------------
different login credentials
different browser/enviornment
different app url

*/


class loginPage
{

gotoApp(url)
{
    console.log("Login for "+url);
    
}

}

class GoogleLogin extends loginPage
{
    
    gotoApp(url)
{
    console.log("launch firefox broswer");
    
    console.log("Login for "+url);
    
}


}

const g1=new GoogleLogin();
g1.gotoApp("https://www.google.com");
