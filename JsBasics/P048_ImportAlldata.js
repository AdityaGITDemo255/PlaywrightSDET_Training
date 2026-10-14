//alise-rename
import * as data from "./P046_ModuleImportExport.js";



console.log("Tool name is: "+data.toolName);

//function

data.default();

//data.test1();//TypeError: data.test1 is not a function

data.getData();

//class
let s1=new data.StudentData(101,'Abhiram','Coding');
s1.getInfo();

//data.display();//TypeError: data.display is not a function