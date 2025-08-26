import { Local } from "./Local";

export class Abrigo extends Local{

    protected capacidade:number
    protected vagasOcupadas:number

    constructor(capacidade:number,vagasOcupadas:number,nome:string,endereco:string,cidade:string,telefone:string){
        super(nome,endereco,cidade,telefone)
        this.capacidade = capacidade
        this.vagasOcupadas = vagasOcupadas    
    }



//CAPACIDADE    
    getCapacidade():number{
        return this.capacidade
    }
    setCapacidade(novaCapacidade:number):void{
        this.capacidade = novaCapacidade
    }
//VAGAS OCUPADAS
    getVagasOcupadas():number{
        return this.vagasOcupadas
    }
    setVagasOcupadas(novasVagasOcupadas:number):void{
        this.vagasOcupadas = novasVagasOcupadas
    }



    mostrarInfo():void{
        console.log(`Cidade: ${this.cidade}, /n Endereço: ${this.endereco}`)
    }
    ocuparVaga(qtd:number):void{
        qtd = this.vagasOcupadas
        console.log(`Vagas ocupadas: ${qtd}`)
    }
    getVagasDisponiveis():number{
        let vagas = this.capacidade - this.vagasOcupadas
        return vagas
    }
}