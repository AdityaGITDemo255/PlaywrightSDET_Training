

class Product
{
    //data
    readonly pid:number;
    pname:string;

    //constrcutor
    constructor(pid:number,pname:string)
    {
        this.pid=pid;
        this.pname=pname;
    }


    //methods
    getData()
    {
        console.log("Product id is: "+this.pid);
        console.log("Product name is: "+this.pname);
        
        
    }

}

//object
let p1:Product=new Product(101,"Macbook pro");

p1.getData();
//p1.pid=111;//Cannot assign to 'pid' because it is a read-only property.
console.log(p1.pid);

let p2:Product=new Product(222,"Iphone");
p2.getData();
//p2.pid=333; //Cannot assign to 'pid' because it is a read-only property.


/* 
A readonly property in TypeScript can be assigned:

At declaration time
Inside the constructor */