import * as readline from 'readline-sync'
import { SistemaAbrigo } from './SistemaAbrigo'


const sistema:SistemaAbrigo = new SistemaAbrigo()


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
            sistema.cadastrarAbrigo()
        break
        case "2":
            sistema.listarAbrigos()
        break
        case "3":
            sistema.procurarAbrigos()
        break
        case "4":
        console.log("Saindo...")
    }
}while(opcao !== "4")