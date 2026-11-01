import { Car } from "./P012_Car.js";


export class BMW extends Car
{
    autoEngine()
    {
        console.log("BMW....autoEngine()");
        
    }


    
    price() //override method
    {
        console.log("BMW .......50L");
        
    }
}