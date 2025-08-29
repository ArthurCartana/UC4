//Crio a interface Usuario
//qualquer objeto ou classe que implemente/use esta interface PRECISA seguir as regras dela, ou seja, ter todos os seus atributos, tipos e métodos (se houver)
export interface IUsuario {
    nome:string
    idade:number
    falar?():void
}
