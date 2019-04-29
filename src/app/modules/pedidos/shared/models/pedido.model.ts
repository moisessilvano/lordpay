import { Cliente } from './cliente.model';
import { Endereco } from './endereco.model';
import { Produto } from './produto.model';

export class Pedido {
    _id: string;
    taxaEntrega: number = 0;
    subTotal: number = 0;
    valorDesconto: number = 0;
    valorTotal: number = 0;
    dataCriado: string;
    obs: string;
    cliente = new Cliente();
    endereco = new Endereco();
    produtos: Produto[];
}
