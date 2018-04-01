import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  posts: Post[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ posts }) => {
      this.posts = posts;
    });

  }

}
