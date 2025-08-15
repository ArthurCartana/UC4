import { Personagem } from "./Personagem"

export class Monstro{
    private nome:string
    private vida:100
    private forca:number

    constructor(nome:string, forca:number){
        this.nome = nome
        this.forca = forca
        this.vida = 100
    }

ataque(personagem:Personagem):void{
    
}




}