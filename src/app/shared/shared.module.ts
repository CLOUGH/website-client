import { BootstrapModule } from './modules/bootstrap/bootstrap.module';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { NgModule } from '@angular/core';

import { AuthGuard } from './services/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { CkeditorComponent } from './components/ckeditor/ckeditor.component';
import { DialogModule } from './modules/dialog/dialog.module';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpResponseInterceptorService } from './services/http-response-interceptor/http-response-interceptor.service';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PostResolverService } from './resolvers/post-resolver.service';
import { PostService } from './services/post/post.service';
import { PublishedPostsResolverService } from './resolvers/published-posts-resolver.service';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';
import { TokenStorageService } from './services/token-storage/token-storage.service';
import { TrustedStylePipe } from './pipes/trusted-style.pipe';
import { GoogleAnalyticsService } from './services/google-analytics/google-analytics.service';
import { UsersChartComponent } from './components/users-chart/users-chart.component';
import { PageVisitsComponent } from './components/page-visits/page-visits.component';
import { PageVisitsPerDayComponent } from './components/page-visits-per-day/page-visits-per-day.component';
import { UserGeolocationChartComponent } from './components/user-geolocation-chart/user-geolocation-chart.component';


@NgModule({
  imports: [
    BootstrapModule,
    CommonModule,
    DialogModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  declarations: [
    CkeditorComponent,
    CkeditorComponent,
    TrustedStylePipe,
    UsersChartComponent,
    PageVisitsComponent,
    PageVisitsPerDayComponent,
    UserGeolocationChartComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    PostResolverService,
    PostService,
    PublishedPostsResolverService,
    TokenStorageService,
    GoogleAnalyticsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptorService,
      multi: true
    },
  ],
  exports: [
    BootstrapModule,
    CkeditorComponent,
    DialogModule,
    FontAwesomeModule,
    TrustedStylePipe,
    UsersChartComponent,
    PageVisitsComponent,
    PageVisitsPerDayComponent,
    UserGeolocationChartComponent
  ]
})
export class SharedModule { }
