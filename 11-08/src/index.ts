import * as readline from 'readline-sync'

function somar(num1:number, num2:number):number{
       return num1 + num2
}

function subtrair(num1:number, num2:number):number{
    return num1 - num2
}

function multiplicar(num1:number, num2:number):number{
    return num1 * num2
}

function dividir(num1:number, num2:number):number{
    return num1 / num2
}


let opcao = ""
do{
    console.log("=== CALCULADORA ===")
console.log("1 - Somar")
console.log("2 - Subtrair")
console.log("3 - Multiplicar")
console.log("4 - Dividir")
console.log("5 - Sair")
opcao = readline.question("Escolha uma opcao: ")

let num1 = Number(readline.question("Digite um numero: "))
let num2 = Number(readline.question("Digite um numero: "))

switch(opcao){
case "1":
        somar(num1, num2)
    break

case "2":
        subtrair(num1, num2)
    break

case "3":
        multiplicar(num1, num2) 
    break    

case "4":
       if(num2 === 0){
        console.log("Não pode ser dividido por zero!")
       }else{ dividir(num1, num2)
       }
       break

 case "5":
        console.log("Saindo...")
    break
default:
        console.log("Opcao invalida. Tente de novo")    
}
}while(opcao !== "5")
