import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-prompt-dialog',
  templateUrl: './prompt-dialog.component.html',
  styleUrls: ['./prompt-dialog.component.scss']
})
export class PromptDialogComponent implements OnInit {
  title: string;
  message: string;
  okLabel: string;
  onClose: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.onClose = new Subject();
  }

  ok() {
    this.onClose.next(true);
    this.bsModalRef.hide();
  }
}
