//IF e ELSE IF
const idade = 18;
const temCarteira = true

if(idade >= 18  && temCarteira){
    console.log("Você pode dirigir.")
}else if (idade >= 18 && !temCarteira){
    console.log("Você é de maior, mas não tem carteira. Não pode dirigir.")
}else{
    console.log("Você é menor de idade.")
}

//OPERADOR TERNÁRIO
const pontuacao = 85

const result = pontuacao >= 60 ? "Aprovado" : "Reprovado"

console.log(result)

//SWITCH
const fruta:string = "banana";

switch (fruta) {
  case "banana":
    console.log("Banana é rica em potássio.")
    break

  case "maçã":
    console.log("Maçã ajuda na digestão.")
    break

  case "laranja":
    console.log("Laranja tem muita vitamina C.")
    break

  default:
    console.log("Fruta desconhecida.")
}

//MENU COM SWITCH
import * as readline from 'readline-sync'

console.log("=== MENU PRINCIPAL ===")
console.log("1 - Ola")
console.log("2 - Sobre")
console.log("3 - Sair")
//question é uma função pronta da biblioteca readline-sync
//ela imprime no terminal o que pedirmos, e espera o usuário digitar algo
//qundo ele digita, a variável opcao recebe como valor o que o usuário digitou
const option = readline.question("Escolha uma opcao: ")

switch (option){
    case "1":
        console.log("Ola! Seja bem-vindo!")
        break
    case "2":
        console.log("Este é um exemplo de menu com switch.")
        break
    case "3":
        console.log("Saindo...")
        break
    default:
    console.log("Opcao invalida.")
}

//Exercícios
//1
let chuva = false
if(chuva === false){
  console.log("Levar guarda-chuva")
}else{
  console.log("Está um ótimo dia para caminhar")
}

//2
let nota = 8 
let resultado = nota >= 6 ? "Aprovado" : "Reprovado"
console.log(resultado)

//3
let animal = "Cachorro"
switch(animal){
    case "Cachorro":
       console.log("Au au")
  break
    case "Gato":
       console.log("Miau")
  break
  default:
    console.log("Desconhecido")     
}

//4
let opcao = ""
do{
  console.log("=== MENU ===")
  console.log("1 - Jogar")
  console.log("2 - Carregar jogo")
  console.log("3 - Sair")
  opcao = readline.question("Escolha uma opcao")
  switch(opcao){
    case "1":
      console.log("Jogar")
      break
      case "2":
        console.log("Carregando")
        break
        case "3":
          console.log("Saindo")
          break
          default:
            console.log("Opcao invalida. Tente de novo")
  }
}while(opcao !== "3")