import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SecretRoutingModule} from './secret-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ChartsModule} from '../charts/charts.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SecretRoutingModule,
    ChartsModule
  ]
})
export class SecretModule {
}
