/* function retornaItem<T>(item: T): T {
    return item;
  }

  console.log(retornaItem<number>(10));     
  console.log(retornaItem<string>("oi"));  
  console.log(retornaItem<boolean>(true));  




  function pegaPrimeiro<T>(lista: T[]): T {
    return lista[0];
  }
  
  const numeros = [1, 2, 3];
  const palavras = ["a", "b", "c"];
  
  pegaPrimeiro(numeros);  // 1
  pegaPrimeiro(palavras); // "a"




// Restringindo os tipos que aceitamos
/* 
   <T extends { length: number }>
   Indica que função aceita apenas algo que contenha a propriedade length

  function mostraTamanho<T extends { length: number }>(item: T): number {
    return item.length;
  }
  
  mostraTamanho("Oi");        // ✅ funciona (string tem length)
  mostraTamanho([1, 2, 3]);   // ✅ funciona (array tem length)
  //mostraTamanho(123);         // ❌ erro (number não tem length)




  // <T extends string | number>
  // Só aceita algo que pode ser um tipo ou de outro, nesse caso, string ou number
  // Se for de qualquer outro tipo, não aceita
  function mostraValor<T extends string | number>(valor: T): T {
    return valor;
  }
  
  mostraValor("Olá");  // ✅ string permitido
  mostraValor(123);    // ✅ number permitido
// mostraValor(true);   // ❌ boolean não é aceito



interface TemNome {
    nome: string;
  }

  function mostraNome<T extends TemNome>(obj: T): string {
    return obj.nome;
  }
  
  mostraNome({ nome: "Ana" });             // ✅ ok
  mostraNome({ nome: "João", idade: 20 }); // ✅ ok
//  mostraNome({ idade: 20 });               // ❌ erro, não tem nome



class Animal {
    mover() {
      console.log("Movendo...");
    }
  }
  
  class Cachorro extends Animal {
    latir() {
      console.log("Au au!");
    }
  }
  
  function fazMover<T extends Animal>(animal: T) {
    animal.mover(); // ✅ garantido que existe
  }
  
  fazMover(new Animal());   // ✅
  fazMover(new Cachorro()); // ✅
//  fazMover({});             // ❌ erro
  


function corEscolhida<T extends "vermelho" | "azul" | "verde">(cor: T): T {
    return cor;
  }
  
  corEscolhida("vermelho"); // ✅
  corEscolhida("azul");     // ✅
//  corEscolhida("preto");    // ❌ não permitido 

import { Estoque } from "./Estoque";
import { Livro } from "./Livro";
import { Roupa } from "./Roupa";



const estoqueRoupas = new Estoque<Roupa>()
estoqueRoupas.adicionar(new Roupa("Camiseta Preta", "P"))
estoqueRoupas.adicionar(new Roupa("Calça Jeans", "GG"))
estoqueRoupas.adicionar(new Roupa("Boné Vermelho", "Único"))

const estoqueLivros = new Estoque<Livro>()
estoqueLivros.adicionar(new Livro("O Senhor dos Anéis", "J.R.R. Tolkien"))
estoqueLivros.adicionar(new Livro("Harry Potter", "J. K. Rolling"))*/

