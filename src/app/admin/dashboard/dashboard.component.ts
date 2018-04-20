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
  public pageData: any;
  public pageViewsPerDay: any;
  public userGeoData: any;

  chart: any;
  @ViewChild('mainChart') mainChart: ElementRef;

  constructor(private title: Title, private googleAnalyticsService: GoogleAnalyticsService) {
    this.title.setTitle('Dashboard');
  }

  ngOnInit() {
    this.googleAnalyticsService.users().subscribe(data => {
      this.userData = data;
    });

    this.googleAnalyticsService.pageViews().subscribe(data => {
      this.pageData = data;
    });

    this.googleAnalyticsService.pageViewPerDay().subscribe(data => {
      this.pageViewsPerDay = data;
    });

    this.googleAnalyticsService.getGeolocation().subscribe(data => {
      this.userGeoData = data;
    });

  }

}
