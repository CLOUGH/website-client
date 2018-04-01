import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

import { PostRoutingModule } from './post-routing.module';
import { PostFormComponent } from './post-form/post-form.component';
import { PostCreatePageComponent } from './post-create-page/post-create-page.component';
import { PageEditPageComponent } from '../pages/page-edit-page/page-edit-page.component';
import { PageListPageComponent } from '../pages/page-list-page/page-list-page.component';
import { PostService } from '../../shared/services/post/post.service';
import { PostsResolverService } from './posts-resolver.service';
import { SharedModule as AdminSharedModule } from '../shared/shared.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { PostListPageComponent } from './post-list-page/post-list-page.component';
import { PostEditPageComponent } from './post-edit-page/post-edit-page.component';
import { PostResolverService } from './post-resolver.service';


@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    AdminSharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FroalaEditorModule,
    FroalaViewModule,
    FormsModule,
    FontAwesomeModule,
    MomentModule,
  ],
  declarations: [
    PostListPageComponent,
    PostEditPageComponent,
    PostCreatePageComponent,
    PostFormComponent
  ],
  providers: [
    PostService,
    PostsResolverService,
    PostResolverService
  ]
})
export class PostModule { }
