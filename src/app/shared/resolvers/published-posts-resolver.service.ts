import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post/post.service';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class PublishedPostsResolverService implements Resolve<Post[]> {

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const params = new HttpParams().set('status', 'Published');
    return this.postService.getAll(params);
  }

}
