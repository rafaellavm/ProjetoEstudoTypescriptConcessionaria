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
    private listaDeCarros: any //tipo any permite que a variável possa receber qualquer tipo de dado

    constructor(endereco: string){
        this.endereco = endereco;
    }

    public fornecerEndereco(): string{

        return this.endereco;
    }

    public mostrarListaDeCarros(): any{
        
        return this.listaDeCarros;
    }
}

let concessionaria = new Concessionaria('Av. Paulista');
console.log(concessionaria);