import { Component, OnInit, isDevMode } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../../environments/environment';
declare let ga: Function;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) {
    if (!isDevMode()) {
      ga('create', environment.googleAnalytics.trackingId, 'auto');

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        }
      });
    }
  }

  ngOnInit() {
  }

}
