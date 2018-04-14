import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { PromptDialogComponent } from './prompt-dialog/prompt-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    BootstrapModule
  ],
  exports: [
    ConfirmDialogComponent,
    PromptDialogComponent
  ],
  declarations: [ConfirmDialogComponent, PromptDialogComponent],
  entryComponents: [ConfirmDialogComponent, PromptDialogComponent]
})
export class DialogModule { }
