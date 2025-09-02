import { AFuncionario } from "./AFuncionario"

export class FuncionarioCLT extends AFuncionario{
    salario:number

    constructor(nome:string, salario:number){
        super(nome)
        this.salario = salario
    }
calcularSalario():number{
    return this.salario
 }
}