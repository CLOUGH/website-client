import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

import { PostRoutingModule } from './post-routing.module';
import { PostFormComponent } from './post-form/post-form.component';
import { PostCreatePageComponent } from './post-create-page/post-create-page.component';
import { PageEditPageComponent } from '../pages/page-edit-page/page-edit-page.component';
import { PageListPageComponent } from '../pages/page-list-page/page-list-page.component';
import { PostService } from '../../shared/services/post/post.service';
import { PostsResolverService } from './posts-resolver.service';
import { SharedModule } from '../../shared/shared.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { PostListPageComponent } from './post-list-page/post-list-page.component';
import { PostEditPageComponent } from './post-edit-page/post-edit-page.component';
import { PostResolverService } from './post-resolver.service';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { UploadModalComponent } from './upload-modal/upload-modal.component';
import { BootstrapModule } from '../../shared/modules/bootstrap/bootstrap.module';
import { DialogModule } from '../../shared/modules/dialog/dialog.module';
import { TokenInterceptorService } from '../../shared/services/token-interceptor/token-interceptor.service';


@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FroalaEditorModule,
    FroalaViewModule,
    FormsModule,
    FontAwesomeModule,
    MomentModule,
    DropzoneModule,
    BootstrapModule,
    DialogModule,
    SharedModule,
  ],
  declarations: [
    PostListPageComponent,
    PostEditPageComponent,
    PostCreatePageComponent,
    PostFormComponent,
    UploadModalComponent
  ],
  providers: [
    PostService,
    PostsResolverService,
    PostResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  entryComponents: [
    UploadModalComponent
  ]
})
export class PostModule { }
