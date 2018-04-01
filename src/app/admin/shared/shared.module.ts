import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminLeftNavbarComponent } from './components/admin-left-navbar/admin-left-navbar.component';
import { AdminTopNavbarComponent } from './components/admin-top-navbar/admin-top-navbar.component';
import { AdminRoutingModule } from '../admin-routing.module';
import { PortfolioListPageComponent } from '../portfolio/portfolio-list-page/portfolio-list-page.component';
import { PortfolioEditPageComponent } from '../portfolio/portfolio-edit-page/portfolio-edit-page.component';
import { PageEditPageComponent } from '../pages/page-edit-page/page-edit-page.component';
import { PageListPageComponent } from '../pages/page-list-page/page-list-page.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminLayoutComponent,
    AdminLeftNavbarComponent,
    AdminTopNavbarComponent,
    DashboardComponent,
    PageListPageComponent,
    PageEditPageComponent,
    PortfolioEditPageComponent,
    PortfolioListPageComponent
  ],
  exports: [
    AdminLayoutComponent,
    AdminLeftNavbarComponent,
    AdminTopNavbarComponent
  ]
})
export class SharedModule { }
