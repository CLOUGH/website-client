import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ListPageComponent } from './posts/list-page/list-page.component';
import { DetailPageComponent } from './posts/detail-page/detail-page.component';
import { PublishedPostsResolverService } from './shared/resolvers/published-posts-resolver.service';
import { PostResolverService } from './shared/resolvers/post-resolver.service';
import { AuthGuard } from './shared/services/auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    resolve: {
      posts: PublishedPostsResolverService
    }
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'posts',
    children: [
      {
        path: '',
        component: ListPageComponent,
        resolve: {
          posts: PublishedPostsResolverService
        }
      },
      {
        path: ':id',
        component: DetailPageComponent,
        resolve: {
          post: PostResolverService
        }
      }
    ]
  },

  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canActivate: [
      AuthGuard
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
