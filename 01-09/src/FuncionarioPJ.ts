import { AFuncionario } from "./AFuncionario"

export class FuncionarioPJ extends AFuncionario{
    salario:number
    horasNoMes:number

    constructor(nome:string, salario:number,hora:number){
        super(nome)
        this.salario = salario
        this.horasNoMes = hora
    }
    calcularSalario(): number { 
    return this.salario/this.horasNoMes
    }
}