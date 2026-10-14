
import { BasePage } from "./P051_InheritanceDemo.js";


//here BasePage is parent and LoginPage is Child
export class LoginPage extends BasePage //single level inheritance
{

    doLogin(un,psw)
    {
        console.log("Login completed  for user: "+un+ " with password: "+psw);
        
    }



}


