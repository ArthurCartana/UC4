import { Monstro } from "./monstro"

export class Personagem{
    private nome:string
    private classe:string
    private vida:number
    private forca:number

    constructor(nome:string, classe:string, forca:number){
        this.nome = nome
        this.classe = classe
        this.vida = 100
        this.forca = forca
    }
     
ataque(monstro:Monstro):void{
    const dano = this.forca
    monstro.recebeDano
}    




}