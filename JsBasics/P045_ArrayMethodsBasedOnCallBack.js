
/*
1.forEach():Iteration+basic operation
2.map():Transform the array element
3.filter():search for elements
4.reduce():reduce array element in one form
*/

//forEach()

let arr=[1,2,3,4,5];
console.log(arr); //[ 1, 2, 3, 4, 5 ]

//for of loop
for(let i of arr)
{
    console.log(i);
    
}

console.log("-------for each------");

//forEach()
arr.forEach((ele)=>{//variable name for array element

    console.log(ele);
    
})

console.log("----------------");

//cube of elements

//arr.forEach(num=>{console.log(num*num*num)});
//both lines are same .
arr.forEach(num=>console.log(num*num*num));
console.log("----------");

//map():array [] Transformation of array

//square of numbers

console.log(arr);

arr.map((a)=>{
console.log(a*a);
})

console.log("----------");

let city=["Pune","Mumbai","Delhi"];
//convert cities into lowercase

city.map((cityName)=>{
console.log(cityName.toLowerCase());
})

//OR

let convertedCity=city.map(cityName=>cityName.toLowerCase());
console.log(convertedCity);

console.log("--------");

let footerLinks=["Aboutus","Help","privacyPolicy"];
//add Amazon prefix before every link
console.log(footerLinks);
let result=footerLinks.map(link=>"Amazon "+link);
console.log(result);

console.log("---***********-----");

let r=footerLinks.map(link=>{
    
    return "FlipCart "+link;
    
})

console.log(r);

console.log("---------------");

footerLinks.map(link=>console.log("Facebook "+link));

console.log("--------------------");

//filter

let elements=[1,2,3,4,5,6,7,8,9,10];

console.log(elements); //[1,2,3,4,5,6,7,8,9,10]

//find the even numbers
let evenNumbers=elements.filter(num=>num%2===0);
console.log(evenNumbers);

console.log("-----------------");


let marks=[85,40,55,35,70];

//collect the marks which are greter than 50

let res=marks.filter(num=>num>50);
console.log(res);

console.log("-----------Interview question-------");
/*(method) Array<number>.filter(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): number[] (+1 overload)
Returns the elements of an array that meet the condition specified in a callback function.*/
//duplicate elements from array filter() + indexOf()
let input=[10,20,30,20,40,10,50];//value
//index    0, 1, 2 , 3, 4, 5, 6//index
//find duplicate numbers

let duplicatesNum=input.filter((value,index)=>{
return input.indexOf(value)!=index;
})

console.log(duplicatesNum);

console.log("-----------");

//reduced():reduced array element in one form (sum of array element)
let data=[10,20,30,40,50];
let sum=0;
for(let i of data)
{
sum=sum+i;
}

console.log("Sum of array elements: "+sum);

//reduce
//here s is previous value(sum) and num is data
let sumOfArray=data.reduce((s,num)=>
    {
    return s+num
},0)//here 0 is initial value

console.log(sumOfArray);


//string
let empName=["Anil","Radhika","Kiran"];

//total character lenght

let total=0;
for(let i of empName)
{
total=total+i.length;
}

console.log(total);//16

console.log("---------------");

//reduce()
let totalChar=empName.reduce((t,name)=>{
return t+name.length
},0);

console.log(totalChar);//16



console.log();

console.log("---------------");

//find duplicate array element without method
let num = [10, 20, 30, 40, 20, 10, 50, 10];

let duplicate = [];

for (let i = 0; i < num.length; i++) {
  for (let j = i + 1; j < num.length; j++) {
    if (num[i] === num[j]) {
      // check manually if num[i] is already in duplicate
      let alreadyPresent = false;
      for (let k = 0; k < duplicate.length; k++) {
        if (duplicate[k] === num[i]) {
          alreadyPresent = true;
          break;
        }
      }
      if (!alreadyPresent) {
        duplicate[duplicate.length] = num[i]; // push using length
      }
    }
  }
}

console.log("Duplicate Elements of Array: " + duplicate);



console.log("-------------------");

//forEach() map() filter() reduced()

 const employees=[
    {name:"Kiran",role:"QA",salary:50000},
    {name:"Suresh",role:"Dev",salary:60000},
    {name:"Priti",role:"QA",salary:80000}
   
]

console.log(employees);
console.log(typeof employees);


//forEach(): print all employee name
employees.forEach((emp)=>{
console.log(emp.name);
//console.log(emp);

})

//map(): for role change the case: lowercase

let result2=employees.map((emp)=>{
return emp.role.toLowerCase();
})

console.log(result2);


//filter()
//find the employee whose salary is >50000

let result3=employees.filter(emp=>emp.salary>50000);
console.log(result3);


console.log("-------------");
//filter+forEach
let result4=employees.filter((emp)=>{
return emp.salary>50000
});
//console.log(result4);

result4.forEach(res=>console.log(res.name+":"+res.salary));


console.log("-------------");

// let res5=employees.filter((emp,index)=>{
//     return employees[index];
    
// })
// console.log(res5);

//filter+map
 let res6=employees.filter(emp =>emp.salary>50000).map(emp=>emp.salary);
console.log(res6);

//calculate total salary of 3 employees:reduce()

let res7=employees.reduce((total,emp)=>{
return total+emp.salary;
},0)

console.log(res7);



export function test()
{
    console.log("Test for import....");
    
}


