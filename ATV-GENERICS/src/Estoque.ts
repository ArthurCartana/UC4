export class Estoque<T> {
    private itens:T[] = []

    adicionar(item: T){
        this.itens.push(item)
    }

    listar(): T[]{
        return this.itens
    }

    remover(i:number) {
        if (i >= 0 && i < this.itens.length){
        this.itens.splice(i,1)
        }
    }

    buscar(condicao: (item:T) => boolean): T[] {
        return 

    }
}