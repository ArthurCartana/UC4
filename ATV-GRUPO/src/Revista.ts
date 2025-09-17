import { Publicacao } from "./Publicacao";

export class Revista extends Publicacao {
    edicao:string

    constructor(edicao:string,titulo:string,ano:number) {
        super(titulo,ano)
        this.edicao = edicao
    }

    exibir(): void {
        console.log(`Titulo: ${this.titulo} \n Ano: ${this.ano} \n Edicao: ${this.edicao}`)
    }
}