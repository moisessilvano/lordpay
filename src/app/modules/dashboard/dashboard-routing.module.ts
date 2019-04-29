import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'pedidos', loadChildren: '../pedidos/pedidos.module#PedidosModule' },
      { path: 'entregas', loadChildren: '../entregas/entregas.module#EntregasModule' },
      { path: 'clientes', loadChildren: '../clientes/clientes.module#ClientesModule' },
      { path: 'usuarios', loadChildren: '../usuarios/usuarios.module#UsuariosModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
