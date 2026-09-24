
//In Playwright during API +UI 
/*
1. JsObject-----> converting into JSON string
stringify()
------------
Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

2.JSONstring ---->converting into JsObject
parse()
-------------
Converts a JavaScript Object Notation (JSON) string into an object.
*/

let product=
{
pid:111,
pname:'Asus',
price:8798098
}

console.log(product);
console.log(typeof product);//Object

//Js--->JSON

let jsToJsonData=JSON.stringify(product);
console.log(jsToJsonData);
console.log(typeof jsToJsonData);


console.log("-------------------");


let payload=`{
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}`

console.log(payload);
console.log(typeof payload);//string

//JSON string--->Js object
let jsonToJsData=JSON.parse(payload);
console.log(jsonToJsData);
console.log(typeof jsonToJsData);




