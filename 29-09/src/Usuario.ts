import { TemNome } from "./TemNome"

export class Usuario implements TemNome {
    nome:string
    email:string
    senha:string


    constructor(nome:string,email:string,senha:string) {
        this.nome = nome
        this.email = email
        this.senha = senha
    }
}