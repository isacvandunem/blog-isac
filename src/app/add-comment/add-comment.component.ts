import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../services/APIService';
import { Comment } from '../comment/comment.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input("postId") postId!: number;
  @Output("commentAdded") commentAdded = new EventEmitter<Comment>();
  public addingComment: boolean = false;
  public commentForm: FormGroup;
  
  constructor(private apiService: APIService) {
    this.commentForm = new FormGroup({
      comment: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  /**
   * Submits the form to create a new comment based on the given text and user name
   */
  onSubmit(): void {
    const commentText = this.commentForm.value.comment;
    const commenterName = this.commentForm.value.name;
    this.addingComment = true;
    this.apiService.addComment(this.postId, commentText, commenterName).subscribe(comment => {
      this.addingComment = false;
      this.commentAdded.emit(comment);
    }, error => {
      this.addingComment = false;
    });
  }
}
