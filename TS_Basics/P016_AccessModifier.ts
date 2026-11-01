/*
Access Modifiers
=================
-To provide access permission to any variable,function,class,constuctor we use access modifier

In Ts 3 modifiers supported
============================
By default everything is public

1.public
2.private 
3.protected

Access modifier        same class              sub/child class          Outside of class
1.public                    yes                     yes                     yes
2.private                   yes                     NO                      NO
3.protected                 yes                    yes                       NO

Note:
=========
Private data and protected data we can access only with encapsulation(Public methods)


*/
class Tester
{
    public tid:number=2020;
    private salary:number=8078978;
    protected accountNum:number=345677;

    public testing()
    {
        console.log('Testing.....this is public method');
        
    }

    private coding()
    {
        console.log("Coding....this is private method");
        
    }

    protected monitor()
    {
        console.log("Monitor task...this is protected method");
        
    }

    getData() // bydefault public
    {
        //same class
        console.log(this.tid+" : "+this.salary+" : "+this.accountNum);
        
    }

   public getPrivateData()
    {
        //calling private data + method
        console.log("Salary: "+this.salary);
       
        
    }

    getCoding()
    {
        this.coding();
    }

    getProtectedData()
    {
        console.log(this.accountNum);
        
    }

    getProtectedMethod()
    {
        this.monitor();
    }

}


//outside class:object

let t1:Tester=new Tester();
//Only public data we can access outside class
t1.getData();
t1.testing();
console.log("variable: "+t1.tid);
//To access private and protected data through  public method
t1.getPrivateData();
t1.getCoding();
t1.getProtectedData();
t1.getProtectedMethod();

//Access properties using sub class 

class Employee extends Tester{

    getInfo()
    {
        console.log("This is Employee getInfo()...");
        
    }


    getProtectedTesterData()
    {
        //protected data we can through child class
        //child class
        let e2:Employee=new Employee();
        console.log(e2.accountNum);
        e2.monitor();
        

    }
}

console.log("------------------");

//object
//child class ref and child class object
let e1:Employee=new Employee();
e1.getData();
//all private and protected we can call again with public method
e1.getPrivateData();
e1.getCoding();
e1.getProtectedData();
e1.getProtectedMethod();

e1.getProtectedTesterData();











