import { Animal } from "./Animal";
import { Crocodile } from "./Crocodile";
import { Dog } from "./Dog";
import { Owl } from "./Owl";

const myDog:Dog = new Dog("Bob", 10)
const myOwl:Owl = new Owl("Nina", 5)
const myCrocodile:Crocodile = new Crocodile("Alan", 100)
/*

console.log(myDog.name)
console.log(myDog.weight)
myDog.bark()
myDog.eat()

myOwl.fly()
myOwl.eat()
*/
myCrocodile.swim()
myCrocodile.eat()

let animais:Animal[] = [myCrocodile, myDog, myOwl]
 
for (let i = 0; i < animais.length; i++){
    animais[i].eat()
}
  