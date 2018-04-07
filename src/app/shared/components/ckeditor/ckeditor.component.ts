import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, forwardRef } from '@angular/core';
import * as ClassicEditor from '@warrenclough/ckeditor5-build-classic/build/ckeditor';
import { environment } from '../../../../environments/environment';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CKEDITOR_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CkeditorComponent),
  multi: true,
};

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss'],
  providers: [CKEDITOR_VALUE_ACCESSOR]
})
export class CkeditorComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  editor: any;
  private onChange;
  private onTouched;
  private editorInitializationProcess;
  @ViewChild('editorElement') editorElement: ElementRef;
  @Input() config;



  constructor() { }

  ngOnInit() {
    this.editorInitializationProcess = ClassicEditor
      .create(this.editorElement.nativeElement, this.config)
      .then(editor => {
        this.editor = editor;

        this.editor.model.document.on('change', (...args) => {
          this.onChange(this.editor.getData());
        });
        this.editor.model.document.on('touch', (...args) => {
          this.onTouched(this.editor.getData());
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  ngAfterViewInit() {
  }

  writeValue(value: any): void {
    console.log('write', value);
    this.editorInitializationProcess.then(() => {
      this.editor.setData(value);
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
