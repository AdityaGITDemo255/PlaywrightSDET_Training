
import {Parent} from "./P055_SuperKeyword.js"

class Child extends Parent
{
    cid=2020;

    constructor(pid)
    {
    super(pid);//super constructor: always at first line
    console.log("Child constrcutor is calling....");
    }

    getChildIncome()
    {   console.log("Child id: "+this.cid);
        //from parent variable we can not call directly with super keyword, you need toshare variable through method
        console.log("Parent id: "+super.pid);//undefined
        
        //variables+method
        super.getParentIncome();
    
        console.log("Child income is $70000");
        
    }
}

//child object
const c1=new Child(2222);
c1.getChildIncome();



class A extends Child
{


    constructor()
    {
        super();
        console.log("A constrcutor");
        
    }

}

const a1=new A();
