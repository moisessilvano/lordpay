import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../shared/services/pedido.service';
import { Pedido } from '../../shared/models/pedido.model';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-listar-pedidos-page',
  templateUrl: './listar-pedidos-page.component.html',
  styleUrls: ['./listar-pedidos-page.component.scss']
})
export class ListarPedidosPageComponent implements OnInit {

  pedidos: Pedido[];

  displayedColumns: string[] = ['cliente', 'dataCriado', 'usuario', 'status', 'valorTotal', 'opcoes'];
  dataSource = new MatTableDataSource(this.pedidos);

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit() {
    this.getPedidos();
  }

  getPedidos() {
    console.log('-- OBTEM OS PEDIDOS --');
    return this.pedidoService.getPedidos({})
      .subscribe(res => {
        this.pedidos = res;
        console.log(this.pedidos);
        this.dataSource = new MatTableDataSource(this.pedidos);
        return res;
      }, err => {
        console.log(err);
        return err;
      });
  }

}
