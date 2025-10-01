export class PerguntaResposta<T,B> {
    pergunta?:T
    resposta?:B
    perguntas: T[] = []
    respostas: B[] = []

    constructor() {
        
    }

    adicionar(pergunta:T, resposta:B):void {
        this.perguntas.push(pergunta)
        this.respostas.push(resposta)
    }

    mostratTudo(): void {
        for (let i = 0; i < this.perguntas.length; i++) {
            console.log(`Pergunta: `, this.perguntas[i])
            console.log(`Resposta: `, this.respostas[i])
        }
    }
}