export class Local{
    protected nome:string
    protected endereco:string
    protected cidade:string
    protected telefone:string

    constructor(nome:string, endereco:string, cidade:string, telefone:string){
        this.nome = nome
        this.endereco = endereco
        this.cidade = cidade
        this.telefone = telefone
    }
//NOME
    getNome():string{
        return this.nome
    }
    setNome(novoNome:string):void{
        this.nome = novoNome
    }
//ENDEREÇO
    getEndereco():string{
        return this.endereco
    }
    setEndereco(novoEndereco:string):void{
        this.endereco = novoEndereco
    }
//CIDADE
    getCidade():string{
        return this.cidade
    }
    setCidade(novaCidade:string):void{
        this.cidade = novaCidade
    }
//TELEFONE
    getTelefone():string{
        return this.telefone
    }
    setTelefone(novoTelefone:string):void{
        this.telefone = novoTelefone
    }

    mostrarInfo():void {
        console.log(`Cidade: ${this.endereco}, /n Endereço: ${this.cidade}`)
    }
}