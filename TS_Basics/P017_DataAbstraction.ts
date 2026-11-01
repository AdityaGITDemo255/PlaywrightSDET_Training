/*
Data Abstraction
================
It is process of hiding implementation details of software from end user and provide relevant information
to the user.

What is purpose?
=====================
- Information hinding/security
- Reusability of method

Abstraction achive using
------------------------------
1.Abstarct class (partial abstraction)
2.Interface (100% abstraction...recommended)

1.Abstarct class
===============
1.In abstract class we can have both abstract method and non abstarct (concreate) Methods.
2.Abstract method and class we can declare using abstract keyword.
3.Abstract class can not be instantiated.
4.Abstract methods must be overriden by class which inherits abstract class.
5.Using Abstract class partial abstraction is possible.

All non implemented methods we have to implement through childclass


*/


abstract class Page
{

//implemented method/concrete method: method with body
    pageLoad():void
    {
        console.log("Page is loading in 2sec......");
        
    }

    //non Implemented method: method without body(Abstract method)
    //Abstract methods can only appear within an abstract class.
    abstract getTitle():void;


}

//this abstract class is not fully implemented and so object is not possible
//let p1:Page=new Page();//Cannot create an instance of an abstract class.


//child class
class LoginPage extends Page
{
    //override 
    override getTitle(): void {
        console.log("Implemented by child ....Gives page title...");
        
    }

    //loginFunctionality
    doLogin()
    {
        console.log("Login with valid credentials....");
        
    }



}


//Object: Data abstraction

//Scenraio: Parent ref and Parent Object=Invalid
console.log("Scenario1: child class ref and child class object: parent+child");

let l1:LoginPage=new LoginPage();
l1.doLogin();//individual method
l1.pageLoad();//Inherited
l1.getTitle();//Inherited abstract method


console.log("Scenario2: Parent class ref and child class object: parent + override propertirs of parent");

let p1:Page=new LoginPage();
p1.pageLoad();
p1.getTitle();



