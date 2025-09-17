import { Publicacao } from "./Publicacao";
import * as readline from 'readline-sync'

export class Biblioteca {
    publicacoes:Publicacao [] = []

    constructor(publicacoes:Publicacao[]) {
        this.publicacoes = publicacoes
    }

    adicionar(publicacao: Publicacao): void{
       for (let i = 0; i < this.publicacoes.length; i++) {
        this.publicacoes.push(publicacao)
        console.log(`Publicacao adicionada`)
        this.publicacoes
       }
    }

    buscarPorTitulo(titulo:string):void {
        const pergunta = readline.question("Busque por titulo: ")
        let encontrou:boolean = false
        console.log(`Titulo nao encontrado!`)
        for (let i = 0; i < this.publicacoes.length; i++) {
            if(pergunta === this.publicacoes[i].titulo) {
                encontrou = true
               console.log(this.publicacoes[i].titulo) 
            }
        }
        if (!encontrou) {
            console.log("Cidade não encontrada")
        }
        
         
    }
}