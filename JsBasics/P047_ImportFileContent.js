
import { toolName,getData,StudentData} from "./P046_ModuleImportExport.js";
//import { employees } from "./P045_ArrayMethodsBasedOnCallBack.js";  it will load ang give output of this file as well .

//import {toolName as data} from "./P046_ModuleImportExport.js"

//custom fixture
 //import {test as baseTest} from "@playwright/test"

//default import
import test1 from "./P046_ModuleImportExport.js";
//import test2 from "./P046_ModuleImportExport.js"



//call
console.log(toolName);

getData("Rahul");

test1();

//test2();


const s1=new StudentData(1,"Seema","Testing");
s1.getInfo();
console.log(s1.sid);

// employees.forEach((emp)=>{
//     console.log(emp);
    
// })
