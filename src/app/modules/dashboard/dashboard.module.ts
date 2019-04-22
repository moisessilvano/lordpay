import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomePageComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DashboardModule { }
