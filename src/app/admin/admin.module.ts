import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { AdminTopNavbarComponent } from './shared/components/admin-top-navbar/admin-top-navbar.component';
import { AdminLeftNavbarComponent } from './shared/components/admin-left-navbar/admin-left-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostListPageComponent } from './posts/post-list-page/post-list-page.component';
import { PostEditPageComponent } from './posts/post-edit-page/post-edit-page.component';
import { PortfolioEditPageComponent } from './portfolio/portfolio-edit-page/portfolio-edit-page.component';
import { PortfolioListPageComponent } from './portfolio/portfolio-list-page/portfolio-list-page.component';
import { PageListPageComponent } from './pages/page-list-page/page-list-page.component';
import { PageEditPageComponent } from './pages/page-edit-page/page-edit-page.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    DashboardComponent,
    AdminLayoutComponent,
    AdminTopNavbarComponent,
    AdminLeftNavbarComponent,
    PostListPageComponent,
    PostEditPageComponent,
    PortfolioEditPageComponent,
    PortfolioListPageComponent,
    PageListPageComponent,
    PageEditPageComponent
  ]
})
export class AdminModule { }
