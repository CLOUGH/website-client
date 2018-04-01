import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  navbarIsCollapsed = true;
  backgroundOpaque = false;
  @Input() opaqueAtTop: boolean;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.backgroundOpaque = this.opaqueAtTop || false;
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (!this.opaqueAtTop) {
      const rootElement = <Element>(document.documentElement || document.body.parentNode || document.body);

      if (rootElement.scrollTop > 100) {
        this.backgroundOpaque = true;
      } else {
        this.backgroundOpaque = false;
      }
    }
  }

}
