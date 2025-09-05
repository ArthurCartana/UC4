import { Cla } from "./Cla";


export class ClaUchiha extends Cla{
    constructor(nomedoCla:string, lider:string){
        super(nomedoCla, lider)
    }
    public habilidadeEspecial(): void {
        console.log(("O Sharingan é uma habilidade ocular do clã Uchiha no anime Naruto. Ele permite ver movimentos com precisão, copiar jutsus e usar ilusões poderosas. Em formas avançadas, concede técnicas ainda mais fortes como o Amaterasu e o Susanoo."))
    }
    public exibirDetalhes(): void {
        console.log(`
        Clã: Uchiha
        Lider: Sasuke

        `)
    }
    public ataqueEspecial(): void {
        console.log((`
        O clã Uchiha usa o Sharingan para lançar ataques como o Amaterasu, queimando inimigos com chamas negras impossíveis de apagar.
        `))
    }
}