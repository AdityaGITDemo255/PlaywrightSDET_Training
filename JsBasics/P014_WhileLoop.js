
/*
while loop
----------------
- It is called entry controlled loop
- When number of iterations are not fixed use while loop

Automtion scenario:
--------------------
- Pegination
- list/menu with dynamic number of option

Synatx:
--------------
initialize;
while(condition)
{
statements;
inc/dec
}


*/

//print welcome message 5 times
let i=1;
while(i<=5)
{
    console.log("Welcome");
    i++;
        
}


//for sum of 100 natural numbers
//1+2+3+4+.....+100=5050

let j=1;
let result=0;
while(j<=100)
{
    result=result+j;
    j++;
    
}

console.log("Sum of 100 natural numbers: "+result);

console.log("--------");

//sum of digits :number could be of any number of digit
//123=1+2+3=6   10203=6

let num=10245,sum=0,rem=0;

while(num>0)
{
rem=num%10;
num=Math.floor(num/10);//6
sum=sum+rem;
}

console.log("sum of digits are: "+sum);

console.log("----------");

let n=1234,rev=0,rm=0;

while(n>0)
{
    rm=n%10;
    n=Math.floor(n/10);
    rev=rev*10+rm;
}

console.log("Reverse of given number is: "+rev);


console.log("-------");

let k=1;
while(k<=10)
{
    console.log(k);
k++;
}


















