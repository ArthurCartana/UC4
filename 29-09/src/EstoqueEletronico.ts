import { Eletronico } from "./Eletronico";

export class EstoqueLivro {
    private eletronicos: Eletronico[] = [];
  
    adicionar(eletronicos: Eletronico) { this.eletronicos.push(eletronicos); }
    listar() { return this.eletronicos; }
  }