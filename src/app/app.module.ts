import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BootstrapModule } from "./shared/modules/bootstrap/bootstrap.module";
import { AppRoutingModule } from "./app-routing.module";
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainNavbarComponent } from './shared/components/main-navbar/main-navbar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PostsModule } from './posts/posts.module';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    MainNavbarComponent,
    AboutPageComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModule,
    AppRoutingModule,
    PostsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
