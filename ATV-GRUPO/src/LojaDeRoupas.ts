import { IProduto } from "./IProduto";
import { ITamanho } from "./ITamanho";
import { Loja } from "./Loja";

export class LojaDeRoupas extends Loja<ITamanho> {
    tamanho:string

    constructor(nome:string, preco:number,tamanho:string) {
        super(nome,preco)
        this.tamanho = tamanho
    }
    
    listar():void {
        console.log(this.produtos)
    }
}