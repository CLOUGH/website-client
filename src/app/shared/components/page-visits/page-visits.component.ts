import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-visits',
  templateUrl: './page-visits.component.html',
  styleUrls: ['./page-visits.component.scss']
})
export class PageVisitsComponent implements OnInit {
  pageData;

  @Input('data') set data(values) {
    if (values) {
      this.pageData = values;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
