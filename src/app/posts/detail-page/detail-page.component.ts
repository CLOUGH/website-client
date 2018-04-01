import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../shared/models/post';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  post: Post;
  content: SafeStyle;
  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ post }) => {
      this.post = post;
      this.content = this.sanitizer.bypassSecurityTrustStyle(this.post.content);
    });
  }

}
