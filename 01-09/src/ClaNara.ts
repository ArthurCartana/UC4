import { Cla } from "./Cla";

export class ClaNara extends Cla{
    constructor(nomedoCla:string, lider:string){
        super(nomedoCla, lider)
    }
    public habilidadeEspecial(): void {
        console.log((`
        A manipulação de sombras é a habilidade especial do clã Nara no anime Naruto. Ela permite controlar a própria sombra para prender e imobilizar inimigos. Quando presos, os alvos imitam os movimentos do usuário.
        `))
    }
    public exibirDetalhes(): void {
        console.log(`
        Clã: Nara
        Lider: Shikamaru
        `)
    }
    public ataqueEspecial(): void {
        console.log((`
        O clã Nara usa sombras para imobilizar e controlar os inimigos, copiando seus movimentos com precisão estratégica.
        `))
    }
}