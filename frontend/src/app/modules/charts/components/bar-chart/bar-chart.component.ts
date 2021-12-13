import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {ChartConfiguration, ChartData} from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };

  public barChartData: ChartData<'bar'> = {datasets: [{data: []}]};

  ngOnInit(): void {
  }

  @Input() set chartLabel(label: string) {
    this.barChartData.datasets[0].label = label;
    this.chart?.update();
  }

  @Input() set chartData(data: number[]) {
    this.barChartData.datasets[0].data = data;
    this.chart?.update();
  }

  @Input() set chartDataLabels(labels: string[]) {
    this.barChartData.labels = labels;
    this.chart?.update();
  }

}
