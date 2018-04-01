import { Component, OnInit, Input } from '@angular/core';
import { MainLayoutOptionsInterface } from '../../interfaces/main-layout-options-interface';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  public layoutOptions: MainLayoutOptionsInterface;

  @Input('navbarOpaqueAtTop') public navbarOpaqueAtTop;

  constructor() { }

  ngOnInit() {
  }

}
