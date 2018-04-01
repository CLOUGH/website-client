import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AppComponent } from './app.component';
import { BootstrapModule } from './shared/modules/bootstrap/bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainNavbarComponent } from './shared/components/main-navbar/main-navbar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { ListPageComponent } from './posts/list-page/list-page.component';
import { DetailPageComponent } from './posts/detail-page/detail-page.component';
import { PostService } from './shared/services/post/post.service';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PublishedPostsResolverService } from './shared/resolvers/published-posts-resolver.service';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { PostResolverService } from './shared/resolvers/post-resolver.service';
import { PostPreviewComponent } from './posts/post-preview/post-preview.component';
import { TrustedStylePipe } from './shared/pipes/trusted-style.pipe';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    FontAwesomeModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    MomentModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    AboutPageComponent,
    ListPageComponent,
    DetailPageComponent,
    MainLayoutComponent,
    FooterComponent,
    MainNavbarComponent,
    PostPreviewComponent,
    TrustedStylePipe,
  ],
  providers: [
    PostService,
    PublishedPostsResolverService,
    PostResolverService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
