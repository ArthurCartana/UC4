import { Pagamento } from "./Pagamento";

export class CartaoCredito extends Pagamento {
      processar():void {
        console.log('O pagamento no cartão de crédito está em processo')
      }
}