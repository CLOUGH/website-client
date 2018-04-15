import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/services/post/post.service';
import { Post } from '../../../shared/models/post';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

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
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private title: Title
  ) {
    this.title.setTitle('Post');
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ post }) => {
      this.post = post;
      this.title.setTitle(`Post: ${post.title}`);
    });
  }
  onFormSubmitted(post: Post) {
    this.postService.save(post).subscribe(updatedPost => {
      this.toastr.success('Post successfully updated');
    });
  }

}
