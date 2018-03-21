import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ListPageComponent } from './posts/list-page/list-page.component';
import { DetailPageComponent } from './posts/detail-page/detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
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
        component: ListPageComponent
      },
      {
        path: ':id',
        component: DetailPageComponent
      }
    ]
  },

  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
