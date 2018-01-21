import {IDAO} from './IDAO';
import Pessoa from './Pessoa';

export class PessoaDAO implements IDAO{

    nomeTabela: string = 'tb_pessoa';

    inserir(object: Pessoa): boolean{
        
        console.log('lógica de insert');
        return true;
    }
    atualizar(object: Pessoa): boolean{
        console.log('lógica de update');
        return true;
    }
    remover(id: number): Pessoa{

        console.log('lógica de delete');
        return new Pessoa('','');
    }
    selecionar(id: number):Pessoa{
        console.log('lógica de select');
        return new Pessoa('','');
    }

    selecionarTodos(): [Pessoa]{

        console.log('lógica getAll');
        return [new Pessoa('','')];
    }
}