import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { BootstrapModule } from '../bootstrap/bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    BootstrapModule
  ],
  exports: [
    ConfirmDialogComponent
  ],
  declarations: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class DialogModule { }
