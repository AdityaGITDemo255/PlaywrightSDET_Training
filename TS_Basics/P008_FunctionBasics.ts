

/*
return type
parameter passing
callback function
function with async behaviour
Method overloading not supported

*/

//function declaration
function test1():void
{
    console.log("Function declaration....");
    
}

//call
test1();

//Anonymous function
let test2=function():void
{
console.log("Anonymous function calling....");

}

//call
test2();

//arrow function
let test3=():void=>{
console.log("This is Arrow function calling....");

}
//call
test3();

console.log("---function with parameter------");


function add(num1:number,num2:number):void
{
console.log("Addition is: "+(num1+num2));

}

let sub=function(num1:number,num2:number):void
{
console.log("Subtraction is: "+(num1-num2));

}


let mul=(num1:number,num2:number):void=>{
console.log("Multiplication is: "+(num1*num2));

}


//call
add(100,200);
sub(100,30);
mul(20,10);


//call back function
function calculation(num1:number,num2:number,fun:Function)
{
fun(num1,num2);
}


//call
calculation(500,100,add);
calculation(67,90,mul);
calculation(100,89,sub);

console.log("-----function with return type------");

//if function does not return anything then use return type: void

function info():string
{
    let msg="Hello All!";
    return msg;
}

//call
info();
console.log(info());
let result=info();
console.log(result);
console.log("--------------------------------");

function getTitle(appName:string):string
{
    return `Application ${appName} title displayed!`;

}

//call
console.log(getTitle("Google"));
console.log(getTitle("Facebook"));
console.log("-------Function with promise---------");
/* 
function myData():Promise<string>
{

    return new Promise((resolve,reject)=>{
        let data=false;
        if(data!==false)
        {
             setTimeout(() => {
            resolve("Expected data found!");
        },2000);
        }else
        {
            setTimeout(() => {
            reject("Expected data not found!");
        },2000);
        }
       
    });
}

let testData=myData();
console.log(testData);

myData().catch((error)=>{
console.log(error);

});


//call
//let testData=myData();
//console.log(testData);//Promise { <pending> }
//handle :async and await
//every async function bydefault returns promise
async function data()
{

    let res:string=await myData();
    console.log(res);
    
    

}
    
//call
data(); */



function myData(): Promise<string> {
    return new Promise((resolve, reject) => {
        let data = false;

        if (data !== false) {
            setTimeout(() => {
                resolve("Expected data found!");
            }, 2000);
        } else {
            setTimeout(() => {
                reject("Expected data not found!");
            }, 2000);
        }
    });
}



myData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


console.log("-----------");

function getData():Promise<string>
{
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve("Test done!")
        }, 2000);
    })
}


async function testGetData():Promise<void>
{
    let res:string=await getData();
    console.log(res);
    
}

testGetData();


/*
Optional Parameter
===================
variable?:datatype
*/

function getDetails(name:string,age?:number)
{
    if(age)
    {
    console.log("Name is: "+name);
    console.log("Age is: "+age);    
    }else
    {
        console.log("Name is: "+name);
        
    }

}

//call
getDetails("Jay",12);
getDetails("Sarang");




