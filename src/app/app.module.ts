import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BootstrapModule } from "./shared/modules/bootstrap/bootstrap.module";
import { AppRoutingModule } from "./app-routing.module";
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainNavbarComponent } from './shared/components/main-navbar/main-navbar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { SharedModule } from './shared/shared.module';
import { ListPageComponent } from './posts/list-page/list-page.component';
import { DetailPageComponent } from './posts/detail-page/detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    AboutPageComponent,
    ListPageComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
