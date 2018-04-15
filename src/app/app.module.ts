import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Angulartics2Module } from 'angulartics2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { AboutPageComponent } from './about-page/about-page.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailPageComponent } from './posts/detail-page/detail-page.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListPageComponent } from './posts/list-page/list-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { MainNavbarComponent } from './shared/components/main-navbar/main-navbar.component';
import { PostPreviewComponent } from './posts/post-preview/post-preview.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TokenInterceptorService } from './shared/services/token-interceptor/token-interceptor.service';
@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    MomentModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    AboutPageComponent,
    ListPageComponent,
    DetailPageComponent,
    MainNavbarComponent,
    PostPreviewComponent,
    MainLayoutComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
