import { Personagem } from "./Personagem"

export class Monstro{
    private nome:string
    private forca:number
    private vida:number

    constructor(nome:string, vida:number, forca:number ){
        this.nome = nome
        this.forca = forca
        this.vida = vida
    }
// NOME
    getNome():string{
        return this.nome
    }
    setNome(novoNome:string):void{
        this.nome = novoNome
    }
//VIDA
    getVida():number{
        return this.vida
    }
    setVida(novaVida:number):void{
        this.vida = novaVida
    }
//FORÇA
    getFroca():number{
        return this.forca
    }
    setForca(novaForca:number):void{
        this.forca = novaForca
    }
    atacar(personagem:Personagem):void{
        const dano = this.forca;
        personagem.recebeDano(dano),
        console.log(`${this.nome} ataca com ${dano} de dano`)
    }

    recebeDano(dano:number): void{
            this.vida -= dano 
        }
    
    verVida(){
            console.log(`O monstro ${this.nome} tem ${this.vida}.`)
        }


}
