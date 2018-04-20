import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as moment from 'moment';
import * as Plotly from 'plotly.js';
import { Layout } from 'plotly.js';

@Component({
  selector: 'app-user-geolocation-chart',
  templateUrl: './user-geolocation-chart.component.html',
  styleUrls: ['./user-geolocation-chart.component.scss']
})
export class UserGeolocationChartComponent implements OnInit {
  public userGeoData;
  private chart;
  @ViewChild('chartElement') chartElement: ElementRef;

  @Input('data') set data(value) {
    this.userGeoData = value;

    if (value) {
      this.generateChart();
    }
  }
  constructor() { }

  ngOnInit() {
  }
  unpack(rows, key) {
    return rows.map(function (row) { return row[key]; });
  }

  generateChart() {
    const layout = {
      title: 'Visitor Locations',
      autosize: true,
      geo: {
        showframe: false,
        showcoastlines: false,
        showcountries: true,
        countrycolor: '#DDDDDD',
        zoom: 4
      }
    };
    Plotly.plot(this.chartElement.nativeElement, this.parseData(), layout, { showLink: false });
  }

  parseData() {
    const data = [];
    this.userGeoData.reports[0].data.rows.forEach((row, rowIndex) => {
      row.metrics[0].values.forEach((value, valueIndex) => {
        if (!data[valueIndex]) {
          data[valueIndex] = {
            type: 'choropleth',
            locationmode: 'country names',
            locations: [],
            z: [],
            text: [],
            colorscale: [
              [0, 'rgb(5, 10, 172)'], [0.35, 'rgb(40, 60, 190)'],
              [0.5, 'rgb(70, 100, 245)'], [0.6, 'rgb(90, 120, 245)'],
              [0.7, 'rgb(106, 137, 247)'], [1, 'rgb(220, 220, 220)']],
            autocolorscale: false,
            reversescale: true,
            marker: {
              line: {
                color: 'rgb(180,180,180)',
                width: 0.5
              }
            },
            tick0: 0,
            zmin: 0,
            dtick: 1000,
            colorbar: {
              autotic: false,
              tickprefix: '',
              thickness: 0.5,
              title: 'Users'
            }
          };
        }
        data[valueIndex].locations.push(row.dimensions[0]);
        data[valueIndex].z.push(+value);
        data[valueIndex].text.push(row.dimensions[0]);
      });
    });
    return data;
  }
}


