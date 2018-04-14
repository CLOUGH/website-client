import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TokenStorageService } from '../token-storage/token-storage.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService, private tokenStorage: TokenStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenStorage.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
