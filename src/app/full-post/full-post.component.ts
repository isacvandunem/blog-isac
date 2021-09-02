import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post/post.model';
import { Comment } from '../comment/comment.model';
import { APIService } from '../services/APIService';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.scss']
})
export class FullPostComponent implements OnInit {
  public post: Post | undefined;
  public loading: boolean = false;
  public comments: Comment[] | undefined;
  public loadingComments: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private apiService: APIService) { 
    if (activatedRoute.snapshot.params['id']){
      const postId = activatedRoute.snapshot.params['id'];
      this.loading = true;
      apiService.getPost(postId).subscribe(post => {
        this.post = post;
        this.loading = false;
      }, error => {
        this.loading = false;
      });

      this.loadingComments = true;
      apiService.getComments(postId).subscribe(comments => {
        this.comments = comments;
        this.loadingComments = false;
      }, error => {
        this.loadingComments = false;
      });
    } 
  }

  ngOnInit(): void {
  }

}
