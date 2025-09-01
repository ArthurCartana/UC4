import { IAutenticavel } from "./IAutenticavel";

export  class SistemaLogin implements IAutenticavel {
    autenticar(usuario: string, senha: string): boolean {
        if(usuario === "admin" && senha === "1234"){
            return true
        }else{
            return false
        }
    }
}