

import { LoginPage } from "./P052_LoginPage.js";
import { CartPage } from "./P053_CartPage.js";
import { BasePage } from "./P051_InheritanceDemo.js";

//Testing all pages

//Child Object: parent +child
console.log("Scenario1: Child class object-->Parent + child");

const lPage=new LoginPage();
lPage.doLogin("Admin","admin123");//individual
lPage.getTitle("LoginPage");//inherited
lPage.getCurrentUrl("LoginPage");//inherited

console.log("--------------------------");

console.log("Scenario2:Parent class object-->Parent");
const bPage=new BasePage();
bPage.getTitle('Any');//individual
bPage.getCurrentUrl('Any');//individual


console.log("--------------");

//child class object
const cPage=new CartPage();
cPage.getProductDetails();//individual
cPage.getTitle();//inherited
cPage.getCurrentUrl();//inherited