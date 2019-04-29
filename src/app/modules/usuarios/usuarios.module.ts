import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { EditarPageComponent } from './pages/editar-page/editar-page.component';
import { ListarPageComponent } from './pages/listar-page/listar-page.component';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
  declarations: [EditarPageComponent, ListarPageComponent, UsuariosComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
