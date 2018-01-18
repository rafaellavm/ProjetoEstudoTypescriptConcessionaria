import Carro from './Carro';

export default class Pessoa{

    private nome: string;
    private carroPreferido: string;
    private carro: Carro;

    constructor(nome: string, carroPreferido: string){
        this.carroPreferido = carroPreferido;
        this.nome = nome;
    }

    public dizerNome(): string{
        return this.nome;
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido;
    }

    public dizerCarroQueTem(): Carro{
        return this.carro;
    }

    public comprarCarro(carro: Carro): void{
        this.carro = carro;
    }
}