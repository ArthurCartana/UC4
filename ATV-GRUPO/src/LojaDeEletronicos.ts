import { IGarantia } from "./IGarantia";
import { IProduto } from "./IProduto";
import { Loja } from "./Loja";

export class LojaDeEletronicos extends Loja<IGarantia> {
garantia:string
    constructor(nome:string, preco:number, garantia:string) {
        super(nome,preco)
        this.garantia = garantia
    }

    listar():void {
        console.log(this.produtos)
    }
}