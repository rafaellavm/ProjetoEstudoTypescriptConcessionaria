class Carro{

    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number = 0;

    constructor(modelo: string, numeroDePortas: number){
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    public acelerar(): void{
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void{
        this.velocidade = 0;
    }

    public velocidadeAtual(): number{
        return this.velocidade;
    }
}

class Concessionaria{

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

//let concessionaria = new Concessionaria('Av. Paulista');
//console.log(concessionaria);

class Pessoa{

    private nome: string;
    private carroPreferido: string;
    private carro: any;

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

    public dizerCarroQueTem(): any{
        this.carro;
    }

    public comprarCarro(carro: any): void{
        this.carro = carro;
    }
}

/* ------------ criar carros ------------ */

let carroA = new Carro('dodgey honey',4);
let carroB = new Carro('Celta',4);
let carroC = new Carro('Palo',4);

/* ------------ montar lista de carros da concessionária ------------ */

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];
//ou let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Avenida Rio Branco, 156',listaDeCarros);

/* ------------ exibir a lista de carros  ------------ */

console.log(concessionaria.mostrarListaDeCarros());