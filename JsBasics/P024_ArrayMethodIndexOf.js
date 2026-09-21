
/*
indexOf()
-------------
Returns the index of the first occurrence of a value in an array,
 or -1 if it is not present.
*///-ve     -10    -9    -8   -7   -6  -5      -4    -3     -2    -1
let month=['Jan','Feb','Mar','Apr','May','Mar','Apr','Jun','Mar','Jul'];
//index     0      1     2     3     4     5     6     7     8   9

console.log(month);

console.log(month.length);//9


let index1=month.indexOf('Mar');
console.log(index1);//2


//second occurance for Mar
let index2=month.indexOf('Mar',index1+1);
console.log(index2);//5

//find index of last element Mar
let lastIndex=month.lastIndexOf('Mar');
console.log(lastIndex);//8

//-ve
let index3=month.indexOf('Apr',-5);
console.log(index3);

//write a login which returns all index for Mar


let searchElement='Mar';
let indexes=[];
for(let i=0;i<month.length;i++)
{
    if(month[i]===searchElement)
    {
        // or indexes.push(i);
        indexes[indexes.length] = i;
    }

}
console.log("All Indexes for Mar: "+indexes);
