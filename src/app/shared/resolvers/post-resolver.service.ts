import { Injectable } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class PostResolverService {

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route.params);
    return this.postService.getOne(route.params.id);
  }

}
