/*
Inheritance
-------------
- Accessing properties of one class into another class called inheritance
- Inheritance is Is-A relation


What is Purpose?
----------------
- To Avoid duplication 
- for Method reusability
- For Run time polymorphism

Real time examples
------------------------
Parent--Child relation

How to implement is?
-------------------------
use extends keywords

Note:
==========
Every parent class can access only parent class method
Every child class can access methods from parent and its own

Types of Inheritance
----------------------
1.Single level
2.Multilevel
3.Hierarchical

with interface we can implement: typescript
4.Multiple inheritance
5.Hybrid inheritance (Dimond problem)

*/


//common properties
export class BasePage
{

getTitle(pageName)
{
    console.log(`Current  ${pageName} page Title`);
}

getCurrentUrl(pageName)
{
console.log(`Current  ${pageName} page url `);
}

}