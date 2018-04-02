import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { environment } from '../../../../environments/environment';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss']
})
export class UploadModalComponent implements OnInit {
  public onClose: Subject<string>;
  private imageLink: string;

  dropzoneConfig: DropzoneConfigInterface = {
    url: `${environment.apiUrl}/upload`,
    maxFiles: 1,
    acceptedFiles: 'image/*'
  };

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.onClose = new Subject();
  }

  onUploadError(args: any): void {

    console.log('onUploadError:', args);
  }

  onUploadSuccess(args: any): void {
    this.imageLink = args[1].link;
  }

  ok() {
    this.onClose.next(this.imageLink);
    this.bsModalRef.hide();
  }

  canSave() {
    return this.imageLink !== '';
  }
}
