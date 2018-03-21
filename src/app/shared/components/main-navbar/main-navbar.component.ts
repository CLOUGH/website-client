import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  navbarIsCollapsed: boolean = true;
  backgroundOpaque: boolean = false;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const rootElement = <Element>(document.documentElement || document.body.parentNode || document.body)

    if (rootElement.scrollTop > 100) {
      this.backgroundOpaque = true;
    } else {
      this.backgroundOpaque = false;
    }
    console.log(rootElement.scrollTop, this.backgroundOpaque);
  }

}
