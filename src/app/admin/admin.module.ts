import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from '../shared/components/admin-layout/admin-layout.component';
import { AdminTopNavbarComponent } from '../shared/components/admin-top-navbar/admin-top-navbar.component';
import { AdminLeftNavbarComponent } from '../shared/components/admin-left-navbar/admin-left-navbar.component';
import { PostListPageComponent } from './posts/post-list-page/post-list-page.component';
import { PostEditPageComponent } from './posts/post-edit-page/post-edit-page.component';
import { PortfolioEditPageComponent } from './portfolio/portfolio-edit-page/portfolio-edit-page.component';
import { PortfolioListPageComponent } from './portfolio/portfolio-list-page/portfolio-list-page.component';
import { PageListPageComponent } from './pages/page-list-page/page-list-page.component';
import { PageEditPageComponent } from './pages/page-edit-page/page-edit-page.component';
import { PostCreatePageComponent } from './posts/post-create-page/post-create-page.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostModule } from './posts/post.module';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../shared/services/auth/auth.guard';
import { AdminSharedModule } from '../shared/modules/admin-shared/admin-shared.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    PostModule,
    SharedModule,
    AdminSharedModule,
  ],
  declarations: [
    AdminLayoutComponent,
    AdminLeftNavbarComponent,
    AdminTopNavbarComponent,
    DashboardComponent,
    PageListPageComponent,
    PageEditPageComponent,
    PortfolioEditPageComponent,
    PortfolioListPageComponent,
    AdminComponent
  ],
  entryComponents: [
    AdminComponent
  ]
})
export class AdminModule { }
