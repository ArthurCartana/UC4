import { Carro } from "./Carro";
import { ContaPoupanca } from "./ContaPoupanca";
import { Guerreiro } from "./Guerreiro";

const heroi = new Guerreiro(100)
const vilao = new Guerreiro(80)

/*heroi.atacar(vilao)
heroi.treinar()*/

const carro:Carro = new Carro(100)
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()

const meuBanco:ContaPoupanca = new ContaPoupanca(1000)

meuBanco.aplicarJuros(60)
