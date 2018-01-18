"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
//let concessionaria = new Concessionaria('Av. Paulista');
//console.log(concessionaria);
/* ------------ criar carros ------------ */
var carroA = new Carro_1.default('dodgey honey', 4);
var carroB = new Carro_1.default('Celta', 4);
var carroC = new Carro_1.default('Palo', 4);
/* ------------ montar lista de carros da concessionária ------------ */
var listaDeCarros = [carroA, carroB, carroC];
//ou let listaDeCarros: Carro[] = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Avenida Rio Branco, 156', listaDeCarros);
/* ------------ exibir a lista de carros  ------------ */
//console.log(concessionaria.mostrarListaDeCarros());
/* ------------ comprar o carro  ------------ */
var cliente = new Pessoa_1.default('João', 'Palo');
//console.log(cliente.dizerCarroPreferido());
//verificar se na lista de carros há o carro preferido do cliente
//looping dentro de cada posicao do array
concessionaria.mostrarListaDeCarros().map(function (carro) {
    //lista os carros
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
