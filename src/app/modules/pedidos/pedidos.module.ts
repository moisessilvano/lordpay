import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { ListarPedidosPageComponent } from './pages/listar-pedidos-page/listar-pedidos-page.component';
import { CriarPedidoPageComponent } from './pages/criar-pedido-page/criar-pedido-page.component';
import { VisualizarPedidoPageComponent } from './pages/visualizar-pedido-page/visualizar-pedido-page.component';
import { PedidosComponent } from './pedidos.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListarPedidosPageComponent, CriarPedidoPageComponent, VisualizarPedidoPageComponent, PedidosComponent],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PedidosModule { }
