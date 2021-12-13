import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import {NgChartsModule} from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import {CoreModule} from '../core/core.module';



@NgModule({
  declarations: [LineChartComponent, BarChartComponent, PieChartComponent],
  exports: [
    LineChartComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    CoreModule
  ]
})
export class ChartsModule { }
