import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import * as moment from 'moment';

@Component({
  selector: 'app-users-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './users-chart.component.html',
  styleUrls: ['./users-chart.component.scss']
})
export class UsersChartComponent implements OnInit {
  private svg;
  private margin;
  private width;
  private height;
  private g;
  private parseTime;
  private x;
  private y;
  private line;
  private _data;

  @Input('data') set data(data) {
    this._data = data;
    if (data) {
      this.drawChart();
    }
  }

  @ViewChild('svgElement') svgElement: ElementRef;

  constructor() { }

  ngOnInit() {
    this.svg = d3.select(this.svgElement.nativeElement);
    this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
    this.width = +this.svgElement.nativeElement.getBoundingClientRect().width - this.margin.left - this.margin.right;
    this.height = +this.svgElement.nativeElement.getBoundingClientRect().height - this.margin.top - this.margin.bottom;
    this.g = this.svg.append('g').attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    this.parseTime = d3.timeParse('%Y%m%d');

    this.x = d3.scaleTime()
      .rangeRound([0, this.width]);

    this.y = d3.scaleLinear()
      .rangeRound([this.height, 0]);

    this.line = d3.line()
      .x((d: any) => this.x(d.date))
      .y((d: any) => this.y(d.users));

  }

  drawChart() {
    const data = this._data.reports[0].data.rows.map(d => {
      return {
        date: this.parseTime(d.dimensions[0]),
        users: +d.metrics[0].values[0]
      };
    });

    // build chart
    this.x.domain(d3.extent(data, (d: any) => d.date));
    this.y.domain([0, d3.max(data, (d: any) => d.users) + 1]);

    // add x axis grid lines
    this.g.append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(
        d3.axisBottom(this.x)
          // .tickSize(-this.height)
          .tickFormat(d3.timeFormat('%Y-%m-%d'))
      )
      .select('.domain')
      .remove();

    // add the Y grid lines
    this.g.append('g')
      .attr('class', 'y-axis')
      .call(
        d3.axisLeft(this.y)
          .tickSize(-this.width)
          .ticks(d3.max(data, (d: any) => d.users) + 1)
          .tickFormat(d3.format('d'))
      );
    // .append('text')
    // .attr('transform', 'rotate(-90)')
    // .attr('y', 6)
    // .attr('dy', '0.71em')
    // .attr('text-anchor', 'end')
    // .text('Users');

    // Data line and dots group
    const lineAndDots = this.g.append('g')
      .attr('class', 'line-and-dots');

    lineAndDots.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#3DA3E8')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 3)
      .attr('d', this.line);

    lineAndDots.selectAll('.dot')
      .data(data)
      .enter()
      .append('circle') // Uses the enter().append() method
      .attr('class', 'dot') // Assign a class for styling
      .attr('cx', (d, i) => this.x(d.date))
      .attr('cy', (d) => this.y(d.users))
      .attr('r', 3);

  }

}
