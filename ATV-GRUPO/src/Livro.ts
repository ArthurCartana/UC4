import { StringMappingType } from "typescript";
import { Publicacao } from "./Publicacao";

export class Livro extends Publicacao {
    autor:string

    constructor(autor:string, titulo:string, ano:number){
        super(titulo,ano)
        this.autor = autor
    }

    exibir(): void {
        
    }
}