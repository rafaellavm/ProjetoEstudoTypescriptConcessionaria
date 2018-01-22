import {IDAO} from './IDAO';

export class DAO<T> implements IDAO<T>{
    
    nomeTabela: string = '';

    inserir(object: T): boolean{
        
        console.log('lógica de insert');
        return true;
    }
    atualizar(object: T): boolean{
        console.log('lógica de update');
        return true;
    }
    remover(id: number): T{

        console.log('lógica de delete');
        return Object();
    }
    selecionar(id: number):T{
        console.log('lógica de select');
        return Object();
    }

    selecionarTodos(): [T]{

        console.log('lógica getAll');
        return [Object()];
    }
}