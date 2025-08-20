import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo{
    constructor(velocidade:number){
        super(velocidade)
    }

    acelerar():void{
    let i = this.velocidade + 10
    console.log(`O carro está acelerando...`)
    console.log(`O carro está a ${i}km`)
    }
}