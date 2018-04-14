import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { tap, map } from 'rxjs/operators';
import { TokenStorageService } from '../token-storage/token-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  jwtHelper: JwtHelperService;
  cachedRequests: Array<HttpRequest<any>> = [];

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
    this.jwtHelper = new JwtHelperService();
  }

  login(credentials) {
    return this.http.post(`${environment.apiUrl}/auth/login`, credentials);
  }

  logout() {
    this.tokenStorage.removeToken();
  }

  collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }
  get isLoggedIn(): boolean {
    return this.token && !this.jwtHelper.isTokenExpired(this.token);
  }

  get authenticated(): boolean {
    return this.tokenStorage.getToken() !== '';
  }

  get token(): string {
    return this.tokenStorage.getToken();
  }

  get user(): any {
    return this.jwtHelper.decodeToken(this.token);
  }


}
