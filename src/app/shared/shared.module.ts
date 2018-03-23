import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModule } from './modules/bootstrap/bootstrap.module';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    BootstrapModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    MainNavbarComponent,
    MainLayoutComponent,
    FooterComponent,
  ],
  exports: [
    BootstrapModule,
    MainNavbarComponent,
    MainLayoutComponent,
    FooterComponent
  ]
})
export class SharedModule { }
