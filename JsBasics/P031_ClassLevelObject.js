/*
Object:
-------------
-Object is real world entity which has state and behavior
-Object is instance of class

-In Js everything is dynamic object
-In Js If you follow literal way then object is key:value pair
If you follow class level object then we use new keyword to
declare object
-Object is phisical and logical

Class
----------
- Class is collection of similar type of objects
- Class is blueprint,template to define object
- Class is logical entity

Object Ways in Js
-----------------
1.Object lietral
2.Class level object(ES6)

3.Constcrutor function(ES6)
4.Prototype based object



Constructor
------------
- It is special method which is used to initialized object
- In Js Only one constuctor allowed
- Create constructor using constructor keyword
- constructor get called at the time of object creation


this keyword
=============
- this keyword refers current class instance(properties/method)

*/




class StudentData
{
    //public data/global variable
     sid;
     sname;
     address;
     phno;

     constructor(sid,sname,location,contactnumber)//local varibale
     {
        //assigning local data to global data
        this.sid=sid;
        this.sname=sname;
        this.address=location;
        this.phno=contactnumber;

     }

//SyntaxError: A class may only have one constructor
    //  constructor(sid,sname)
    //  {
    //     this.sid=sid;
    //     this.sname=sname;

    //  }

     //method
    getDetails()
     {
        console.log("Student data is....");
         console.log(this.sid);
        //console.log("Student id: "+sid);//ReferenceError: sid is not defined
              
    }
   

}

//object 
const s1=new StudentData(101,"Sarang","Mumbai",7988980);
console.log(s1.sid);//101
console.log(s1.sname);//Sarang
console.log(s1.address);//Mumbai
console.log(s1.phno);//7988980
s1.getDetails();
console.log("----------");


const s2=new StudentData(201,"Neha","Pune",898907987);
console.log(s2.sid);//201
console.log(s2.sname);//Neha
console.log(s2.address);//Pune
console.log(s2.phno);//898907987
s2.getDetails();

console.log("-------------");

const s3=new StudentData(301,"Kiran");
console.log(s3.sid);//301
console.log(s3.sname);//Kiran
console.log(s3.address);//undefined
console.log(s3.phno);//undefined
s3.getDetails();



console.log("------------");


class LoginPage
{
    username;
    password;
    loginButton;

    constructor(username,password)
    {
        this.username=username;
        this.password=password;
    }

    doLogin()
    {
        console.log("Enter user name: "+this.username);
        console.log("Enter password: "+this.password);
        console.log("Click on loginbutton");       
        
    }



}

//Object
const l1=new LoginPage("Admin","Admin123");
l1.doLogin();

console.log("-----------------------");

class Test{
    
   

   constructor(fname)
{
this.fname=fname;
}

    getData()
    {
        console.log(this.fname);
        
    }
}
const t1=new Test("Jay");
t1.getData();










