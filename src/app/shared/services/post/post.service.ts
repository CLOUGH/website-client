import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../models/post';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable()
export class PostService {
  url = `${environment.apiUrl}/posts`;

  constructor(private http: HttpClient) { }

  getAll(params?: HttpParams): Observable<Post[]> {
    return this.http.get(this.url, { params: params })
      .pipe(
        map(posts => <Post[]>posts)
      );
  }

  getOne(id): Observable<Post> {
    return this.http.get(`${this.url}/${id}`)
      .pipe(
        map(post => <Post>post)
      );
  }

  create(post: Post): Observable<Post> {
    return this.http.post(this.url, post)
      .pipe(
        map(data => <Post>data)
      );
  }

  save(post: Post): Observable<Post> {
    return this.http.put(`${this.url}/${post._id}`, post)
      .pipe(
        map(data => <Post>data)
      );
  }

  delete(post): Observable<any> {
    return this.http.delete(`${this.url}/${post._id}`);
  }

}
