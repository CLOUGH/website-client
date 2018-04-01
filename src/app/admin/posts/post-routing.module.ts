import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListPageComponent } from './post-list-page/post-list-page.component';
import { PostCreatePageComponent } from './post-create-page/post-create-page.component';
import { PostEditPageComponent } from './post-edit-page/post-edit-page.component';
import { PostsResolverService } from './posts-resolver.service';
import { PostResolverService } from './post-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PostListPageComponent,
    resolve: {
      posts: PostsResolverService
    }
  },
  { path: 'create', component: PostCreatePageComponent },
  {
    path: ':id',
    component: PostEditPageComponent,
    resolve: {
      post: PostResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
