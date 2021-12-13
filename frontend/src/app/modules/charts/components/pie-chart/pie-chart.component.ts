import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {ChartConfiguration, ChartData} from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {datasets: [{data: []}]};

  ngOnInit(): void {
  }

  @Input() set chartLabel(label: string) {
    this.pieChartData.datasets[0].label = label;
    this.chart?.update();
  }

  @Input() set chartData(data: number[]) {
    this.pieChartData.datasets[0].data = data;
    this.chart?.update();
  }

  @Input() set chartDataLabels(labels: string[]) {
    this.pieChartData.labels = labels;
    this.chart?.update();
  }

}
