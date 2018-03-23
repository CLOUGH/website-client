import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostListPageComponent } from './posts/post-list-page/post-list-page.component';
import { PostEditPageComponent } from './posts/post-edit-page/post-edit-page.component';
import { PortfolioListPageComponent } from './portfolio/portfolio-list-page/portfolio-list-page.component';
import { PortfolioEditPageComponent } from './portfolio/portfolio-edit-page/portfolio-edit-page.component';
import { PageListPageComponent } from './pages/page-list-page/page-list-page.component';
import { PageEditPageComponent } from './pages/page-edit-page/page-edit-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'posts', children: [
      { path: '', component: PostListPageComponent },
      { path: ':id', component: PostEditPageComponent }
    ]
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
  { path: '', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
