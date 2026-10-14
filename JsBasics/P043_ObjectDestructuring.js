
/*
Object Desturcturing
------------------------
- It is clean way to extract elements/values from array/object and assign it into variable in same line
- for object variable name and object keys should be same
*/


//Array Desturcturing


let arr=[100,200,300,400];

let [val1,val2]=arr;
console.log(val1);//100
console.log(val2);//200

console.log(arr);//[ 100, 200, 300, 400 ]

console.log("-------");
let [...value]=arr;
console.log(value);//[ 100, 200, 300, 400 ]
console.log(value[0]);//100

console.log("-----------Object-----------");

let user={
    id:101,
    fname:"Jay",
    city:"Mumbai",
    profile:"QA"
}

console.log(user);

//destructuring: {}, keyname=== let{fname,profile}variablename

let {fname,profile}=user;
console.log("first name is: "+fname);
console.log("Profile is: "+profile);



let customer={
fname:'Sarang',
age:40,
address:"Pune",
phno:809809809,
postalcode:417768,
cid:1010,
profile:"Dev",
salry:78988
}

function placeOrder({cid,fname,address,phno,postalcode})//destructuring
{
console.log("Order placed with name "+fname+" on given address "+address+" delivery parter contact you on "+phno);

}


placeOrder(customer);//passing object to function
















