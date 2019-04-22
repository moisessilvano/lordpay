import { Cliente } from './cliente.model';
import { Endereco } from './endereco.model';
import { Produto } from './produto.model';

export class Pedido {
    id: string;
    taxaEntrega: string;
    cliente: Cliente;
    endereco: Endereco;
    produtos: Produto[];
}
