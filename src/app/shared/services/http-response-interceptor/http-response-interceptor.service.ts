import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { PromptDialogComponent } from '../../modules/dialog/prompt-dialog/prompt-dialog.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class HttpResponseInterceptorService {
  modalRef: BsModalRef;

  constructor(private router: Router, private modalService: BsModalService, private auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            this.handleHttpErrors(request, err);
          }
        })
      );
  }

  handleHttpErrors(request: HttpRequest<any>, response: HttpErrorResponse) {
    if (response.status === 401) {
      this.handleUnAuthorizedError(request, response);
    }
  }

  handleUnAuthorizedError(request: HttpRequest<any>, response: HttpErrorResponse) {
    // this.auth.collectFailedRequest(request);
    const initialState = {
      title: 'Unauthorized',
      message: 'Your session has expired. To continue please login.',
      okLabel: 'Ok',
    };
    this.modalRef = this.modalService.show(PromptDialogComponent, {
      animated: true,
      initialState
    });
    this.modalRef.content.onClose.subscribe(ok => {
      if (ok) {
        this.router.navigate(['login']);
      }
    });
  }
}
