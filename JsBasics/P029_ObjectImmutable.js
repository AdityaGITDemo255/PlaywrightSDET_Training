/*
freeze()
--------------
Prevents the modification of existing property attributes 
and values, and prevents the addition of new properties.

seal()
---------------
Prevents the modification of attributes of existing properties,
 and prevents the addition of new properties.
*/
const user={
    id:1010,
    fname:"Smita",
    location:"Us"
}

console.log(user);

Object.freeze(user);//Object become immutable


//insert new property
//user.phno=89089;////TypeError: Cannot add property phno, object is not extensible

//modification
//user.id=1111;//TypeError: Cannot assign to read only property 'id' of object 

//delete
//delete user.id;//TypeError: Cannot delete property 'id' of #<Object>


//change referance
// user={profile:"QA"};//new reference

// console.log(user);//because of let keyword reference change

// user.phno=9099;
// console.log(user);

console.log(user.id);


console.log("--------------");

//const make reference immutable
const product={
    pid:111,
    pname:'Mobile',
    price:809809
}

console.log(product);
//immutable
//Object.freeze(product);

//seal() help to modify exesting properties value but you cannot insert,delete property from object

Object.seal(product);

//insert
//product.size=10;//TypeError: Cannot add property size, object is not extensible

//delete
//delete product.price;//TypeError: Cannot delete property 'price' of #<Object>

//modify existing properties 
product.pid=5465657;
console.log(product);

