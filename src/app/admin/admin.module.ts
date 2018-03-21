import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { AdminTopNavbarComponent } from './shared/components/admin-top-navbar/admin-top-navbar.component';
import { AdminLeftNavbarComponent } from './shared/components/admin-left-navbar/admin-left-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    AdminLayoutComponent,
    AdminTopNavbarComponent,
    AdminLeftNavbarComponent
  ]
})
export class AdminModule { }
