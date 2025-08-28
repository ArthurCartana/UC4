import { Vehicle } from "./Vehicle"

// agora a classe Car segue as regras que defini na interface Vehicle
export class Car implements Vehicle{
    brand:string
    model:string
    year:number

    constructor(brand:string,model:string,year:number){

    this.brand = brand
    this.model = model
    this.year = year
    }
    startEngine(): void {
        console.log(`Ligando o carro`)
    }
}