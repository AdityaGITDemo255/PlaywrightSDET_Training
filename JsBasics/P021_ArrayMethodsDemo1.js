/*
push(), unshift(),pop(),shift(),join(),concat(),reverse()
*/

let color=["Red","Blue","Yellow"];

console.log(color);//[ 'Red', 'Blue', 'Yellow' ]
console.log("Total colors: "+color.length);//3


//insertion push() and unshift()

//push():number - Appends new elements to the end of an array, and returns the new length of the array.
color.push("Orange");
console.log(color);//[ 'Red', 'Blue', 'Yellow', 'Orange' ]

color.push("Black","Pink");
console.log(color);//[ 'Red', 'Blue', 'Yellow', 'Orange', 'Black', 'Pink' ]
console.log("Total length: "+color.length);


let totalColors=color.push("Green");
console.log("New length of array is: "+totalColors);//7


//unshift():number- Inserts new elements at the start of an array, and returns the new length of the array.
color.unshift("Wine");
console.log(color);//[  'Wine',   'Red',  'Blue',   'Yellow',  'Orange', 'Black',  'Pink',   'Green']



//remove the element pop() and shift()

//pop():Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let removeEle1=color.pop();
console.log("Deleted element: "+removeEle1);//Green
console.log(color);//[  'Wine',   'Red',  'Blue',   'Yellow',  'Orange', 'Black',  'Pink']

let removeEle2=color.pop();
console.log("Deleted color: "+removeEle2);//pink
console.log(color);//[ 'Wine', 'Red', 'Blue', 'Yellow', 'Orange', 'Black' ]


//shift():Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let removeEle3=color.shift();
console.log("Deleted color: "+removeEle3);//Wine
console.log(color);//[ 'Red', 'Blue', 'Yellow', 'Orange', 'Black' ]



/*
console.log(null||undefined||"playwright");

if(null||undefined||"Playwright")
{
    console.log("Hello");
    
}
*/

//join():string-Adds all the elements of an array into a string, separated by the specified separator string.

let words=["Hello","all","welcome","to","leran","Automation"];
console.log(words);
let sentence=words.join(" ");
console.log(sentence);

//reverse():Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
let id=[10,20,30,40,50];
console.log(id);
console.log(id.reverse());
console.log(id);
let arr=id.reverse();
console.log(arr);


console.log(color);
console.log(color.reverse());
console.log(color);

console.log("----------------");
//concat():Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let arr1=[1,2,3,4,5,0,0];
let arr2=[10,20,30,40,50,60,70];
let arr3=[100,200,300,400,500,0,0];

let resultArr=arr1.concat(arr2,arr3);
console.log(resultArr);

console.log(resultArr.length);//15


//add elements 

let result=[];

for(let i=0;i<arr2.length;i++)
{
    result[i]=arr1[i]+arr2[i]+arr3[i];
}
console.log(result);



console.log("------------");

/*
copy array: (...)spread operator/rest parameter in Js
... spread operator
-----------------------
-Using spread opeeator we can store n number of elements into array
-using same we can pass number of parameters to function(rest parameter)

How to copy elements of array?
---------------------------------
Using spread opeartor one array elements we can copy into other array

-destructuring (array/object)
------------------------------
It is clean way to retrieve array elements and store it into variable


*/

let first=[1,2,3,4,5];
console.log(first);

//copy
let second=[...first];
console.log(second);

let third=[10,20,30,...second];
console.log(third);
console.log(third.length);

let forth=[10,20,...first,30,40,50];
console.log(forth);
console.log(forth.length);

console.log("---------------");

//destructuring

let product=['Display','Keyboard','Mouse','Harddrive'];//90

let [p1,p2,p3,p4]=product;
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

//with one variable this desrtucturing
let [...prod]=product;

console.log(...prod);//Display Keyboard Mouse Harddrive
console.log(prod);//[ 'Display', 'Keyboard', 'Mouse', 'Harddrive' ]
console.log(prod[0]);//display


let [p]=product;
console.log(p);//Display

let i=product;
console.log(i);//[ 'Display', 'Keyboard', 'Mouse', 'Harddrive' ]

















