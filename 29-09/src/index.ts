/* function somaNumeros(num1:number, num2:number):number {
    return num1 + num2
}

console.log(somaNumeros(20,90)) // retorna a soma dos dois números

function somaStrings(palavra1:string, palavra2:string):string {
    return palavra1 + palavra2
}

console.log(somaStrings("Aba", "cate")) // retorna a concatenação das palavras/caracteres 

function soma<T extends string | number>(param1:T, param2:T):T {
    return ((param1 as any) + (param2 as any)) as T
}

console.log(soma<string>("Ar", "thur"))
console.log(soma<number>(20,50))

function retornaGeneric<T>(item:T):T {
    return item
}

console.log(retornaGeneric<string>("Arthur"), retornaGeneric<number>(10))

import { Animal } from "./Animal"
import { Usuario } from "./Usuario"


const nomes:string[] = ["Arthur", "Ana", "Bob"]
const numeros:number[] = [10,8,11,77]

function retornaPrimeiro<T>(array:T[]):T {
    return array[0]
}

console.log(retornaPrimeiro<string>(nomes))
console.log(retornaPrimeiro<number>(numeros))


// Só aceita algo que tenha a propriedade (nome)
function mostraNome<T extends {nome:string}>(obj:T): string {
    return obj.nome
}

const meuAnimal:Animal = new Animal("Snoop", "Tigre")
console.log(mostraNome<Animal>(meuAnimal))

const meuUsuario:Usuario = new Usuario("Arthur", "arthur@mail", "123")
console.log(mostraNome<Usuario>(meuUsuario))


function mostraTamanho <T extends {length:number}> (obj:T):number {
    return obj.length
}

console.log(mostraTamanho<string>("Arthur"), mostraTamanho<number[]>([10,20,30]))


function mostraValor<T extends string | number | boolean>(valor:T):T {
    return valor
}

console.log(mostraValor<string>("Cartana"), mostraValor<number>(10))*/

import { Animal } from "./Animal";
import { Eletronico } from "./Eletronico";
import Estoque from "./Estoque";
import { Livro } from "./Livro";
import { Roupa } from "./Roupa";
import { TemNome } from "./TemNome";
import { Usuario } from "./Usuario";

function mostraNome<T extends TemNome>(obj:T):string {
    return obj.nome
}

const meuUsuario:Usuario = new Usuario("Arthur", "arthur@mail", "123")
console.log(mostraNome<Usuario>(meuUsuario))



function som<T extends Animal>(obj:T):void {
    obj.fazerSom()
}

const meuAnimal = new Animal("Tigre")
som<Animal>(meuAnimal)


// Criando produtos
const livro = new Livro ("Harry Potter", "J.K. Rowling")
const roupa = new Roupa("Camiseta", "M")
const eletronico = new Eletronico("Televisão", "220v")

// Criando estoques
const estoqueLivros:Estoque<Livro> = new Estoque<Livro>()
estoqueLivros.adicionar(livro)
console.log(estoqueLivros.listar())


const estoqueRoupas:Estoque<Roupa> = new Estoque<Roupa>()
estoqueRoupas.adicionar(roupa)
console.log(estoqueRoupas.listar())


const estoqueEletronico:Estoque<Eletronico> = new Estoque<Eletronico>()
estoqueEletronico.adicionar(eletronico)
console.log(estoqueEletronico.listar())