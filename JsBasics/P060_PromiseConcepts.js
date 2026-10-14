
//Scenario: get the student marks from server

function getMarks()
{
    //async operation
    setTimeout(() => {
        return 90;
    }, 2000);//2sec
}

//call
let marks=getMarks();
//console.log(marks);//undefined

/*
Promise
-------------
A Promise is an object used to managing asynchronous operataion
- promise allow you to write code that continue after a specific event occur
- Promises enabled the handling of data that is not currently available
but will be available in the future

- A promise has 3 states pending, resolve and reject
pending: This is initial state when the promise is neither fullfilled or rejetcted

fullfilled: This state means asynchronous operation associated with
promise has been successfully completed

Rejected: This state indicates that the asynchronus operation has failed
or been rejected

setteled
============
-when promise is either fullfilled or rejected it enter the settled state
-In this state there are two important methods
1.then():
------------
when promise successfully transitions to the fullfilled state, then method
allows you to specify a callback function that will work with completed data
-this is used to define what should happen when a successfull result is obtained

catch():
-----------
when promise transitions to the "rejected" state the catch method let you specify
a callback function that will work with rejected error
-This is used to handle situation where the operation fails


Example: Food order
Food is being prepared--->pending
Food is ready------->fullfill(Resolve)
Order is reject/fail---->reject

*/

let myPromise=new Promise((resolve,reject)=>{

                        let orderStatus=true;
                        if(orderStatus)
                        {
                            resolve("Food is ready!")
                        }else{
                            reject("Order is rejected!")
                        }

                    })
    //console.log(myPromise);//Promise { 'Food is ready!' }
    

    //same function with async operation:task which need extra time

    let testPromise=new Promise((resolve,reject)=>{

    let orderStatus=false;

    setTimeout(() => {
        if(orderStatus)
             {
            resolve("Food is ready!")
            }else
            {
            reject("Order is rejected!")
            }

    },0);//0sec

    });

    console.log(testPromise);//Promise { <pending> }

    //settel down 
    testPromise.then((result)=>{
        console.log("Order Status: "+result);
        
    }).catch((error)=>{//Attaches a callback for only the rejection of the Promise.
        console.log("Order Error status: "+error);
        
    })
    

console.log("---------then() and catch()------------");

let p1=new Promise((resolve,reject)=>{
                    resolve("Promise is completed!")
                    });

p1.then((resolveStatus)=>{
console.log(resolveStatus);

})

//modern syntax
let p2=Promise.resolve("Promise pass!");

console.log(p2);


p2.then((res)=>{
console.log(res);

})

//reject promise
let p3=Promise.reject("Promise Fail!");

p3.catch((error)=>{
console.log(error);

})

console.log("---------Function returns promise------");



function getStatus()
{
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve("After 2sec....Status is Pass!")
        },2000);
    })
}

//call
let actStatus=getStatus();
//console.log(actStatus);//Promise { <pending> }

//tradinational way to handle then() and catch()
// getStatus().then((result)=>{
// console.log(result);
// })

//Modern way to handle async function and await keyword

// function testStatus()
// {
//     let status=getStatus();
//     console.log(status);
    
// }

// //call
// testStatus();//Promise { <pending> }


//To handle promise create async function and use await keyword before function which returns promise


async function testStatus()
{
    let status=await getStatus();//'await' expressions are only allowed within async functions and at the top levels of modules.
    console.log(status);
    
}

//call
testStatus();//Promise { <pending> }



