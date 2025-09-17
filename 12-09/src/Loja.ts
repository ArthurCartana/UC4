export class loja {
    adicionar(produto:string):void
    adicionar(produto:string[]):void

    adicionar(produto:any):void {
        if (Array.isArray(produto)) {
            console.log(`Produtos adicionados: ${produto.join(", ")}`)
        }else {
            console.log(`Produto adicionado: ${produto}`)
        }
    }
}