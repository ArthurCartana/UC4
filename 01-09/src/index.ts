import { AForma } from "./AForma";
import { Administrador } from "./Administrador";
import { Cliente } from "./Cliente";
import { FuncionarioCLT } from "./FuncionarioCLT";
import { FuncionarioPJ } from "./FuncionarioPJ";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";
import { ClaAkimichi } from "./ClaAkimichi";
import { ClaHyuuga } from "./ClaHyuuga";
import { ClaNara } from "./ClaNara";
import { ClaUchiha } from "./ClaUchiha";

const funcionarioCLT:FuncionarioCLT = new FuncionarioCLT("Bob", 2000)
const funcionarioPJ:FuncionarioPJ = new FuncionarioPJ("Xablau", 5000, 220)
console.log(`O salário fixo do ${funcionarioCLT.nome} é R$:${funcionarioCLT.calcularSalario()}`)
console.log(`O salário do ${funcionarioPJ.nome} é R$:${funcionarioPJ.calcularSalario().toFixed(3)} por hora`)

const formas:AForma[] = [new Retangulo(10, 5), new Triangulo(5,7)]
formas.forEach(formas => {
    console.log(formas.calcularArea())
})

const admin = new Administrador("Arthur", "admin", "admin")
const cliente = new Cliente("Arthur", "arthursci", "1234")

if (admin.autenticar("admin","admin")){
    admin.acessarPainel()
} else {
    console.log("Falha na autenticação do administrador")
}

if(cliente.autenticar("arthursci", "1234")) {
    cliente.acessarPainel()
} else {
    console.log("Falha na autenticação do cliente")
}


const personagemUchiha:ClaUchiha = new ClaUchiha("Uchiha", "Sasuke")
const personagemHyuuga:ClaHyuuga = new ClaHyuuga("Hyuuga", "Hiashi")
const personagemNara:ClaNara = new ClaNara("Nara", "Shikamaru")
const personagemAkimichi:ClaAkimichi = new ClaAkimichi("Akimichi", "Chouza")
personagemUchiha.habilidadeEspecial()
personagemHyuuga.ataqueEspecial()