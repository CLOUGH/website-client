import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-edit-page',
  templateUrl: './portfolio-edit-page.component.html',
  styleUrls: ['./portfolio-edit-page.component.scss']
})
export class PortfolioEditPageComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Portfolio');
  }

  ngOnInit() {
  }

}
