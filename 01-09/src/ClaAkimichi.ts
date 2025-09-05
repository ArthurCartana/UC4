import { Cla } from "./Cla";


export class ClaAkimichi extends Cla{
    constructor(nomedoCla:string, lider:string){
        super(nomedoCla, lider)
    }
    public habilidadeEspecial(): void {
        console.log((`
        A ampliação corporal é a habilidade especial do clã Akimichi no anime Naruto. Ela permite aumentar partes do corpo ou o corpo inteiro para ganhar força e alcance. Essa técnica consome muita energia, mas é poderosa em combate físico.
        `))
    }
    public exibirDetalhes(): void {
        console.log(`
        Clã: Akimichi
        Lider: Chouza
        `)
    }
    public ataqueEspecial(): void {
        console.log((`
        O clã Akimichi usa o Baika no Jutsu para aumentar o corpo e esmagar o inimigo com ataques gigantescos.
        `))
    }
}