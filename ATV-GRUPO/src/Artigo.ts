import { Publicacao } from "./Publicacao";

export class Artigo extends Publicacao {
    DOI:string

    constructor(DOI:string,titulo:string,ano:number) {
        super(titulo,ano)
        this.DOI = DOI
    }

    exibir(): void {
        console.log(`Titulo: ${this.titulo} \n Ano: ${this.ano} \n DOI: ${this.DOI}`)
    }
}