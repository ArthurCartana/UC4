export class Calculadora {

    // Aqui crio as ASSINATURAS DE MÉTODO
    // Ou seja, defino COMO este método pode ser chamado
    somar(a: number, b: number): void;   // assina que pode receber dois números
    somar(a: string, b: string): void;   // assina que pode receber duas strings

    // Aqui crio a IMPLEMENTAÇÃO DO MÉTODO
    // Ou seja, DEFINO sua lógica
    somar(a:any, b:any): any {
        console.log(a + b)
    }




}