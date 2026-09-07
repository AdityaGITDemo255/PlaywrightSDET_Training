/*Problem Statement:
Write a JavaScript program to determine a student's grade based on their marks.

If marks are greater than or equal to 95, display "A++ Grade".
If marks are greater than or equal to 90 but less than 95, display "A Grade".
Otherwise, display "B Grade".
*/

let marks=80;

if(marks>=90)
{
    if(marks>=95)
    {
        console.log("A++");
        
    }
    else
    {
        console.log("A");
        
    }
}else{
    console.log("B");
    
}