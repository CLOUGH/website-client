import { Component, OnInit } from '@angular/core';
import { MainLayoutOptionsInterface } from '../shared/interfaces/main-layout-options-interface';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../shared/models/post';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  mainLayoutOptions: MainLayoutOptionsInterface;
  posts: Post[] = [];
  portfolios = [];

  constructor(private activatedRoute: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle('Home');
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ posts }) => {
      this.posts = posts;
    });
  }

}
