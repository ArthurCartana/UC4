/* import { Calculadora } from "./Calculadora";
import { Desenhista } from "./Desenhista";
import { Mensageiro } from "./Mensageiro";
import { Repositorio } from "./Repositorio";


const calc:Calculadora = new Calculadora()

// Passando numbers
calc.somar(1,2)
// Passando strings
calc.somar("Leonardo", "de Souza")

const m = new Mensageiro();

// Chamando o método enviando uma string
m.enviar("Arthur", "Corre, pedala e nada");
// Chamando o método enviando um array de strings  
m.enviar(["Guilherme", "Athos"], "Dois pé duro");

const desenhos = new Desenhista()

desenhos.desenhar(10)
desenhos.desenhar(20,30)

const rep = new Repositorio()

console.log(
    rep.buscar(2), // Retorna number
    rep.buscar("a") // Retorna string
) */

import { Estoque } from "./Estoque";
import { loja } from "./Loja";


const itens = new loja()

itens.adicionar("Iphone 15")
itens.adicionar(["Ipad", "Iphone 14"])


const estoque = new Estoque()

estoque.remover("Arroz")
estoque.remover(["Feijão", "Açúcar", "Chocolate"])