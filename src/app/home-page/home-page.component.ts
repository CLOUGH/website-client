import { Component, OnInit } from '@angular/core';
import { MainLayoutOptionsInterface } from '../shared/interfaces/main-layout-options-interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  mainLayoutOptions: MainLayoutOptionsInterface;

  constructor() { }

  ngOnInit() {
    this.mainLayoutOptions = {
      navbar: {
        opaqueAtTop: false
      }
    };
  }

}
