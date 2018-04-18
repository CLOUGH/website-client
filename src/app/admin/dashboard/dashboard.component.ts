import { Component, OnInit, ViewRef, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Title } from '@angular/platform-browser';
import { GoogleAnalyticsService } from '../../shared/services/google-analytics/google-analytics.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userData: any;

  chart: any;
  @ViewChild('mainChart') mainChart: ElementRef;

  constructor(private title: Title, private googleAnalyticsService: GoogleAnalyticsService) {
    this.title.setTitle('Dashboard');
  }

  ngOnInit() {
    this.googleAnalyticsService.users().subscribe(data => {
      this.userData = data;
    });


    // this.chart = new Chart(this.mainChart.nativeElement, {
    //   type: 'line',
    //   data: {
    //     labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    //     datasets: [{
    //       data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
    //       lineTension: 0,
    //       backgroundColor: 'transparent',
    //       borderColor: '#007bff',
    //       borderWidth: 4,
    //       pointBackgroundColor: '#007bff'
    //     }]
    //   },
    //   options: {
    //     responsive: true,

    //     scales: {
    //       yAxes: [{
    //         ticks: {

    //         }
    //       }]
    //     },
    //     legend: {
    //       display: false,
    //     }
    //   }
    // });
  }

}
