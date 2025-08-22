import { Bicicleta } from "./Bicicleta";
import { Boleto } from "./Boleto";
import { Cachorro } from "./Cachorro";
import { Carro } from "./Carro";
import { CartaoCredito } from "./CartaoCredito";
import { Gato } from "./Gato";
import { Pagamento } from "./Pagamento";

const meuAnimal:Cachorro = new Cachorro()
const meuOutroAnimal:Gato = new Gato()

const meuVeiculo:Carro = new Carro()
const meuOutroVeiculo:Bicicleta = new Bicicleta()

meuVeiculo.mover()
meuOutroVeiculo.mover()


const pagamentos:Pagamento[] = [new CartaoCredito(), new Boleto()]
       
      pagamentos.forEach(Pagamento => {
    Pagamento.processar() 
 }
)