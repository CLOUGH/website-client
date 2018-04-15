import { Component, OnInit, isDevMode } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../environments/environment';
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, private router: Router) {
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
