import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostListPageComponent } from './posts/post-list-page/post-list-page.component';
import { PostEditPageComponent } from './posts/post-edit-page/post-edit-page.component';
import { PortfolioListPageComponent } from './portfolio/portfolio-list-page/portfolio-list-page.component';
import { PortfolioEditPageComponent } from './portfolio/portfolio-edit-page/portfolio-edit-page.component';
import { PageListPageComponent } from './pages/page-list-page/page-list-page.component';
import { PageEditPageComponent } from './pages/page-edit-page/page-edit-page.component';
import { PostCreatePageComponent } from './posts/post-create-page/post-create-page.component';
import { AuthGuard } from '../shared/services/auth/auth.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'posts', loadChildren: 'app/admin/posts/post.module#PostModule'
      },
      {
        path: 'portfolio', children: [
          { path: '', component: PortfolioListPageComponent },
          { path: ':id', component: PortfolioEditPageComponent }
        ]
      },
      {
        path: 'pages', children: [
          { path: '', component: PageListPageComponent },
          { path: ':id', component: PageEditPageComponent }
        ]
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
