
/*
for loop
-----------------
- When number of iteration are fixed then use loop

scenarios:
-------------
-automating dropdown/list/metnu with fixed number of option
-calendar/datepicker 30/31/28/29

syntax:
------------
for(initailization,condition,inc/dec)
{
statement;
}

*/

//print hello statement 5 times

for(let i=1;i<=5;i++)
{
    console.log("Hello");
    
}

console.log("-----");
//print 1 to 10 number

for(let i=1;i<=10;i++)
{
console.log(i);

}
console.log("-----");
//print 10 to 1 numbers

for(let i=10;i>=1;i--)
{
    console.log(i);
    
}

console.log("-----------");

//print all even numbers upto 50

for(let i=1;i<=50;i++)
{
    if(i%2===0)
    {
        console.log(i);
        
    }
}

console.log("--------");

//by defualt condition is always true for this loop
// for(;;)
// {
//     console.log("hi...");
    
// }

























