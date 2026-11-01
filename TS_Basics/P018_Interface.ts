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

Interface
===========
1.An interface in ts is a blueprint of a class. 
2.Interface contains readonly / immutable variables.
3.Interface contains by default abstract methods.
4.An abstract method is a method contains definition but not body.
5.Methods in interface are public by default.
6.Interface supports the functionality of multiple inheritance.
7.We can define interface with interface keyword.
8.A class extends another class, an interface extends another interface
 but a class implements an interface.
9.We can create Object reference for Interface but we cannot instantiate interface.
10.Inheritance use extends keyword and Interface use implements keyword.


Interface with literal object
================================
- We use interface to define literal object

type alise vs interface
============================
- for object to define data type which is primitive type we use type alise
- Interface we use to design literal object

*/

//interface

interface WHO
{
covid19Test():void;

}

interface IndianMA extends WHO
{
    dentalService():void;
    cardioService():void;

}

interface USMA extends WHO
{
    physioService():void;
    neroService():void;

}

//class: Multiple inheritance
class NobleHs implements IndianMA,USMA
{
    covid19Test(): void {
       console.log("NobleHs.....Covid19TestService()");
    }
    physioService(): void {
       console.log("NobleHs.....physioService()");
    }
    neroService(): void {
        console.log("NobleHs.....neroService()");
    }
    dentalService(): void {
       console.log("NobleHs.....dentalService()");
    }
    cardioService(): void {
       console.log("NobleHs.....cardioService()");
    }
    medicalService()
    {
        console.log("NobleHs.....medicalService()");
        
    }
}



//Test the service: Object
console.log("Scenario1: Parent class ref and parent class object : Invalid");
//let i1:IndianMA=new IndianMA();
console.log("Scenario2: Parent class ref and child class object : Parent ");

let i1:IndianMA=new NobleHs();
i1.dentalService();
i1.cardioService();
i1.covid19Test();

console.log("-------------");

let u1:USMA=new NobleHs();
u1.neroService();
u1.physioService();
u1.covid19Test();



console.log("Scenario3: Child class ref and child class object : Parent+child ");
let n1:NobleHs=new NobleHs();
n1.medicalService();//individual
n1.cardioService();//inherited abstract
n1.dentalService();//inherited abstract
n1.neroService();
n1.physioService();
n1.covid19Test();

console.log("------------------");
//Object literal

//type alias: primitive data types
type studentData={sid:number,sname:string,status:boolean,getData:Function};

let s1:studentData={
sid:101,
sname:"Parag",
status:true,
getData()
{
    console.log("Object literal getData()");
    
}
}

console.log(s1);
s1.getData();
console.log("-------------");

interface Person{
    name:string;
    id:number;
    getData():void;
  
}

let p1:Person={
name:"Jay",
id:101,
getData()
{
    console.log("Name is: "+this.name+"\nId is: "+this.id);
    
}
}

console.log(p1);
console.log(p1.name);
//methods
p1.getData();











