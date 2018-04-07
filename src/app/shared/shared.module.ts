import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModule } from './modules/bootstrap/bootstrap.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PostService } from './services/post/post.service';
import { FooterComponent } from './components/footer/footer.component';
import { PublishedPostsResolverService } from './resolvers/published-posts-resolver.service';
import { TrustedStylePipe } from './pipes/trusted-style.pipe';
import { PostResolverService } from './resolvers/post-resolver.service';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { CkeditorComponent } from './components/ckeditor/ckeditor.component';
import { DialogModule } from './modules/dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    BootstrapModule,
    DialogModule,
    FontAwesomeModule
  ],
  declarations: [
    FooterComponent,
    TrustedStylePipe,
    CkeditorComponent,
    CkeditorComponent
  ],
  providers: [
    PostService,
    PublishedPostsResolverService,
    PostResolverService,
    AuthService,
    AuthGuard,
  ],
  exports: [
    TrustedStylePipe,
    FooterComponent,
    BootstrapModule,
    DialogModule,
    FontAwesomeModule,
    CkeditorComponent
  ]
})
export class SharedModule { }
