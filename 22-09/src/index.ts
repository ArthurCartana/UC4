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
let sabor = ""
let tamanho = ""
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
   console.log("DIGITE COMO ESTÁ NO CARDÁPIO!")
   Object.values(TamPizza).forEach((tamanho, index) => {
      console.log(`${index + 1}, ${tamanho}`)
   })
   tamanho = readline.question("Escolha um sabor: ")

   if (tamanho == "Pequena") {
      return tamanho = TamPizza.Pequena
   }
   if (tamanho == "Media") {
      return tamanho = TamPizza.Media
   }
   if (tamanho == "Grande") {
      return tamanho = TamPizza.Grande
   }
   if (tamanho == "Familia") {
      return tamanho = TamPizza.Familia
   }
}


function mostrarSabor(SaborPizza:any) {
   console.log("=== SABORES DE PIZZA ===")
   console.log("DIGITE COMO ESTÁ NO CARDÁPIO!")
   Object.values(SaborPizza).forEach((sabor, index) => {
      console.log(`${index + 1}, ${sabor}`)
   })
   sabor = readline.question("Escolha um sabor: ")

   if (sabor == "Calabresa") {
      return sabor = SaborPizza.Calabresa
   }
   if (sabor == "Coracao") {
      return sabor = SaborPizza.Coracao
   }
   if (sabor == "Frango") {
      return sabor = SaborPizza.Frango
   }
   if (sabor == "Quatro queijos") {
      return sabor = SaborPizza.QuatroQueijos
   }
   if (sabor == "Strogonoff") {
      return sabor = SaborPizza.Strogonoff
   }
}