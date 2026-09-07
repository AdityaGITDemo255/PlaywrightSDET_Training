

/*
for pattern examples in Js collect row wise result and the print

*/

/*
* * * * 
* * * * 
* * * * 
* * * * 
*/


for(let r=1;r<=4;r++)
{
    let row="";
    for(let c=1;c<=4;c++)
    {
        row=row+"* ";
               
    }
    console.log(row);
    
}

console.log("--------------");
/*
* 
* * 
* * * 
* * * * 
*/

for(let r=1;r<=4;r++)
{
    let rowData="";
    for(let c=1;c<=r;c++)
    {

        rowData=rowData+"* ";
    }
    console.log(rowData);
    
}

console.log("--------------");
/*
1 
1 2 
1 2 3 
1 2 3 4 
*/
for(let r=1;r<=4;r++)
{
    let rowData="";
    for(let c=1;c<=r;c++)
    {
        rowData=rowData+c+" ";
    }

    console.log(rowData);
    
}

console.log("--------------");
/*
1 
2 2 
3 3 3 
4 4 4 4 
*/
for(let r=1;r<=4;r++)
{
    let rowData="";
    for(let c=1;c<=r;c++)
    {
        rowData=rowData+r+" ";
    }

    console.log(rowData);
    
}

console.log("----------------");

/*
1 
2 3 
4 5 6 
7 8 9 10 
*/
let k=1;
for(let r=1;r<=4;r++)
{
    let rowData="";

    for(let c=1;c<=r;c++)
    {
        rowData=rowData+k+" ";
        k++;
    }

    console.log(rowData);
    
}