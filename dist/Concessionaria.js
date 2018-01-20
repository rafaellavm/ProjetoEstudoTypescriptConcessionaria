"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//implements: classe que implementa uma interface
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
    Concessionaria.prototype.fornecerHorariosDeFuncionamento = function () {
        return 'De Segunda à sexta, das 8h às 18h  e sábado das 8h às 12h';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
