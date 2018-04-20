import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as c3 from 'c3';

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
    this.chart = c3.generate({
      bindto: this.chartElement.nativeElement,
      data: {
        columns: [
          ['data1', 300, 350, 300, 0, 0, 0],
          ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
          data1: 'area',
          data2: 'area-spline'
        }
      }
    });
  }

}
