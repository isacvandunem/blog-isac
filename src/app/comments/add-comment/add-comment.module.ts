import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from './add-comment.component';
import { ToastModule } from 'src/app/shared/toast/toast.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AddCommentComponent ],
  imports: [
    CommonModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ AddCommentComponent ]
})
export class AddCommentModule { }
