/*
1.Arithemetic operator
----------------------------
+,-,*,/,%

Unary Operators
-----------------------
++    --

2.Relational operators
-------------------------
>,>=,<,<=,!=

equality
------------
1.Loose equality ==
2.Strict Equality ===

4.Logical Operators
------------------------
&&(AND), ||(OR), !(NOT)


*/

console.log("Lets learn operator in Js!");
console.log("------Arithemetic Operators------");
let num1=100,num2=10;
console.log(num1+num2);
console.log("Addition is: "+num1+num2);//Addition is: 10010
console.log("Addition is: "+(num1+num2));//Addition is: 110
console.log("Subtraction is: "+(num1-num2));
console.log("Multiplication is: "+(num1*num2));
console.log("Division is: "+(num1/num2));
console.log("Modulus is: "+(num1%num2));

console.log(`Addition is: ${num1+num2}`);


console.log('-----Interview questions-----');
console.log(90/0);//Infinity
console.log(-80/0);//-Infinity
console.log("Hello"/8);//NaN: Not a number
console.log(undefined/5);//NaN
console.log(0/5);//0
console.log(0/0);//NaN

//null representation in number
console.log(Number(true));//1

console.log(Number(false));//0

console.log(Number(null));//0

console.log(null/5);//0

console.log(Number("hello"));//NaN

console.log(Number(undefined));//NaN

console.log("-------Unary Operator-----");

/*

num1++    ++num1   --num1   num1--

++(Increment)
---------------------
1.preIncrement  ++num1     num1=num1+1
-------------------------------------
value will increment first and then use it

2.postIncrement num1++    num1=num+1
----------------------------------------
value will use first and then increment


--(Decrement)
--------------------------
1.Predecrement --num1    num1=num1-1
----------------------------------------
value will decrement first and then use it

2.Postdecrement  num1-- num1=num-1
---------------------------------------
value will use first and then decrement


*/

//increment

//pre
let a=100;
console.log(a);//100
console.log(++a);//101
console.log(a);//101


//post
let b=200;
console.log(b);//200
console.log(b++);//200
console.log(b);//201
console.log(b);//201
console.log(b++);//201
console.log(b);//202

let i=199;
let j=i++;
console.log(i);//200
console.log(j);//199

console.log(j);//199
console.log(i);//200

let p=678;
let q=p++;
console.log(p);//679
console.log(q);//678


let r=78;
let s=++r;
console.log(r);//79
console.log(s);//79

let u=101;
let v=++u;
console.log(u);//102
console.log(v);//102

//post decrement

let e=90;
let f=e--;
console.log(e);//89
console.log(f);//90

let t=100;
t=t--;
console.log(t);//99

let y=89;
let z=--y;
console.log(y);//88
console.log(z);//88


let m=10;
let n=--m + m--;
console.log(m);//8
console.log(n);//18

console.log("-----short hand operators-----");
/*
+= -= *= /= %= (eg. x=x+1  insted x+=1)
*/

let k=10;
console.log(k);//10
k+=20;//k=k+20
console.log(k);//30


let l=100;
l-=50;//l=l-50
console.log(l);//50

let o=10;
o*=10;//o=o*10
console.log(o);//100

let w=80;
w/=4;//w=w/4
console.log(w);//20

console.log("------Relational operators-------");
/*
>,>=,<,<=,!=
equality
----------------
1.loose equality ==
2.strict equality === recommended

testData
-----------
y=z=88 m=8 n=18 u=v=102 e=89 f=90 t=99
*/

console.log("greater than > : "+(u>z));//true
console.log("greater than equal to >=: "+(t>=y));//true
console.log(u>=v);//true
console.log(m>=f);//false
console.log("less than < : "+(m<n));//true
console.log("less than equal to <=: "+(y<=z));//true
console.log(t<=e);//false
console.log("not equal to !=: "+(y!=z));//false
console.log(y!=u);//true

/*equality
--------------
1.loose equality ==
-------------------
In loose equality value will coerced(type will convert) first and then compared


2.strict equality === recommended
---------------------------------
Value will compared as it is and type coercion is not applicable


*/
//loose equality
console.log("100" == 100);//true
console.log(null == undefined);//true

//strict equality 
console.log("100" === 100);//false
console.log(null === undefined);//false

console.log("-------Logical Operators----------");
/*
 c1     c2         &&(AND)        ||(OR)       !c1(NOT)
 true   true        true            true        false
 true   false       false           true        false
 false  true        false           true         true
 false false        false           false        true

 testData
-----------
y=z=88 m=8 n=18 u=v=102 e=89 f=90 t=99

*/

console.log("-----&&-----");
console.log((y===z) && (n>m));//true
console.log((n>m) && (u!=v));//false
console.log((t<=f) && (u>y));//false
console.log((e>=v) && (u<=z));//false


console.log("-----||-----");
console.log((y===z) || (n>m));//true
console.log((n>m) || (u!=v));//true
console.log((t<=f) || (u>y));//true
console.log((e>=v) || (u<=z));//false


console.log("----NOT!------");
console.log(u===v);//true
console.log(!(u===v));//false

let actTitle="google";
let expTitle="googleApp";
console.log("equality:" +(actTitle===expTitle));//false
console.log("titles are not equal:"+(!(actTitle===expTitle)));//true















































