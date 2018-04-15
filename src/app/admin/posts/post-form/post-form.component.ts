import { Component, OnInit, Input, Output, EventEmitter, ViewRef, ElementRef, ViewChild } from '@angular/core';
import { Post } from '../../../shared/models/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap';
import { UploadModalComponent } from '../upload-modal/upload-modal.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  _post: Post;
  editor: any;
  ckeditorConfig: any;
  excerptEditorOptions = {
    toolbarButtons: []
  };

  @Input('post')
  set post(value: Post) {
    console.log(value);
    this._post = value;
    this.createForm();
  }
  @Output() postChange = new EventEmitter;
  @Output() formSubmitted = new EventEmitter;
  @ViewChild('content') content: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.createForm();
    this.onFormChanges();
    this.ckeditorConfig = {
      ckfinder: {
        uploadUrl: `${environment.apiUrl}/upload`
      }
    };
  }

  createForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      status: ['Draft', Validators.required],
      excerpt: ['', Validators.max(1000)],
      featuredImage: [''],
      content: [''],
    });
    this.postForm.patchValue(this._post);
  }

  onFormChanges() {
    this.postForm.valueChanges.subscribe(value => {
      // console.log(value);
    });
  }

  submitForm() {
    this.formSubmitted.emit(Object.assign(this._post, this.postForm.value));
  }

  deleteFrolaImageFromServer(e, editor, $img) {
    this.http.delete($img.attr('src')).subscribe((response) => { });
  }

  chooseFeaturedImage() {
    const modalRef = this.modalService.show(UploadModalComponent, {
      animated: true
    });

    modalRef.content.onClose.subscribe(url => {
      this.featuredImage.setValue(url);
    });
  }

  get title() { return this.postForm.get('title'); }
  get status() { return this.postForm.get('status'); }
  get excerpt() { return this.postForm.get('excerpt'); }
  get featuredImage() { return this.postForm.get('featuredImage'); }
}
