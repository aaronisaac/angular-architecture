import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  @Input() doughnutChartLabels: Label[] = [];
  @Input() doughnutChartData: number[] = [];

  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
