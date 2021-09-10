import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list.component';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { ToastModule } from 'src/app/shared/toast/toast.module';
import { PostModule } from '../post/post.module';

@NgModule({
  declarations: [ PostsListComponent ],
  imports: [
    CommonModule,
    LoaderModule,
    ToastModule,
    PostModule
  ],
  exports: [ PostsListComponent ]
})
export class PostsListModule { }
