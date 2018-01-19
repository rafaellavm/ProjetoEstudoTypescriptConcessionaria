import Carro from './Carro';
import Moto from './Moto';

let carro = new Carro('valoster', 4);
carro.acelerar();

let moto = new Moto();
moto.acelerar();
moto.acelerar();

console.log(carro);
console.log(moto);