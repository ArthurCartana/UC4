export class Heroi {
    honra:number

    constructor(honra:number, nome:string, nivel:number, missoes:missao[]) {
        super(nome,nivel,missoes)
        this.honra = honra
    }

    status():void {
        console.log(`Nome: ${this.nome} /n Nivel: ${this.nivel} /n missoes: ${this.missoes} `)
    }
}