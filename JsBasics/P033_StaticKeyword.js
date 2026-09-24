

class ProductData
{
    pid;
    pname;

static vendorName;

constructor(pid,pname)
{
this.pid=pid;
this.pname=pname;
}


//non static method
show()
{
    console.log(this.pid);
    console.log(this.pname);
    
    
}

//static method is used to initialize static variable
//In static method non static data you can not call/initialize
static getVendor()
{
    this.vendorName="Google";
    //console.log(this.vendorName);
    //console.log(this.pid);//nonstatic -undefined
    
     
}

static newVendor()
{
this.vendorName="Mocrosoft";
}

}

//object
let p1=new ProductData(101,'Chrome');
//p1.show();
//to call static method or variable use classNAme
console.log(ProductData.vendorName);//undefined
ProductData.getVendor();
console.log(ProductData.vendorName);//Google
ProductData.newVendor();
console.log(ProductData.vendorName);//Microsoft

