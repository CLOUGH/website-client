import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-list-page',
  templateUrl: './portfolio-list-page.component.html',
  styleUrls: ['./portfolio-list-page.component.scss']
})
export class PortfolioListPageComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Portfolios');
  }

  ngOnInit() {
  }

}
