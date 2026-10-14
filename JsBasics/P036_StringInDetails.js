/*
String 
==========
- String is collection of characters
-In Js string is premitive data type and Predefined Immutable object
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

//property:length
let ss1="Hello All";
console.log("Total characters are: "+ss1.length);//9

//String methods
//1.string conversion: toLowerCase() and toUpperCase()
console.log(ss1.toLowerCase());
console.log(ss1.toUpperCase());

//2.String equality (===)
console.log("Facebook" === "Facebook");//true
//console.log("Facebook" == "Facebook");//true

//3.includes():search for substring
let ss2="Playwright is webui and api testing framework.";
console.log("search for webui?: "+ss2.includes("webui"));//true
console.log("Search for Selenium?: "+ss2.includes("Selenium"));//false

//4.startsWith('prefix value')
console.log("serch string starts with Playwright?: "+ss2.startsWith('Playwright'));//true
console.log("serch string starts with Play?: "+ss2.startsWith('Play'));//true
console.log("serch string starts with wright?: "+ss2.startsWith('wright'));//false
console.log("serch string starts with P?: "+ss2.startsWith('P'));//true


//5.endsWith('suffix value')
console.log("serch string ends with framework?: "+ss2.endsWith('framework.'));//true
console.log("serch string ends with work?: "+ss2.endsWith('work.'));//true
console.log("serch string ends with frame?: "+ss2.endsWith('frame'));//false
console.log("serch string ends with k?: "+ss2.endsWith('k'));//false
console.log("serch string ends with .?: "+ss2.endsWith('.'));//true


//trim()  <span>   Cart  </span>: to ignore white space before and after string use trim()
//Removes the leading and trailing white space and line terminator characters from a string.
let ss3="     welcome All    ";
console.log(ss3);
console.log(ss3.trim());

//scenario: calculate actual length
let toolName="   Playwright Training   ";
console.log(toolName.length);//25 including space
console.log(toolName.trim().length);//19


//charAt(index):string : return character from specified index
let ss4="Postman is used for API testing! P";
console.log("character at 0 th position: "+ss4.charAt(0));//P
console.log(ss4.length);//34

console.log("character at 16th position: "+ss4.charAt(16));//f
console.log("Character at wrong index position: "+ss4.charAt(32));//empty string


//indexOf('character'):index number
console.log("index of charcater u?: "+ss4.indexOf('u'));//11
console.log("index of P?: "+ss4.indexOf('P'));//0
//second occurrence
console.log("index of second occurrence of P?: "+ss4.indexOf('P',1));
console.log("index of Third occurrence of P?:" +ss4.lastIndexOf('P'));

//concat()
let ss5="Hey";
let ss6="Hello how are you?";
console.log(ss5+" "+ss6);
console.log(ss5,ss6);
console.log(ss5.concat(" "+[ss6,ss4]));

//replace() and replaceAll()
//Replaces text in a string, using a regular expression or search string.
let ss7="Playwright is Automation tool and Playwright is Automation Framework";
console.log(ss7);

console.log(ss7.replace("Playwright","*********"));
//Replace all instances of a substring in a string, using a regular expression or search string.
console.log(ss7.replaceAll("Automation","Testing"));


//split(RegExp/Pattern):string[]
let toolList="Selenium,Appium,Cypress,Postman,Playwright";
console.log(toolList);
let list=toolList.split(",");
console.log(list);
console.log("------");

console.log(list[4]);//Playwright

let date="April 2026";
let month=date.split(" ")[0];
let year=date.split(" ")[1];
console.log(month);
console.log(year);

let bill="your total amount is 5000";
let data=bill.split(" ")[4];
console.log(typeof data);//string
//string into number
let amount=Number(data);
console.log(typeof amount);//number
console.log(amount);//5000

//substring()
console.log(bill.substring(7));

//how to reverse any string 
let s1="Playwright with Javascript 123";
console.log(s1);

let result="";

for(let i=s1.length-1;i>=0;i--)
{
    //result=result+s1.charAt(i);
    result=result+s1[i];

}

console.log(result);

//Reverse with methods split()+reverse()+join()
let str = "Hello World";

let reversed = str.split("").reverse().join("");
console.log(reversed);
console.log(str);
console.log(str.split("").reverse().join(""));





















