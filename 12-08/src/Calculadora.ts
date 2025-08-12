export class Calculadora{
    numeroUm:number
    numeroDois:number

    constructor(numeroUm:number, numeroDois:number){
     this.numeroUm = numeroUm
     this.numeroDois = numeroDois

    }


somar():number{
    return (this.numeroUm + this.numeroDois)
}

subtrair():number{
    return (this.numeroUm - this.numeroDois)
}

multiplicar():number{
    return(this.numeroUm * this.numeroDois)
}

dividir():number{
    return(this.numeroUm / this.numeroDois)
}
}
