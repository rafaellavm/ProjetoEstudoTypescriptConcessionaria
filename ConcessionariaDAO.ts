import {IDAO} from './IDAO';
import Concessionaria from './Concessionaria';

export class ConcessionariaDAO implements IDAO{

    nomeTabela: string = 'tb_concessionaria';

    inserir(object: Concessionaria): boolean{
        
        console.log('lógica de insert');
        return true;
    }
    atualizar(object: Concessionaria): boolean{
        console.log('lógica de update');
        return true;
    }
    remover(id: number): Concessionaria{

        console.log('lógica de delete');
        return new Concessionaria('',[]);
    }
    selecionar(id: number):Concessionaria{
        console.log('lógica de select');
        return new Concessionaria('',[]);
    }

    selecionarTodos(): [Concessionaria]{

        console.log('lógica getAll');
        return [new Concessionaria('',[])];
    }
}