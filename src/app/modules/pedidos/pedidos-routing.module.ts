import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarPedidoPageComponent } from './pages/criar-pedido-page/criar-pedido-page.component';
import { VisualizarPedidoPageComponent } from './pages/visualizar-pedido-page/visualizar-pedido-page.component';
import { ListarPedidosPageComponent } from './pages/listar-pedidos-page/listar-pedidos-page.component';

const routes: Routes = [
  { path: '', component: ListarPedidosPageComponent },
  { path: 'criar', component: CriarPedidoPageComponent },
  { path: 'editar/:id', component: CriarPedidoPageComponent },
  { path: 'visualizar', component: VisualizarPedidoPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
