import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChartOverviewComponent } from './components/chart-overview/chart-overview.component';
import {AppRoutingModule} from '../../app-routing.module';
import {ChartsModule} from '../charts/charts.module';



@NgModule({
  declarations: [
    NavbarComponent,
    ChartOverviewComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ChartsModule
  ]
})
export class SharedModule { }
