import { PrecoPizza } from "./PrecoPizza"
import { SaborPizza } from "./SaborPizza"
import { TamPizza } from "./TamPizza"

export class Pizza {
    private tamanho: TamPizza
    private sabor: SaborPizza
    private preco: PrecoPizza

    constructor(tamanho: TamPizza, sabor: SaborPizza) {
        this.tamanho = tamanho
        this.sabor = sabor
        this.preco = this.calcular()
    }

    descricao(): string {
        return `Sabor: ${this.sabor} \n Tamanho: ${this.tamanho} \n Preco: ${this.preco}`
    }

    calcular(): PrecoPizza {
        switch (this.tamanho) {
            case TamPizza.Pequena:
                return PrecoPizza.P

            case TamPizza.Media:
                return PrecoPizza.M

            case TamPizza.Grande:
                return PrecoPizza.G

            case TamPizza.Familia:
                return PrecoPizza.F


        }
    }
}
