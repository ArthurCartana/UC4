import { Monstro } from "./Monstro"

export class Personagem{
    private nome:string
    private classe:string
    private forca:number
    private vida:number

    constructor(nome:string, classe:string, forca:number, vida:number){
        this.nome = nome
        this.classe = classe
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
//CLASSE
    getClasse():string{
        return this.classe
    }
    setClasse(novaClasse:string):void{
        this.classe = novaClasse
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
     
    atacar(Monstro:Monstro):void{
        const dano = this.forca;
        Monstro.recebeDano(dano),
        console.log(`${this.nome} ataca com ${dano} de dano`);
       
       
    }  

    recebeDano(dano:number): void{
        this.vida -= dano
    }

    verVida():void{
        console.log(`O guerreiro ${this.nome} tem ${this.vida} de vida.`)
    }

    curar(){
        if(this.vida < 100){
            return this.vida = this.vida + 10
           
        }else{
            console.log("Não pode curar mais")
        }
    }


}