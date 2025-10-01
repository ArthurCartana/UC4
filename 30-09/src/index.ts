function mostraValor<T extends {length: string | string[] | number | number[]}>(valor:T) {
    return valor
}

console.log(mostraValor<string>("Cartana"))
console.log(mostraValor<string[]>(["Cartana", "Leo"]))
console.log(mostraValor<number[]>([10,8,11]))


import { PerguntaResposta } from "./PerguntaResposta";

const quiz = new PerguntaResposta<string, boolean>()
quiz.adicionar("O sol é uma estrela? ",true)
quiz.adicionar("Londres é a capital da Inglaterra? ",true)
quiz.adicionar("Barcelona é maior que Real Madrid",false)
quiz.mostratTudo()