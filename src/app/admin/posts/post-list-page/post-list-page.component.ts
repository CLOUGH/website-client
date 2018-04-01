import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/models/post';
import { faTrash } from '@fortawesome/fontawesome-free-solid';
import { PostService } from '../../../shared/services/post/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss']
})
export class PostListPageComponent implements OnInit {
  posts: Post[] = [];
  faTrash = faTrash;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ posts }) => {
      this.posts = posts;
    });
    // this.postService.getAll().subscribe(posts => this.posts = posts);
  }

  deletePost(post) {

  }
}
