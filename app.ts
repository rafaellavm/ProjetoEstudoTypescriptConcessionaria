//import Carro, {qualquer_coisa as outroNomeVariavel} from './Carro';
import Pessoa from './Pessoa';
import Concessionaria from './Concessionaria';
import Carro from './Carro';

//let concessionaria = new Concessionaria('Av. Paulista');
//console.log(concessionaria);


/* ------------ criar carros ------------ */

let carroA = new Carro('dodgey honey',4);
let carroB = new Carro('Celta',4);
let carroC = new Carro('Palo',4);

/* ------------ montar lista de carros da concessionária ------------ */

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];
//ou let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Avenida Rio Branco, 156',listaDeCarros);

/* ------------ exibir a lista de carros  ------------ */

//console.log(concessionaria.mostrarListaDeCarros());

/* ------------ comprar o carro  ------------ */

let cliente = new Pessoa('João', 'Palo');
//console.log(cliente.dizerCarroPreferido());

//verificar se na lista de carros há o carro preferido do cliente
//looping dentro de cada posicao do array
concessionaria.mostrarListaDeCarros().map((carro:Carro) => {
    //lista os carros
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro);
    }
});

console.log(cliente.dizerCarroQueTem());