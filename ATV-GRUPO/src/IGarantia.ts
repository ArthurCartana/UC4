import { IProduto } from "./IProduto";
import { LojaDeEletronicos } from "./LojaDeEletronicos";

export interface IGarantia extends IProduto {
    garantia:string
}