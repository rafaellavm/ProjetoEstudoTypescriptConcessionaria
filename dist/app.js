"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
//let concessionaria = new Concessionaria('Av. Paulista');
//console.log(concessionaria);
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.carroPreferido = carroPreferido;
        this.nome = nome;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    return Pessoa;
}());
/* ------------ criar carros ------------ */
var carroA = new Carro('dodgey honey', 4);
var carroB = new Carro('Celta', 4);
var carroC = new Carro('Palo', 4);
/* ------------ montar lista de carros da concessionária ------------ */
var listaDeCarros = [carroA, carroB, carroC];
//ou let listaDeCarros: Carro[] = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Avenida Rio Branco, 156', listaDeCarros);
/* ------------ exibir a lista de carros  ------------ */
//console.log(concessionaria.mostrarListaDeCarros());
/* ------------ comprar o carro  ------------ */
var cliente = new Pessoa('João', 'Palo');
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
