/*for(let voltas:number =0; voltas <= 10; voltas ++){
    console.log(`o ciclista deu ${voltas} voltas.`)
}

console.log("o ciclista venceu a corrida!")



//WHILE = ENQUANTO
let voltas:number = 0

while(voltas <= 10){
   console.log(`O ciclista deu ${voltas} voltas.`)
   voltas ++
}

//Posso usar um for para percorrer um array

const numbers:number[] = [10,20,30,30,40,50,60]

for (let i:number = 0; i < numbers.length; i++){
    console.log("Numero: " + numbers[i])
}

//para cada item do meu array
//para cada número dentro do array numeros
//faça algo
//NÃO FUNCIONA COM OBJETOS
for (let numero of numbers){
    console.log("Numero: " + numero)
}

const pessoa:{nome:string, idade:number} = {
    nome: `Leo`,
    idade: 30
}

for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave as keyof typeof pessoa]}`);
}

//typeof descobre o tipo de algo
//keyof pega as chaves de um objeto (exemplo: nome, idade)
//keyof typeof pessoa primeiro descobre o tipo do objeto, depois pega as chaves dele.

//forEach

const personagens:string[] = [`Frodo`, `Gandalf`, `Legolas`]


//o forEach é usado em arrays
//ele serve para executar uma função para cada item deste array
//essa função é chamada como parâmetro do forEach (callBack)
//o primeiro parâmetro dessa função é o valor do item, e o segundo é o seu índice
personagens.forEach((nome, indice)=>{
   console.log(`Personagem ${indice}: ${nome}`)
})

let contador = 0;

//do significa faça
do {
    console.log(`Contador: ${contador}`);
    contador++;
} while (contador < 0);
*/
//Exercícios
//1
const sociedade:string[] = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];

for(let i:number = 0; i < sociedade.length; i++) {
  if(i == 0 || i == 1 || i == 5 || i == 6){
    console.log("Hobbit encontrado: " + sociedade[i])
  }
}

//2
const jedi = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
  ];

  for(const personagem of jedi){
    if(personagem.jedi === true){
        console.log(`são jedi: ` + personagem.nome)
    }
  }

  //3