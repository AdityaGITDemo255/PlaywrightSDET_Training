
//-ve    -5 -4 -3 -2 -1
let arr=[10,20,30,40,50];
// +ve   0   1  2  3 4
console.log(arr[4]);//50
console.log(arr[-4]);//undefined

//at():The zero-based index of the desired code unit. A negative index will count back from the last item.
console.log(arr.at(4))//50
console.log(arr.at(-4));//20

/*slice()
-------------
Returns a copy of a section of an array. 
For both start and end, a negative index can be used to indicate an offset from the end of the array. 
For example, -2 refers to the second to last element of the array.

Syntax:
---------------
slice(startindex,endindex)

portion which starts with strtindex upto endindex-1
*/
//-ve index   -9 -8 -7 -6 -5 -4 -3 -2 -1
let elements=[10,20,30,40,50,60,70,80,90];
//index        0  1  2  3  4  5  6  7  8

let slice1=elements.slice(2,6);//[30,40,50,60]
console.log(slice1);
console.log(elements);
//only start index
console.log(elements.slice(3));//[ 40, 50, 60, 70, 80, 90 ]

//wrong index
console.log(elements.slice(-2,6));//[]

console.log(elements.slice(-2));//[80,90]

//left--->right
console.log(elements.slice(-8,-2));//[ 20, 30, 40, 50, 60, 70 ]

//right to left which is wrong
console.log(elements.slice(-2,-8));//[]


console.log(elements.slice(-9,-2));//[  10, 20, 30, 40,  50, 60, 70]
console.log(elements.slice(-9));//[  10, 20, 30, 40, 50, 60, 70, 80, 90]


//-ve with +ve index scenario
console.log(elements.slice(-8,6));//[ 20, 30, 40, 50, 60 ]

