import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class GoogleAnalyticsService {

  url = `${environment.apiUrl}/google-analytics`;

  constructor(private http: HttpClient) { }

  users() {
    return this.http.get(`${this.url}/users`)
      .pipe(map((response: any) => response));
  }
}
