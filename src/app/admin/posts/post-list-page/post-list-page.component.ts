import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/models/post';
import { faTrash } from '@fortawesome/fontawesome-free-solid';
import { PostService } from '../../../shared/services/post/post.service';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ConfirmDialogComponent } from '../../../shared/modules/dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss']
})
export class PostListPageComponent implements OnInit {
  posts: Post[] = [];
  faTrash = faTrash;
  modalRef: BsModalRef;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService) {

  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ posts }) => {
      this.posts = posts;
    });
    // this.postService.getAll().subscribe(posts => this.posts = posts);
  }

  deletePost(post) {
    const initialState = {
      title: 'Delete Post',
      message: 'Are you sure you want to delete this post?',
      okLabel: 'Yes',
      cancelLabel: 'No'
    };
    this.modalRef = this.modalService.show(ConfirmDialogComponent, {
      animated: true,
      initialState
    });
    this.modalRef.content.onClose.subscribe(ok => {
      if (ok) {
        this.postService.delete(post).subscribe(() => {
          this.posts.splice(this.posts.indexOf(post), 1);
        });
      }
    });
  }
}
