import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-edit-page',
  templateUrl: './page-edit-page.component.html',
  styleUrls: ['./page-edit-page.component.scss']
})
export class PageEditPageComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Edit Page');
  }

  ngOnInit() {
  }

}
