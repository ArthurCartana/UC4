import { AUsuarioSistema } from "./AUsuarioSistema";
import { IAutenticavel } from "./IAutenticavel";

export class Cliente extends AUsuarioSistema implements IAutenticavel{
    usuario:string
    senha:string
    constructor(nome:string, usuario:string, senha:string) {
        super(nome)
        this.usuario = usuario
        this.senha = senha
    }
    autenticar(usuario: string, senha: string): boolean {
        return this.usuario === usuario && this.senha === senha
    }
    acessarPainel(): void {
        console.log(`Painel do Cliente acessado por ${this.nome}`)
    }
}