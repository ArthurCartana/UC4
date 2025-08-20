export class ContaBancaria{
    protected saldo:number

    constructor(saldo:number){
        this.saldo = saldo
    }

    protected atualizarSaldo(novoSaldo:number):void{
        this.saldo += novoSaldo
        console.log(`O saldo da sua coonta é ${this.saldo}`)
    }
}