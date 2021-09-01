import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post.model';
import { APIService } from '../services/APIService';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  public posts: Post[] = [];
  public loading = false;

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.loading = true;
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.loading = false;
    });
  }
}
