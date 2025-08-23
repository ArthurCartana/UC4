import * as readline from 'readline-sync'
import { SistemaAbrigo } from './SistemaAbrigo'
import { Abrigo } from './Abrigo'



const cadastro:SistemaAbrigo = new SistemaAbrigo([])
const procurar:SistemaAbrigo = new SistemaAbrigo([])


let opcao = ""
do{
    console.log("===== ABRIGOS TEMPORÁRIOS =====")
    console.log("1. Cadastrar abrigo")
    console.log("2. Listar abrigos")
    console.log("3. Procurar abrigo")
    console.log("4. Sair")
    opcao = readline.question("Escolha uma opção:")

    switch(opcao){
        case "1":
        cadastro.cadastrarAbrigo()
        break
        case "2":
   
        case "3":
        console.log(procurar.procurarAbrigos())
        break
        case "4":
        console.log("Saindo...")
    }
}while(opcao !== "4")