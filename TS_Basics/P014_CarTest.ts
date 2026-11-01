
import { Car } from "./P012_Car.js";
import { BMW } from "./P013_BMW.js";
import { Audi } from "./P015_Audi.js";

console.log("Scenario1: Parent class reference and parent class object: only ParentProperties");

let c1:Car=new Car();
c1.start();//individual methods
c1.refule();//individual methods
c1.stop();//individual methods
c1.price();


console.log("Scenario2: Child class reference and Child class object: Parent+Child Properties");

let b1:BMW=new BMW();
b1.autoEngine();//individual methods
b1.start();//inherited method
b1.refule();//inherited method
b1.stop();//inherited method
b1.price();

console.log("========== Audi =====");
let a1:Audi=new Audi();
a1.start();//inherited method
a1.refule();//inherited method
a1.stop();//inherited method
a1.autGear();//individual methods
a1.price();


console.log("Scenario3: Parent class reference and Child class object:only ParentProperties");
//interface
let c2:Car=new BMW();
c2.start();
c2.refule();
c2.stop();
c2.price();//override by child BMW price



//Child reference and parent object:Inavlid:downcasting
//let b2:BMW=new Car();




