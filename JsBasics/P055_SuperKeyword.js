/*
Super Keyword
===============
- To access immediate parent properties like variable,method and constructor we use super keyword

super.method()
parent constructor call
    super()
*/


export class Parent
{
    pid;//2222

    constructor(pid)
    {
        console.log("Parent constructor calling...");
        this.pid=pid;
    }
    getParentIncome()
    {
        console.log("Parent id: "+this.pid);
        
        console.log("Parent Income is $17000");
        
    }

    getParentId()
    {
        return this.pid;
    }
}




//Console.log(c1.pid);
// console.log(c1.cid);
// c1.getParentIncome();
// c1.getChildIncome();
