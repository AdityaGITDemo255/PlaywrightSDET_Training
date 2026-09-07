/*
1.break
------------------
-break we can use only with switch case and loop
-break will exit from the control like loop or switch

2.continue
-------------------
-continue statement we can use only with loop
-continue will skip certian part of the code and continue excution excution till condition satisfy

3.return
----------------
- return is applicable for functions
- anything we wanted to return like result/data from function then we use return statement
- return statement should be last statement of function
- return statement return the result to the calling function

*/


for(let i=1;i<=10;i++)
{
    if(i>=5)
    {
        break;
    }else
    {
        console.log(i);
        
    }
}

console.log("-------------");


for(let i=1;i<=10;i++)
{
    if(i===3)
    {
        console.log(i);
        break;
    }else
    {
        console.log(i);
        
    }
}

console.log("--------------------");


for(let i=1;i<=10;i++)
{
    if(i===8)
    {
        continue;//skip certain part of code and continue iteration
        console.log("hi");
        
    }
    else
    {
        console.log(i);
        
    }
}

console.log("---------");

/*
If url does not contains https then skip that
*/
let url=["https://www.google.com","www.amazon.com","https://www.facebook.com"];

for(let i=0;i<3;i++)
{
    
     if(!url[i].includes('https'))
    {
        console.log("Skipped: "+url[i]);
        
        continue;
        
    }else
    {
    console.log(url[i]);
          
    }
   
}













