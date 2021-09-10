import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ PostComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ PostComponent ]
})
export class PostModule { }
