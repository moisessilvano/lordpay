import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { EditarPageComponent } from './pages/editar-page/editar-page.component';
import { ListarPageComponent } from './pages/listar-page/listar-page.component';
import { ClientesComponent } from './clientes.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditarPageComponent, ListarPageComponent, ClientesComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
