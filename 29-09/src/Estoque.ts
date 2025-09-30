// Estoque.ts
export class Estoque<T> {
    private estoque: T[] = [];
  
    adicionar(item: T): void { this.estoque.push(item); }
  
    listar(): T[] { return this.estoque; }
  
    remover(indice: number): void { this.estoque.splice(indice, 1); }
  }
  
  export default Estoque;