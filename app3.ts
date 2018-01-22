//import {ConcessionariaDAO} from './ConcessionariaDAO';
import Concessionaria from './Concessionaria';
//import { PessoaDAO } from './PessoaDAO';
import Pessoa from './Pessoa';
import {DAO} from './DAO';

//let dao: ConcessionariaDAO = new ConcessionariaDAO();
let concessionaria = new Concessionaria('',[]);

//dao.inserir(concessionaria);

//let dao2: PessoaDAO = new PessoaDAO();
let pessoa = new Pessoa("Rafaela","");

let dao3: DAO<Concessionaria> = new DAO<Concessionaria>();
let dao4: DAO<Pessoa> = new DAO<Pessoa>();

dao3.inserir(concessionaria);
dao4.remover(3);

//dao2.atualizar(pessoa);