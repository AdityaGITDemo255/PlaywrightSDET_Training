/*
do While loop
---------------
- It is called exit control loop
- If one time iteration you are expecting 
without matter what condition it is(true/false)

Syntax:
==========
initialization;
do
{
statement
inc/dec
}while(condition);



*/

let i=1;
do{
    console.log("Hello");
    i++;
    
}while(i<=5);

console.log("------------");

//when condition false one time result you will see

let j=1;
do{
    console.log(j*j);
    j++;
}while(j>=5);//false

console.log("------------");
//square numbers

let k=1;
do{
    console.log(k*k);
    k++
    
}while(k<=5);
