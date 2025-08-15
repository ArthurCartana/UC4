import { Pacote } from "./Pacote"

export class Entregador{
    private nome:string

    constructor(nome:string){
        this.nome = nome
    }

   entregarPacote(pacote:Pacote):void{
      console.log(`${this.nome} está entregando um pacote de ${pacote.getPeso()}kg para ${pacote.getDestino()}`)
   }

   //Método que recebe um objeto do tipo Pacote e altera sua propriedade
trocarEndereco(pacote:Pacote, novoDestino:string){
  pacote.setDestino(novoDestino)
  console.log(`O novo endereço é ${novoDestino}.`)
}
}