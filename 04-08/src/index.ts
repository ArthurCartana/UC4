let nomeTurma:string = "25-1N"
let numeroAlunos:number = 20

let nomes:string[] = ["Fulano", "Beltrano"]

function mensagem():void {
    console.log("Olá")
}

function calcula(num1:number, num2:number):number {
    return num1+ num2
}
console.log(calcula(10, 90))

//Exercícios

function escola(nomeAluno:string, idadeAluno:number, estaMatriculado:boolean):void {
    console.log(`Aluno ${nomeAluno}, ${idadeAluno} anos, está matriculado: ${estaMatriculado}`)
}
escola("Arthur", 16, true)

//2
let alunos:string[] = ["Arthur", "Pedro", "Guilherme", "Leonardo", "Davi"]
function listaAlunos(alunos:string[]):string{
    let lista:string = "Alunos:"
    for(let i = 0; i < alunos.length; i++){
        lista += "\n" + alunos[i]
    }
    return lista
}
console.log(listaAlunos(alunos))

//3
function saudacao(Arthur:string):string {
    return `Olá, ${Arthur}! Seja bem vindo(a) à turma`
}
console.log(saudacao("Arthur"))

//4
function calculaMedia(nota1:number, nota2:number, nota3:number):number {
    return(nota1 + nota2 + nota3)/3
}
let media = calculaMedia(10,10,10)
console.log("Nota Final:" + media)

//5
function contarAlunos(nomesAlunos:string[]):void {
    console.log("Total de Alunos: ", nomesAlunos.length)
}
contarAlunos(["Fulano", "Ciclano", "Beltrano"])