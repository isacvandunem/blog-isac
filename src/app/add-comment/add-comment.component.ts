import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../services/APIService';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  public commentForm: FormGroup;
  constructor(private apiService: APIService) {
    this.commentForm = new FormGroup({
      comment: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }
}
