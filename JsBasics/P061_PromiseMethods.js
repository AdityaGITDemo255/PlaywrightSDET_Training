/*
What is Promise.all() in JavaScript? 
Promise.all() is used when you want to run multiple promises in 
parallel and wait until all of them are resolved. 
If all promises succeed, it resolves 
If any one promise fails, it immediately rejects 
*/


let p1=new Promise((resolve,reject)=>{

    setTimeout(() => {
        //resolve("Task1 is completed...")
       reject("Task1 is rejected...");
    },3000);
});


let p2=new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("Task2 is completed...");
        //reject("Task2 is Rejected...");
    },2000);
});



let p3=new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("Task3 is completed...");
        //reject("Task3 is rejected...")
    },1000);
})

//all()
/*
Creates a Promise that is resolved with an array of results when all of the provided Promises resolve,
 or rejected when any Promise is rejected.
*/
// Promise.all([p1,p2,p3]).then((result)=>{
// console.log(result);

// }).catch((reject)=>{
// console.log(reject);

//  })

//console.log("------------------");
//allSettled():Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.
// Promise.allSettled([p1,p2,p3]).then((result)=>{
// console.log(result);

// }).catch((error)=>{
// console.log(error);

// })

//console.log("----------");
// async function test()
// {

// let result=await Promise.allSettled([p1,p2,p3]);

// console.log(result);
// }

// test();

//race():Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected(always the task which takes very small time to finish)
Promise.race([p2,p1,p3]).then((result)=>{
console.log(result);

}).catch((error)=>{
console.log(error);

})