import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';
import * as Plotly from 'plotly.js';

@Component({
  selector: 'app-page-visits-per-day',
  templateUrl: './page-visits-per-day.component.html',
  styleUrls: ['./page-visits-per-day.component.scss']
})
export class PageVisitsPerDayComponent implements OnInit {
  public pageViewsPerDay;
  private chart;
  @ViewChild('chartElement') chartElement: ElementRef;

  @Input('data') set data(value) {
    this.pageViewsPerDay = value;

    if (value) {
      this.generateChart();
    }
  }

  constructor() { }

  ngOnInit() {

  }

  generateChart() {
    Plotly.newPlot(this.chartElement.nativeElement, this.parseData(), {
      title: 'Page Visits Per Day'
    });
  }

  parseData() {
    const data = [];

    this.pageViewsPerDay.reports[0].data.rows.forEach((row, rowIndex) => {
      row.metrics[0].values.forEach((value, valueIndex) => {
        if (!data[valueIndex]) {
          data[valueIndex] = {
            x: [],
            y: [],
            type: 'scatter',
            name: this.pageViewsPerDay.reports[0].columnHeader.metricHeader.metricHeaderEntries[valueIndex].name
          };
        }
        data[valueIndex].y.push(+value);
        data[valueIndex].x.push(moment(row.dimensions[0], 'YYYYMMDD').format('YYYY-MM-DD'));
      });
    });
    return data;
  }

}
