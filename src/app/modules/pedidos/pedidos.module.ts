import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { ListarPedidosPageComponent } from './pages/listar-pedidos-page/listar-pedidos-page.component';
import { CriarPedidoPageComponent } from './pages/criar-pedido-page/criar-pedido-page.component';
import { VisualizarPedidoPageComponent } from './pages/visualizar-pedido-page/visualizar-pedido-page.component';

@NgModule({
  declarations: [ListarPedidosPageComponent, CriarPedidoPageComponent, VisualizarPedidoPageComponent],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
