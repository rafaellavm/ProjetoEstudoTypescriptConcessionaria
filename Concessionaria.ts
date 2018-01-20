import Carro from './Carro';
import {IConcessionaria} from './IConcessionaria';

//implements: classe que implementa uma interface

export default class Concessionaria implements IConcessionaria{

    private endereco: string;
    private listaDeCarros: Array<Carro>; //any //tipo any permite que a variável possa receber qualquer tipo de dado

    constructor(endereco: string, listaDeCarros: Array<Carro>){
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string{

        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro>{
        
        return this.listaDeCarros;
    }

    public fornecerHorariosDeFuncionamento(): string{
        return 'De Segunda à sexta, das 8h às 18h  e sábado das 8h às 12h';
    }
}