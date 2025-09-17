import { IPublicacao } from "./IPublicacao";

export abstract class Publicacao implements IPublicacao {
    titulo:string
    ano:number

    constructor(titulo:string, ano:number){
        this.titulo = titulo
        this.ano = ano
    }

    exibir(): void {
        console.log(`Titulo: ${this.titulo} \n Ano: ${this.ano}`)
    }
}