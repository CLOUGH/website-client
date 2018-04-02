import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../../shared/models/post';
import * as $clamp from 'clamp-js';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {
  @Input() public post: Post;
  @Input() public small: boolean;
  @ViewChild('excerpt') excerpt: ElementRef;
  clampOptions = { clamp: '250px', truncationHTML: '<span>Read More</span>' };

  constructor() { }

  ngOnInit() {
    // if (this.small) {
    //   this.clampOptions.clamp = '3';
    // }

    // if (this.post.featuredImage) {
    //   this.clampOptions.clamp = 2;
    // }
    $clamp(this.excerpt.nativeElement, this.clampOptions);
  }

  hideWhenSmall() {
    return this.small && this.post.featuredImage;
  }
}
