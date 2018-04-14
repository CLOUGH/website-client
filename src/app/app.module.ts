import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ListPageComponent } from './posts/list-page/list-page.component';
import { DetailPageComponent } from './posts/detail-page/detail-page.component';
import { PostPreviewComponent } from './posts/post-preview/post-preview.component';
import { MainNavbarComponent } from './shared/components/main-navbar/main-navbar.component';
import { SharedModule } from './shared/shared.module';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { TokenInterceptorService } from './shared/services/token-interceptor/token-interceptor.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './shared/components/footer/footer.component';
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
    FormsModule
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
