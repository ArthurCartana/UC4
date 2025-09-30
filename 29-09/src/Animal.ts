export class Animal {
    tipo:string

    constructor(tipo:string) {
        this.tipo = tipo
    }

    fazerSom():void {
        console.log(`O ${this.tipo} está fazendo som!`)
    }
}