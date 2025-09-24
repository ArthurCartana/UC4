import { DiaDaSemana } from "./DiadaSemana"
import { Pizza } from "./Pizza"
import { PrecoPizza } from "./PrecoPizza"
import { SaborPizza } from "./SaborPizza"
import { TamPizza } from "./TamPizza"
import * as readline from 'readline-sync'



/* function verificaDia(dia: DiaDaSemana) {
 if (dia == 1) {
    console.log("Hoje é dia de UC4!")
 } else if(dia == 3) {
    console.log("Hoje é dia de Inglês!")
 } else {
    console.log("Hoje é dia de PI!")
 }
}

verificaDia(DiaDaSemana.Quarta) 

const pedido1: Pizza = new Pizza(SaborPizza.Coracao, TamPizza.Grande)


console.log(pedido1.descricao())*/


let opcao = ""
let sabor = 0
let tamanho = 0
do {
   console.log("===== BEM VINDO A PIZZARIA =====")
   console.log("1.Fazer pedido")
   console.log("2. Sair")

   opcao = readline.question("Escolha uma opçao:")

   switch (opcao) {
      case "1":
         const tamanhoEscolhido = mostrarTamanho(TamPizza)
         console.clear()
         const saborEscolhido = mostrarSabor(SaborPizza)
         console.clear()
         const pedido = new Pizza(tamanhoEscolhido, saborEscolhido)
         console.log(`Pedido feito: \n ${pedido.descricao()}`)
         break

      case "2":
         console.log("Saindo...")
   }
} while (opcao !== "2")



function mostrarTamanho(TamPizza:any) {
   console.log("=== TAMANHOS DE PIZZA ===")
   Object.values(TamPizza).forEach((tamanho, index) => {
      console.log(`${index + 1}, ${tamanho}`)
   })
   tamanho = readline.questionInt("Escolha um sabor: ")

   if (tamanho == 1) {
      return tamanho = TamPizza.Pequena
   }
   if (tamanho == 2) {
      return tamanho = TamPizza.Media
   }
   if (tamanho == 3) {
      return tamanho = TamPizza.Grande
   }
   if (tamanho == 4) {
      return tamanho = TamPizza.Familia
   }
}


function mostrarSabor(SaborPizza:any) {
   console.log("=== SABORES DE PIZZA ===")
   Object.values(SaborPizza).forEach((sabor, index) => {
      console.log(`${index + 1}, ${sabor}`)
   })
   sabor = readline.questionInt("Escolha um sabor: ")

   if (sabor == 1) {
      return sabor = SaborPizza.Calabresa
   }
   if (sabor == 2) {
      return sabor = SaborPizza.Coracao
   }
   if (sabor == 3) {
      return sabor = SaborPizza.Frango
   }
   if (sabor == 4) {
      return sabor = SaborPizza.QuatroQueijos
   }
   if (sabor == 5) {
      return sabor = SaborPizza.Strogonoff
   }
}