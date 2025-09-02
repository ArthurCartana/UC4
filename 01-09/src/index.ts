import { FuncionarioCLT } from "./FuncionarioCLT";
import { FuncionarioPJ } from "./FuncionarioPJ";

const funcionarioCLT:FuncionarioCLT = new FuncionarioCLT("Bob", 2000)
const funcionarioPJ:FuncionarioPJ = new FuncionarioPJ("Xablau", 5000, 220)
console.log(`O salário fixo do ${funcionarioCLT.nome} é R$:${funcionarioCLT.calcularSalario()}`)
console.log(`O salário do ${funcionarioPJ.nome} é R$:${funcionarioPJ.calcularSalario().toFixed(3)} por hora`)