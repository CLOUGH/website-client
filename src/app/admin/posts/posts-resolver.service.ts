import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PostService } from '../../shared/services/post/post.service';
import { Post } from '../../shared/models/post';

@Injectable()
export class PostsResolverService implements Resolve<Post[]> {

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.postService.getAll();
  }

}
