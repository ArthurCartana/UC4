import { Monstro } from "./Monstro";
import { Personagem } from "./Personagem";
import * as readline from 'readline-sync'


const personagem:Personagem = new Personagem("", "", 20, 100)
const monstro:Monstro = new Monstro("Ice Golem", 100, 10)

const nomePersonagem = readline.question("Qual o nome do seu personagem? ")
const classePersonagem = readline.question("Qual a classe do seu personagem? ")

personagem.setNome(nomePersonagem)
personagem.setClasse(classePersonagem)
let opcao = ""
do{
    console.log("Escolha uma acão: ")
    console.log("1 - Atacar")
    console.log("2 - Curar")
    console.log("3 - Fugir")
    opcao = readline.question("Escolha uma opcao: ")

    switch(opcao){
        case "1":
            personagem.atacar(monstro)
            monstro.atacar(personagem)
            console.log("Vida do personagem: " + personagem.getVida())
            console.log("Vida do monstro: " + monstro.getVida())
            break
        case "2":
            console.log("Vida do personagem: " + personagem.curar())
            break
        case "3":
            console.log("Voce fugiu da batalha!")    
    }
}while(personagem.getVida() > 0 && monstro.getVida() > 0 && opcao !== "3")

if(personagem.getVida() <= 0){
    console.log("Voce morreu!")
}
if(monstro.getVida() <= 0){
    console.log("Parabens! Voce venceu o monstro")
}