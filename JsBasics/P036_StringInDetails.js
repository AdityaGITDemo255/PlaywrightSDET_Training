/*
String 
==========
- String is collection of characters
- In Js string is premitive data type and Predefined Immutable object
Strings are immutable once we declare we cannot modify the value, but if we modify
then in Js engine it will create new object

"Jay"--->['J','a','y']
index      0,  1,  2



*/

let fname="Jay";
console.log(fname);
console.log(typeof fname);//string
//fname[2]='m';//TypeError: Cannot assign to read only property '2' of string 'Jay'//

fname=fname+"Nigade";
console.log(fname);

fname="Sarang";
console.log(fname);


let sentence = "Learning JavaScript is fun";
console.log("Original Sentence:", sentence);

// Step 1: Convert sentence into array of characters
let arr = sentence.split("");
console.log("After split:", arr);

// Step 2: Reverse the array
arr.reverse();
console.log("After reverse:", arr);

// Step 3: Join back into a string
let reversedSentence = arr.join("");
console.log("After join:", reversedSentence);
