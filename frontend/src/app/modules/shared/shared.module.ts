import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChartOverviewComponent } from './components/chart-overview/chart-overview.component';
import {AppRoutingModule} from '../../app-routing.module';
import {ChartsModule} from '../charts/charts.module';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    ChartOverviewComponent,
    LoginComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ]
})
export class SharedModule { }
