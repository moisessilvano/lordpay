import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../shared/services/pedido.service';
import { Pedido } from '../../shared/models/pedido.model';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

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
    private pedidoService: PedidoService,
    private router: Router
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

  editarPedido(pedidoId: string) {
    this.router.navigate(['dashboard/pedidos/editar', pedidoId]);
  }

}
