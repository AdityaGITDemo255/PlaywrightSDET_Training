import { Car } from "./P012_Car.js";



export class Audi extends Car
{
    autGear()
    {
        console.log("Audi....autoGear()");
        
    }

    price() //override method
    {
        console.log("Audi .......60L");
        
    }
}