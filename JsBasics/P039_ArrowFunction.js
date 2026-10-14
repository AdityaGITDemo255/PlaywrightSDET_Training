/*
Functions
===============
1.Function declaration
2.Function Expression
    2.1.Anonymous function(function without name)
    2.1 Arrow function(shortHand function)

*/

console.log("------Function without any parameters------");

let test1=()=>{console.log("This is arrow function is calling....");}

//call
console.log(typeof test1);//function
test1();

console.log("------Function with parameters------");

//single parameter: () are not required
let test2=(msg)=>{
            console.log("Message is: "+msg);
            console.log("Hi");
            console.log("Hello");
         }
            
                

//call
test2("How are you?");

console.log("------");

let test3=data=>{
    console.log(data);
    
}

//call
test3("Playwright is Webui automation Framework!")

//multiple parameter
let test4=(num1,num2)=>{
    console.log("Addition is: "+(num1+num2));
    
                }

//call
test4(100,200);


let doLogin=(username,password)=>{

    console.log("Enter "+username);
    console.log("Enter "+password);
    console.log("Click on Login button");
    
    
}

//call
doLogin("Admin","admin123");


console.log("----function with return keyword----");

let test5=()=>{
             let a=100,b=20
            return a*b;
            }


    //call
    console.log(test5());

    //Or

    let result=test5();
    console.log("Multiplication is: "+result);
    