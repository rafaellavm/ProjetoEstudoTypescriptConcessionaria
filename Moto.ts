import Veiculo from './Veiculo';

class Moto extends Veiculo{

    public acelerar(): void{
        this.velocidade = this.velocidade + 20;
    }
    
}

//outra forma de exportar
export default Moto;