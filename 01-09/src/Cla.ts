export abstract class Cla {
    nomedoCla:string
    lider:string
    constructor(nomedoCla:string, lider:string){
        this.nomedoCla = nomedoCla
        this.lider = lider
    }
    public abstract habilidadeEspecial():void
    public abstract exibirDetalhes():void
    public abstract ataqueEspecial():void
}