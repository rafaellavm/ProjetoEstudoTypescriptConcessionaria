import Carro from './Carro';

export default class Concessionaria{

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
}