

/*
splice()
============
Removes elements from an array and, if necessary,
 inserts new elements in their place,
  returning the deleted elements.

Syntax:
===========
Array.splice(startindex,deletecount,insertelements)


*/

let fruits=['Mango','Orange','Banana','Grapes','Kiwi','Apple'];
//index      0        1        2         3        4     5
console.log(fruits);
console.log(fruits.length);


//delete Banana
let deletedEle1=fruits.splice(2,1);
console.log(deletedEle1);//[ 'Banana' ]
console.log(fruits);//[ 'Mango', 'Orange', 'Grapes', 'Kiwi', 'Apple' ]

//delete orange and insert 2 more fruites
let deletedEle2=fruits.splice(1,1,'Banana','GreenApple');
console.log(deletedEle2);//[ 'Orange' ]
console.log(fruits);//[ 'Mango', 'Banana', 'GreenApple', 'Grapes', 'Kiwi', 'Apple' ]

console.log(fruits.length);//6

//insert fruit at index position 4
let deletedEle3=fruits.splice(4,0,'Cherry','Orange');
console.log(deletedEle3);//[]
console.log(fruits); // ['Mango','Banana','GreenApple','Grapes','Cherry','Orange','Kiwi','Apple']

//to delete multiple elements at same time
//delete cherry and orange,Kiwi
let deletedEle4=fruits.splice(4,3);
console.log(deletedEle4);//[ 'Cherry', 'Orange', 'Kiwi' ]
console.log(fruits);//[ 'Mango', 'Banana', 'GreenApple', 'Grapes', 'Apple' ]


console.log("------------");

fruits.push("Cherry","Orange","Kiwi");
console.log(fruits);

let deletedEle5=fruits.splice(4);
console.log(deletedEle5);
console.log(fruits);











