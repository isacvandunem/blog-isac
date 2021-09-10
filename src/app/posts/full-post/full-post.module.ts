import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPostComponent } from './full-post.component';
import { AddCommentModule } from 'src/app/comments/add-comment/add-comment.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { ToastModule } from 'src/app/shared/toast/toast.module';
import { CommentModule } from 'src/app/comments/comment/comment.module';

@NgModule({
  declarations: [ FullPostComponent ],
  imports: [
    CommonModule,
    AddCommentModule,
    LoaderModule,
    ToastModule,
    CommentModule
  ],
  exports: [ FullPostComponent ]
})
export class FullPostModule { }
