import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-list-page',
  templateUrl: './page-list-page.component.html',
  styleUrls: ['./page-list-page.component.scss']
})
export class PageListPageComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Pages');
  }

  ngOnInit() {
  }

}
