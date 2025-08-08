//Variáveis

import { Dog } from "./Dog"

//String
let nome:string = "Leonardo"
//Number
let idade:number = 30
//Boolean
let deMaior:boolean = true

//-----------------------------------------------------------------------------------------------------------------------------------------------
//Arrays
let numeros: Array<number> = [1,2,3]
let nomes: string[] = ['Leo','Bob','Ana']

//Objeto Literal
let pessoa: {nome:string, idade:number} = {
    nome:"Leo",
    idade:30
}

//-----------------------------------------------------------------------------------------------------------------------------------------------
//Funções
function calcula(num:number, num2:number):number {
    return num + num2
}

function mensagem(meuNome:string):string{
    return `Olá ${meuNome}, tudo bem com você?`
}

function frase():void{
    console.log("E ae")
}

//Função com parâmetros opcionais
function sayHello(name?: string): void{
    console.log("Hello,", name || "world")
}
sayHello()
sayHello("Leonardo")

function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount)
}
console.log(
    applyDiscount(100),
    applyDiscount(100,0.9)
)

//Crio objetos a partir da classe Dog
let myDog:Dog = new Dog("Bob", 25, "Golden-Retriever")
let myOtherDog:Dog = new Dog("Fido", 5, "Vira-Lata")

//Assim eu acessp seus atributos
console.log(myDog.breed) //Goolden-Retriever
console.log(myOtherDog.name) //Fido

//Assim eu chamo os métodos
myDog.bark()
myOtherDog.eat()