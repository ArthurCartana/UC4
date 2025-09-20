import { IProduto } from "./IProduto";

export class Loja <T extends IProduto> {
    nome:string
    preco:number
    produtos: T[] = []

    constructor(nome:string, preco:number) {
        this.nome = nome
        this.preco = preco
        
    }

    adicionar(produto : T):void {
            this.produtos.push(produto)
            console.log(`Produto adicionado`)
            this.produtos  
        
}

    listar():void {
        console.log(this.produtos)
    }

    calcularTotal():number {
        let total = 0
        for (let item of this.produtos) {
            total += item.preco
        }
        return total
    }
}

