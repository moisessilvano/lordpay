import { Cliente } from './cliente.model';
import { Endereco } from './endereco.model';
import { Produto } from './produto.model';

export class Pedido {
    _id: string;
    taxaEntrega: number;
    valorTotal: number;
    dataCriado: string;
    obs: string;
    cliente = new Cliente();
    endereco = new Endereco();
    produtos: Produto[];
}
