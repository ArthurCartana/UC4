import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";

export abstract class AForma {
    private formas: AForma[] = []
    abstract calcularArea():number
}