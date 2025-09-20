import { LojaDeEletronicos } from "./LojaDeEletronicos";
import { LojaDeRoupas } from "./LojaDeRoupas";

const roupa:LojaDeRoupas = new LojaDeRoupas ("calca", 100, "M")
const eletronico:LojaDeEletronicos = new LojaDeEletronicos ("Iphone 14", 4000, "3 meses")
const eletronico2:LojaDeEletronicos = new LojaDeEletronicos ("Iphone 13", 3000, "1 mes")
roupa.adicionar(roupa)
eletronico.adicionar(eletronico)
eletronico.adicionar(eletronico2)
eletronico.listar()
console.log(eletronico.calcularTotal())

