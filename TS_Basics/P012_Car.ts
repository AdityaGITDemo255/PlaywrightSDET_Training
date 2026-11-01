
/*
Inheritance
==============
- Aquire properties ofone class into other class we use inheritance


purpose:
==========
- Reusability
- Avoid code duplication
- Run time polymorphism

Method Overriding
==================
In Parent class and child class if we declare same name method with same signature the child
class override parent class methods

Updated method

*/

export class Car
{

    price()
    {
        console.log("Car......1L");
        
    }
    start()
    {
        console.log("Car.....start()");
        
    }

    refule()
    {
        console.log("Car.....refule()");
        
    }

    stop()
    {
        console.log("Car.....stop()");
        
    }
}