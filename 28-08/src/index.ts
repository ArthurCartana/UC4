import { Circulo } from "./Circulo";
import { IFormaGeometrica } from "./IFormaGeometrica";
import { IFuncionario } from "./IFuncionario";
import { ILivro } from "./ILivro";
import { IProduto } from "./IProduto";
import { IUsuario } from "./IUsuario";
import { Quadrado } from "./Quadrado";
import { SistemaLogin } from "./SistemaLogin";

//Aqui criamos um objeto do tipo IUsuario, ou seja, um objeto que SEGUE AS REGRAS da interface que criamos
const meuUser:IUsuario = {
    nome: "Arthur",
    idade: 16
}

// Interfaces podem ser usadas para tipar parametros de função
// Assim garanto que o objeto que eu usar terá tudo o que eu preciso
function mostrarProduto(produto:IProduto):void {
    console.log(`${produto.nome} custa R$${produto.preco}`)
}

const produto:IProduto = {
    nome:"Camiseta",
    preco:99.99
}

mostrarProduto(produto)
mostrarProduto({nome:"Tênis", preco:120.00})

const livro1:ILivro = {
    titulo:"teste",
    autor:"Xablau",
    anoPublicacao:1998

}

function mostrarLivro(livro:ILivro):void {
    console.log(`Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno: ${livro.anoPublicacao}`)
}

mostrarLivro(livro1)



const funcionario1:IFuncionario = {
    nome:"Bob",
    cargo:"Gestor",
    salario:3000
}

function calcularBonus(funcionario:IFuncionario):void {
    let bonus = funcionario.salario/10
    console.log(bonus)
}

calcularBonus(funcionario1)


const meuQuadrado:Quadrado = new Quadrado(2,4)
const meuCirculo:Circulo = new Circulo(5)
console.log(meuCirculo.calcularArea())
console.log(meuQuadrado.calcularArea())

const meuLogin:SistemaLogin = new SistemaLogin()
console.log(meuLogin.autenticar("admin", "1234"))