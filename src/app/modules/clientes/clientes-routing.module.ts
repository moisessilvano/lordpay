import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPageComponent } from './pages/listar-page/listar-page.component';
import { EditarPageComponent } from './pages/editar-page/editar-page.component';

const routes: Routes = [
  { path: '', component: ListarPageComponent },
  { path: 'criar', component: EditarPageComponent },
  { path: 'editar/:id', component: EditarPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
