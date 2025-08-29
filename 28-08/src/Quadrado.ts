import { IFormaGeometrica } from "./IFormaGeometrica"

export class Quadrado implements IFormaGeometrica{
    lado:number
    lado2:number
    constructor(lado:number,lado2:number) {
        this.lado = lado
        this.lado2 = lado2
    }
    calcularArea(): number {
        return this.lado*this.lado2
    }
}