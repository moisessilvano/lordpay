import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntregasRoutingModule } from './entregas-routing.module';
import { EditarPageComponent } from './pages/editar-page/editar-page.component';
import { ListarPageComponent } from './pages/listar-page/listar-page.component';
import { EntregasComponent } from './entregas.component';

@NgModule({
  declarations: [EditarPageComponent, ListarPageComponent, EntregasComponent],
  imports: [
    CommonModule,
    EntregasRoutingModule
  ]
})
export class EntregasModule { }
