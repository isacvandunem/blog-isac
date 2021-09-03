import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post/post.model';
import { Comment } from '../comment/comment.model';
import { APIService } from '../services/APIService';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.scss']
})
export class FullPostComponent implements OnInit {
  @ViewChild('toast') toast!: ToastComponent;
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
        this.toast.show("Error", "Error loading comments. Please try again later");
      });
    } 
  }
  
  ngOnInit(): void {
  }

  addCommentToList(comment: Comment): void {
    this.comments?.push(comment);
  }
}
