import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModule } from './modules/bootstrap/bootstrap.module';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BootstrapModule,
    AppRoutingModule
  ],
  declarations: [
    MainNavbarComponent,
    MainLayoutComponent
  ],
  exports: [
    BootstrapModule,
    MainNavbarComponent,
    MainLayoutComponent,
  ]
})
export class SharedModule { }
