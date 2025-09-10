import { Estoque } from "./Estoque"
import { Livro } from "./Livro"
import { Roupa } from "./Roupa"
import { Brinquedo } from "./Brinquedo"
import { Eletronico } from "./Eletronico"
import readlineSync from "readline-sync";

const estoqueLivros = new Estoque<Livro>()
const estoqueRoupas = new Estoque<Roupa>()
const estoqueBrinquedos = new Estoque<Brinquedo>()
const estoqueEletronicos = new Estoque<Eletronico>()

function menu() {
console.log("\n=== Sistema de Estoque ===")
console.log("1 - Cadastrar produto")
console.log("2 - Listar produtos")
console.log("3 - Remover produto")
console.log("4 - Buscar produto")
console.log("5 - Sair")
}

function selecionarEstoque(tipo: string) {
switch (tipo) {
case "1": return estoqueLivros;
case "2": return estoqueRoupas;
case "3": return estoqueBrinquedos;
case "4": return estoqueEletronicos;
default: return null;
}
}

while (true) {
menu()
const opcao = readlineSync.question("Escolha uma opcao: ")

if (opcao === "1") {
console.log("\nQual produto deseja cadastrar?")
console.log("1 - Livro\n2 - Roupa\n3 - Brinquedo\n4 - Eletronico")
const tipo = readlineSync.question("Digite o numero: ")

if (tipo === "1") {
const titulo = readlineSync.question("Titulo: ")
const autor = readlineSync.question("Autor: ")
const preco = readlineSync.questionFloat("Preco: ")
estoqueLivros.adicionar(new Livro(titulo, autor, preco))

} else if (tipo === "2") {
const desc = readlineSync.question("Descricao: ")
const tam = readlineSync.question("Tamanho: ")
const preco = readlineSync.questionFloat("Preco: ")
estoqueRoupas.adicionar(new Roupa(desc, tam, preco))

} else if (tipo === "3") {
const nome = readlineSync.question("Nome: ")
const idade = readlineSync.questionInt("Idade minima: ")
const preco = readlineSync.questionFloat("Preco: ")
estoqueBrinquedos.adicionar(new Brinquedo(nome, idade, preco))

} else if (tipo === "4") {
const modelo = readlineSync.question("Modelo: ")
const marca = readlineSync.question("Marca: ")
const preco = readlineSync.questionFloat("Preco: ")
estoqueEletronicos.adicionar(new Eletronico(modelo, marca, preco))
}

} else if (opcao === "2") {
console.log("\nEscolha o tipo para listar:")
console.log("1 - Livros\n2 - Roupas\n3 - Brinquedos\n4 - Eletronicos")
const tipo = readlineSync.question("Digite o numero: ")
const estoque = selecionarEstoque(tipo)

if (estoque) {
console.log(estoque.listar())
}

} else if (opcao === "3") {
console.log("\nEscolha o tipo para remover:")
console.log("1 - Livros\n2 - Roupas\n3 - Brinquedos\n4 - Eletronicos")
const tipo = readlineSync.question("Digite o numero: ")
const estoque = selecionarEstoque(tipo)

if (estoque) {
console.log(estoque.listar())
const indice = readlineSync.questionInt("Indice para remover: ")
estoque.remover(indice)
}

} else if (opcao === "4") {
console.log("\nEscolha o tipo para buscar:")
console.log("1 - Livros\n2 - Roupas\n3 - Brinquedos\n4 - Eletronicos")
const tipo = readlineSync.question("Digite o numero: ")
const estoque = selecionarEstoque(tipo)

} else if (opcao === "5") {
console.log("Saindo do sistema...")
      break                                                                                     
}
}