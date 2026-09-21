

let product={
    pid:111,
    pname:'MacBoook Pro',
    price:90000,
    color:'black',
    read:()=>{
        console.log("Hello....");
        
    }
}

console.log(product);
product.read();


let allKeys=Object.keys(product);
console.log(allKeys);

console.log("------------");

//values()
let allValues=Object.values(product);
console.log(allValues);

console.log("------------");
let allEntries=Object.entries(product);
console.log(allEntries);

//call
product.read();