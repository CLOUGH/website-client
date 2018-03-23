import { Component, OnInit, Input } from '@angular/core';
import { MainLayoutOptionsInterface } from '../../interfaces/main-layout-options-interface';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  public layoutOptions: MainLayoutOptionsInterface;

  @Input('options')
  set options(value: MainLayoutOptionsInterface) {
    this.layoutOptions = value;
    console.log(this.layoutOptions, value);
  };

  constructor() { }

  ngOnInit() {
    this.layoutOptions = {
      navbar: {
        opaqueAtTop: true
      }
    }
  }

}
