/*
For multiple condition validation we can use ladder if
*/

//find largest number or equals number
let num1=10000,num2=1000,num3=1000;

if(num1>num2 && num1>num3)
{
    console.log(num1+" greater than "+num2+" & "+num3);
    
}else if(num2>num1 && num2>num3)
{
    console.log(`${num2} is greater than ${num1} and ${num3}`);
    
}else if(num1===num2 && num2===num3)
{
    console.log("All numbers are equal");
    
}else
{
    console.log(`${num3} is greater than ${num1} and ${num2}`);
}


console.log("----------------");


//string--->toUpperCase() and toLowerCase()
//validation of browsers

let browserName="FIREFOX".toLowerCase();

if(browserName === 'chrome')
{
    console.log("Test is executing on chrome!");
    
}else if(browserName === 'msedge')
{
    console.log("Test is executing on MsEdge!");
    
}else if(browserName==='firefox')
{
    console.log("Test is executing on firefox!");
    
}else
{
    console.log("Browser is not in list....");
    
}










