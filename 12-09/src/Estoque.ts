export class Estoque {
    listaProduto:string[]  = ["Arroz", "Feijão", "Macarrão", "Óleo", "Açúcar"]
    constructor(listaProdutos:string[] = ["Arroz", "Feijão", "Macarrão", "Óleo", "Açúcar"]) {
        this.listaProduto = listaProdutos
    }

    remover(produto:string):void
    remover(produto:string[]):void 

    remover(produto:string | string[]):void {
        if(typeof produto === "string") {
            const i = this.listaProduto.indexOf(produto)
            if(i != -1){
                this.listaProduto.splice(i,1)
                console.log(`Produto removido: ${this.listaProduto}`)
                }else {
                    const removidos: string[] = []
                    const naoEncontrados: string[] = []

                    for (const item of produto) {
                        const i = this.listaProduto.indexOf(item)
                        if (i !== -1) {
                            this.listaProduto.splice(i, 1)
                            removidos.push(item)
                        } else {
                            naoEncontrados.push(item)
                        }
                    }
                if (removidos.length > 0) {
                    console.log(`Produtos removidos: ${removidos.join(", ")}`)
                }
                if (naoEncontrados.length > 0) {
                    console.log(`Produtos não encontrados: ${naoEncontrados.join(", ")}`)
                }
            }
        }
    }
}