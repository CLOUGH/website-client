import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import * as Plotly from 'plotly.js';

@Component({
  selector: 'app-users-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './users-chart.component.html',
  styleUrls: ['./users-chart.component.scss']
})
export class UsersChartComponent implements OnInit {
  private usersData;
  @Input('data') set data(data) {
    this.usersData = data;
    if (data) {
      this.drawChart();
    }
  }

  @ViewChild('chart') chart: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  drawChart() {
    const layout = {
      title: 'Visitors Per Day'
    };
    Plotly.newPlot(this.chart.nativeElement, this.parseData(), layout);
  }

  parseData() {
    const data = [];
    const fill = ['#43B99F', '#4396CB'];

    this.usersData.reports[0].data.rows.forEach((row, rowIndex) => {
      row.metrics[0].values.forEach((value, valueIndex) => {
        if (!data[valueIndex]) {
          data[valueIndex] = {
            x: [],
            y: [],
            fill: ['tonexty', 'tozeroy'][valueIndex],
            line: { color: fill[valueIndex] },
            type: 'scatter',
            name: this.usersData.reports[0].columnHeader.metricHeader.metricHeaderEntries[valueIndex].name
          };
        }
        data[valueIndex].y.push(+value);
        data[valueIndex].x.push(moment(row.dimensions[0], 'YYYYMMDD').format('YYYY-MM-DD'));
      });
    });
    return data;
  }
}
