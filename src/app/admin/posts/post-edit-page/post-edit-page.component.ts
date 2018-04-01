import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/services/post/post.service';
import { Post } from '../../../shared/models/post';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-edit-page',
  templateUrl: './post-edit-page.component.html',
  styleUrls: ['./post-edit-page.component.scss']
})
export class PostEditPageComponent implements OnInit {
  post: Post;

  constructor(
    private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ post }) => {
      this.post = post;
      console.log(post);
    });
  }
  onFormSubmitted(post: Post) {
    this.postService.save(post).subscribe(updatedPost => {
      this.post = updatedPost;
      this.router.navigate(['admin/posts']);
    });
  }

}