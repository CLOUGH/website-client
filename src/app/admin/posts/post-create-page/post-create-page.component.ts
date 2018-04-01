import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/models/post';
import { PostService } from '../../../shared/services/post/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create-page',
  templateUrl: './post-create-page.component.html',
  styleUrls: ['./post-create-page.component.scss']
})
export class PostCreatePageComponent implements OnInit {
  post: Post;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.post = new Post({ title: '', content: '', status: 'Draft' });
  }

  onFormSubmitted(event) {
    this.post = event;
    this.postService.create(this.post).subscribe(updatedPost => {
      this.post = updatedPost;
      this.router.navigate(['admin/posts']);
    });
  }
}
