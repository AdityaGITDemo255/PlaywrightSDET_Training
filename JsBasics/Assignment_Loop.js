/*
1.Prime Number
Problem Statement:
Write a JavaScript program to check whether a given number is prime or not using a loop.

*/
console.log("Question 1-----------------------------------------");

let num = 13;
let i =2;
for(i =2; i<=num ;i++)

    {
        if(num %i ===0 )
          break;  

    }

    if (num === i )
    {
        console.log("Prime Number");
        
    }

    else
    {
        console.log("Not a Prime Number");
        
    }

    /*


2.Print Even Numbers
Problem Statement:
Write a JavaScript program to print all even numbers between 1 and 50 using a loop.

    */
   console.log("Question 2 -----------------------------------------");
let j=1;

   while( j<=50)
   {
    if(j % 2=== 0)
        {
    console.log(j);
    
    }
    j++;
   }

   console.log("Question 3 -----------------------------------------");

   /*

3.Multiplication Table
Problem Statement:
Write a JavaScript program that accepts a number and prints its multiplication table from 1 to 10.

   */

let num2 =4;

for(let i= 1;i<=10;i++)
{

    console.log(`${num2} * ${i} = ${num2 * i}`);
    
}


   console.log("Question 4 -----------------------------------------");

/*
4.Factorial Number
Problem Statement:
Write a JavaScript program to calculate the factorial of a given positive integer using a loop

*/

let fact =1;
let factNum= 4;
for (let index = 1; index <= factNum; index++) 
    {
    fact = fact * index;

    
    }
    console.log(`Factorial of ${factNum} is : ${fact}`);
    

    /*5.Count Digits
Problem Statement:
Write a JavaScript program to count the total number of digits present in a given number using a loop.
*/
   console.log("Question 5 -----------------------------------------");

let countt = 0;
let numm = 876;
let rem;
while(numm!=0)
{
 rem = numm %10;
 numm = Math.floor(numm/10);
 countt++
 
}
console.log("Total number of digits present in a given number is : "+countt);

/*
6.Stop the Loop at a Specific Number
Problem Statement:
Write a JavaScript program to print numbers from 1 to 20. Use the break statement to terminate the loop when the number reaches 10.
*/
   console.log("Question 6 -----------------------------------------");

   for(let t=1;t<=20;t++)
   {
    
    
    if(t==10)
        break;

    else
        console.log(t);

   }

   /*
7.Skip Even Numbers
Problem Statement:
Write a JavaScript program to print numbers from 1 to 20, but skip all even numbers using the continue statement.

   */
   console.log("Question 7 -----------------------------------------");

for(let m=1;m<=20;m++)
{
if(m%2===0)
    continue;

else
    console.log(m);
    

}

/*

8.Print a 5 × 5 Star Pattern
Problem Statement:
Write a JavaScript program using nested loops to print a square containing 5 rows and 5 columns of stars.
*****
*****
*****
*****
*****

*/
   console.log("Question 8 -----------------------------------------");

for(let row=1;row<=5;row++)
{
let star="";
    for(let col=1;col<=5;col++){
    
        star = star +"*  "

    }
    console.log(star);
    
}

/*

9.Decreasing Star Pattern
Problem Statement:
Write a JavaScript program using nested loops to print the following pattern:

*****
****
***
**
*

*/

console.log("Question 9 -----------------------------------------");

for(let roww=1;roww<=5;roww++)
{
    let k =5;
let star="";
    for(let coll=roww;coll<=k;coll++)
        {
    
        star = star +"*  "

    }
    console.log(star);
    k--;
    
}

/*
10.Palindrome Number
Problem Statement:
Write a JavaScript program to check whether a given number is a palindrome.
Input: 121
Output: 121 is palindrome number
*/
console.log("Question 10 -----------------------------------------");

let pal=333;
let fnum=pal;
let summ =0;
let remm =0;
while(pal != 0)
{

remm = pal %10;
summ = (summ *10) + remm;
pal = Math.floor(pal/10);
}
if (summ === fnum)
    console.log("Palindrome Number");

else
    console.log("Not a Palindrome Number");
    
    