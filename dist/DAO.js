"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO = /** @class */ (function () {
    function DAO() {
        this.nomeTabela = '';
    }
    DAO.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    DAO.prototype.atualizar = function (object) {
        console.log('lógica de update');
        return true;
    };
    DAO.prototype.remover = function (id) {
        console.log('lógica de delete');
        return Object();
    };
    DAO.prototype.selecionar = function (id) {
        console.log('lógica de select');
        return Object();
    };
    DAO.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return [Object()];
    };
    return DAO;
}());
exports.DAO = DAO;
