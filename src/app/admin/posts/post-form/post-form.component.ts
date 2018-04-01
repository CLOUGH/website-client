import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../shared/models/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  contentEditorOptions = {
    height: 500,
    imageUploadURL: `${environment.apiUrl}/upload?froala=true`,
    events: {
      'froalaEditor.image.removed': this.deleteFrolaImageFromServer.bind(this)
    }
  };

  excerptEditorOptions = {
    toolbarButtons: []
  };

  _post: Post;

  dropzoneConfig: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: `${environment.apiUrl}/upload`,
    maxFilesize: 50,
    acceptedFiles: 'image/*'
  };


  @Input('post')
  set post(value: Post) {
    this._post = value;
    this.createForm();
  }
  @Output() postChange = new EventEmitter;
  @Output() formSubmitted = new EventEmitter;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.createForm();
    this.onFormChanges();
  }
  createForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      status: ['Draft', Validators.required],
      excerpt: ['', Validators.max(1000)],
      content: [''],
    });
    this.postForm.patchValue(this._post);
  }

  onFormChanges() {
    this.postForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  get title() { return this.postForm.get('title'); }
  get status() { return this.postForm.get('status'); }
  get excerpt() { return this.postForm.get('excerpt'); }

  submitForm() {
    this.formSubmitted.emit(Object.assign(this._post, this.postForm.value));
  }
  onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args);
  }
  deleteFrolaImageFromServer(e, editor, $img) {
    console.log(this);
    this.http.delete($img.attr('src')).subscribe((response) => { });
  }
}
