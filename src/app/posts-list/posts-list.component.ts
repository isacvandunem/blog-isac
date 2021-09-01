import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  public posts: Post[] = [];

  constructor() { 

  }

  ngOnInit(): void {
  }
}
