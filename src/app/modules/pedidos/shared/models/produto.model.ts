export class Produto {
    _id: string;
    descricao: string;
    quantidade: number = 1;
    valorUnitario: number;
    valorDesconto: number = 0;
    valorTotal: number = 0;
}
