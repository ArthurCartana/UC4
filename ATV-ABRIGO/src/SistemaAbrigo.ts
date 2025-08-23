import { Abrigo } from "./Abrigo";
import * as readline from 'readline-sync'

export class SistemaAbrigo{
    private abrigos: Abrigo[] = []

    constructor(abrigos:Abrigo[] = []){
        this.abrigos = abrigos
    }
    

    cadastrarAbrigo():void{
       let capacidade = Number(readline.question("Capacidade do abrigo: "))
       let VagasOcupadas = Number(readline.question("Vagas ocupadas: "))

       let name = readline.question("Nome: ") 
       let endereco = readline.question("Endereço: ")
       let cidade = readline.question("Cidade: ")
       let telefone = readline.question("Telefone: ")
       
       const abrigo:Abrigo = new Abrigo(capacidade, VagasOcupadas, name, endereco, cidade, telefone)
       this.abrigos.push(abrigo)
       
    }
    

    listarAbrigos():void{
        
    }

    procurarAbrigos():void{
        const pergunta = readline.question("Digite a cidade que você está: ")
        for (let i = 0; i < this.abrigos.length; i++) {
        if (pergunta === this.abrigos[i].getCidade()){
            console.log(`Qual cidade você está?
            ${pergunta}
            
            --------------------
            LISTAGEM DE ABRIGOS:
            --------------------
            CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE
            ---------------------------------------------------------------------------------------------------------
              001  | ${this.abrigos[i].getNome()}      | ${this.abrigos[i].getEndereco()}      |  ${this.abrigos[i].getTelofone()}  |  ${this.abrigos[i].getCapacidade()}  | ${this.abrigos[i].getCidade()}
            ---------------------------------------------------------------------------------------------------------`)
        }
    }

    
}
}