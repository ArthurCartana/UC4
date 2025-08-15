import { Entregador } from "./Entregador"
import { Pacote } from "./Pacote"
import { Pessoa } from "./Pessoa"

const pessoa:Pessoa = new Pessoa("Arthur", 16)

console.log(pessoa.apresentar())

console.log(pessoa.getNome())
pessoa.setNome("Arthur Cartana")
console.log(pessoa.getNome())

console.log(pessoa.getIdade())
pessoa.setIdade(-1)
console.log(pessoa.getIdade())


const entregador:Entregador = new Entregador ("Bob")
const pacote:Pacote = new Pacote ("Novo Hamburgo", 5)

entregador.trocarEndereco(pacote, "São Leopoldo")
entregador.entregarPacote(pacote)