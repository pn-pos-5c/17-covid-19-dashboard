import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartConfiguration} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';
import DailyInfection from '../../../../models/DailyInfection';
import {DataProviderService} from '../../../core/services/data-provider.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  public lineChartData: ChartConfiguration['data'] = {datasets: [{data: []}]};
  dailyInfections: DailyInfection[] = [];

  constructor(private dataProvider: DataProviderService) {
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },
  };

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  ngOnInit(): void {
  }

  @Input() set chartLabel(label: string) {
    this.lineChartData.datasets[0].label = label;
    this.chart?.update();
  }

  @Input() set chartData(data: number[]) {
    this.lineChartData.datasets[0].data = data;
    this.chart?.update();
  }

  @Input() set chartDataLabels(labels: string[]) {
    this.lineChartData.labels = labels;
    this.chart?.update();
  }

}
