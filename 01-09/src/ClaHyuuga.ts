import { Cla } from "./Cla";
export class ClaHyuuga extends Cla{
    constructor(nomedoCla:string, lider:string){
        super(nomedoCla, lider)
    }
    public habilidadeEspecial(): void {
        console.log((`
        O Byakugan é uma habilidade ocular do clã Hyuuga no anime Naruto. Ele permite visão de quase 360°, enxergar através de objetos e ver o fluxo de chakra. É usado junto com o estilo de luta Gentle Fist para atacar os pontos de chakra do inimigo.
        `))
    }
    public exibirDetalhes(): void {
        console.log(`
        Clã: Hyuuga
        Lider: Hiashi
        `)
    }
    public ataqueEspecial(): void {
        console.log((`
        O clã Hyuuga usa o Jūken para golpear pontos de chakra e desativar o fluxo de energia do inimigo com precisão letal.
        `))
    }
}