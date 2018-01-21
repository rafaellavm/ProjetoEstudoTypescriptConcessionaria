import {ConcessionariaDAO} from './ConcessionariaDAO';
import Concessionaria from './Concessionaria';
import { PessoaDAO } from './PessoaDAO';
import Pessoa from './Pessoa';

let dao: ConcessionariaDAO = new ConcessionariaDAO();
let concessionaria = new Concessionaria('',[]);

dao.inserir(concessionaria);

let dao2: PessoaDAO = new PessoaDAO();
let pessoa = new Pessoa("Rafaela","");

dao2.atualizar(pessoa);