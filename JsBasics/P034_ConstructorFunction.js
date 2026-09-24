/*
Constructor function/ES6
--------------------------
Definition:
A constructor function is used to create and initialize objects.
Constructor functions are typically named with a capital letter

*/

function getData(num1,num2)
{
    console.log("This is function declaration....");
    console.log(num1+num2);
    
    
}

//This constructor function may be converted to a class declaration.
//constructor function
function EmployeeData(id,name)
{
    this.id=id;
    this.name=name;

    //methods
    this.showDetails=function()
    {
        console.log("Employee id is: "+this.id);
        console.log("Employee name is: "+this.name);
               
    }

    this.calculateBonus=function(salary)
    {
        let bonus=salary*10/100;
        console.log("bonus applicable: "+bonus);
         console.log("Employee id is: "+this.id);
        console.log("Employee name is: "+this.name);
    }
}

//object
let e1=new EmployeeData(101,"Jay");
e1.showDetails();
e1.calculateBonus(50000);

console.log("---------------");


let e2=new EmployeeData(201,"Sneha");
e2.calculateBonus(80000);

console.log("-------------");

let obj=[e1,e2];
console.log(obj);

for(let i in obj)
{
    console.log(obj[i].id);
    
}

console.log("-------Prototype based object------");
//Object.create()

let user1={
    uid:111,
    uname:"Kiran"
}
//Creates an object that has the specified prototype or that has null prototype.
let u1=Object.create(user1);
console.log(u1.uid);
console.log(u1.uname);


class Product{
    pid;
    pname;
    constructor(pid,pname)
    {
        this.pid=pid;
        this.pname=pname;
    }

    getProduct()
    {
        console.log("Product details: "+this.pname);
        
    }
}

let pp1=new Product(111,"Macbook");
console.log(pp1.pid);
console.log(pp1.pname);
pp1.getProduct();


let p1=Object.create(pp1);
console.log(p1.pid);
console.log(p1.pname);
p1.getProduct();

