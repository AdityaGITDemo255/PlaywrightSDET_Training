/*

Encapsulation
---------------------
- It is binding of data and function together in single unit

Purpose
-----------
- Data hiding/Security

Real time Example
--------------------
capsule,password encryption,pin number
- In Automation we use Encapsulation while designing page object model
Encapsulation = private locators + public method

How to implement in Js?
============================
- hide data using private variable
- In Js use # symbol before variable so that variable will become private
- provide access to data using getters() and setters() public methods
-getters(): return the data
- setters(): set the data

- In Js by default methods are public

private data we can access only inside clsss

*/

export class EmployeeInfo
{
    // data
    eid;
    ename;
    #esalary=80000;//private data
    #location="Pune";

    //constructor
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
    //method

    getData()
    {
        console.log("Employee name : "+this.ename);
        console.log("Employee id is: "+this.eid);
        console.log("Employee salary: "+this.#esalary);
        
               
    }

    //setters()
    setEsalary(esalary)
    {
        if(esalary>this.#esalary)
        {
           this.#esalary=esalary;
        }else
        {
            console.log("Change Rejected");
            
        }
        
    }

    //getters()
    getEsalary()
    {
        return this.#esalary;
    }

    getLocation()
    {
        return this.#location;
    }
}


